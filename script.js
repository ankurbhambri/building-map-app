// Main JavaScript for Building Map Application

class BuildingMapApp {
    constructor() {
        this.map = null;
        this.currentRegion = 'hyderabad'; // Default region
        this.currentCampus = null; // Default no specific campus
        this.currentBuilding = null;
        this.currentFloor = null;
        this.currentRoom = null;
        this.markers = [];
        this.sidebarCollapsed = false;
        this.selectedRooms = new Set(); // Track selected rooms for bulk operations
        this.bulkSelectionMode = false; // Toggle for bulk selection interface
        this.maintenanceNotifications = []; // Store maintenance notifications
        
        this.init();
    }
    
    init() {
        this.initMap();
        this.initEventListeners();
        this.loadRegion(this.currentRegion);
        this.updateRegionStats();
        this.initNotificationSystem();
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
        // Region header listeners (for expanding/collapsing)
        document.querySelectorAll('.region-header').forEach(header => {
            header.addEventListener('click', (e) => {
                const regionItem = e.currentTarget.closest('.region-item');
                const campusList = regionItem.querySelector('.campus-list');
                const expandIcon = regionItem.querySelector('.expand-icon');
                
                // Toggle campus list visibility
                campusList.classList.toggle('collapsed');
                expandIcon.style.transform = campusList.classList.contains('collapsed') ? 
                    'rotate(0deg)' : 'rotate(90deg)';
                
                // If expanding, also switch to this region
                if (!campusList.classList.contains('collapsed')) {
                    const region = regionItem.dataset.region;
                    this.switchRegion(region, null); // No specific campus initially
                }
            });
        });

        // Campus selector listeners
        document.querySelectorAll('.campus-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent region header click
                const campus = e.currentTarget.dataset.campus;
                const regionItem = e.currentTarget.closest('.region-item');
                const region = regionItem.dataset.region;
                this.switchRegion(region, campus);
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
    
    switchRegion(regionKey, campusKey = null) {
        // Update UI
        document.querySelectorAll('.region-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.campus-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const regionItem = document.querySelector(`[data-region="${regionKey}"]`);
        regionItem.classList.add('active');
        
        if (campusKey) {
            const campusItem = document.querySelector(`[data-campus="${campusKey}"]`);
            if (campusItem) {
                campusItem.classList.add('active');
            }
        }
        
        // Update current region and campus
        this.currentRegion = regionKey;
        this.currentCampus = campusKey;
        
        // Load new region/campus
        this.loadRegion(regionKey, campusKey);
        this.updateRegionStats();
        
        // Close any open modals
        this.closeAllModals();
    }
    
    loadRegion(regionKey, campusKey = null) {
        // Clear existing markers
        this.clearMarkers();
        
        // Get region data
        const regionData = regionsData[regionKey];
        
        // Update map view based on campus or region
        if (campusKey && regionData.campuses) {
            const campusData = regionData.campuses.find(c => c.id === campusKey);
            if (campusData) {
                this.map.setView(campusData.center, campusData.zoom);
            } else {
                this.map.setView(regionData.center, regionData.zoom);
            }
        } else {
            this.map.setView(regionData.center, regionData.zoom);
        }
        
        // Load buildings for this region/campus
        let regionBuildings = buildingsData.filter(building => building.region === regionKey);
        
        // Filter by campus if specified
        if (campusKey) {
            regionBuildings = regionBuildings.filter(building => building.campus === campusKey);
        }
        
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
        let regionBuildings = buildingsData.filter(building => building.region === this.currentRegion);
        
        // Filter by campus if one is selected
        if (this.currentCampus) {
            regionBuildings = regionBuildings.filter(building => building.campus === this.currentCampus);
        }
        
        let totalRooms = 0;
        let availableRooms = 0;
        let maintenanceRooms = 0;
        
        regionBuildings.forEach(building => {
            building.floors.forEach(floor => {
                totalRooms += floor.rooms.length;
                availableRooms += floor.rooms.filter(room => room.status === 'available').length;
                maintenanceRooms += floor.rooms.filter(room => room.status === 'maintenance').length;
            });
        });
        
        // Update statistics title
        const regionData = regionsData[this.currentRegion];
        let title = `Current Region: ${regionData.name}`;
        if (this.currentCampus) {
            const campusData = regionData.campuses?.find(c => c.id === this.currentCampus);
            if (campusData) {
                title += ` - ${campusData.name}`;
            }
        }
        document.getElementById('statsTitle').textContent = title;
        
        document.getElementById('statBuildings').textContent = regionBuildings.length;
        document.getElementById('statRooms').textContent = totalRooms;
        document.getElementById('statAvailable').textContent = availableRooms;
        document.getElementById('statMaintenance').textContent = maintenanceRooms;
    }
    
    addBuildingMarker(building) {
        // Check if building has maintenance rooms
        const maintenanceRooms = this.getMaintenanceRooms(building);
        const hasMaintenanceIssues = maintenanceRooms > 0;
        
        // Create custom building icon with name label
        const iconColor = hasMaintenanceIssues ? '#e74c3c' : '#3498db'; // Red for maintenance, blue for normal
        const buildingIcon = L.divIcon({
            html: `<div class="building-marker-container">
                <div class="building-icon" style="
                    background-color: ${iconColor};
                    border: 2px solid white;
                    border-radius: 6px;
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                    color: white;
                    font-size: 16px;
                    font-weight: bold;
                ">🏢</div>
                <div class="building-name-label" style="
                    background: rgba(0,0,0,0.8);
                    color: white;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 11px;
                    font-weight: 600;
                    white-space: nowrap;
                    margin-top: 2px;
                    text-align: center;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
                    max-width: 120px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                ">${building.name}</div>
            </div>`,
            className: 'custom-building-marker',
            iconSize: [140, 60],
            iconAnchor: [70, 50],
            popupAnchor: [0, -50]
        });
        
        const marker = L.marker(building.coordinates, { icon: buildingIcon })
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
        const totalRooms = this.getTotalRooms(building);
        const availableRooms = this.getAvailableRooms(building);
        const maintenanceRooms = this.getMaintenanceRooms(building);
        const occupiedRooms = totalRooms - availableRooms - maintenanceRooms;
        
        return `
            <div class="custom-popup">
                <h3>${building.name}</h3>
                <p><strong>Address:</strong> ${building.address}</p>
                <p><strong>Floors:</strong> ${building.floors.length}</p>
                <p><strong>Total Rooms:</strong> ${totalRooms}</p>
                <div class="room-status-breakdown">
                    <div class="status-item available">
                        <span class="status-dot available"></span>
                        <span>Available: ${availableRooms}</span>
                    </div>
                    <div class="status-item occupied">
                        <span class="status-dot occupied"></span>
                        <span>Occupied: ${occupiedRooms}</span>
                    </div>
                    ${maintenanceRooms > 0 ? `
                    <div class="status-item maintenance">
                        <span class="status-dot maintenance"></span>
                        <span>Maintenance: ${maintenanceRooms}</span>
                    </div>
                    ` : ''}
                </div>
                <button class="popup-button" onclick="app.showBuildingDetails('${building.id}')">
                    View Details
                </button>
            </div>
        `;
    }
    
    getTotalRooms(building) {
        return building.floors.reduce((total, floor) => total + floor.rooms.length, 0);
    }
    
    getAvailableRooms(building) {
        return building.floors.reduce((total, floor) => 
            total + floor.rooms.filter(room => room.status === 'available').length, 0);
    }
    
    getMaintenanceRooms(building) {
        return building.floors.reduce((total, floor) => 
            total + floor.rooms.filter(room => room.status === 'maintenance').length, 0);
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
        this.selectedRooms.clear(); // Clear previous selections
        
        // Update modal content
        document.getElementById('floorTitle').textContent = 
            `${this.currentBuilding.name} - ${floor.name}`;
        
        // Check if there are maintenance rooms for bulk selection
        const maintenanceRooms = floor.rooms.filter(room => room.status === 'maintenance');
        const hasMaintenance = maintenanceRooms.length > 0;
        
        // Add bulk selection controls if there are maintenance rooms
        this.createBulkSelectionControls(hasMaintenance, maintenanceRooms.length);
        
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
        card.dataset.roomId = room.id;
        
        // Create checkbox for maintenance rooms if in bulk selection mode
        const checkboxHtml = (room.status === 'maintenance') ? 
            `<div class="room-checkbox-container">
                <input type="checkbox" class="room-checkbox" 
                       id="room-${room.id}" 
                       onchange="app.toggleRoomSelection('${room.id}', this.checked)">
                <label for="room-${room.id}" class="checkbox-label"></label>
            </div>` : '';
        
        card.innerHTML = `
            ${checkboxHtml}
            <div class="room-content" onclick="app.showRoomDetails(app.getRoomById('${room.id}'))">
                <div class="room-status-indicator ${statusInfo.color}"></div>
                <div class="room-name">${room.name}</div>
                <div class="room-capacity">Capacity: ${room.capacity}</div>
                <div class="room-status">${statusInfo.label}</div>
                ${room.problems && room.problems.length > 0 ? 
                    `<div class="room-problems-indicator">${room.problems.length} issue(s)</div>` : ''}
            </div>
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
    
    // Bulk Selection Methods
    createBulkSelectionControls(hasMaintenance, maintenanceCount) {
        const floorHeader = document.querySelector('.floor-header');
        
        // Remove existing bulk controls
        const existingControls = floorHeader.querySelector('.bulk-selection-controls');
        if (existingControls) {
            existingControls.remove();
        }
        
        if (hasMaintenance) {
            const bulkControls = document.createElement('div');
            bulkControls.className = 'bulk-selection-controls';
            bulkControls.innerHTML = `
                <div class="bulk-controls-section">
                    <div class="bulk-info">
                        <span class="maintenance-count">${maintenanceCount} room(s) need maintenance</span>
                        <div class="filter-controls">
                            <select id="priorityFilter" onchange="app.filterByPriority(this.value)">
                                <option value="">All Priorities</option>
                                <option value="Critical">Critical Only</option>
                                <option value="High">High Only</option>
                                <option value="Medium">Medium Only</option>
                                <option value="Low">Low Only</option>
                            </select>
                            <button class="btn-filter" onclick="app.toggleMaintenanceOnly()">
                                <span id="filterToggleText">Show Maintenance Only</span>
                            </button>
                        </div>
                    </div>
                    <div class="bulk-actions">
                        <button class="btn-secondary" onclick="app.selectAllMaintenance()">
                            Select All Maintenance
                        </button>
                        <button class="btn-secondary" onclick="app.selectByPriority()">
                            Select High Priority
                        </button>
                        <button class="btn-secondary" onclick="app.clearAllSelections()">
                            Clear Selection
                        </button>
                        <button class="btn-primary bulk-dispatch-btn" 
                                id="bulkDispatchBtn" 
                                onclick="app.showBulkDispatchModal()" 
                                disabled>
                            🔧 Dispatch to Selected (0)
                        </button>
                    </div>
                </div>
            `;
            
            floorHeader.appendChild(bulkControls);
        }
    }
    
    toggleRoomSelection(roomId, isSelected) {
        if (isSelected) {
            this.selectedRooms.add(roomId);
        } else {
            this.selectedRooms.delete(roomId);
        }
        
        // Update the bulk dispatch button
        this.updateBulkDispatchButton();
        
        // Update room card visual selection
        const roomCard = document.querySelector(`[data-room-id="${roomId}"]`);
        if (roomCard) {
            roomCard.classList.toggle('selected', isSelected);
        }
    }
    
    selectAllMaintenance() {
        if (!this.currentFloor) return;
        
        const maintenanceRooms = this.currentFloor.rooms.filter(room => room.status === 'maintenance');
        
        maintenanceRooms.forEach(room => {
            this.selectedRooms.add(room.id.toString());
            const checkbox = document.getElementById(`room-${room.id}`);
            if (checkbox) {
                checkbox.checked = true;
            }
            const roomCard = document.querySelector(`[data-room-id="${room.id}"]`);
            if (roomCard) {
                roomCard.classList.add('selected');
            }
        });
        
        this.updateBulkDispatchButton();
    }
    
    clearAllSelections() {
        this.selectedRooms.clear();
        
        // Clear all checkboxes and selection styling
        document.querySelectorAll('.room-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        document.querySelectorAll('.room-card.selected').forEach(card => {
            card.classList.remove('selected');
        });
        
        this.updateBulkDispatchButton();
    }
    
    updateBulkDispatchButton() {
        const bulkDispatchBtn = document.getElementById('bulkDispatchBtn');
        if (bulkDispatchBtn) {
            const selectedCount = this.selectedRooms.size;
            bulkDispatchBtn.textContent = `🔧 Dispatch to Selected (${selectedCount})`;
            bulkDispatchBtn.disabled = selectedCount === 0;
        }
    }
    
    getRoomById(roomId) {
        if (!this.currentFloor) return null;
        return this.currentFloor.rooms.find(room => room.id.toString() === roomId.toString());
    }
    
    // Additional Bulk Selection Methods
    filterByPriority(priority) {
        if (!this.currentFloor) return;
        
        const roomCards = document.querySelectorAll('.room-card');
        roomCards.forEach(card => {
            const roomId = card.dataset.roomId;
            const room = this.getRoomById(roomId);
            
            if (!room || room.status !== 'maintenance') {
                return;
            }
            
            let shouldShow = true;
            if (priority) {
                shouldShow = room.problems.some(problem => problem.priority === priority);
            }
            
            card.style.display = shouldShow ? 'block' : 'none';
        });
    }
    
    toggleMaintenanceOnly() {
        const roomCards = document.querySelectorAll('.room-card');
        const filterToggleText = document.getElementById('filterToggleText');
        const isCurrentlyShowingAll = filterToggleText.textContent === 'Show Maintenance Only';
        
        roomCards.forEach(card => {
            const roomId = card.dataset.roomId;
            const room = this.getRoomById(roomId);
            
            if (isCurrentlyShowingAll) {
                // Show only maintenance rooms
                card.style.display = (room && room.status === 'maintenance') ? 'block' : 'none';
            } else {
                // Show all rooms
                card.style.display = 'block';
            }
        });
        
        filterToggleText.textContent = isCurrentlyShowingAll ? 'Show All Rooms' : 'Show Maintenance Only';
    }
    
    selectByPriority(priority = 'High') {
        if (!this.currentFloor) return;
        
        // Clear current selections first
        this.clearAllSelections();
        
        const highPriorityRooms = this.currentFloor.rooms.filter(room => 
            room.status === 'maintenance' && 
            room.problems.some(problem => problem.priority === priority || problem.priority === 'Critical')
        );
        
        highPriorityRooms.forEach(room => {
            this.selectedRooms.add(room.id.toString());
            const checkbox = document.getElementById(`room-${room.id}`);
            if (checkbox) {
                checkbox.checked = true;
            }
            const roomCard = document.querySelector(`[data-room-id="${room.id}"]`);
            if (roomCard) {
                roomCard.classList.add('selected');
            }
        });
        
        this.updateBulkDispatchButton();
    }
    
    // Bulk Dispatch Modal
    showBulkDispatchModal() {
        if (this.selectedRooms.size === 0) return;
        
        const selectedRoomDetails = Array.from(this.selectedRooms)
            .map(roomId => this.getRoomById(roomId))
            .filter(room => room);
        
        // Aggregate problem data
        const problemSummary = this.aggregateProblems(selectedRoomDetails);
        
        // Create and show bulk dispatch modal
        this.createBulkDispatchModal(selectedRoomDetails, problemSummary);
        this.showModal('bulkDispatchModal');
    }
    
    aggregateProblems(rooms) {
        const summary = {
            totalRooms: rooms.length,
            totalProblems: 0,
            problemsByType: {},
            problemsByPriority: {},
            roomDetails: []
        };
        
        rooms.forEach(room => {
            const roomInfo = {
                name: room.name,
                capacity: room.capacity,
                problems: room.problems || []
            };
            
            summary.roomDetails.push(roomInfo);
            summary.totalProblems += room.problems.length;
            
            room.problems.forEach(problem => {
                // Count by type
                summary.problemsByType[problem.type] = 
                    (summary.problemsByType[problem.type] || 0) + 1;
                
                // Count by priority
                summary.problemsByPriority[problem.priority] = 
                    (summary.problemsByPriority[problem.priority] || 0) + 1;
            });
        });
        
        return summary;
    }
    
    createBulkDispatchModal(rooms, problemSummary) {
        // Remove existing bulk dispatch modal if any
        const existingModal = document.getElementById('bulkDispatchModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Get the most appropriate engineer for the most common problem type
        const mostCommonProblemType = Object.keys(problemSummary.problemsByType)
            .reduce((a, b) => problemSummary.problemsByType[a] > problemSummary.problemsByType[b] ? a : b);
        const assignedEngineer = getAvailableEngineer(mostCommonProblemType);
        
        // Determine overall priority level
        const hasHighPriority = problemSummary.problemsByPriority['Critical'] || problemSummary.problemsByPriority['High'];
        const overallPriority = hasHighPriority ? 'High' : 'Medium';
        
        const modalHTML = `
            <div id="bulkDispatchModal" class="modal">
                <div class="modal-content bulk-dispatch-content">
                    <span class="close" onclick="app.closeModal(document.getElementById('bulkDispatchModal'))">&times;</span>
                    <h2>🔧 Bulk Engineer Dispatch</h2>
                    
                    <div class="bulk-dispatch-summary">
                        <h3>📋 Dispatch Summary</h3>
                        <div class="summary-stats">
                            <div class="stat-item">
                                <span class="stat-label">Selected Rooms:</span>
                                <span class="stat-value">${problemSummary.totalRooms}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Total Issues:</span>
                                <span class="stat-value">${problemSummary.totalProblems}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Primary Issue Type:</span>
                                <span class="stat-value">${mostCommonProblemType}</span>
                            </div>
                        </div>
                        
                        <div class="problem-breakdown">
                            <h4>Problem Types:</h4>
                            ${Object.entries(problemSummary.problemsByType).map(([type, count]) => 
                                `<span class="problem-tag">${type}: ${count}</span>`
                            ).join('')}
                        </div>
                        
                        <div class="room-list">
                            <h4>Affected Rooms:</h4>
                            <div class="room-chips">
                                ${problemSummary.roomDetails.map(room => 
                                    `<div class="room-chip">
                                        <span class="room-name">${room.name}</span>
                                        <span class="room-issues">${room.problems.length} issue(s)</span>
                                    </div>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <div class="bulk-dispatch-form">
                        <div class="form-group">
                            <label for="bulkUrgencyLevel">Overall Priority Level:</label>
                            <select id="bulkUrgencyLevel" class="form-input">
                                <option value="Low">Low Priority</option>
                                <option value="Medium" ${overallPriority === 'Medium' ? 'selected' : ''}>Medium Priority</option>
                                <option value="High" ${overallPriority === 'High' ? 'selected' : ''}>High Priority</option>
                                <option value="Critical">Critical Priority</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="bulkProblemCategory">Primary Problem Category:</label>
                            <select id="bulkProblemCategory" class="form-input">
                                <option value="Equipment" ${mostCommonProblemType === 'Equipment' ? 'selected' : ''}>Equipment Failure</option>
                                <option value="Network" ${mostCommonProblemType === 'Network' ? 'selected' : ''}>Network Issues</option>
                                <option value="Climate" ${mostCommonProblemType === 'Climate' ? 'selected' : ''}>Climate Control</option>
                                <option value="Security" ${mostCommonProblemType === 'Security' ? 'selected' : ''}>Security Systems</option>
                                <option value="Facility" ${mostCommonProblemType === 'Facility' ? 'selected' : ''}>General Facility</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="bulkRequestDescription">Bulk Dispatch Notes:</label>
                            <textarea id="bulkRequestDescription" class="form-input" rows="4" 
                                placeholder="Additional instructions for the engineer team...">Bulk maintenance dispatch for ${problemSummary.totalRooms} rooms with ${problemSummary.totalProblems} total issues. Primary focus: ${mostCommonProblemType} problems.</textarea>
                        </div>
                        
                        <div class="engineer-assignment">
                            <h3>👨‍🔧 Lead Engineer Assignment</h3>
                            <div class="engineer-info bulk-engineer-info">
                                <div class="engineer-card">
                                    <div class="engineer-avatar">${assignedEngineer.initials}</div>
                                    <div class="engineer-details">
                                        <h4>${assignedEngineer.name}</h4>
                                        <p><strong>Specialty:</strong> ${assignedEngineer.specialty} • ${assignedEngineer.experience}</p>
                                        <p><strong>Phone:</strong> ${assignedEngineer.phone}</p>
                                        <p><strong>Current Location:</strong> ${assignedEngineer.currentLocation}</p>
                                        <p><strong>ETA:</strong> ${assignedEngineer.estimatedArrival}</p>
                                        <span class="engineer-status ${assignedEngineer.status}">${assignedEngineer.status}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="bulk-dispatch-note">
                                <p><strong>Note:</strong> Additional team members will be assigned based on workload and issue complexity.</p>
                            </div>
                        </div>
                        
                        <div class="form-actions">
                            <button class="btn-secondary" onclick="app.closeModal(document.getElementById('bulkDispatchModal'))">Cancel</button>
                            <button class="btn-primary" onclick="app.confirmBulkDispatch()">Confirm Bulk Dispatch</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
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
    
    confirmBulkDispatch() {
        const urgency = document.getElementById('bulkUrgencyLevel').value;
        const category = document.getElementById('bulkProblemCategory').value;
        const description = document.getElementById('bulkRequestDescription').value;
        
        const selectedRoomDetails = Array.from(this.selectedRooms)
            .map(roomId => this.getRoomById(roomId))
            .filter(room => room);
        
        // Create bulk dispatch request
        const bulkDispatchRequest = {
            id: Date.now(),
            type: 'bulk',
            rooms: selectedRoomDetails.map(room => ({
                id: room.id,
                name: room.name,
                building: this.currentBuilding.name,
                floor: this.currentFloor.name
            })),
            totalRooms: selectedRoomDetails.length,
            urgency: urgency,
            category: category,
            description: description,
            requestedAt: new Date().toISOString(),
            status: 'dispatched'
        };
        
        // Store notification for users
        this.addMaintenanceNotification(bulkDispatchRequest);
        
        // Close dispatch modal
        this.closeModal(document.getElementById('bulkDispatchModal'));
        
        // Show success notification
        this.showNotification(
            'success',
            'Bulk Engineer Dispatch Successful!',
            `Engineering team has been dispatched to ${selectedRoomDetails.length} rooms. Lead engineer ETA: 15-20 minutes.`
        );
        
        // Clear selections
        this.clearAllSelections();
        
        // Simulate dispatch progress
        setTimeout(() => {
            this.showNotification(
                'success',
                'Engineering Team En Route',
                `Engineering team is now en route to ${this.currentBuilding.name}. Track progress via mobile app.`
            );
        }, 3000);
        
        // Log the bulk dispatch request
        console.log('Bulk Dispatch Request Created:', bulkDispatchRequest);
    }
    
    // Notification System
    initNotificationSystem() {
        // Load existing notifications from localStorage
        this.loadStoredNotifications();
        
        // Create notification bell in header
        this.createNotificationBell();
        
        // Check for new maintenance issues and create notifications
        this.checkForMaintenanceIssues();
        
        // Update notification count
        this.updateNotificationBadge();
    }
    
    loadStoredNotifications() {
        const stored = localStorage.getItem('maintenanceNotifications');
        this.maintenanceNotifications = stored ? JSON.parse(stored) : [];
        
        // Clean up old notifications (older than 7 days)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        
        this.maintenanceNotifications = this.maintenanceNotifications.filter(
            notification => new Date(notification.createdAt) > sevenDaysAgo
        );
        
        this.saveNotifications();
    }
    
    saveNotifications() {
        localStorage.setItem('maintenanceNotifications', JSON.stringify(this.maintenanceNotifications));
    }
    
    addMaintenanceNotification(dispatchData) {
        const notification = {
            id: Date.now(),
            type: dispatchData.type || 'single',
            title: dispatchData.type === 'bulk' ? 
                `Bulk Maintenance Dispatch - ${dispatchData.totalRooms} Rooms` :
                `Maintenance Dispatch - ${dispatchData.roomName}`,
            message: dispatchData.type === 'bulk' ?
                `Engineering team dispatched to ${dispatchData.totalRooms} rooms in ${dispatchData.rooms[0].building}. Issues: ${dispatchData.category}` :
                `Engineer dispatched to ${dispatchData.roomName} in ${dispatchData.buildingName}. Issue: ${dispatchData.category}`,
            building: dispatchData.type === 'bulk' ? dispatchData.rooms[0].building : dispatchData.buildingName,
            room: dispatchData.type === 'bulk' ? `${dispatchData.totalRooms} rooms` : dispatchData.roomName,
            urgency: dispatchData.urgency,
            category: dispatchData.category,
            createdAt: new Date().toISOString(),
            isRead: false,
            isDismissed: false,
            dispatchData: dispatchData
        };
        
        this.maintenanceNotifications.unshift(notification);
        this.saveNotifications();
        this.updateNotificationBadge();
        
        // Show immediate notification to user
        this.showMaintenanceAlert(notification);
    }
    
    checkForMaintenanceIssues() {
        // Check all buildings in current region for maintenance rooms
        let regionBuildings = buildingsData.filter(building => building.region === this.currentRegion);
        
        if (this.currentCampus) {
            regionBuildings = regionBuildings.filter(building => building.campus === this.currentCampus);
        }
        
        regionBuildings.forEach(building => {
            building.floors.forEach(floor => {
                floor.rooms.forEach(room => {
                    if (room.status === 'maintenance' && room.problems && room.problems.length > 0) {
                        // Check if we already have a notification for this room
                        const existingNotification = this.maintenanceNotifications.find(
                            notif => notif.building === building.name && 
                                    notif.room === room.name && 
                                    !notif.isDismissed
                        );
                        
                        if (!existingNotification) {
                            // Create a notification for unaddressed maintenance issue
                            const maintenanceAlert = {
                                id: `room-${room.id}-${Date.now()}`,
                                type: 'alert',
                                title: `Maintenance Required - ${room.name}`,
                                message: `${room.name} in ${building.name} requires maintenance. Issues: ${room.problems.map(p => p.type).join(', ')}`,
                                building: building.name,
                                room: room.name,
                                urgency: room.problems.reduce((max, problem) => {
                                    const urgencyLevels = { 'Low': 1, 'Medium': 2, 'High': 3, 'Critical': 4 };
                                    return urgencyLevels[problem.priority] > urgencyLevels[max] ? problem.priority : max;
                                }, 'Low'),
                                category: 'Maintenance Alert',
                                createdAt: new Date().toISOString(),
                                isRead: false,
                                isDismissed: false,
                                roomData: room,
                                buildingData: building
                            };
                            
                            this.maintenanceNotifications.unshift(maintenanceAlert);
                        }
                    }
                });
            });
        });
        
        this.saveNotifications();
    }
    
    createNotificationBell() {
        const headerRight = document.querySelector('.header-right');
        
        // Remove existing notification bell if any
        const existing = headerRight.querySelector('.notification-bell');
        if (existing) {
            existing.remove();
        }
        
        const notificationBell = document.createElement('div');
        notificationBell.className = 'notification-bell';
        notificationBell.innerHTML = `
            <button class="notification-btn" onclick="app.toggleNotificationPanel()">
                🔔
                <span class="notification-badge" id="notificationBadge">0</span>
            </button>
        `;
        
        // Insert before the AB logo container (user icon)
        const abLogoContainer = headerRight.querySelector('.ab-logo-container');
        headerRight.insertBefore(notificationBell, abLogoContainer);
    }
    
    updateNotificationBadge() {
        const badge = document.getElementById('notificationBadge');
        if (badge) {
            const unreadCount = this.maintenanceNotifications.filter(
                notif => !notif.isRead && !notif.isDismissed
            ).length;
            
            badge.textContent = unreadCount;
            badge.style.display = unreadCount > 0 ? 'block' : 'none';
        }
    }
    
    showMaintenanceAlert(notification) {
        // Show an immediate popup alert for new maintenance notifications
        this.showNotification(
            'warning',
            notification.title,
            `${notification.message}. Click the notification bell to manage all alerts.`
        );
    }
    
    toggleNotificationPanel() {
        let panel = document.getElementById('notificationPanel');
        
        if (panel) {
            // Toggle existing panel
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        } else {
            // Create new panel
            this.createNotificationPanel();
        }
        
        // Mark all notifications as read when panel is opened
        this.markAllAsRead();
    }
    
    createNotificationPanel() {
        const panelHTML = `
            <div id="notificationPanel" class="notification-panel">
                <div class="notification-panel-header">
                    <h3>🔔 Maintenance Alerts</h3>
                    <div class="panel-actions">
                        <button class="btn-text" onclick="app.markAllAsRead()">Mark All Read</button>
                        <button class="btn-text" onclick="app.clearAllNotifications()">Clear All</button>
                        <button class="panel-close" onclick="app.closeNotificationPanel()">×</button>
                    </div>
                </div>
                <div class="notification-panel-content">
                    ${this.renderNotificationList()}
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', panelHTML);
        
        // Close panel when clicking outside
        document.addEventListener('click', this.handleOutsideClick.bind(this));
    }
    
    renderNotificationList() {
        if (this.maintenanceNotifications.length === 0) {
            return '<div class="no-notifications">No maintenance alerts</div>';
        }
        
        return this.maintenanceNotifications
            .filter(notif => !notif.isDismissed)
            .map(notification => `
                <div class="notification-item ${notification.isRead ? 'read' : 'unread'}" 
                     data-notification-id="${notification.id}">
                    <div class="notification-header">
                        <div class="notification-title">${notification.title}</div>
                        <div class="notification-urgency urgency-${notification.urgency.toLowerCase()}">${notification.urgency}</div>
                        <button class="notification-dismiss" onclick="app.dismissNotification('${notification.id}')">×</button>
                    </div>
                    <div class="notification-message">${notification.message}</div>
                    <div class="notification-meta">
                        <span class="notification-time">${this.formatNotificationTime(notification.createdAt)}</span>
                        <span class="notification-location">📍 ${notification.building}</span>
                    </div>
                    <div class="notification-actions">
                        ${this.renderNotificationActions(notification)}
                    </div>
                </div>
            `).join('');
    }
    
    renderNotificationActions(notification) {
        if (notification.type === 'alert') {
            return `
                <button class="btn-small btn-primary" onclick="app.dispatchFromNotification('${notification.id}')">
                    🔧 Dispatch Engineer
                </button>
                <button class="btn-small btn-secondary" onclick="app.viewRoomFromNotification('${notification.id}')">
                    👁️ View Room
                </button>
            `;
        } else {
            return `
                <button class="btn-small btn-secondary" onclick="app.viewDispatchDetails('${notification.id}')">
                    📋 View Details
                </button>
            `;
        }
    }
    
    formatNotificationTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMins / 60);
        const diffDays = Math.floor(diffHours / 24);
        
        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 7) return `${diffDays}d ago`;
        return date.toLocaleDateString();
    }
    
    markAllAsRead() {
        this.maintenanceNotifications.forEach(notif => {
            notif.isRead = true;
        });
        this.saveNotifications();
        this.updateNotificationBadge();
        
        // Refresh panel if open
        const panel = document.getElementById('notificationPanel');
        if (panel) {
            const content = panel.querySelector('.notification-panel-content');
            content.innerHTML = this.renderNotificationList();
        }
    }
    
    dismissNotification(notificationId) {
        const notification = this.maintenanceNotifications.find(notif => notif.id === notificationId);
        if (notification) {
            notification.isDismissed = true;
            this.saveNotifications();
            this.updateNotificationBadge();
            
            // Remove from panel
            const notificationElement = document.querySelector(`[data-notification-id="${notificationId}"]`);
            if (notificationElement) {
                notificationElement.remove();
            }
            
            // Refresh panel content
            const panel = document.getElementById('notificationPanel');
            if (panel) {
                const content = panel.querySelector('.notification-panel-content');
                content.innerHTML = this.renderNotificationList();
            }
        }
    }
    
    clearAllNotifications() {
        this.maintenanceNotifications = [];
        this.saveNotifications();
        this.updateNotificationBadge();
        
        // Refresh panel if open
        const panel = document.getElementById('notificationPanel');
        if (panel) {
            const content = panel.querySelector('.notification-panel-content');
            content.innerHTML = this.renderNotificationList();
        }
    }
    
    closeNotificationPanel() {
        const panel = document.getElementById('notificationPanel');
        if (panel) {
            panel.remove();
        }
        document.removeEventListener('click', this.handleOutsideClick);
    }
    
    handleOutsideClick(event) {
        const panel = document.getElementById('notificationPanel');
        const notificationBtn = document.querySelector('.notification-btn');
        
        if (panel && !panel.contains(event.target) && !notificationBtn.contains(event.target)) {
            this.closeNotificationPanel();
        }
    }
    
    // Notification Action Handlers
    dispatchFromNotification(notificationId) {
        const notification = this.maintenanceNotifications.find(notif => notif.id === notificationId);
        if (notification && notification.roomData) {
            this.currentRoom = notification.roomData;
            this.currentBuilding = notification.buildingData;
            this.closeNotificationPanel();
            this.showDispatchModal();
        }
    }
    
    viewRoomFromNotification(notificationId) {
        const notification = this.maintenanceNotifications.find(notif => notif.id === notificationId);
        if (notification && notification.roomData) {
            this.currentRoom = notification.roomData;
            this.currentBuilding = notification.buildingData;
            this.closeNotificationPanel();
            this.showRoomDetails(notification.roomData);
        }
    }
    
    viewDispatchDetails(notificationId) {
        const notification = this.maintenanceNotifications.find(notif => notif.id === notificationId);
        if (notification) {
            this.closeNotificationPanel();
            this.showNotification(
                'success',
                'Dispatch Details',
                `${notification.message}\n\nStatus: In Progress\nCreated: ${this.formatNotificationTime(notification.createdAt)}`
            );
        }
    }
    
    // Microsoft Copilot Assistant
    toggleCopilotChat() {
        // Check if copilot chat is already open
        let copilotChat = document.getElementById('copilotChatPanel');
        
        if (copilotChat) {
            // Toggle existing chat panel
            copilotChat.style.display = copilotChat.style.display === 'none' ? 'block' : 'none';
        } else {
            // Create new chat panel
            this.createCopilotChatPanel();
        }
    }
    
    createCopilotChatPanel() {
        const chatPanelHTML = `
            <div id="copilotChatPanel" class="copilot-chat-panel">
                <div class="copilot-chat-header">
                    <div class="copilot-header-info">
                        <div class="copilot-avatar">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                            </svg>
                        </div>
                        <div class="copilot-title">
                            <h3>Microsoft Copilot</h3>
                            <span class="copilot-status">Room Management Assistant</span>
                        </div>
                    </div>
                    <button class="copilot-close" onclick="app.closeCopilotChat()">×</button>
                </div>
                <div class="copilot-chat-content">
                    <div class="copilot-welcome">
                        <div class="copilot-message bot-message">
                            <div class="message-avatar">🤖</div>
                            <div class="message-content">
                                <p>Hello! I'm Microsoft Copilot, your AI assistant for room management. I can help you with:</p>
                                <ul>
                                    <li>Finding available meeting rooms</li>
                                    <li>Analyzing maintenance issues</li>
                                    <li>Managing dispatch requests</li>
                                    <li>Building and room information</li>
                                </ul>
                                <p>How can I assist you today?</p>
                            </div>
                        </div>
                    </div>
                    <div id="copilotMessages" class="copilot-messages">
                        <!-- Chat messages will appear here -->
                    </div>
                </div>
                <div class="copilot-chat-input">
                    <div class="copilot-suggestions">
                        <button class="suggestion-btn" onclick="app.sendCopilotMessage('Show me all rooms with maintenance issues')">
                            🔧 Maintenance Issues
                        </button>
                        <button class="suggestion-btn" onclick="app.sendCopilotMessage('Find available meeting rooms')">
                            📅 Available Rooms
                        </button>
                        <button class="suggestion-btn" onclick="app.sendCopilotMessage('Show building statistics')">
                            📊 Building Stats
                        </button>
                    </div>
                    <div class="chat-input-container">
                        <input type="text" id="copilotInput" placeholder="Ask me anything about room management..." 
                               onkeypress="if(event.key==='Enter') app.sendCopilotMessage()">
                        <button class="send-btn" onclick="app.sendCopilotMessage()">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatPanelHTML);
        
        // Focus on input
        setTimeout(() => {
            document.getElementById('copilotInput').focus();
        }, 100);
    }
    
    sendCopilotMessage(predefinedMessage) {
        const input = document.getElementById('copilotInput');
        const message = predefinedMessage || input.value.trim();
        
        if (!message) return;
        
        // Clear input if not predefined message
        if (!predefinedMessage) {
            input.value = '';
        }
        
        // Add user message
        this.addCopilotMessage(message, 'user');
        
        // Simulate Copilot response
        setTimeout(() => {
            const response = this.generateCopilotResponse(message);
            this.addCopilotMessage(response, 'bot');
        }, 1000);
    }
    
    addCopilotMessage(message, sender) {
        const messagesContainer = document.getElementById('copilotMessages');
        const messageElement = document.createElement('div');
        messageElement.className = `copilot-message ${sender}-message`;
        
        const avatar = sender === 'user' ? '👤' : '🤖';
        const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        messageElement.innerHTML = `
            <div class="message-avatar">${avatar}</div>
            <div class="message-content">
                <div class="message-text">${message}</div>
                <div class="message-time">${timestamp}</div>
            </div>
        `;
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    generateCopilotResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        if (message.includes('maintenance') || message.includes('issue')) {
            const stats = this.getBuildingStats();
            return `I found ${stats.maintenanceRooms} rooms with maintenance issues in the ${this.currentRegion} region. The most common issues are equipment failures and network problems. Would you like me to help you dispatch engineers to these rooms?`;
        }
        
        if (message.includes('available') || message.includes('book')) {
            const stats = this.getBuildingStats();
            return `There are currently ${stats.availableRooms} available rooms in the ${this.currentRegion} region across ${stats.totalBuildings} buildings. I can help you find the perfect room based on capacity, equipment, or location preferences.`;
        }
        
        if (message.includes('statistics') || message.includes('stats')) {
            const stats = this.getBuildingStats();
            return `Here are the current statistics for ${this.currentRegion}:\n\n🏢 Buildings: ${stats.totalBuildings}\n📅 Total Rooms: ${stats.totalRooms}\n✅ Available: ${stats.availableRooms}\n🔧 Maintenance: ${stats.maintenanceRooms}\n👥 Occupied: ${stats.occupiedRooms}`;
        }
        
        if (message.includes('dispatch') || message.includes('engineer')) {
            return `I can help you dispatch engineers for maintenance issues. Currently, we have several available engineers specializing in different areas. Would you like me to show you the rooms that need immediate attention?`;
        }
        
        if (message.includes('hello') || message.includes('hi')) {
            return `Hello! I'm here to help you manage your meeting rooms efficiently. I can provide real-time information about room availability, maintenance issues, and assist with engineer dispatch. What would you like to know?`;
        }
        
        // Default response
        return `I understand you're asking about "${userMessage}". I'm here to help with room management tasks. Try asking me about available rooms, maintenance issues, building statistics, or engineer dispatch. What specific information do you need?`;
    }
    
    closeCopilotChat() {
        const chatPanel = document.getElementById('copilotChatPanel');
        if (chatPanel) {
            chatPanel.remove();
        }
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