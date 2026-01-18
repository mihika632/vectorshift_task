# VectorShift Frontend Technical Assessment

A modern pipeline builder application with node abstraction, dynamic styling, variable detection, and backend integration.

<img width="1830" height="875" alt="Screenshot 2026-01-18 222818" src="https://github.com/user-attachments/assets/1f4cd6e9-28b3-4195-88a0-6e21265738e5" />

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher)
- **Python** (v3.7 or higher)
- **npm** or **yarn**

### 1. Clone and Navigate
```bash
# If you have the project files, navigate to the root directory
cd vectorshift-assessment
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend-20260112T073336Z-3-001/backend

# Install Python dependencies
pip install fastapi uvicorn pydantic

# Start the backend server
uvicorn main:app --reload
```
✅ Backend will run on: **http://localhost:8000**

### 3. Frontend Setup
```bash
# Open a new terminal and navigate to frontend directory
cd frontend-20260112T073332Z-3-001/frontend

# Install dependencies
npm install

# Start the development server
npm start
```
✅ Frontend will run on: **http://localhost:3000**

### 4. Access the Application
Open your browser and go to: **http://localhost:3000**

---

## 📁 Project Structure

```
vectorshift-assessment/
├── backend-20260112T073336Z-3-001/
│   └── backend/
│       ├── main.py                 # FastAPI backend with DAG validation
│       └── requirements.txt        # Python dependencies
├── frontend-20260112T073332Z-3-001/
│   └── frontend/
│       ├── src/
│       │   ├── nodes/
│       │   │   ├── BaseNode.js     # Node abstraction component
│       │   │   ├── inputNode.js    # Input node implementation
│       │   │   ├── outputNode.js   # Output node implementation
│       │   │   ├── llmNode.js      # LLM node implementation
│       │   │   ├── textNode.js     # Text node with variable detection
│       │   │   ├── transformNode.js # Transform operations node
│       │   │   ├── filterNode.js   # Conditional filter node
│       │   │   ├── delayNode.js    # Delay/timing node
│       │   │   ├── aggregatorNode.js # Multi-input combiner
│       │   │   └── apiNode.js      # HTTP API call node
│       │   ├── App.js              # Main application component
│       │   ├── ui.js               # ReactFlow canvas component
│       │   ├── toolbar.js          # Node palette toolbar
│       │   ├── submit.js           # Backend integration
│       │   ├── store.js            # Zustand state management
│       │   └── draggableNode.js    # Draggable node component
│       ├── package.json            # Frontend dependencies
│       └── public/                 # Static assets
├── DEMO_SCRIPT.md                  # Recording demonstration script
├── SETUP_GUIDE.md                  # Detailed setup instructions
├── IMPLEMENTATION.md               # Technical implementation details
└── README.md                       # This file
```

---

## 🎯 Features Implemented

### ✅ Part 1: Node Abstraction
- **BaseNode Component**: Flexible abstraction eliminating code duplication
- **9 Node Types**: Input, Output, LLM, Text + 5 new nodes (Transform, Filter, Delay, Aggregator, API)
- **Configuration-Driven**: Easy to add new nodes with minimal code
- **Consistent Styling**: Unified design across all node types

### ✅ Part 2: Styling
- **Modern Design**: Beautiful gradient backgrounds and shadows
- **Interactive Elements**: Hover effects and smooth transitions
- **Color-Coded Nodes**: Each node type has unique gradient colors
- **Responsive Layout**: Clean toolbar and canvas organization
- **Visual Feedback**: Color-coded minimap and connection handles

### ✅ Part 3: Text Node Logic
- **Dynamic Sizing**: Automatic width/height adjustment based on content
- **Variable Detection**: Real-time parsing of `{{ variableName }}` syntax
- **Dynamic Handles**: Automatic creation of input handles for detected variables
- **Visual Distinction**: Gold-colored handles for variable inputs

### ✅ Part 4: Backend Integration
- **API Integration**: POST requests to `/pipelines/parse` endpoint
- **DAG Validation**: Sophisticated cycle detection algorithm
- **User Feedback**: Clear alerts showing node count, edge count, and DAG status
- **Error Handling**: Graceful error handling with user-friendly messages

---

## 🧪 Testing the Application

### Basic Pipeline Creation
1. **Drag nodes** from the toolbar to the canvas
2. **Connect nodes** by dragging from output handles to input handles
3. **Configure nodes** by editing their input fields
4. **Submit pipeline** to test backend integration

### Testing Node Abstraction (Part 1)
- Try all 9 node types from the toolbar
- Notice consistent styling and behavior
- Configure different field types (text, select, number)

### Testing Styling (Part 2)
- Observe gradient backgrounds on all nodes
- Hover over the Submit button for interactive effects
- Check the color-coded minimap
- Resize the browser to see responsive design

### Testing Text Node Logic (Part 3)
1. **Drag a Text node** to the canvas
2. **Type short text** - notice compact size
3. **Add line breaks and longer text** - watch it grow
4. **Add variables**: `Hello {{ name }}, you are {{ age }} years old`
5. **Observe handles** appearing on the left for each variable

### Testing Backend Integration (Part 4)
1. **Create a valid pipeline**: Input → LLM → Output
2. **Click Submit** - should show "Valid DAG: Yes ✓"
3. **Create a cycle**: Connect Output back to Input
4. **Click Submit** - should show "Valid DAG: No ✗" with warning

---

## 🔧 Development Commands

### Backend Commands
```bash
cd backend-20260112T073336Z-3-001/backend

# Start development server with auto-reload
uvicorn main:app --reload

# Start on different port
uvicorn main:app --reload --port 8001

# View API documentation
# Visit http://localhost:8000/docs after starting server
```

### Frontend Commands
```bash
cd frontend-20260112T073332Z-3-001/frontend

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Kill process on port 8000 (Windows)
netstat -ano | findstr :8000
taskkill /PID <PID_NUMBER> /F
```

### CORS Issues
- Ensure backend is running on port 8000
- Ensure frontend is running on port 3000
- CORS is configured in `backend/main.py` for localhost:3000

### Module Not Found Errors
```bash
# Frontend
cd frontend-20260112T073332Z-3-001/frontend
rm -rf node_modules package-lock.json
npm install

# Backend
cd backend-20260112T073336Z-3-001/backend
pip install --upgrade fastapi uvicorn pydantic
```

### Backend Connection Failed
1. Verify backend is running: http://localhost:8000
2. Check health endpoint: http://localhost:8000/ (should return `{"Ping": "Pong"}`)
3. Ensure no firewall blocking port 8000

---

## 🏗️ Technical Stack

### Frontend
- **React 18**: Modern functional components with hooks
- **ReactFlow 11**: Visual pipeline editor
- **Zustand 4**: Lightweight state management
- **Modern CSS**: Gradients, shadows, and animations

### Backend
- **FastAPI**: High-performance Python web framework
- **Pydantic**: Data validation and serialization
- **Uvicorn**: ASGI server for production-ready deployment

---

## 📊 API Endpoints

### GET /
Health check endpoint
```json
Response: {"Ping": "Pong"}
```

### POST /pipelines/parse
Pipeline analysis endpoint
```json
Request: {
  "nodes": [{"id": "node-1", ...}],
  "edges": [{"source": "node-1", "target": "node-2", ...}]
}

Response: {
  "num_nodes": 3,
  "num_edges": 2,
  "is_dag": true
}
```


## 🤝 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Verify both servers are running on correct ports
3. Check browser console for error messages
4. Ensure all dependencies are installed correctly

---

## ✨ Key Achievements

- **Zero Code Duplication**: BaseNode abstraction eliminates repetitive code
- **Scalable Architecture**: Easy to add new node types
- **Modern UI/UX**: Beautiful, responsive design with smooth interactions
- **Robust Backend**: Production-ready API with proper validation
- **Real-time Features**: Dynamic text sizing and variable detection
- **Error Handling**: Comprehensive error handling throughout the application

