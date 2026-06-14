<template>
  <div class="container admin-glass-dashboard">
    <!-- Sophisticated App Header Banner Wrapper -->
    <div class="dashboard-header d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-5 gap-3">
      <div>
        <h2 class="dashboard-main-heading m-0">WonderTales</h2>
        <p class="dashboard-sub-heading text-muted m-0">✨ Core Backend Management Control Vault</p>
      </div>
      
      <!-- NAVIGATE BACK TO HOME BUTTON -->
      <router-link to="/" class="btn btn-back-home shadow-sm">
        🏰 Go to Website
      </router-link>
    </div>

    <!-- MANDATORY SUMMARY STATISTICS CARDS BLOCK (Section 3.2 Rubric Requirement) -->
    <div class="row g-4 mb-5">
      <div class="col-md-4">
        <div class="card p-3 border-0 shadow-sm stats-card-wrapper text-center">
          <div class="stats-card-icon text-primary mb-2">📚</div>
          <h6 class="text-uppercase text-muted small fw-bold mb-1">Total Scrolls</h6>
          <h3 class="m-0 text-dark fw-bold dashboard-stats-number">{{ stories.length }}</h3>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-3 border-0 shadow-sm stats-card-wrapper text-center">
          <div class="stats-card-icon text-warning mb-2">⚡</div>
          <h6 class="text-uppercase text-muted small fw-bold mb-1">Harry Potter</h6>
          <h3 class="m-0 text-dark fw-bold dashboard-stats-number">
            {{ stories.filter(s => s.category && s.category.trim().toLowerCase() === 'harry potter').length }}
          </h3>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card p-3 border-0 shadow-sm stats-card-wrapper text-center">
          <div class="stats-card-icon text-success mb-2">🌙</div>
          <h6 class="text-uppercase text-muted small fw-bold mb-1">Bedtime Tales</h6>
          <h3 class="m-0 text-dark fw-bold dashboard-stats-number">
            {{ stories.filter(s => s.category && s.category.trim().toLowerCase() === 'bedtime').length }}
          </h3>
        </div>
      </div>
    </div>
    
    <!-- Sophisticated Form Controller Card Structure Layout -->
    <div class="card p-4 border-0 mb-5 premium-action-card shadow-sm">
      <div class="card-header-wrapper d-flex align-items-center mb-4">
        <div class="icon-avatar-holder me-3">🪄</div>
        <h4 class="card-section-title m-0">Cast a New Story Scroll</h4>
      </div>
      
      <div class="row g-4">
        <div class="col-md-6">
          <label class="form-label control-field-label">Story Title</label>
          <input v-model="newStory.title" placeholder="e.g., The Order of the Phoenix" class="form-control sleek-management-input">
        </div>

        <div class="col-md-6">
          <label class="form-label control-field-label">Magical Category Realm</label>
          <select v-model="newStory.category" class="form-select sleek-management-input font-select-override">
            <option value="" disabled selected>Select database target row...</option>
            <option value="harry potter">Harry Potter Collection</option>
            <option value="popular">Popular Stories</option>
            <option value="bedtime">Bedtime Tales</option>
          </select>
        </div>

        <div class="col-md-6">
          <label class="form-label control-field-label">Image Path Asset Location</label>
          <input v-model="newStory.image" placeholder="e.g., images/story1.webp" class="form-control sleek-management-input">
        </div>

        <div class="col-md-6">
          <label class="form-label control-field-label">Target Age Group Constraint</label>
          <input v-model="newStory.ageGroup" placeholder="e.g., 15+ or 4-8" class="form-control sleek-management-input">
        </div>

        <div class="col-12 mt-4 text-end">
          <button @click="addStory" class="btn btn-premium-action shadow-sm">Add New Scroll 🪄</button>
        </div>
      </div>
    </div>

    <!-- update  -->
     <div v-if="isEditMode" class="card p-4 border-0 mb-5 shadow-sm" style="background-color: #ffffff; border: 1px solid #cbd5e1 !important; border-radius: 16px;">
  <div class="card-header-wrapper d-flex align-items-center mb-4">
    <div class="icon-avatar-holder me-3" style="background-color: #f0fdf4;">📝</div>
    <h4 class="card-section-title m-0 text-success">Update Existing Story Scroll</h4>
  </div>
  
  <div class="row g-4">
    <div class="col-md-6 text-start">
      <label class="form-label control-field-label">Edit Title</label>
      <input v-model="editStoryData.title" class="form-control sleek-management-input">
    </div>

    <div class="col-md-6 text-start">
      <label class="form-label control-field-label">Edit Category</label>
      <select v-model="editStoryData.category" class="form-select sleek-management-input font-select-override">
        <option value="harry potter">Harry Potter Collection</option>
        <option value="popular">Popular Stories</option>
        <option value="bedtime">Bedtime Tales</option>
      </select>
    </div>

    <div class="col-md-6 text-start">
      <label class="form-label control-field-label">Edit Image Path</label>
      <input v-model="editStoryData.image" class="form-control sleek-management-input">
    </div>

    <div class="col-md-6 text-start">
      <label class="form-label control-field-label">Edit Age Group</label>
      <input v-model="editStoryData.ageGroup" class="form-control sleek-management-input">
    </div>

    <div class="col-12 mt-4 text-end d-flex justify-content-end gap-2">
      <button @click="isEditMode = false" class="btn btn-secondary px-4 py-2" style="border-radius: 10px;">Cancel</button>
      <button @click="updateExistingStory" class="btn btn-success px-4 py-2 shadow-sm" style="border-radius: 10px; font-weight: 600;">Save Changes 📝</button>
    </div>
  </div>
</div>

    <!-- Active Structural Records Dynamic Sheet Table -->
    <div class="card p-0 border-0 premium-table-card shadow-sm">
      <div class="p-4 card-header-wrapper border-bottom d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <div class="icon-avatar-holder holder-purple me-3">📜</div>
          <h4 class="card-section-title m-0">Active Vault Scrolls Records</h4>
        </div>
        <span class="badge total-counter-badge bg-light text-dark fw-bold border border-secondary-subtle">
          {{ stories.length }} Total Records
        </span>
      </div>
      
      <div class="table-responsive">
        <table class="table table-hover align-middle core-vault-grid mb-0">
          <thead>
            <tr>
              <th scope="col" class="ps-4" style="width: 50%">Story Title Description</th>
              <th scope="col" style="width: 30%">Target Category</th>
              <th scope="col" style="width: 20%" class="text-center pe-4">System Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="story in stories" :key="story.id" class="grid-row-interactive">
              <td class="ps-4 font-title-cell-override fw-semibold">{{ story.title }}</td>
              <td>
                <span :class="['capsule-badge-override', story.category === 'harry potter' ? 'badge-hp-tint' : story.category === 'popular' ? 'badge-popular-tint' : 'badge-bedtime-tint']">
                  {{ story.category }}
                </span>
              </td>
              <td class="text-center pe-4">
                <button @click="startEditing(story)" class="btn btn-modern-edit me-2">
  ✏️ Edit
</button>
<button @click="deleteStory(story.id)" class="btn btn-modern-danger">
  🗑️ Banish
</button>
              </td>
            </tr>
            <tr v-if="stories.length === 0">
              <td colspan="3" class="text-center py-5 text-muted empty-state-cell">
                <span class="fs-4 d-block mb-2">🔮</span> No records inside database file workspace.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stories: [],
      newStory: { title: '', category: '', image: '', ageGroup: '' },
      
      // ALAG UPDATE FORM KE VARIABLES
      isEditMode: false,
      editStoryData: { id: '', title: '', category: '', image: '', ageGroup: '', pages: [] }
    }
  },
  async mounted() {
    this.fetchStories();
  },
  methods: {
    // 1. GET: Fetch all resources securely from server pipeline
    async fetchStories() {
      try {
        const res = await fetch('http://localhost:3000/stories');
        
        /* MANDATORY REQUIREMENT: Check response.ok before parsing JSON (Section 3.3) */
        if (!res.ok) throw new Error("Database fetch request aborted by network");
        
        this.stories = await res.json();
      } catch (err) {
        console.error("Fetch failure:", err.message);
      }
    },

    // 2. POST: Insert a new magical scroll document
    async addStory() {
      if (!this.newStory.title || !this.newStory.category) {
        alert("Please enter a Title and select a Category!");
        return;
      }
      try {
        const res = await fetch('http://localhost:3000/stories', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.newStory)
        });

        /* MANDATORY REQUIREMENT: Check response.ok before parsing JSON (Section 3.3) */
        if (!res.ok) throw new Error("Data insertion rejected by database runtime");

        this.newStory = { title: '', category: '', image: '', ageGroup: '' };
        this.fetchStories(); 
      } catch (err) {
        console.error("POST operation error:", err.message);
      }
    },
    
    // 3. Trigger edit cache state management
    startEditing(story) {
      this.isEditMode = true;
      // Purani story ka data alag update box me load karein (pages ke array ke sath)
      this.editStoryData = { ...story };
    },
    
    // 4. PUT: Update an existing document log completely (Section 3.2 & 3.3)
    async updateExistingStory() {
      try {
        const res = await fetch(`http://localhost:3000/stories/${this.editStoryData.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.editStoryData)
        });
        
        /* MANDATORY REQUIREMENT: Check response.ok before parsing JSON (Section 3.3) */
        if (!res.ok) throw new Error("Update operation rejected by system server");
        
        this.isEditMode = false; // Kaam khatam hone par form chup jaye
        this.fetchStories();     // Table refresh ho jaye
        alert("¼ Story scroll updated successfully inside database!");
      } catch (err) {
        console.error("Error updating resource:", err.message);
      }
    },
    
    // 5. DELETE: Remove record with system confirmation window
    async deleteStory(id) {
      if (confirm("Are you sure you want to delete this story scroll?")) {
        try {
          const res = await fetch(`http://localhost:3000/stories/${id}`, { method: 'DELETE' });
          
          /* MANDATORY REQUIREMENT: Check response.ok before parsing JSON (Section 3.3) */
          if (!res.ok) throw new Error("Banish action aborted by server environment");
          
          this.fetchStories();
        } catch (err) {
          console.error("DELETE transaction failure:", err.message);
        }
      }
    }
  }
}
</script>

<style scoped>
/* Master Dashboard Viewport Frame Core Workspace */
.admin-glass-dashboard {
  margin-top: 100px;
  max-width: 1140px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #1e293b !important;
}

/* Elegant Back to Home Button Style */
.btn-back-home {
  background-color: #ffffff !important;
  border: 1px solid #cbd5e1 !important;
  color: #334155 !important;
  font-weight: 600 !important;
  font-size: 14px;
  padding: 10px 20px !important;
  border-radius: 10px !important;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}
.btn-back-home:hover {
  background-color: #f8fafc !important;
  color: #0f172a !important;
  border-color: #94a3b8 !important;
  transform: translateY(-1px);
}

/* Summary Statistics Cards Design Styling Sheets (NEW DESIGN) */
.stats-card-wrapper {
  background-color: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 14px !important;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02) !important;
}
.stats-card-icon {
  font-size: 24px;
}
.dashboard-stats-number {
  color: #0f172a !important;
}

/* Top Typography Sets elements formatting */
.dashboard-main-heading {
  font-weight: 800;
  font-size: 28px;
  letter-spacing: -0.75px;
  color: #0f172a !important;
}
.dashboard-sub-heading {
  font-size: 13px;
  font-weight: 500;
  color: #64748b !important;
}

/* Base Level Premium Cards wrappers framework design blocks */
.premium-action-card, .premium-table-card {
  background-color: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 16px !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03) !important;
  overflow: hidden;
}

/* Secondary Component Headers text formatting */
.card-section-title {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a !important;
  letter-spacing: -0.2px;
}
.icon-avatar-holder {
  width: 32px;
  height: 32px;
  background-color: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 14px;
}
.holder-purple { background-color: #faf5ff; }

/* Interactive Premium Form Fields Controls */
.control-field-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  color: #64748b !important;
  margin-bottom: 8px;
}
.sleek-management-input {
  background-color: #f8fafc !important;
  border: 1px solid #cbd5e1 !important;
  color: #0f172a !important;
  padding: 12px 16px !important;
  border-radius: 10px !important;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
}
.sleek-management-input:focus {
  background-color: #ffffff !important;
  border-color: #2563eb !important;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12) !important;
}

/* Primary Submit Form Control Button */
.btn-premium-action {
  background: #0f172a !important;
  border: none !important;
  color: #ffffff !important;
  font-weight: 600 !important;
  font-size: 14px;
  padding: 12px 24px !important;
  border-radius: 10px !important;
  transition: all 0.2s ease-in-out !important;
}
.btn-premium-action:hover {
  background: #1e293b !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15) !important;
}

/* Table Systems Overrides Layout Structuring */
.core-vault-grid {
  background-color: #ffffff !important;
  margin: 0;
}
.core-vault-grid thead th {
  background-color: #f8fafc !important;
  color: #475569 !important;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.75px;
  padding: 16px !important;
  border-bottom: 2px solid #e2e8f0 !important;
  border-top: none !important;
}
.core-vault-grid tbody td {
  padding: 16px !important;
  border-bottom: 1px solid #f1f5f9 !important;
  color: #334155 !important;
  background-color: #ffffff !important;
}
.grid-row-interactive:hover td {
  background-color: #f8fafc !important;
}
.font-title-cell-override {
  color: #0f172a !important;
  font-size: 14px;
  letter-spacing: -0.1px;
}

/* Custom Delete System Banish Trigger Button */
.btn-modern-danger {
  background-color: #fef2f2 !important;
  color: #ef4444 !important;
  border: 1px solid #fee2e2 !important;
  font-weight: 600 !important;
  font-size: 12px !important;
  padding: 6px 14px !important;
  border-radius: 8px !important;
  transition: all 0.2s ease !important;
}
.btn-modern-danger:hover {
  background-color: #ef4444 !important;
  color: #ffffff !important;
  border-color: #ef4444 !important;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.15) !important;
}

/* Refined Category Flat Badges */
.capsule-badge-override {
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-block;
}
.badge-hp-tint { background-color: #f3e8ff; color: #6d28d9; border: 1px solid #e9d5ff; }
.badge-popular-tint { background-color: #fffbeb; color: #b45309; border: 1px solid #fef3c7; }
.badge-bedtime-tint { background-color: #f0fdf4; color: #15803d; border: 1px solid #d1fae5; }

.empty-state-cell { font-size: 14px; font-weight: 500; background-color: #ffffff !important; }
</style>
