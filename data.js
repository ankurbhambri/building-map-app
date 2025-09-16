// Sample data for the building map application

const buildingsData = [
    {
        id: 1,
        name: "Building B1",
        address: "123 Innovation Drive, Silicon Valley, CA",
        coordinates: [37.7749, -122.4194], // San Francisco coordinates
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                number: 0,
                description: "Reception, Lobby, Cafeteria",
                rooms: [
                    {
                        id: 101,
                        name: "Main Conference",
                        capacity: 50,
                        status: "available",
                        equipment: ["Projector", "Video Conference", "Whiteboard", "Sound System"],
                        problems: []
                    },
                    {
                        id: 102,
                        name: "Meeting Room A",
                        capacity: 8,
                        status: "occupied",
                        equipment: ["TV Screen", "Conference Phone"],
                        problems: []
                    },
                    {
                        id: 103,
                        name: "Meeting Room B",
                        capacity: 6,
                        status: "maintenance",
                        equipment: ["Projector", "Whiteboard"],
                        problems: [
                            {
                                type: "Equipment",
                                description: "Projector not working",
                                priority: "High",
                                reportedAt: "2024-01-15"
                            },
                            {
                                type: "Facility",
                                description: "Air conditioning too loud",
                                priority: "Medium",
                                reportedAt: "2024-01-14"
                            }
                        ]
                    },
                    {
                        id: 104,
                        name: "Training Room",
                        capacity: 20,
                        status: "available",
                        equipment: ["Interactive Whiteboard", "Laptops", "Projector"],
                        problems: []
                    }
                ]
            },
            {
                id: 2,
                name: "First Floor",
                number: 1,
                description: "Engineering Teams, Development",
                rooms: [
                    {
                        id: 201,
                        name: "Dev Team Room",
                        capacity: 12,
                        status: "available",
                        equipment: ["Large Monitor", "Whiteboard", "Coffee Machine"],
                        problems: []
                    },
                    {
                        id: 202,
                        name: "Standup Room",
                        capacity: 15,
                        status: "occupied",
                        equipment: ["Standing Desks", "Monitor"],
                        problems: []
                    },
                    {
                        id: 203,
                        name: "Code Review",
                        capacity: 6,
                        status: "maintenance",
                        equipment: ["Multiple Monitors", "Ergonomic Chairs"],
                        problems: [
                            {
                                type: "Network",
                                description: "WiFi connectivity issues",
                                priority: "High",
                                reportedAt: "2024-01-16"
                            }
                        ]
                    },
                    {
                        id: 204,
                        name: "Phone Booth 1",
                        capacity: 1,
                        status: "available",
                        equipment: ["Phone", "Soundproofing"],
                        problems: []
                    },
                    {
                        id: 205,
                        name: "Phone Booth 2",
                        capacity: 1,
                        status: "available",
                        equipment: ["Phone", "Soundproofing"],
                        problems: []
                    },
                    {
                        id: 206,
                        name: "Innovation Lab",
                        capacity: 10,
                        status: "available",
                        equipment: ["3D Printer", "VR Setup", "Prototyping Tools"],
                        problems: []
                    }
                ]
            },
            {
                id: 3,
                name: "Second Floor",
                number: 2,
                description: "Management, HR, Finance",
                rooms: [
                    {
                        id: 301,
                        name: "Executive Boardroom",
                        capacity: 16,
                        status: "occupied",
                        equipment: ["4K Display", "Premium Audio", "Video Conference", "Catering Setup"],
                        problems: []
                    },
                    {
                        id: 302,
                        name: "HR Interview Room",
                        capacity: 4,
                        status: "available",
                        equipment: ["Camera", "Microphone", "Comfortable Seating"],
                        problems: []
                    },
                    {
                        id: 303,
                        name: "Finance Meeting",
                        capacity: 8,
                        status: "maintenance",
                        equipment: ["Secure Network", "Printer", "Shredder"],
                        problems: [
                            {
                                type: "Security",
                                description: "Door lock malfunction",
                                priority: "Critical",
                                reportedAt: "2024-01-16"
                            },
                            {
                                type: "Equipment",
                                description: "Printer out of toner",
                                priority: "Low",
                                reportedAt: "2024-01-15"
                            }
                        ]
                    },
                    {
                        id: 304,
                        name: "Strategy Room",
                        capacity: 12,
                        status: "available",
                        equipment: ["Digital Whiteboard", "Premium Furniture", "Video Wall"],
                        problems: []
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Building B2",
        address: "456 Design Street, San Francisco, CA",
        coordinates: [37.7849, -122.4094],
        floors: [
            {
                id: 4,
                name: "Ground Floor",
                number: 0,
                description: "Design Studios, Art Gallery",
                rooms: [
                    {
                        id: 401,
                        name: "Main Studio",
                        capacity: 25,
                        status: "available",
                        equipment: ["Design Tablets", "Large Displays", "Art Supplies", "Scanner"],
                        problems: []
                    },
                    {
                        id: 402,
                        name: "Photo Studio",
                        capacity: 8,
                        status: "maintenance",
                        equipment: ["Professional Lighting", "Cameras", "Backdrops"],
                        problems: [
                            {
                                type: "Equipment",
                                description: "Main camera lens damaged",
                                priority: "High",
                                reportedAt: "2024-01-16"
                            }
                        ]
                    },
                    {
                        id: 403,
                        name: "Video Editing",
                        capacity: 6,
                        status: "occupied",
                        equipment: ["High-end Workstations", "Color Monitors", "Audio Equipment"],
                        problems: []
                    },
                    {
                        id: 404,
                        name: "Client Presentation",
                        capacity: 10,
                        status: "available",
                        equipment: ["Premium Display", "Mood Lighting", "Comfortable Seating"],
                        problems: []
                    }
                ]
            },
            {
                id: 5,
                name: "First Floor",
                number: 1,
                description: "Marketing, Content Creation",
                rooms: [
                    {
                        id: 501,
                        name: "Content Studio",
                        capacity: 15,
                        status: "available",
                        equipment: ["Recording Equipment", "Green Screen", "Lighting Kit"],
                        problems: []
                    },
                    {
                        id: 502,
                        name: "Podcast Room",
                        capacity: 4,
                        status: "occupied",
                        equipment: ["Professional Microphones", "Acoustic Treatment", "Mixing Board"],
                        problems: []
                    },
                    {
                        id: 503,
                        name: "Marketing War Room",
                        capacity: 12,
                        status: "maintenance",
                        equipment: ["Multiple Screens", "Campaign Planning Tools", "Analytics Displays"],
                        problems: [
                            {
                                type: "Network",
                                description: "Internet speed below required threshold",
                                priority: "Medium",
                                reportedAt: "2024-01-15"
                            },
                            {
                                type: "Equipment",
                                description: "One monitor flickering",
                                priority: "Low",
                                reportedAt: "2024-01-14"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Building B3",
        address: "789 Server Lane, Palo Alto, CA",
        coordinates: [37.7649, -122.4294],
        floors: [
            {
                id: 6,
                name: "Ground Floor",
                number: 0,
                description: "Server Operations, Network Operations Center",
                rooms: [
                    {
                        id: 601,
                        name: "Network Operations Center",
                        capacity: 20,
                        status: "occupied",
                        equipment: ["Server Monitoring", "Network Displays", "24/7 Workstations"],
                        problems: []
                    },
                    {
                        id: 602,
                        name: "Server Room A",
                        capacity: 5,
                        status: "maintenance",
                        equipment: ["Climate Control", "Backup Power", "Fire Suppression"],
                        problems: [
                            {
                                type: "Climate",
                                description: "Temperature running higher than optimal",
                                priority: "Critical",
                                reportedAt: "2024-01-16"
                            },
                            {
                                type: "Equipment",
                                description: "Backup generator needs servicing",
                                priority: "High",
                                reportedAt: "2024-01-15"
                            }
                        ]
                    },
                    {
                        id: 603,
                        name: "Security Control",
                        capacity: 6,
                        status: "occupied",
                        equipment: ["Security Monitors", "Access Control", "Communication Systems"],
                        problems: []
                    },
                    {
                        id: 604,
                        name: "Equipment Storage",
                        capacity: 3,
                        status: "available",
                        equipment: ["Spare Hardware", "Tools", "Testing Equipment"],
                        problems: []
                    }
                ]
            }
        ]
    }
];

// Status configurations
const statusConfig = {
    available: {
        label: "Available",
        color: "green",
        class: "available"
    },
    occupied: {
        label: "Occupied",
        color: "red",
        class: "occupied"
    },
    maintenance: {
        label: "Maintenance",
        color: "orange",
        class: "maintenance"
    }
};

// Priority configurations for problems
const priorityConfig = {
    Critical: { color: "#e74c3c", urgency: 4 },
    High: { color: "#f39c12", urgency: 3 },
    Medium: { color: "#f1c40f", urgency: 2 },
    Low: { color: "#95a5a6", urgency: 1 }
};