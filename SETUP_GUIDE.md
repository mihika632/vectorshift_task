# VectorShift Technical Assessment - Setup Guide

## Quick Start

### 1. Install Frontend Dependencies
```bash
cd frontend-20260112T073332Z-3-001/frontend
npm install
```

### 2. Install Backend Dependencies
```bash
cd backend-20260112T073336Z-3-001/backend
pip install fastapi uvicorn pydantic
```

### 3. Start Backend Server
```bash
cd backend-20260112T073336Z-3-001/backend
uvicorn main:app --reload
```
Backend will run on: http://localhost:8000

### 4. Start Frontend Development Server
```bash
cd frontend-20260112T073332Z-3-001/frontend
npm start
```
Frontend will run on: http://localhost:3000

## Testing the Application

### Part 1: Node Abstraction
1. Drag any node from the toolbar to the canvas
2. Notice the consistent styling and structure
3. Try all 9 node types: Input, Output, LLM, Text, Transform, Filter, Delay, Aggregator, API Call

### Part 2: Styling
1. Observe the beautiful gradient backgrounds on all nodes
2. Check the styled toolbar with organized node palette
3. Hover over the Submit button to see interactive effects
4. Notice the clean, modern design throughout

### Part 3: Text Node Logic
1. Drag a Text node to the canvas
2. Type text with variables: `Hello {{ name }}, your age is {{ age }}`
3. Watch the node resize automatically as you type
4. See dynamic handles appear on the left for each variable
5. Try adding more text to see width/height adjustments

### Part 4: Backend Integration
1. Create a pipeline with multiple nodes and connections
2. Click the "Submit Pipeline" button
3. See an alert showing:
   - Number of nodes
   - Number of edges
   - Whether it's a valid DAG
4. Try creating a cycle (connect nodes in a loop) and submit again

## Implementation Highlights

### All 4 Parts Completed:
✅ **Part 1**: BaseNode abstraction with 5 new nodes  
✅ **Part 2**: Beautiful gradient styling throughout  
✅ **Part 3**: Dynamic text node with variable detection  
✅ **Part 4**: Full backend integration with DAG detection  

### Key Features:
- Flexible node abstraction system
- Modern, appealing UI design
- Real-time variable detection and handle creation
- Robust DAG validation algorithm
- Error handling and user-friendly alerts

## Troubleshooting

### CORS Issues
If you see CORS errors, ensure:
- Backend is running on port 8000
- Frontend is running on port 3000
- CORS middleware is properly configured in backend

### Module Not Found
If you see "Module not found" errors:
- Run `npm install` in the frontend directory
- Ensure all dependencies are installed

### Backend Connection Failed
If frontend can't connect to backend:
- Verify backend is running: http://localhost:8000
- Check the `/` endpoint returns `{"Ping": "Pong"}`
- Ensure no firewall is blocking port 8000
