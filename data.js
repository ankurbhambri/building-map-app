// Sample data for the building map application

const buildingsData = [
    {
        id: 1,
        name: "Microsoft Hyderabad Campus - Building B1",
        address: "Building B1, Microsoft India Development Center, Gachibowli, Hyderabad, Telangana 500032, India",
        coordinates: [17.4241, 78.3872], // Main building coordinates
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                number: 0,
                description: "Reception, Lobby, Main Cafeteria, Security",
                rooms: [
                    {
                        id: 101,
                        name: "Godavari Conference Hall",
                        capacity: 100,
                        status: "available",
                        equipment: ["Projector", "Video Conference", "Whiteboard", "Sound System", "Smart TV"],
                        problems: []
                    },
                    {
                        id: 102,
                        name: "Krishna Meeting Room",
                        capacity: 12,
                        status: "occupied",
                        equipment: ["TV Screen", "Conference Phone", "Whiteboard"],
                        problems: []
                    },
                    {
                        id: 103,
                        name: "Tungabhadra Room",
                        capacity: 8,
                        status: "available",
                        equipment: ["Smart TV", "Video Conference"],
                        problems: []
                    }
                ]
            },
            {
                id: 2,
                name: "First Floor",
                number: 1,
                description: "Executive Offices, Client Meeting Rooms",
                rooms: [
                    {
                        id: 201,
                        name: "Kaveri Conference Room",
                        capacity: 20,
                        status: "available",
                        equipment: ["Projector", "Video Conference", "Whiteboard"],
                        problems: []
                    },
                    {
                        id: 202,
                        name: "Narmada Meeting Room",
                        capacity: 15,
                        status: "available",
                        equipment: ["Smart TV", "Conference Phone", "Digital Whiteboard"],
                        problems: []
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Microsoft Hyderabad Campus - Building B2",
        address: "Building B2, Microsoft India Development Center, Gachibowli, Hyderabad, Telangana 500032, India",
        coordinates: [17.4245, 78.3875], // Slightly offset coordinates for B2
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                number: 0,
                description: "Development Teams, Open Workspace",
                rooms: [
                    {
                        id: 101,
                        name: "Yamuna Conference Room",
                        capacity: 50,
                        status: "available",
                        equipment: ["Large Smart TV", "Video Conference", "Sound System"],
                        problems: []
                    },
                    {
                        id: 102,
                        name: "Saraswati Meeting Room",
                        capacity: 8,
                        status: "maintenance",
                        equipment: ["TV Screen", "Conference Phone"],
                        problems: [
                            {
                                type: "Equipment",
                                description: "Video conference system not working",
                                priority: "High",
                                reportedAt: "2024-01-15"
                            }
                        ]
                    },
                    {
                        id: 103,
                        name: "Chenab Huddle Room",
                        capacity: 4,
                        status: "available",
                        equipment: ["Smart TV", "Wireless presentation"],
                        problems: []
                    }
                ]
            },
            {
                id: 2,
                name: "First Floor",
                number: 1,
                description: "Product Teams, Innovation Labs",
                rooms: [
                    {
                        id: 201,
                        name: "Ravi Innovation Lab",
                        capacity: 30,
                        status: "available",
                        equipment: ["Multiple Monitors", "Development Hardware", "Whiteboard"],
                        problems: []
                    },
                    {
                        id: 202,
                        name: "Sutlej Collaboration Room",
                        capacity: 12,
                        status: "occupied",
                        equipment: ["Interactive Display", "Video Conference"],
                        problems: []
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Microsoft Hyderabad Campus - Building B3",
        address: "Building B3, Microsoft India Development Center, Gachibowli, Hyderabad, Telangana 500032, India",
        coordinates: [17.4238, 78.3875], // Offset coordinates for B3
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                number: 0,
                description: "Training Centers, Learning Spaces",
                rooms: [
                    {
                        id: 101,
                        name: "Indus Training Center",
                        capacity: 80,
                        status: "available",
                        equipment: ["Multiple Projectors", "Sound System", "Interactive Whiteboards"],
                        problems: []
                    },
                    {
                        id: 102,
                        name: "Beas Learning Room",
                        capacity: 25,
                        status: "available",
                        equipment: ["Smart TV", "Video Conference", "Presentation Equipment"],
                        problems: []
                    },
                    {
                        id: 103,
                        name: "Jhelum Workshop Room",
                        capacity: 15,
                        status: "occupied",
                        equipment: ["Workshop Tools", "Presentation Screen"],
                        problems: []
                    }
                ]
            },
            {
                id: 2,
                name: "First Floor",
                number: 1,
                description: "Support Teams, IT Services",
                rooms: [
                    {
                        id: 201,
                        name: "Tapti Support Center",
                        capacity: 20,
                        status: "available",
                        equipment: ["Multiple Screens", "Communication Systems"],
                        problems: []
                    },
                    {
                        id: 202,
                        name: "Mahanadi IT Room",
                        capacity: 10,
                        status: "available",
                        equipment: ["Server Access", "Monitoring Equipment"],
                        problems: []
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Microsoft Hyderabad Campus - Building B4",
        address: "Building B4, Microsoft India Development Center, Gachibowli, Hyderabad, Telangana 500032, India",
        coordinates: [17.4244, 78.3869], // Offset coordinates for B4
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                number: 0,
                description: "Recreation, Wellness, Secondary Cafeteria",
                rooms: [
                    {
                        id: 101,
                        name: "Ganga Wellness Center",
                        capacity: 40,
                        status: "available",
                        equipment: ["Fitness Equipment", "Relaxation Area"],
                        problems: []
                    },
                    {
                        id: 102,
                        name: "Cauvery Recreation Room",
                        capacity: 20,
                        status: "available",
                        equipment: ["Gaming Consoles", "Entertainment Systems"],
                        problems: []
                    },
                    {
                        id: 103,
                        name: "Brahmaputra Cafeteria",
                        capacity: 60,
                        status: "available",
                        equipment: ["Kitchen Facilities", "Dining Area"],
                        problems: []
                    }
                ]
            },
            {
                id: 2,
                name: "First Floor",
                number: 1,
                description: "Event Spaces, Large Meeting Halls",
                rooms: [
                    {
                        id: 201,
                        name: "Nerbadda Event Hall",
                        capacity: 150,
                        status: "available",
                        equipment: ["Stage Setup", "Professional Sound System", "Lighting", "Video Walls"],
                        problems: []
                    },
                    {
                        id: 202,
                        name: "Pennar Auditorium",
                        capacity: 200,
                        status: "available",
                        equipment: ["Theater Seating", "Professional AV Setup", "Live Streaming"],
                        problems: []
                    }
                ]
            }
        ]
    },
    {
        id: 5,
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

// Dummy engineer data for dispatch system
const engineersData = [
    {
        id: 1,
        name: "John Smith",
        initials: "JS",
        specialty: "Equipment",
        experience: "5 years",
        status: "available",
        phone: "+1 (555) 123-4567",
        email: "john.smith@company.com",
        currentLocation: "Building B1 - Floor 2",
        estimatedArrival: "15-20 minutes"
    },
    {
        id: 2,
        name: "Sarah Chen",
        initials: "SC",
        specialty: "Network",
        experience: "7 years",
        status: "available",
        phone: "+1 (555) 234-5678",
        email: "sarah.chen@company.com",
        currentLocation: "Building B3 - Server Room",
        estimatedArrival: "10-15 minutes"
    },
    {
        id: 3,
        name: "Mike Johnson",
        initials: "MJ",
        specialty: "Climate",
        experience: "8 years",
        status: "available",
        phone: "+1 (555) 345-6789",
        email: "mike.johnson@company.com",
        currentLocation: "Building B2 - Maintenance",
        estimatedArrival: "20-25 minutes"
    },
    {
        id: 4,
        name: "Lisa Wong",
        initials: "LW",
        specialty: "Security",
        experience: "6 years",
        status: "busy",
        phone: "+1 (555) 456-7890",
        email: "lisa.wong@company.com",
        currentLocation: "Building B1 - Security Office",
        estimatedArrival: "45-60 minutes"
    },
    {
        id: 5,
        name: "David Brown",
        initials: "DB",
        specialty: "Facility",
        experience: "10 years",
        status: "available",
        phone: "+1 (555) 567-8901",
        email: "david.brown@company.com",
        currentLocation: "Main Office",
        estimatedArrival: "30-40 minutes"
    }
];

// Function to get best available engineer for a problem type
function getAvailableEngineer(problemType = "Equipment") {
    // First try to find an available engineer with matching specialty
    let engineer = engineersData.find(eng => 
        eng.specialty === problemType && eng.status === "available"
    );
    
    // If no specialist available, get any available engineer
    if (!engineer) {
        engineer = engineersData.find(eng => eng.status === "available");
    }
    
    // If all busy, get the least busy engineer
    if (!engineer) {
        engineer = engineersData.find(eng => eng.status === "busy");
    }
    
    return engineer || engineersData[0]; // Fallback to first engineer
}