// Sample data for the building map application

// Region configurations with campus support
const regionsData = {
    hyderabad: {
        name: "Hyderabad",
        country: "India",
        center: [17.4241, 78.3872],
        zoom: 16,
        description: "Microsoft India Development Center - Hyderabad",
        campuses: [
            {
                id: "hyderabad-microsoft-campus",
                name: "Microsoft Campus",
                description: "Main Microsoft Development Center",
                center: [17.4243, 78.3874],
                zoom: 17
            },
            {
                id: "hyderabad-phoenix-standalone",
                name: "Phoenix Building",
                description: "Standalone Office Building",
                center: [17.4478, 78.3745],
                zoom: 18
            }
        ]
    },
    bangalore: {
        name: "Bangalore",
        country: "India", 
        center: [12.9716, 77.5946],
        zoom: 16,
        description: "Microsoft India Development Center - Bangalore",
        campuses: [
            {
                id: "bangalore-prestige-ferns",
                name: "Prestige Ferns Galaxy",
                description: "Prestige Ferns Galaxy Building",
                center: [12.9716, 77.5946],
                zoom: 17
            },
            {
                id: "bangalore-luxor-north",
                name: "Microsoft Luxor North Tower",
                description: "Microsoft Luxor North Tower Building",
                center: [12.9698, 77.6015],
                zoom: 17
            }
        ]
    },
    noida: {
        name: "Noida",
        country: "India",
        center: [28.5355, 77.3910],
        zoom: 16,
        description: "Microsoft India Development Center - Noida",
        campuses: [
            {
                id: "noida-kp-towers",
                name: "KP Towers",
                description: "KP Towers Complex",
                center: [28.5355, 77.3910],
                zoom: 17
            },
            {
                id: "noida-sovereign",
                name: "Noida Sovereign",
                description: "Noida Sovereign Building",
                center: [28.5370, 77.3920],
                zoom: 18
            }
        ]
    },
    redmond: {
        name: "Redmond",
        country: "USA",
        center: [47.6397, -122.1281],
        zoom: 15,
        description: "Microsoft Headquarters Campus - Redmond",
        campuses: [
            {
                id: "redmond-main-campus",
                name: "Main Campus",
                description: "Microsoft Headquarters",
                center: [47.6397, -122.1281],
                zoom: 16
            }
        ]
    }
};

const buildingsData = [
    // HYDERABAD CAMPUS
    {
        id: 1,
        region: "hyderabad",
        campus: "hyderabad-microsoft-campus",
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
                        amenities: {
                            audioVisual: ["4K Projector", "Dolby Sound System", "Wireless Microphones", "75-inch Smart TV", "Video Conferencing Camera"],
                            furniture: ["Executive Chairs (100)", "Conference Table (20-person)", "Podium", "Side Tables"],
                            technology: ["WiFi 6", "USB-C Ports", "Wireless Presentation", "Smart Board", "Room Control Panel"],
                            accessibility: ["Wheelchair Accessible", "Hearing Loop", "Emergency Exits"],
                            catering: ["Coffee Station", "Water Dispenser", "Catering Setup Area"],
                            lighting: ["Dimmable LED", "Natural Light", "Presentation Mode"],
                            climate: ["Individual AC Control", "Air Purifier"]
                        },
                        roomType: "Large Conference Hall",
                        floorSpace: "2500 sq ft",
                        problems: []
                    },
                    {
                        id: 102,
                        name: "Krishna Meeting Room",
                        capacity: 12,
                        status: "occupied",
                        equipment: ["TV Screen", "Conference Phone", "Whiteboard"],
                        amenities: {
                            audioVisual: ["55-inch 4K Display", "Conference Speakerphone", "Wireless Presentation"],
                            furniture: ["Ergonomic Chairs (12)", "Oval Conference Table", "Storage Cabinet"],
                            technology: ["WiFi 6", "HDMI Ports", "USB Charging", "Room Booking Display"],
                            accessibility: ["Wheelchair Accessible"],
                            lighting: ["LED Panel Lighting", "Dimmer Controls"],
                            climate: ["Centralized AC", "Temperature Control"]
                        },
                        roomType: "Medium Meeting Room",
                        floorSpace: "400 sq ft",
                        problems: []
                    },
                    {
                        id: 103,
                        name: "Tungabhadra Room",
                        capacity: 8,
                        status: "available",
                        equipment: ["Smart TV", "Video Conference"],
                        amenities: {
                            audioVisual: ["65-inch Smart TV", "Built-in Camera", "Noise Cancellation"],
                            furniture: ["Comfortable Chairs (8)", "Round Table", "Whiteboard on Wheels"],
                            technology: ["WiFi 6", "Wireless Screen Sharing", "Power Outlets"],
                            accessibility: ["Step-free Access"],
                            lighting: ["Natural Light", "Adjustable Blinds"],
                            climate: ["Individual AC Unit"]
                        },
                        roomType: "Small Meeting Room",
                        floorSpace: "250 sq ft",
                        problems: []
                    },
                    {
                        id: 104,
                        name: "Reception Desk",
                        capacity: 4,
                        status: "available",
                        equipment: ["Reception Counter", "Visitor Management System"],
                        amenities: {
                            technology: ["Visitor Management Kiosk", "Badge Printer", "Security Camera", "Intercom System"],
                            furniture: ["Reception Desk", "Waiting Chairs", "Magazine Rack", "Coat Rack"],
                            accessibility: ["Wheelchair Accessible Counter", "Low-Height Section"],
                            lighting: ["Bright LED", "Welcome Display"],
                            security: ["Access Control", "Emergency Button"]
                        },
                        roomType: "Reception Area",
                        floorSpace: "200 sq ft",
                        problems: []
                    },
                    {
                        id: 105,
                        name: "Main Cafeteria",
                        capacity: 200,
                        status: "available",
                        equipment: ["Kitchen", "Dining Tables", "Coffee Machines", "Vending Machines"],
                        amenities: {
                            dining: ["Seating for 200", "High Tables", "Regular Tables", "Outdoor Seating"],
                            kitchen: ["Full Commercial Kitchen", "Microwave Stations", "Refrigerators"],
                            beverages: ["Espresso Machine", "Coffee Stations", "Tea Station", "Juice Dispensers"],
                            technology: ["Free WiFi", "Charging Stations", "Digital Menu Boards"],
                            accessibility: ["Wheelchair Accessible", "Accessible Restrooms"],
                            entertainment: ["Large TV Screens", "Background Music System"],
                            climate: ["Central AC", "Exhaust System"]
                        },
                        roomType: "Cafeteria",
                        floorSpace: "3000 sq ft",
                        problems: []
                    },
                    {
                        id: 106,
                        name: "Huddle Room Alpha",
                        capacity: 4,
                        status: "available",
                        equipment: ["Smart Display", "Wireless Sharing"],
                        amenities: {
                            audioVisual: ["32-inch Touch Display", "Built-in Speakers", "Wireless HDMI"],
                            furniture: ["Standing Table", "Bar Stools (4)", "Mobile Whiteboard"],
                            technology: ["WiFi 6", "USB-C Hub", "Quick Connect"],
                            lighting: ["Bright LED", "Motion Sensor"],
                            climate: ["Ventilation System"],
                            style: ["Modern Design", "Glass Walls", "Colorful Decor"]
                        },
                        roomType: "Huddle Space",
                        floorSpace: "80 sq ft",
                        problems: []
                    },
                    {
                        id: 107,
                        name: "Phone Booth 1",
                        capacity: 1,
                        status: "available",
                        equipment: ["Soundproofing", "Phone", "Small Desk"],
                        amenities: {
                            acoustic: ["Sound Insulation", "Noise Cancellation", "Quiet Ventilation"],
                            furniture: ["Adjustable Stool", "Compact Desk", "Personal Shelf"],
                            technology: ["WiFi", "USB Charging", "Desk Lamp"],
                            lighting: ["LED Task Light", "Ambient Lighting"],
                            privacy: ["Frosted Glass", "Lockable Door"],
                            climate: ["Personal Ventilation"]
                        },
                        roomType: "Phone Booth",
                        floorSpace: "25 sq ft",
                        problems: []
                    },
                    {
                        id: 108,
                        name: "Phone Booth 2",
                        capacity: 1,
                        status: "occupied",
                        equipment: ["Soundproofing", "Phone", "Small Desk"],
                        amenities: {
                            acoustic: ["Sound Insulation", "Noise Cancellation", "Quiet Ventilation"],
                            furniture: ["Adjustable Stool", "Compact Desk", "Personal Shelf"],
                            technology: ["WiFi", "USB Charging", "Desk Lamp"],
                            lighting: ["LED Task Light", "Ambient Lighting"],
                            privacy: ["Frosted Glass", "Lockable Door"],
                            climate: ["Personal Ventilation"]
                        },
                        roomType: "Phone Booth",
                        floorSpace: "25 sq ft",
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
                        amenities: {
                            audioVisual: ["Laser Projector 4K", "Surround Sound", "PTZ Camera", "Wireless Mics"],
                            furniture: ["Executive Chairs (20)", "Mahogany Conference Table", "Credenza", "Plants"],
                            technology: ["WiFi 6E", "Presentation Remote", "Room Control Tablet", "Digital Signage"],
                            accessibility: ["Wheelchair Accessible", "Adjustable Table Height"],
                            catering: ["Sideboard", "Water Station", "Coffee Service"],
                            lighting: ["Smart LED", "Daylight Harvesting", "Presentation Modes"],
                            climate: ["Dual Zone AC", "Air Quality Monitor"],
                            privacy: ["Acoustic Panels", "Soundproof Glass"]
                        },
                        roomType: "Executive Conference Room",
                        floorSpace: "600 sq ft",
                        problems: []
                    },
                    {
                        id: 202,
                        name: "Narmada Meeting Room",
                        capacity: 15,
                        status: "available",
                        equipment: ["Smart TV", "Conference Phone", "Digital Whiteboard"],
                        amenities: {
                            audioVisual: ["85-inch Interactive Display", "360° Camera", "Advanced Speakerphone"],
                            furniture: ["Premium Chairs (15)", "Glass Conference Table", "Mobile Storage"],
                            technology: ["WiFi 6E", "Wireless Charging Pads", "Smart Whiteboard", "Tablet Control"],
                            accessibility: ["Step-free Access", "Height Adjustable Elements"],
                            lighting: ["Tunable LED", "Automated Blinds", "Ambient Lighting"],
                            climate: ["Individual Climate Control", "Fresh Air System"],
                            collaboration: ["Digital Annotation", "Cloud Integration", "Multi-device Sharing"]
                        },
                        roomType: "Smart Meeting Room",
                        floorSpace: "450 sq ft",
                        problems: []
                    },
                    {
                        id: 203,
                        name: "Innovation Lab - AI",
                        capacity: 25,
                        status: "available",
                        equipment: ["High-Performance Workstations", "AI Hardware", "Multiple Monitors"],
                        amenities: {
                            technology: ["NVIDIA GPU Cluster", "Quantum Computing Access", "High-Speed Networking", "Cloud Integration"],
                            workstations: ["AI Development Rigs", "Dual 32-inch Monitors", "Mechanical Keyboards", "High-End Mice"],
                            furniture: ["Ergonomic Workstations (25)", "Collaboration Islands", "Whiteboards", "Storage Lockers"],
                            infrastructure: ["High-Power Electrical", "Cooling Systems", "UPS Backup"],
                            accessibility: ["Adjustable Desks", "Ergonomic Support"],
                            collaboration: ["Large Display Walls", "Brainstorming Areas", "Presentation Space"],
                            security: ["Secure Access", "Data Protection", "Monitoring Systems"]
                        },
                        roomType: "Innovation Laboratory",
                        floorSpace: "1200 sq ft",
                        problems: []
                    },
                    {
                        id: 204,
                        name: "Executive Boardroom",
                        capacity: 16,
                        status: "available",
                        equipment: ["4K Video Wall", "Premium Audio", "Catering Setup"],
                        amenities: {
                            audioVisual: ["98-inch Video Wall", "Dolby Atmos Sound", "Professional Cameras", "Lighting Control"],
                            furniture: ["Leather Executive Chairs (16)", "Solid Wood Table", "Sideboard", "Art Pieces"],
                            technology: ["Integrated Controls", "Video Conferencing", "Presentation Systems", "Secure Communications"],
                            catering: ["Built-in Catering Station", "Refrigerated Storage", "China Service", "Glassware"],
                            accessibility: ["Full Accessibility", "Emergency Features"],
                            luxury: ["Premium Materials", "Designer Lighting", "Climate Zones", "Sound Masking"],
                            security: ["Biometric Access", "Privacy Glass", "Secure Networks"]
                        },
                        roomType: "Executive Boardroom",
                        floorSpace: "800 sq ft",
                        problems: []
                    },
                    {
                        id: 205,
                        name: "Wellness Room",
                        capacity: 8,
                        status: "maintenance",
                        equipment: ["Meditation Cushions", "Yoga Mats", "Relaxation Lighting"],
                        amenities: {
                            wellness: ["Meditation Corner", "Yoga Space", "Relaxation Pods", "Essential Oil Diffusers"],
                            furniture: ["Floor Cushions", "Yoga Props", "Massage Chairs", "Relaxation Loungers"],
                            lighting: ["Circadian Lighting", "Dimmer Controls", "Color Therapy", "Natural Light"],
                            audio: ["Sound Therapy", "White Noise", "Nature Sounds", "Meditation Music"],
                            climate: ["Air Purification", "Temperature Control", "Humidity Management"],
                            accessibility: ["Barrier-free Design", "Support Rails"],
                            privacy: ["Quiet Space", "Do Not Disturb Systems"]
                        },
                        roomType: "Wellness Space",
                        floorSpace: "300 sq ft",
                        problems: [
                            {
                                type: "Climate",
                                description: "Air conditioning not working properly",
                                priority: "Medium",
                                reportedAt: "2024-01-14"
                            }
                        ]
                    },
                    {
                        id: 206,
                        name: "Collaboration Space",
                        capacity: 12,
                        status: "maintenance",
                        equipment: ["Moveable Furniture", "Writable Walls", "Standing Desks"],
                        problems: [
                            {
                                type: "Equipment",
                                description: "Interactive whiteboard malfunction",
                                priority: "High",
                                reportedAt: "2024-01-15"
                            }
                        ]
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
                        status: "maintenance",
                        equipment: ["High-Speed Printers", "Scanners", "Paper Supplies"],
                        problems: [
                            {
                                type: "Equipment",
                                description: "Main printer needs servicing",
                                priority: "Low",
                                reportedAt: "2024-01-13"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    

    // BANGALORE CAMPUS
    {
        id: 11,
        region: "bangalore",
        campus: "bangalore-prestige-ferns",
        name: "Prestige Ferns Galaxy",
        address: "Prestige Ferns Galaxy, Bangalore, Karnataka 560071, India",
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
        campus: "bangalore-luxor-north",
        name: "Microsoft Luxor North Tower",
        address: "Microsoft Luxor North Tower, Bangalore, Karnataka 560103, India",
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
        campus: "noida-kp-towers",
        name: "KP Towers - North Block",
        address: "KP Towers, North Block, Sector 142, Noida, Uttar Pradesh 201305, India",
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
                        status: "available",
                        equipment: ["Premium Furniture", "Executive Setup", "Video Conference"],
                        problems: []
                    }
                ]
            }
        ]
    },

    // REDMOND CAMPUS (USA)
    {
        id: 31,
        region: "redmond",
        campus: "redmond-main-campus",
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
                        status: "maintenance",
                        equipment: ["4K Video Conference", "Digital Whiteboard", "Premium Setup"],
                        problems: [
                            {
                                type: "Equipment",
                                description: "Digital whiteboard not responding",
                                priority: "Medium",
                                reportedAt: "2024-01-14"
                            }
                        ]
                    },
                    {
                        id: 3105,
                        name: "Puget Sound Lounge",
                        capacity: 30,
                        status: "maintenance",
                        equipment: ["Comfortable Seating", "Coffee Bar", "Casual Meeting Area"],
                        problems: [
                            {
                                type: "Facility",
                                description: "Coffee machine needs repair",
                                priority: "Low",
                                reportedAt: "2024-01-13"
                            }
                        ]
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
                        status: "maintenance",
                        equipment: ["Data Visualization", "Analytics Displays", "Secure Communications"],
                        problems: [
                            {
                                type: "Network",
                                description: "Secure network connection issues",
                                priority: "High",
                                reportedAt: "2024-01-16"
                            }
                        ]
                    },
                    {
                        id: 3202,
                        name: "Leadership Meeting Room",
                        capacity: 12,
                        status: "maintenance",
                        equipment: ["Executive Setup", "Secure Video", "Premium Furnishing"],
                        problems: [
                            {
                                type: "Equipment",
                                description: "Video conference system upgrade needed",
                                priority: "Medium",
                                reportedAt: "2024-01-15"
                            }
                        ]
                    },
                    {
                        id: 3203,
                        name: "Future Technology Lab",
                        capacity: 25,
                        status: "maintenance",
                        equipment: ["Research Equipment", "Prototype Hardware", "Advanced Computing"],
                        problems: [
                            {
                                type: "Equipment",
                                description: "Prototype hardware requires calibration",
                                priority: "High",
                                reportedAt: "2024-01-15"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 32,
        region: "redmond",
        campus: "redmond-main-campus",
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
                        status: "maintenance",
                        equipment: ["Server Hardware", "Network Equipment", "Cloud Infrastructure"],
                        problems: [
                            {
                                type: "Network",
                                description: "Network infrastructure upgrade in progress",
                                priority: "High",
                                reportedAt: "2024-01-16"
                            }
                        ]
                    },
                    {
                        id: 3402,
                        name: "Redmond Think Tank",
                        capacity: 10,
                        status: "maintenance",
                        equipment: ["Brainstorming Tools", "Ideation Space", "Creative Equipment"],
                        problems: [
                            {
                                type: "Facility",
                                description: "Room renovation in progress",
                                priority: "Medium",
                                reportedAt: "2024-01-14"
                            }
                        ]
                    },
                    {
                        id: 3403,
                        name: "Security Research Center",
                        capacity: 25,
                        status: "maintenance",
                        equipment: ["Security Hardware", "Testing Environment", "Isolated Networks"],
                        problems: [
                            {
                                type: "Security",
                                description: "Security system updates in progress",
                                priority: "Critical",
                                reportedAt: "2024-01-16"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 33,
        region: "redmond",
        campus: "redmond-main-campus",
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
                        status: "maintenance",
                        equipment: ["Large Stage", "Professional AV", "Event Catering"],
                        problems: [
                            {
                                type: "Equipment",
                                description: "Sound system requires professional calibration",
                                priority: "Medium",
                                reportedAt: "2024-01-15"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    // Additional Hyderabad Campus Buildings
    {
        id: "hyderabad-b3",
        name: "Microsoft Hyderabad Campus - Building B3",
        region: "hyderabad",
        campus: "hyderabad-microsoft-campus",
        coordinates: [17.4245, 78.3875],
        address: "Building B3, Microsoft India Development Center, Gachibowli, Hyderabad, Telangana 500032, India",
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                rooms: [
                    {
                        id: 4001,
                        name: "Reception & Visitor Center",
                        capacity: 50,
                        status: "available",
                        equipment: ["Reception Desk", "Visitor Badges", "Security Check"],
                        problems: []
                    },
                    {
                        id: 4002,
                        name: "Innovation Lab",
                        capacity: 40,
                        status: "maintenance",
                        equipment: ["3D Printers", "VR Setup", "Prototyping Tools"],
                        problems: [
                            {
                                type: "Equipment",
                                description: "3D printer requires maintenance",
                                priority: "Medium",
                                reportedAt: "2024-01-18"
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: "Second Floor",
                rooms: [
                    {
                        id: 4101,
                        name: "Open Workspace B3-2A",
                        capacity: 60,
                        status: "occupied",
                        equipment: ["Hot Desks", "Collaboration Zones", "Phone Booths"],
                        problems: []
                    },
                    {
                        id: 4102,
                        name: "Team Room Alpha",
                        capacity: 12,
                        status: "available",
                        equipment: ["Large Display", "Video Conferencing", "Whiteboard"],
                        problems: []
                    }
                ]
            }
        ]
    },
    {
        id: "hyderabad-b4",
        name: "Microsoft Hyderabad Campus - Building B4",
        region: "hyderabad",
        campus: "hyderabad-microsoft-campus",
        coordinates: [17.4247, 78.3877],
        address: "Building B4, Microsoft India Development Center, Gachibowli, Hyderabad, Telangana 500032, India",
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                rooms: [
                    {
                        id: 4201,
                        name: "Cafeteria Extension",
                        capacity: 150,
                        status: "available",
                        equipment: ["Additional Seating", "Food Court", "Coffee Station"],
                        problems: []
                    },
                    {
                        id: 4202,
                        name: "Fitness Center",
                        capacity: 30,
                        status: "available",
                        equipment: ["Gym Equipment", "Yoga Room", "Changing Rooms"],
                        problems: []
                    }
                ]
            },
            {
                id: 2,
                name: "Second Floor",
                rooms: [
                    {
                        id: 4301,
                        name: "Training Center B4",
                        capacity: 80,
                        status: "occupied",
                        equipment: ["Training Pods", "Interactive Displays", "Learning Lab"],
                        problems: []
                    }
                ]
            }
        ]
    },
    {
        id: "hyderabad-b5",
        name: "Phoenix Building",
        region: "hyderabad",
        campus: "hyderabad-phoenix-standalone",
        coordinates: [17.4478, 78.3745],
        address: "Phoenix Building, Financial District, Hyderabad, Telangana 500032, India",
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                rooms: [
                    {
                        id: 4401,
                        name: "Data Center B5",
                        capacity: 10,
                        status: "maintenance",
                        equipment: ["Servers", "Cooling Systems", "Backup Power"],
                        problems: [
                            {
                                type: "Climate",
                                description: "Cooling system efficiency check needed",
                                priority: "High",
                                reportedAt: "2024-01-17"
                            }
                        ]
                    },
                    {
                        id: 4402,
                        name: "Network Operations Center",
                        capacity: 20,
                        status: "occupied",
                        equipment: ["Network Monitors", "Communication Hub", "24/7 Operations"],
                        problems: []
                    }
                ]
            }
        ]
    },
    {
        id: "hyderabad-b6",
        name: "Microsoft Hyderabad Campus - Building B2",
        region: "hyderabad",
        campus: "hyderabad-microsoft-campus",
        coordinates: [17.4243, 78.3873],
        address: "Building B2, Microsoft India Development Center, Gachibowli, Hyderabad, Telangana 500032, India",
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                rooms: [
                    {
                        id: 4501,
                        name: "Customer Briefing Center",
                        capacity: 40,
                        status: "available",
                        equipment: ["Presentation Theater", "Demo Areas", "Customer Lounge"],
                        problems: []
                    }
                ]
            },
            {
                id: 2,
                name: "Second Floor",
                rooms: [
                    {
                        id: 4601,
                        name: "Executive Suites",
                        capacity: 25,
                        status: "available",
                        equipment: ["Executive Offices", "Board Room", "Private Meeting Spaces"],
                        problems: []
                    }
                ]
            }
        ]
    },
    // Phoenix Standalone Building
    {
        id: "phoenix-main",
        name: "Phoenix Microsoft Office",
        region: "phoenix",
        coordinates: [33.4484, -112.0740],
        address: "Microsoft Office, Phoenix, Arizona",
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                rooms: [
                    {
                        id: 5001,
                        name: "Phoenix Reception",
                        capacity: 20,
                        status: "available",
                        equipment: ["Reception Desk", "Visitor Area", "Information Display"],
                        problems: []
                    },
                    {
                        id: 5002,
                        name: "Phoenix Conference Room",
                        capacity: 30,
                        status: "maintenance",
                        equipment: ["Video Conferencing", "Large Display", "Audio System"],
                        problems: [
                            {
                                type: "Equipment",
                                description: "Video conferencing system needs software update",
                                priority: "Low",
                                reportedAt: "2024-01-20"
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: "Second Floor",
                rooms: [
                    {
                        id: 5101,
                        name: "Phoenix Open Office",
                        capacity: 50,
                        status: "occupied",
                        equipment: ["Open Desks", "Collaboration Areas", "Break Room"],
                        problems: []
                    }
                ]
            }
        ]
    },
    // KP Towers - South Block
    {
        id: 22,
        region: "noida",
        campus: "noida-kp-towers",
        name: "KP Towers - South Block",
        address: "KP Towers, South Block, Sector 142, Noida, Uttar Pradesh 201305, India",
        coordinates: [28.5358, 77.3915],
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                rooms: [
                    {
                        id: 6001,
                        name: "Taj Reception",
                        capacity: 30,
                        status: "available",
                        equipment: ["Reception Desk", "Visitor Lounge", "Information Kiosk"],
                        problems: []
                    },
                    {
                        id: 6002,
                        name: "Taj Conference Hall",
                        capacity: 60,
                        status: "occupied",
                        equipment: ["Large Screen", "Audio System", "Video Conferencing"],
                        problems: []
                    }
                ]
            },
            {
                id: 2,
                name: "Second Floor",
                rooms: [
                    {
                        id: 6101,
                        name: "Taj Open Office",
                        capacity: 80,
                        status: "available",
                        equipment: ["Hot Desks", "Collaborative Spaces", "Coffee Station"],
                        problems: []
                    },
                    {
                        id: 6102,
                        name: "Taj Server Room",
                        capacity: 5,
                        status: "maintenance",
                        equipment: ["Server Racks", "Network Equipment", "Backup Systems"],
                        problems: [
                            {
                                type: "Network",
                                description: "Network switch requires firmware update",
                                priority: "Medium",
                                reportedAt: "2024-01-19"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    // Noida Sovereign Building
    {
        id: 23,
        region: "noida",
        campus: "noida-sovereign",
        name: "Noida Sovereign Building",
        address: "Noida Sovereign, Sector 132, Noida, Uttar Pradesh 201301, India",
        coordinates: [28.5380, 77.3930],
        floors: [
            {
                id: 1,
                name: "Ground Floor",
                rooms: [
                    {
                        id: 7001,
                        name: "Sovereign Reception",
                        capacity: 25,
                        status: "available",
                        equipment: ["Reception Desk", "Visitor Area", "Information Display"],
                        problems: []
                    },
                    {
                        id: 7002,
                        name: "Sovereign Conference Room",
                        capacity: 35,
                        status: "available",
                        equipment: ["Video Conferencing", "Large Display", "Audio System"],
                        problems: []
                    }
                ]
            },
            {
                id: 2,
                name: "Second Floor",
                rooms: [
                    {
                        id: 7101,
                        name: "Sovereign Open Office",
                        capacity: 60,
                        status: "available",
                        equipment: ["Open Desks", "Collaboration Areas", "Break Room"],
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