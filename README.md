# blog

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# WonderTales — Capstone Project Submission
**Course:** Web Technologies (SP26)  
**Semester:** BSCS 4th Semester (Section 1M)  
**Student Name:** Iqan Ali  
**Roll Number:** F24BDOCS1M01010  

---

## 🔮 Project Description
WonderTales is a fully dynamic and interactive storytelling web application tailored for children. The system allows users to view, filter, and request magical story scrolls, while providing administrators with an advanced control center to seamlessly orchestrate the story catalog.

---

## ✨ Core Features Implemented

### 1. User Panel (`index.html`)
- **Live Fetching (GET):** Dynamic components pull story records asynchronously from the local REST API server.
- **Realm Filters:** Conditional rendering array matching maps categories safely without static interference.
- **Loading & Error Infrastructure:** Visual placeholder spinner signals network operations, and a graceful error panel intercepts any server disconnections.
- **Owl Post Requests Form:** A full-scale 5-field transaction wrapper that validates inputs completely via native custom JavaScript logic before executing backend database injections.

### 2. Admin Panel (`admin.html`)
- **Data Insertion (POST):** Dropdown control arrays prevent spelling syntax errors and map data straight to the server schema.
- **Data Revision (PUT):** Loads specific objects into a dedicated mutation card context to push structural alterations safely.
- **Data Removal (DELETE):** Standard system actions wipe data logs instantly post confirmation diagnostics window.
- **Summary Metrics (Stats):** Real-time responsive cards track global totals and category splits instantly.

### 3. Code Quality & API Compliance
- **Safety Checks:** Explicitly verifies `response.ok` on every fetch pipeline transaction before parsing data elements.
- **Robust Exception Handling:** Encapsulates all asynchronous tasks inside standardized `try/catch` wrappers using clean `async/await` structures.

### 4. 🌟 Bonus Features Integrated (Section 4)
- **Bootstrap 5 UI Ecosystem:** Implemented semantic grids and responsive layouts consistently across all presentation screens.
- **Persistent Dark Mode Engine:** An interactive light/dark theme toggle system utilizing `localStorage` to persist state across browsing sessions.

---

## 🚀 Installation & How to Run

1. Extract the project workspace files (`WebProject_F24BDOCS1M01010.zip`) into your local directory.
2. Open your terminal inside the root project directory and initialize the backend mock server layout pipeline:
   ```bash
   npx json-server --watch db.json
   ```
3. Open `index.html` inside any modern browser environment to run the live client portal frames.
4. Use the routing action targets to test data operations between the visitor view panel and the master admin control interface dashboard.
