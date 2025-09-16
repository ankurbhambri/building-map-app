// Main JavaScript for Building Map Application

class BuildingMapApp {
    constructor() {
        this.map = null;
        this.currentRegion = 'hyderabad'; // Default region
        this.currentBuilding = null;
        this.currentFloor = null;
        this.currentRoom = null;
        this.markers = [];
        this.sidebarCollapsed = false;
        
        this.init();
    }
    
    init() {
        this.initMap();
        this.initEventListeners();
        this.loadRegion(this.currentRegion);
        this.updateRegionStats();
    }
    
    initMap() {
        // Initialize the map centered on the default region
        const regionData = regionsData[this.currentRegion];
        this.map = L.map('map').setView(regionData.center, regionData.zoom);
        
        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(this.map);
    }
    
    initEventListeners() {
        // Region selector listeners
        document.querySelectorAll('.region-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const region = e.currentTarget.dataset.region;
                this.switchRegion(region);
            });
        });
        
        // Sidebar toggle
        document.getElementById('sidebarToggle').addEventListener('click', () => {
            this.toggleSidebar();
        });
        
        // Modal close buttons
        document.querySelectorAll('.close').forEach(closeBtn => {
            closeBtn.addEventListener('click', (e) => {
                this.closeModal(e.target.closest('.modal'));
            });
        });
        
        // Close modals when clicking outside
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal);
                }
            });
        });
        
        // Back to building button
        document.getElementById('backToBuilding').addEventListener('click', () => {
            this.closeModal(document.getElementById('floorModal'));
            this.showBuildingDetails(this.currentBuilding);
        });
        
        // Dispatch engineer button
        document.getElementById('dispatchEngineerBtn').addEventListener('click', () => {
            this.showDispatchModal();
        });
        
        // Dispatch modal buttons
        document.getElementById('cancelDispatch').addEventListener('click', () => {
            this.closeModal(document.getElementById('dispatchModal'));
        });
        
        document.getElementById('confirmDispatch').addEventListener('click', () => {
            this.confirmDispatch();
        });
        
        // Escape key to close modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }
    
    switchRegion(regionKey) {
        if (regionKey === this.currentRegion) return;
        
        // Update UI
        document.querySelectorAll('.region-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-region="${regionKey}"]`).classList.add('active');
        
        // Update current region
        this.currentRegion = regionKey;
        
        // Load new region
        this.loadRegion(regionKey);
        this.updateRegionStats();
        
        // Close any open modals
        this.closeAllModals();
    }
    
    loadRegion(regionKey) {
        // Clear existing markers
        this.clearMarkers();
        
        // Get region data
        const regionData = regionsData[regionKey];
        
        // Update map view
        this.map.setView(regionData.center, regionData.zoom);
        
        // Load buildings for this region
        const regionBuildings = buildingsData.filter(building => building.region === regionKey);
        regionBuildings.forEach(building => {
            this.addBuildingMarker(building);
        });
    }
    
    clearMarkers() {
        this.markers.forEach(marker => {
            this.map.removeLayer(marker);
        });
        this.markers = [];
    }
    
    toggleSidebar() {
        const sidebar = document.getElementById('regionSidebar');
        const toggle = document.getElementById('sidebarToggle');
        const toggleIcon = toggle.querySelector('.toggle-icon');
        
        this.sidebarCollapsed = !this.sidebarCollapsed;
        
        if (this.sidebarCollapsed) {
            sidebar.classList.add('collapsed');
            toggleIcon.textContent = '▶';
        } else {
            sidebar.classList.remove('collapsed');
            toggleIcon.textContent = '◀';
        }
    }
    
    updateRegionStats() {
        const regionBuildings = buildingsData.filter(building => building.region === this.currentRegion);
        
        let totalRooms = 0;
        let availableRooms = 0;
        
        regionBuildings.forEach(building => {
            building.floors.forEach(floor => {
                totalRooms += floor.rooms.length;
                availableRooms += floor.rooms.filter(room => room.status === 'available').length;
            });
        });
        
        document.getElementById('statBuildings').textContent = regionBuildings.length;
        document.getElementById('statRooms').textContent = totalRooms;
        document.getElementById('statAvailable').textContent = availableRooms;
    }
    
    addBuildingMarker(building) {
        const marker = L.marker(building.coordinates)
            .addTo(this.map)
            .bindPopup(this.createBuildingPopup(building), {
                maxWidth: 300,
                className: 'custom-popup-container'
            })
            .on('click', () => {
                this.showBuildingDetails(building);
            })
            .on('mouseover', function(e) {
                this.openPopup();
            })
            .on('mouseout', function(e) {
                this.closePopup();
            });
        
        this.markers.push(marker);
    }
    
    createBuildingPopup(building) {
        return `
            <div class="custom-popup">
                <h3>${building.name}</h3>
                <p><strong>Address:</strong> ${building.address}</p>
                <p><strong>Floors:</strong> ${building.floors.length}</p>
                <p><strong>Total Rooms:</strong> ${this.getTotalRooms(building)}</p>
                <button class="popup-button" onclick="app.showBuildingDetails(${building.id})">
                    View Details
                </button>
            </div>
        `;
    }
    
    getTotalRooms(building) {
        return building.floors.reduce((total, floor) => total + floor.rooms.length, 0);
    }
    
    showBuildingDetails(buildingId) {
        const building = typeof buildingId === 'object' ? buildingId : 
                        buildingsData.find(b => b.id === buildingId);
        
        if (!building) return;
        
        this.currentBuilding = building;
        
        // Update modal content
        document.getElementById('buildingTitle').textContent = building.name;
        document.getElementById('buildingAddress').textContent = building.address;
        
        // Create floors list
        const floorsList = document.getElementById('floorsList');
        floorsList.innerHTML = '';
        
        building.floors.forEach(floor => {
            const floorCard = this.createFloorCard(floor);
            floorsList.appendChild(floorCard);
        });
        
        // Show modal
        this.showModal('buildingModal');
    }
    
    createFloorCard(floor) {
        const card = document.createElement('div');
        card.className = 'floor-card';
        card.onclick = () => this.showFloorPlan(floor);
        
        const availableRooms = floor.rooms.filter(r => r.status === 'available').length;
        const totalRooms = floor.rooms.length;
        
        card.innerHTML = `
            <h4>${floor.name}</h4>
            <p>${floor.description}</p>
            <p><strong>Rooms:</strong> ${totalRooms}</p>
            <p><strong>Available:</strong> ${availableRooms}/${totalRooms}</p>
        `;
        
        return card;
    }
    
    showFloorPlan(floor) {
        this.currentFloor = floor;
        
        // Update modal content
        document.getElementById('floorTitle').textContent = 
            `${this.currentBuilding.name} - ${floor.name}`;
        
        // Create rooms grid
        const roomsGrid = document.getElementById('roomsGrid');
        roomsGrid.innerHTML = '';
        
        floor.rooms.forEach(room => {
            const roomCard = this.createRoomCard(room);
            roomsGrid.appendChild(roomCard);
        });
        
        // Close building modal and show floor modal
        this.closeModal(document.getElementById('buildingModal'));
        this.showModal('floorModal');
    }
    
    createRoomCard(room) {
        const card = document.createElement('div');
        const statusInfo = statusConfig[room.status];
        
        card.className = `room-card ${statusInfo.class}`;
        card.onclick = () => this.showRoomDetails(room);
        
        card.innerHTML = `
            <div class="room-status-indicator ${statusInfo.color}"></div>
            <div class="room-name">${room.name}</div>
            <div class="room-capacity">Capacity: ${room.capacity}</div>
            <div class="room-status">${statusInfo.label}</div>
        `;
        
        return card;
    }
    
    showRoomDetails(room) {
        const statusInfo = statusConfig[room.status];
        this.currentRoom = room; // Store current room reference
        
        // Update modal content
        document.getElementById('roomTitle').textContent = room.name;
        
        // Status badge
        const statusBadge = document.getElementById('roomStatusBadge');
        statusBadge.textContent = statusInfo.label;
        statusBadge.className = `status-badge ${statusInfo.class}`;
        
        document.getElementById('roomStatusText').textContent = 
            `This room is currently ${statusInfo.label.toLowerCase()}`;
        
        // Capacity
        document.getElementById('roomCapacity').innerHTML = 
            `<strong>Capacity:</strong> ${room.capacity} people`;
        
        // Equipment
        document.getElementById('roomEquipment').innerHTML = `
            <strong>Equipment:</strong>
            <ul>
                ${room.equipment.map(eq => `<li>${eq}</li>`).join('')}
            </ul>
        `;
        
        // Problems (only show if there are problems)
        const problemsDiv = document.getElementById('roomProblems');
        if (room.problems && room.problems.length > 0) {
            problemsDiv.style.display = 'block';
            problemsDiv.innerHTML = `
                <h4>Issues & Problems</h4>
                ${room.problems.map(problem => `
                    <div class="problem-item">
                        <div class="problem-priority">${problem.priority} Priority</div>
                        <strong>${problem.type}:</strong> ${problem.description}
                        <div style="font-size: 0.8rem; color: #666; margin-top: 5px;">
                            Reported: ${new Date(problem.reportedAt).toLocaleDateString()}
                        </div>
                    </div>
                `).join('')}
            `;
        } else {
            problemsDiv.style.display = 'none';
        }
        
        // Show/hide dispatch section based on room status
        const dispatchSection = document.getElementById('dispatchSection');
        if (room.status === 'maintenance' && room.problems && room.problems.length > 0) {
            dispatchSection.style.display = 'block';
        } else {
            dispatchSection.style.display = 'none';
        }
        
        // Show modal
        this.showModal('roomModal');
    }
    
    showModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    closeModal(modal) {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    }
    
    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            this.closeModal(modal);
        });
    }
    
    // Utility method to get building statistics for current region
    getBuildingStats() {
        const regionBuildings = buildingsData.filter(building => building.region === this.currentRegion);
        
        const stats = {
            region: this.currentRegion,
            totalBuildings: regionBuildings.length,
            totalFloors: 0,
            totalRooms: 0,
            availableRooms: 0,
            occupiedRooms: 0,
            maintenanceRooms: 0,
            totalProblems: 0
        };
        
        regionBuildings.forEach(building => {
            stats.totalFloors += building.floors.length;
            
            building.floors.forEach(floor => {
                stats.totalRooms += floor.rooms.length;
                
                floor.rooms.forEach(room => {
                    switch (room.status) {
                        case 'available':
                            stats.availableRooms++;
                            break;
                        case 'occupied':
                            stats.occupiedRooms++;
                            break;
                        case 'maintenance':
                            stats.maintenanceRooms++;
                            break;
                    }
                    
                    stats.totalProblems += room.problems.length;
                });
            });
        });
        
        return stats;
    }
    
    // Method to search rooms by criteria in current region
    searchRooms(criteria) {
        const results = [];
        const regionBuildings = buildingsData.filter(building => building.region === this.currentRegion);
        
        regionBuildings.forEach(building => {
            building.floors.forEach(floor => {
                floor.rooms.forEach(room => {
                    let matches = true;
                    
                    if (criteria.status && room.status !== criteria.status) {
                        matches = false;
                    }
                    
                    if (criteria.minCapacity && room.capacity < criteria.minCapacity) {
                        matches = false;
                    }
                    
                    if (criteria.maxCapacity && room.capacity > criteria.maxCapacity) {
                        matches = false;
                    }
                    
                    if (criteria.equipment && !criteria.equipment.every(eq => 
                        room.equipment.some(roomEq => 
                            roomEq.toLowerCase().includes(eq.toLowerCase())))) {
                        matches = false;
                    }
                    
                    if (matches) {
                        results.push({
                            building: building.name,
                            floor: floor.name,
                            room: room,
                            buildingId: building.id,
                            floorId: floor.id
                        });
                    }
                });
            });
        });
        
        return results;
    }
    
    // Method to highlight buildings with issues in current region
    highlightProblematicBuildings() {
        this.markers.forEach(marker => {
            const building = buildingsData.find(b => 
                b.region === this.currentRegion &&
                b.coordinates[0] === marker.getLatLng().lat && 
                b.coordinates[1] === marker.getLatLng().lng);
            
            if (building) {
                const hasProblems = building.floors.some(floor => 
                    floor.rooms.some(room => room.problems.length > 0));
                
                if (hasProblems) {
                    marker.setIcon(L.icon({
                        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41]
                    }));
                }
            }
        });
    }
    
    // Dispatch Engineer Methods
    showDispatchModal() {
        if (!this.currentRoom) return;
        
        // Get the most appropriate engineer for the problem type
        const primaryProblem = this.currentRoom.problems[0];
        const engineer = getAvailableEngineer(primaryProblem.type);
        
        // Pre-fill form with problem information
        document.getElementById('urgencyLevel').value = primaryProblem.priority;
        document.getElementById('problemCategory').value = primaryProblem.type;
        document.getElementById('requestDescription').value = primaryProblem.description;
        
        // Show assigned engineer
        this.displayAssignedEngineer(engineer);
        
        // Show dispatch modal
        this.showModal('dispatchModal');
    }
    
    displayAssignedEngineer(engineer) {
        const engineerContainer = document.getElementById('assignedEngineer');
        engineerContainer.innerHTML = `
            <div class="engineer-card">
                <div class="engineer-avatar">${engineer.initials}</div>
                <div class="engineer-details">
                    <h4>${engineer.name}</h4>
                    <p><strong>Specialty:</strong> ${engineer.specialty} • ${engineer.experience}</p>
                    <p><strong>Phone:</strong> ${engineer.phone}</p>
                    <p><strong>Current Location:</strong> ${engineer.currentLocation}</p>
                    <p><strong>ETA:</strong> ${engineer.estimatedArrival}</p>
                    <span class="engineer-status ${engineer.status}">${engineer.status}</span>
                </div>
            </div>
        `;
    }
    
    confirmDispatch() {
        const urgency = document.getElementById('urgencyLevel').value;
        const category = document.getElementById('problemCategory').value;
        const description = document.getElementById('requestDescription').value;
        
        // Create dispatch request
        const dispatchRequest = {
            id: Date.now(),
            roomName: this.currentRoom.name,
            buildingName: this.currentBuilding.name,
            floorName: this.currentFloor.name,
            urgency: urgency,
            category: category,
            description: description,
            requestedAt: new Date().toISOString(),
            status: 'dispatched'
        };
        
        // Close dispatch modal
        this.closeModal(document.getElementById('dispatchModal'));
        
        // Show success notification
        this.showNotification(
            'success',
            'Engineer Dispatched!',
            `Engineer has been successfully dispatched to ${this.currentRoom.name}. Estimated arrival: 15-20 minutes.`
        );
        
        // Simulate dispatch completion after 3 seconds
        setTimeout(() => {
            this.showNotification(
                'success',
                'Engineer En Route',
                `Engineer John Smith is now en route to ${this.currentRoom.name}. Track progress via mobile app.`
            );
        }, 3000);
        
        // Log the dispatch request
        console.log('Dispatch Request Created:', dispatchRequest);
    }
    
    showNotification(type, title, message) {
        const container = document.getElementById('notificationContainer');
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️'
        };
        
        notification.innerHTML = `
            <button class="notification-close" onclick="this.parentElement.remove()">&times;</button>
            <div class="notification-header">
                <span class="notification-icon">${icons[type] || '📢'}</span>
                <span class="notification-title">${title}</span>
            </div>
            <div class="notification-message">${message}</div>
        `;
        
        container.appendChild(notification);
        
        // Auto-remove after 8 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideOut 0.3s ease forwards';
                setTimeout(() => notification.remove(), 300);
            }
        }, 8000);
    }
}

// Initialize the application when the page loads
let app;

document.addEventListener('DOMContentLoaded', function() {
    app = new BuildingMapApp();
    
    // Optional: Highlight buildings with problems after a short delay
    setTimeout(() => {
        app.highlightProblematicBuildings();
    }, 1000);
    
    // Log statistics to console for debugging
    console.log('Current Region Statistics:', app.getBuildingStats());
    
    // Log all available regions
    console.log('Available Regions:', Object.keys(regionsData));
});

// Global function to be called from popup buttons
window.showBuildingDetails = function(buildingId) {
    if (app) {
        app.showBuildingDetails(buildingId);
    }
};