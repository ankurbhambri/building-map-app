# Meeting Room Management

A web-based application for visualizing company buildings, floors, and meeting rooms with real-time status indicators using Leaflet maps.

## 📋 Requirements

### ✅ What's Already Included
- ✅ **Leaflet.js v1.9.4** - Loaded from CDN (`https://unpkg.com/leaflet@1.9.4/`)
- ✅ **Vanilla JavaScript** - No frameworks needed
- ✅ **Pure CSS** - No preprocessors needed
- ✅ **All dependencies** - Automatically loaded via CDN links

### Dependencies (Auto-loaded via CDN)
- **Leaflet.js**: v1.9.4 (mapping library)
- **OpenStreetMap**: Map tiles
- **Microsoft Logo**: Loaded from Microsoft's CDN

## 🚀 Installation & Setup

### Option 1: Using Python (Recommended)
1. **Clone or download** this repository
2. **Navigate** to the project directory:
   ```bash
   cd building-map-app
   ```
3. **Start the local server**:
   ```bash
   python3 -m http.server 8000
   ```
   Or on Windows:
   ```bash
   python -m http.server 8000
   ```
4. **Open your browser** and go to: `http://localhost:8000`

### Option 2: Using Node.js
1. **Install Node.js** from [nodejs.org](https://nodejs.org/)
2. **Install a simple HTTP server**:
   ```bash
   npm install -g http-server
   ```
3. **Navigate** to the project directory and run:
   ```bash
   http-server -p 8000
   ```
4. **Open your browser** and go to: `http://localhost:8000`

### Option 3: Direct File Opening
⚠️ **Note**: Some features may not work due to CORS restrictions
1. Simply **double-click** on `index.html`
2. The application will open in your default browser

## 🔧 Why No Installation Required?

This application is built as a **pure frontend application** using:

### 🌐 **CDN-Based Architecture**
```html
<!-- Leaflet CSS automatically loaded from CDN -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">

<!-- Leaflet JS automatically loaded from CDN -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
```

### 📁 **No Build Process Needed**
- **Vanilla JavaScript** (ES6+) - No transpilation required
- **CSS3** with Flexbox and Grid - No preprocessors needed
- **Static HTML** - No server-side rendering
- **No package.json** - No dependency management needed

### 🚀 **Why Python Server?**
The Python HTTP server is only needed to:
- Serve files over HTTP (avoids CORS issues)
- Simulate a real web server environment
- Enable proper loading of external resources

**Alternative**: You can use any static file server or even open `index.html` directly (though some features may not work due to browser security restrictions).

## 🌐 How Localhost Port Binding Works

### **What Happens When You Run:**
```bash
python3 -m http.server 8000
```

### **Behind the Scenes:**
1. **Creates HTTP Server**: Python starts a web server on your computer
2. **Binds to Port 8000**: The server "listens" on port 8000 for incoming requests
3. **Serves Files**: Any file in the current directory becomes accessible via web browser
4. **Local Network Access**: Only accessible from your computer (127.0.0.1)

### **Port Binding Explained:**
```
http://localhost:8000
    ↓
http://127.0.0.1:8000
    ↓
Your Computer's IP : Port Number
```

### **Common Port Issues & Solutions:**
```bash
# If port 8000 is busy, try different ports:
python3 -m http.server 8001
python3 -m http.server 3000
python3 -m http.server 5000

# Check what's using a port (macOS/Linux):
lsof -i :8000

# Kill process using port (if needed):
kill -9 <process_id>
```

### **Network Access Levels:**
- **localhost/127.0.0.1**: Only your computer can access
- **0.0.0.0**: All devices on your network can access
- **Public IP**: Internet-wide access (requires additional setup)

### **Why Not Just Open HTML File?**
```
❌ file:///path/to/index.html
   └── CORS restrictions, external resources may fail

✅ http://localhost:8000/index.html
   └── Proper HTTP protocol, all features work
```

## Features

- **Interactive Map**: Navigate through multiple company buildings on an interactive map
- **Building Details**: Click on building markers to view floor information
- **Floor Plans**: Explore individual floors and see meeting room layouts
- **Room Status System**: 
  - 🟢 Green: Available rooms
  - 🔴 Red: Occupied or rooms with problems
  - 🟠 Orange: Rooms under maintenance
- **Problem Tracking**: Detailed problem reports for rooms with issues
- **Responsive Design**: Works on desktop and mobile devices

## File Structure

```
building-map-app/
├── index.html          # Main HTML file
├── style.css           # CSS styling
├── script.js           # Main JavaScript application
├── data.js             # Sample building and room data
└── README.md           # This file
```

## Getting Started

1. **Open the application**: Simply open `index.html` in a web browser
2. **Navigate the map**: Use mouse/touch to zoom and pan the map
3. **Explore buildings**: Click on building markers to see details
4. **View floors**: Click on floor cards to see room layouts
5. **Check rooms**: Click on room cards to see status and problems

## How to Use

### Main Map
- Red building markers indicate buildings with problems
- Blue markers are buildings without issues
- Click any marker to view building details

### Building View
- Shows all floors in the building
- Displays room availability statistics
- Click any floor card to view the floor plan

### Floor Plan View
- Grid layout showing all meeting rooms
- Color-coded room status:
  - Green border: Available
  - Red border: Occupied or has problems
  - Orange border: Under maintenance
- Status indicator dots in the top-right corner of each room

### Room Details
- Complete room information including capacity and equipment
- Problem details for rooms with issues
- Priority levels: Critical, High, Medium, Low

## Data Structure

The application uses a JSON data structure with:
- **Buildings**: Location, name, address, floors
- **Floors**: Name, description, rooms
- **Rooms**: Capacity, status, equipment, problems
- **Problems**: Type, description, priority, date reported

## Customization

### Adding New Buildings
Edit `data.js` and add new building objects to the `buildingsData` array:

```javascript
{
    id: 4,
    name: "New Building",
    address: "123 Main St",
    coordinates: [lat, lng],
    floors: [...]
}
```

### Modifying Room Status
Update room status in the data:
- `available`: Room is free to use
- `occupied`: Room is currently in use
- `maintenance`: Room has issues or is being serviced

### Adding Problem Types
Problems can be categorized as:
- Equipment: Hardware/software issues
- Network: Connectivity problems
- Climate: Temperature/ventilation issues
- Security: Access or safety concerns
- Facility: General facility problems

## Browser Compatibility

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Dependencies

- **Leaflet.js**: Open-source mapping library
- **OpenStreetMap**: Map tile provider

## Future Enhancements

- Real-time data integration
- Room booking functionality
- Mobile app version
- Analytics dashboard
- Notification system
- Integration with calendar systems
- QR codes for room check-in

## Support

For issues or questions, please check the console for error messages and ensure all files are properly loaded.