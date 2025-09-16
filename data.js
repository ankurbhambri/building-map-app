// Sample data for the building map application

// Region configurations
const regionsData = {
    hyderabad: {
        name: "Hyderabad",
        country: "India",
        center: [17.4241, 78.3872],
        zoom: 16,
        description: "Microsoft India Development Center - Hyderabad"
    },
    bangalore: {
        name: "Bangalore",
        country: "India", 
        center: [12.9716, 77.5946],
        zoom: 16,
        description: "Microsoft India Development Center - Bangalore"
    },
    noida: {
        name: "Noida",
        country: "India",
        center: [28.5355, 77.3910],
        zoom: 16,
        description: "Microsoft India Development Center - Noida"
    },
    redmond: {
        name: "Redmond",
        country: "USA",
        center: [47.6397, -122.1281],
        zoom: 15,
        description: "Microsoft Headquarters Campus - Redmond"
    }
};

const buildingsData = [
    // HYDERABAD CAMPUS
    {
        id: 1,
        region: "hyderabad",
        name: "Microsoft Hyderabad Campus - Building B1",
        address: "Building B1, Microsoft India Development Center, Gachibowli, Hyderabad, Telangana 500032, India",
        coordinates: [17.4241, 78.3872],
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
                    },
                    {
                        id: 104,
                        name: "Reception Desk",
                        capacity: 4,
                        status: "available",
                        equipment: ["Reception Counter", "Visitor Management System"],
                        problems: []
                    },
                    {
                        id: 105,
                        name: "Main Cafeteria",
                        capacity: 200,
                        status: "available",
                        equipment: ["Kitchen", "Dining Tables", "Coffee Machines", "Vending Machines"],
                        problems: []
                    },
                    {
                        id: 106,
                        name: "Huddle Room Alpha",
                        capacity: 4,
                        status: "available",
                        equipment: ["Smart Display", "Wireless Sharing"],
                        problems: []
                    },
                    {
                        id: 107,
                        name: "Phone Booth 1",
                        capacity: 1,
                        status: "available",
                        equipment: ["Soundproofing", "Phone", "Small Desk"],
                        problems: []
                    },
                    {
                        id: 108,
                        name: "Phone Booth 2",
                        capacity: 1,
                        status: "occupied",
                        equipment: ["Soundproofing", "Phone", "Small Desk"],
                        problems: []
                    }
                ]
            },
            {
                id: 2,
                name: "First Floor",
                number: 1,
                description: "Executive Offices, Client Meeting Rooms, Innovation Labs",
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
                    },
                    {
                        id: 203,
                        name: "Innovation Lab - AI",
                        capacity: 25,
                        status: "available",
                        equipment: ["High-Performance Workstations", "AI Hardware", "Multiple Monitors"],
                        problems: []
                    },
                    {
                        id: 204,
                        name: "Executive Boardroom",
                        capacity: 16,
                        status: "available",
                        equipment: ["4K Video Wall", "Premium Audio", "Catering Setup"],
                        problems: []
                    },
                    {
                        id: 205,
                        name: "Wellness Room",
                        capacity: 8,
                        status: "available",
                        equipment: ["Meditation Cushions", "Yoga Mats", "Relaxation Lighting"],
                        problems: []
                    },
                    {
                        id: 206,
                        name: "Collaboration Space",
                        capacity: 12,
                        status: "occupied",
                        equipment: ["Moveable Furniture", "Writable Walls", "Standing Desks"],
                        problems: []
                    }
                ]
            },
            {
                id: 3,
                name: "Second Floor",
                number: 2,
                description: "Development Teams, Open Workspaces",
                rooms: [
                    {
                        id: 301,
                        name: "Dev Team Room Alpha",
                        capacity: 30,
                        status: "available",
                        equipment: ["Development Workstations", "Large Monitors", "Code Review Displays"],
                        problems: []
                    },
                    {
                        id: 302,
                        name: "Dev Team Room Beta",
                        capacity: 30,
                        status: "occupied",
                        equipment: ["Development Workstations", "Large Monitors", "Code Review Displays"],
                        problems: []
                    },
                    {
                        id: 303,
                        name: "Game Development Lab",
                        capacity: 20,
                        status: "available",
                        equipment: ["Gaming Rigs", "VR Setup", "Game Testing Equipment"],
                        problems: []
                    },
                    {
                        id: 304,
                        name: "Printer & Copy Center",
                        capacity: 5,
                        status: "available",
                        equipment: ["High-Speed Printers", "Scanners", "Paper Supplies"],
                        problems: []
                    }
                ]
            }
        ]
    },
    // Additional Hyderabad buildings...
    {
        id: 2,
        region: "hyderabad",
        name: "Microsoft Hyderabad Campus - Building B2",
        address: "Building B2, Microsoft India Development Center, Gachibowli, Hyderabad, Telangana 500032, India",
        coordinates: [17.4245, 78.3875],
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
                    },
                    {
                        id: 104,
                        name: "Micro Kitchen",
                        capacity: 10,
                        status: "available",
                        equipment: ["Coffee Machine", "Microwave", "Refrigerator", "Snack Station"],
                        problems: []
                    }
                ]
            }
        ]
    },

    // BANGALORE CAMPUS
    {
        id: 11,
        region: "bangalore",
        name: "Microsoft Bangalore - Embassy Golf Links",
        address: "Embassy Golf Links Business Park, Intermediate Ring Road, Bangalore, Karnataka 560071, India",
        coordinates: [12.9716, 77.5946],
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                number: 0,
                description: "Reception, Main Lobby, Visitor Areas",
                rooms: [
                    {
                        id: 1101,
                        name: "Bengaluru Innovation Hub",
                        capacity: 80,
                        status: "available",
                        equipment: ["Interactive Displays", "Collaboration Tools", "Innovation Equipment"],
                        problems: []
                    },
                    {
                        id: 1102,
                        name: "Mysore Conference Hall",
                        capacity: 60,
                        status: "available",
                        equipment: ["Professional AV", "Video Conference", "Stage Setup"],
                        problems: []
                    },
                    {
                        id: 1103,
                        name: "Hampi Meeting Room",
                        capacity: 12,
                        status: "occupied",
                        equipment: ["Smart Board", "Video Conference"],
                        problems: []
                    },
                    {
                        id: 1104,
                        name: "Coorg Huddle Space",
                        capacity: 6,
                        status: "available",
                        equipment: ["Wireless Display", "Comfortable Seating"],
                        problems: []
                    },
                    {
                        id: 1105,
                        name: "Garden City Cafeteria",
                        capacity: 150,
                        status: "available",
                        equipment: ["Full Kitchen", "Outdoor Seating", "Coffee Bar"],
                        problems: []
                    },
                    {
                        id: 1106,
                        name: "Wellness Center",
                        capacity: 20,
                        status: "available",
                        equipment: ["Fitness Equipment", "Meditation Area", "Massage Chairs"],
                        problems: []
                    }
                ]
            },
            {
                id: 2,
                name: "First Floor",
                number: 1,
                description: "Engineering Teams, Cloud Services",
                rooms: [
                    {
                        id: 1201,
                        name: "Azure Team Room",
                        capacity: 40,
                        status: "available",
                        equipment: ["Cloud Workstations", "Multiple Monitors", "Server Access"],
                        problems: []
                    },
                    {
                        id: 1202,
                        name: "Udupi Collaboration Room",
                        capacity: 16,
                        status: "available",
                        equipment: ["Interactive Whiteboard", "Video Conference"],
                        problems: []
                    },
                    {
                        id: 1203,
                        name: "Mangalore Design Studio",
                        capacity: 25,
                        status: "occupied",
                        equipment: ["Design Workstations", "Color-Accurate Monitors", "Drawing Tablets"],
                        problems: []
                    },
                    {
                        id: 1204,
                        name: "Think Tank",
                        capacity: 8,
                        status: "available",
                        equipment: ["Brainstorming Tools", "Writable Surfaces", "Creative Supplies"],
                        problems: []
                    }
                ]
            }
        ]
    },
    {
        id: 12,
        region: "bangalore",
        name: "Microsoft Bangalore - RMZ Ecoworld",
        address: "RMZ Ecoworld, Sarjapur Road, Bangalore, Karnataka 560103, India",
        coordinates: [12.9698, 77.6015],
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                number: 0,
                description: "Customer Experience Center, Training Facilities",
                rooms: [
                    {
                        id: 1301,
                        name: "Customer Experience Center",
                        capacity: 100,
                        status: "available",
                        equipment: ["Demo Stations", "Interactive Displays", "Product Showcases"],
                        problems: []
                    },
                    {
                        id: 1302,
                        name: "Training Center Alpha",
                        capacity: 50,
                        status: "available",
                        equipment: ["Training Workstations", "Projectors", "Learning Management"],
                        problems: []
                    },
                    {
                        id: 1303,
                        name: "Hassan Meeting Room",
                        capacity: 14,
                        status: "maintenance",
                        equipment: ["Video Conference", "Presentation Equipment"],
                        problems: [
                            {
                                type: "Network",
                                description: "Internet connectivity issues",
                                priority: "High",
                                reportedAt: "2024-01-16"
                            }
                        ]
                    }
                ]
            }
        ]
    },

    // NOIDA CAMPUS
    {
        id: 21,
        region: "noida",
        name: "Microsoft Noida - Advant Navis",
        address: "Advant Navis Business Park, Sector 142, Noida, Uttar Pradesh 201305, India",
        coordinates: [28.5355, 77.3910],
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                number: 0,
                description: "Reception, Customer Centers, Support Teams",
                rooms: [
                    {
                        id: 2101,
                        name: "Yamuna Auditorium",
                        capacity: 200,
                        status: "available",
                        equipment: ["Professional Stage", "Sound System", "Live Streaming", "Theater Seating"],
                        problems: []
                    },
                    {
                        id: 2102,
                        name: "Ganga Conference Hall",
                        capacity: 80,
                        status: "available",
                        equipment: ["Video Walls", "Premium Audio", "Conference Setup"],
                        problems: []
                    },
                    {
                        id: 2103,
                        name: "Agra Meeting Room",
                        capacity: 12,
                        status: "occupied",
                        equipment: ["Smart Board", "Video Conference"],
                        problems: []
                    },
                    {
                        id: 2104,
                        name: "Lucknow Huddle Room",
                        capacity: 6,
                        status: "available",
                        equipment: ["Wireless Display", "Comfortable Seating"],
                        problems: []
                    },
                    {
                        id: 2105,
                        name: "Support Center NOC",
                        capacity: 30,
                        status: "occupied",
                        equipment: ["Monitoring Displays", "Communication Systems", "24/7 Workstations"],
                        problems: []
                    },
                    {
                        id: 2106,
                        name: "Employee Lounge",
                        capacity: 40,
                        status: "available",
                        equipment: ["Comfortable Seating", "Gaming Area", "Coffee Station"],
                        problems: []
                    }
                ]
            },
            {
                id: 2,
                name: "First Floor",
                number: 1,
                description: "Engineering, Sales, Marketing Teams",
                rooms: [
                    {
                        id: 2201,
                        name: "Engineering Lab",
                        capacity: 35,
                        status: "available",
                        equipment: ["Development Hardware", "Testing Equipment", "Prototype Stations"],
                        problems: []
                    },
                    {
                        id: 2202,
                        name: "Varanasi War Room",
                        capacity: 20,
                        status: "available",
                        equipment: ["Multiple Screens", "Analytics Tools", "Collaboration Space"],
                        problems: []
                    },
                    {
                        id: 2203,
                        name: "Delhi Executive Room",
                        capacity: 18,
                        status: "maintenance",
                        equipment: ["Premium Furniture", "Executive Setup", "Video Conference"],
                        problems: [
                            {
                                type: "Climate",
                                description: "Air conditioning not working properly",
                                priority: "Medium",
                                reportedAt: "2024-01-15"
                            }
                        ]
                    }
                ]
            }
        ]
    },

    // REDMOND CAMPUS (USA)
    {
        id: 31,
        region: "redmond",
        name: "Microsoft Building 92 - Executive Briefing Center",
        address: "1 Microsoft Way, Redmond, WA 98052, USA",
        coordinates: [47.6397, -122.1281],
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                number: 0,
                description: "Executive Areas, Customer Briefing Centers",
                rooms: [
                    {
                        id: 3101,
                        name: "Executive Boardroom",
                        capacity: 24,
                        status: "available",
                        equipment: ["8K Display Wall", "Premium Audio", "Executive Furniture", "Catering Kitchen"],
                        problems: []
                    },
                    {
                        id: 3102,
                        name: "Customer Briefing Center",
                        capacity: 50,
                        status: "occupied",
                        equipment: ["Interactive Demos", "Product Displays", "Presentation Theater"],
                        problems: []
                    },
                    {
                        id: 3103,
                        name: "Innovation Showcase",
                        capacity: 100,
                        status: "available",
                        equipment: ["HoloLens Demos", "AI Demonstrations", "Future Tech Displays"],
                        problems: []
                    },
                    {
                        id: 3104,
                        name: "Seattle Conference Room",
                        capacity: 16,
                        status: "available",
                        equipment: ["4K Video Conference", "Digital Whiteboard", "Premium Setup"],
                        problems: []
                    },
                    {
                        id: 3105,
                        name: "Puget Sound Lounge",
                        capacity: 30,
                        status: "available",
                        equipment: ["Comfortable Seating", "Coffee Bar", "Casual Meeting Area"],
                        problems: []
                    }
                ]
            },
            {
                id: 2,
                name: "First Floor",
                number: 1,
                description: "Strategy, Leadership, Advanced Technology",
                rooms: [
                    {
                        id: 3201,
                        name: "Strategy War Room",
                        capacity: 20,
                        status: "available",
                        equipment: ["Data Visualization", "Analytics Displays", "Secure Communications"],
                        problems: []
                    },
                    {
                        id: 3202,
                        name: "Leadership Meeting Room",
                        capacity: 12,
                        status: "occupied",
                        equipment: ["Executive Setup", "Secure Video", "Premium Furnishing"],
                        problems: []
                    },
                    {
                        id: 3203,
                        name: "Future Technology Lab",
                        capacity: 25,
                        status: "available",
                        equipment: ["Research Equipment", "Prototype Hardware", "Advanced Computing"],
                        problems: []
                    }
                ]
            }
        ]
    },
    {
        id: 32,
        region: "redmond",
        name: "Microsoft Building 25 - Research & Development",
        address: "1 Microsoft Way, Redmond, WA 98052, USA",
        coordinates: [47.6420, -122.1250],
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                number: 0,
                description: "Research Labs, Innovation Centers",
                rooms: [
                    {
                        id: 3301,
                        name: "AI Research Lab",
                        capacity: 40,
                        status: "available",
                        equipment: ["GPU Clusters", "AI Hardware", "Research Workstations"],
                        problems: []
                    },
                    {
                        id: 3302,
                        name: "Quantum Computing Lab",
                        capacity: 15,
                        status: "maintenance",
                        equipment: ["Quantum Hardware", "Specialized Equipment", "Clean Room"],
                        problems: [
                            {
                                type: "Equipment",
                                description: "Quantum system calibration needed",
                                priority: "Critical",
                                reportedAt: "2024-01-16"
                            }
                        ]
                    },
                    {
                        id: 3303,
                        name: "Microsoft Research Café",
                        capacity: 60,
                        status: "available",
                        equipment: ["Casual Seating", "Collaboration Spaces", "Research Library"],
                        problems: []
                    },
                    {
                        id: 3304,
                        name: "Innovation Workshop",
                        capacity: 20,
                        status: "available",
                        equipment: ["Maker Space", "3D Printers", "Electronics Lab"],
                        problems: []
                    }
                ]
            },
            {
                id: 2,
                name: "First Floor",
                number: 1,
                description: "Advanced Research, Think Tanks",
                rooms: [
                    {
                        id: 3401,
                        name: "Cloud Architecture Lab",
                        capacity: 30,
                        status: "occupied",
                        equipment: ["Server Hardware", "Network Equipment", "Cloud Infrastructure"],
                        problems: []
                    },
                    {
                        id: 3402,
                        name: "Redmond Think Tank",
                        capacity: 10,
                        status: "available",
                        equipment: ["Brainstorming Tools", "Ideation Space", "Creative Equipment"],
                        problems: []
                    },
                    {
                        id: 3403,
                        name: "Security Research Center",
                        capacity: 25,
                        status: "available",
                        equipment: ["Security Hardware", "Testing Environment", "Isolated Networks"],
                        problems: []
                    }
                ]
            }
        ]
    },
    {
        id: 33,
        region: "redmond",
        name: "Microsoft Building 17 - The Commons",
        address: "1 Microsoft Way, Redmond, WA 98052, USA",
        coordinates: [47.6385, -122.1295],
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                number: 0,
                description: "Central Hub, Dining, Social Spaces",
                rooms: [
                    {
                        id: 3501,
                        name: "Central Commons",
                        capacity: 300,
                        status: "available",
                        equipment: ["Main Dining", "Multiple Food Stations", "Social Seating"],
                        problems: []
                    },
                    {
                        id: 3502,
                        name: "Starbucks Coffee",
                        capacity: 80,
                        status: "available",
                        equipment: ["Coffee Bar", "Casual Seating", "Meeting Spots"],
                        problems: []
                    },
                    {
                        id: 3503,
                        name: "Company Store",
                        capacity: 50,
                        status: "available",
                        equipment: ["Microsoft Merchandise", "Gift Shop", "Visitor Store"],
                        problems: []
                    },
                    {
                        id: 3504,
                        name: "Event Center",
                        capacity: 500,
                        status: "available",
                        equipment: ["Large Stage", "Professional AV", "Event Catering"],
                        problems: []
                    }
                ]
            }
        ]
    }
];

// Original existing data structure maintained...

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