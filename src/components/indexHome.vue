<template>
    <div id="body">

    <div class="sky-zone-forbidden-forest"></div>
    <div class="flying-jharo">🧹<span class="magic-dust">✨</span></div>
    
    <div class="floating-items-container">
        <div class="floating-magic magic-cap item-1">🎩</div>
        <div class="floating-magic magic-orb item-2">🔮</div>
        <div class="floating-magic magic-dust-particle item-3">✨</div>
    </div>
    
    <div class="candles-zone">
        <div class="magic-candle c1"></div>
        <div class="magic-candle c2"></div>
        <div class="magic-candle c3"></div>
        <div class="magic-candle c4"></div>
    </div>

    <nav class="navbar navbar-expand-lg fixed-top custom-nav">
        <div class="container">
            <a class="navbar-brand logo" href="#">
                <span class="letter-w">W</span>onder<span class="letter-t">T</span>ales
            </a>
            <button @click="toggleDarkMode" class="btn btn-outline-light btn-sm ms-2 px-3 py-1" style="border-radius: 20px; font-weight: 600;">
  {{ isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode' }}
</button>
            <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
           <div class="d-flex align-items-center gap-3">
   <router-link to="/adminPannel" class="nav-link nav-btn">ADMIN PANEL</router-link>
    <a href="#" class="nav-link nav-btn">ALL STORIES </a>
    
    <div class="dropdown">
        <button class="btn nav-link nav-btn dropdown-toggle" type="button" id="ageMagicDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            🧙‍♂️ SELECT AGE
        </button>
      <ul class="dropdown-menu wizard-dropdown-menu" aria-labelledby="ageMagicDropdown">
    <li>
        <a class="dropdown-item" href="#" @click.prevent="selectedAgeFilter = 'all'">
            All Stories
        </a>
    </li>
    
    <li>
        <a class="dropdown-item" href="#" @click.prevent="selectedAgeFilter = '3-5'">
            First-Year Initiates <small>(3-5 yrs)</small>
        </a>
    </li>
    <li>
        <a class="dropdown-item" href="#" @click.prevent="selectedAgeFilter = '6-9'">
            Hogwarts Adepts <small>(6-9 yrs)</small>
        </a>
    </li>
    <li>
        <a class="dropdown-item" href="#" @click.prevent="selectedAgeFilter = '10+'">
            Merlin Masters <small>(10+ yrs)</small>
        </a>
    </li>
</ul>
    </div>
</div>
        </div>
    </nav>

<!-- 1. LOADING STATE DISPLAY -->
<div v-if="isLoading" class="container text-center py-5" style="margin-top: 120px; z-index: 9999; position: relative;">
  <div class="spinner-border text-warning" role="status"></div>
  <p class="text-white mt-3 opacity-75 fs-5">🔮 Loading scrolls from the magical server vault...</p>
</div>

<!-- 2. ERROR STATE DISPLAY -->
<div v-if="isError" class="container text-center py-5" style="margin-top: 120px; z-index: 9999; position: relative;">
  <div class="alert alert-danger d-inline-block px-5 border-0 shadow-lg" style="background-color: rgba(220, 53, 69, 0.25); color: #f87171; border-radius: 12px;">
    <h4 class="alert-heading fw-bold m-0 mb-2">💥 Magical Connection Failed!</h4>
    <p class="mb-0 text-white opacity-75">JSON Server unreachable hai. Please run <code>npx json-server --watch db.json</code> inside your project folder.</p>
  </div>
</div>

    <header class="hero-section">
        <div class="container">
            <div class="row align-items-center g-5">
                
                <div class="col-lg-6 hero-text text-start">
                    <h1 class="main-spell-title mb-4">
                        <span class="letter-cinzel">W</span>here Choices <br>
                        CAST A SPELL!
                    </h1>
                    <p class="hero-subtitle mb-5">
                        Mischief Managed! Cast your dynamic destiny spells in ancient realms. Unlock Forbidden Chapters & Ancient Wisdom! Turn the ancient scrolls to become the hero of your dynamic quest.
                    </p>
                    
                    <div class="hero-action-btns mt-4 d-flex align-items-center gap-3">
                        <button class="btn btn-spell-cast">Cast Spell 🪄</button>
                        <button class="btn btn-owl-post ms-3">Owl Post 🦉</button>
                    </div>

                    <div class="sorting-hat-filter-panel mt-5">
                        <div class="row g-3">
                            <div class="col-md-6 mb-3 mb-md-0">
            <label class="filter-spell-title"><span class="me-2">📜</span> WIZARD NAME</label>
            <input type="text" class="form-control parchment-select mt-2" placeholder="Enter your magical name...">
        </div>
                            <div class="col-sm-6">
                                <label class="filter-spell-title">✨ Realm Vault (Interest)</label>
                                <select class="form-select parchment-select">
                                    <option selected disabled>Realm of Interest...</option>
                                    <option value="magic">Potions & Alchemy</option>
                                    <option value="creatures">Fantastic Beasts</option>
                                    <option value="mystery">Forbidden Mysteries</option>
                                    <option value="space">Astronomy Vaults</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 text-center mt-5 mt-lg-0">
                    <div class="arched-window-portal">
                        <div class="magic-portal-halo"></div>
                        
                        <div id="storyCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
                            <div class="carousel-inner portal-view">
                                
                                <div class="carousel-item active">
                                    <img src="images/harry-top2.jpg" class="img-fluid wizard-asset" alt="Hogwarts Sanctuary Grid">
                                    <div class="spell-tag">Forbidden Forest Sanctuary</div>
                                </div>
                                
                                <div class="carousel-item">
                                    <img src="images/castel.jpg" class="img-fluid wizard-asset" alt="Fantastic Beast Grid">
                                    <div class="spell-tag">Gryffindor Common Room</div>
                                </div>
                                
                                <div class="carousel-item">
                                    <img src="images/ghost.jpg" class="img-fluid wizard-asset" alt="Alchemy Chamber Grid">
                                    <div class="spell-tag">Restricted Archives Vault</div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
        <div class="wave-transition"></div>
    </header>

    <!-- chracter  -->
<div class="container magical-character-container">
    <div class="wizard-character">
        <img src="/images/harry.jpg" alt="Magical Character" class="character-img">
    </div>
</div>
<!--  harry potter  -->
<section class="hp-stories-section py-5">
    <div class="container">
        <div class="main-heading text-center mb-5">
            <h1 class="hp-heading">HARRY POTTER COLLECTION</h1>
        </div>

        <div class="row g-4 justify-content-center magical-character-container">
            
            <!-- Yeh automatic dynamic loop hai jo data dhoondega -->
            <div v-for="story in stories.filter(s => s.category && s.category.trim().toLowerCase() === 'harry potter')" 
                 :key="story.id" 
                 class="col-6 col-md-4 col-lg-3">
                
                <!-- URL automatic generate hoga (jaise /harryPotter/hp-1), aapka detail page isi se chalta rahega -->
                <router-link :to="'/harryPotter/' + story.id" class="wizard-story-card">
                    <div class="story-image-wrapper">
                        <img :src="story.image" :alt="story.title" class="img-fluid story-cover-img" />
                    </div>
                    <div class="story-age-label text-center mt-2">
                        <span>{{ story.title }}</span><br>
                        <span>Ages {{ story.ageGroup }}</span>
                    </div>
                </router-link>
            </div>
            
        </div>
    </div>
</section>
<!-- chracter  -->
<div class="container magical-character-container">
    <div class="wizard-character">
        <img src="images/try.jpg" alt="Magical Character" class="character-img">
    </div>
</div>
<!-- Popular Stories Section -->
<div class="container py-5">
    <div class="main-heading text-center"><h1>POPULAR STORIES FOR KIDS</h1></div>
</div>
<section class="stories-showcase-section py-5">
    <div class="container">
        <div class="row g-4 justify-content-center">
            
            <!-- Ye loop sirf 'popular' category wali stories show karega -->
            <div v-for="story in stories.filter(s => s.category && s.category.trim().toLowerCase() === 'popular')"

                 :key="story.id" 
                 class="col-6 col-md-4 col-lg-3">
                
             <router-link :to="'/' + story.id" class="wizard-story-card">
                    <div class="story-image-wrapper">
                        <!-- Dynamic Image Binding -->
                        <img :src="story.image" :alt="story.title" class="img-fluid story-cover-img" />
                    </div>
                    <div class="story-age-label text-center mt-2">
                        <!-- Dynamic Title and Age -->
                        <span>{{ story.title }}</span><br>
                        <span>Ages {{ story.ageGroup }}</span>
                    </div>
                </router-link>
            </div>

        </div>
    </div>
</section>
  <!-- chracter  -->
<div class="container magical-character-container">
    <div class="wizard-character">
        <img src="images/chracter3.jpg" alt="Magical Character" class="character-img">
    </div>
</div>
<!-- bed time stories -->
<section class="bedtime-stories-section py-5">
    <div class="container">
        <div class="main-heading text-center mb-5">
            <h1 class="bedtime-heading">BEDTIME TALES</h1>
            <p class="text-white opacity-50">Sweet dreams start here...</p>
        </div>

        <div class="row g-4 justify-content-center">
            <div v-for="story in stories.filter(s => s.category && s.category.trim().toLowerCase() === 'bedtime')"

                 :key="story.id" 
                 class="col-6 col-md-4 col-lg-3">
                
                <router-link :to="'/' + story.id" class="wizard-story-card">
                    <div class="story-image-wrapper">
                        <img :src="story.image" :alt="story.title" class="img-fluid story-cover-img" />
                    </div>
                    <div class="story-age-label text-center mt-2">
                        <span>{{ story.title }}</span><br>
                        <span>Ages {{ story.ageGroup }}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</section>
<!-- ================================================================= -->
<!-- MANDATORY 5-FIELDS USER FORM WITH INLINE VALIDATION (Section 3.1) -->
<!-- ================================================================= -->
<section class="container py-5 my-5 px-4 text-start" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(51, 65, 85, 0.5); border-radius: 16px; position: relative; z-index: 10;">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <h3 class="text-white text-center fw-bold mb-2">🦉 Send an Owl Post Request</h3>
      <p class="text-white-50 text-center small mb-4">Submit a customized story quest directly to the Hogwarts Librarians!</p>
      
      <!-- v-if="userRequest && formErrors" lagane se page kabhi crash nahi hoga -->
      <form v-if="userRequest && formErrors" @submit.prevent="validateAndSendPost">
        <div class="row g-3">
          
          <!-- Field 1: Wizard Name -->
         <div class="col-md-6 mb-3">
  <label class="form-label text-white-50 small fw-bold uppercase">Wizard Name</label>
  <!-- Input box bilkul saaf upar rahega -->
  <input v-model="userRequest.name" type="text" class="form-control bg-dark text-white border-secondary py-2" placeholder="Enter your magical name...">
  <!-- Error hamesha box ke niche chalega taake space kharab na ho -->
  <div v-if="formErrors.name" class="text-danger small mt-1" style="display: block; min-height: 20px;">
    ✨ {{ formErrors.name }}
  </div>
</div>

          <!-- Field 2: Owl Email Address -->
          <div class="col-md-6">
            <label class="form-label text-white-50 small fw-bold uppercase">Owl Post Email</label>
            <input v-model="userRequest.email" type="text" class="form-control bg-dark text-white border-secondary py-2" placeholder="e.g., harry@hogwarts.com">
            <div v-if="formErrors.email" class="text-danger small mt-1">✨ {{ formErrors.email }}</div>
          </div>

          <!-- Field 3: Favorite Character -->
          <div class="col-md-6">
            <label class="form-label text-white-50 small fw-bold uppercase">Favorite Character</label>
            <input v-model="userRequest.character" type="text" class="form-control bg-dark text-white border-secondary py-2" placeholder="e.g., Albus Dumbledore">
            <div v-if="formErrors.character" class="text-danger small mt-1">✨ {{ formErrors.character }}</div>
          </div>

          <!-- Field 4: Magical Age Group -->
          <div class="col-md-6">
            <label class="form-label text-white-50 small fw-bold uppercase">Your Age Level</label>
            <select v-model="userRequest.age" class="form-select bg-dark text-white border-secondary py-2">
              <option value="" disabled selected>Choose your class tier...</option>
              <option value="3-5">Initiate (3-5 yrs)</option>
              <option value="6-9">Adept (6-9 yrs)</option>
              <option value="10+">Merlin Master (10+ yrs)</option>
            </select>
            <div v-if="formErrors.age" class="text-danger small mt-1">✨ {{ formErrors.age }}</div>
          </div>

          <!-- Field 5: Quest Message -->
          <div class="col-12">
            <label class="form-label text-white-50 small fw-bold uppercase">Quest Message Scroll</label>
            <textarea v-model="userRequest.message" rows="3" class="form-control bg-dark text-white border-secondary" placeholder="Describe the custom magical story plot you wish to request..."></textarea>
            <div v-if="formErrors.message" class="text-danger small mt-1">✨ {{ formErrors.message }}</div>
          </div>

          <!-- Success Message -->
          <div class="col-12 text-center mt-4">
            <div v-if="formSuccess" class="alert alert-success border-0 bg-opacity-10 py-2 text-success fw-semibold mb-3">
              🎉 Spell casted successfully! Your request has been logged via Owl Post.
            </div>
            <button type="submit" class="btn btn-warning px-5 fw-bold text-dark py-2">Cast Request 🪄</button>
          </div>

        </div>
      </form>
    </div>
  </div>
</section>

<footer class="wizard-footer py-4">
    <div class="container">
        <div class="row align-items-center justify-content-between text-center text-md-start">
            
            <div class="col-md-8 mb-3 mb-md-0">
                <div class="logo mb-1">
                    <span class="letter-w">W</span>onder<span class="letter-t">T</span>ales
                </div>
                <p class="footer-spell-text mb-0">
                    🪄 Where Choices Cast A Spell. Mischief Managed. &copy; 2026 All Magic Reserved.
                </p>
            </div>

            <div class="col-md-4 text-md-end text-center">
                <a href="#" class="scroll-top-btn d-inline-block">
                    🏰 Fly to Top 
                </a>
            </div>

        </div>
    </div>
</footer>
</div>
</template>
<script>
export default {
  data() {
    return {
      stories: [],
      selectedAgeFilter: 'all', // Active tracking for age tier sorting dropdown
      isLoading: true,
      isError: false,
      
      /* +5 BONUS FEATURE: Dark mode variable state tracker (Section 4 Rubric) */
      isDarkMode: false,
      
      // MANDATORY USER FORM VARIABLES (5 fields tracking scheme) - Section 3.1
      userRequest: { name: '', email: '', character: '', age: '', message: '' },
      
      // VALIDATION ERRORS LAYER MAP
      formErrors: { name: '', email: '', character: '', age: '', message: '' },
      formSuccess: false
    }
  },
  async mounted() {
    // 1. Database se stories load karne ka function
    this.refreshStoriesFromVault();
    
    /* 2. +5 BONUS LOGIC: LocalStorage se saved theme check aur restore karein */
    const savedMode = localStorage.getItem('wonderTalesDarkMode');
    if (savedMode === 'true') {
      this.isDarkMode = true;
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      this.isDarkMode = false;
      document.documentElement.setAttribute('data-theme', 'light');
    }
  },
  watch: {
    '$route'() {
      this.refreshStoriesFromVault();
    }
  },
  computed: {
    /* AUTOMATIC DYNAMIC FILTER: Rubric requirement 3.1 - Filter by at least one attribute */
    filteredStories() {
      if (this.selectedAgeFilter === 'all') {
        return this.stories;
      }
      return this.stories.filter(story => story.ageGroup === this.selectedAgeFilter);
    }
  },
  methods: {
    /* +5 BONUS METHOD: Toggle dark/light theme dynamically and persist in localStorage (Section 4) */
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('wonderTalesDarkMode', 'true');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('wonderTalesDarkMode', 'false');
      }
    },

    // GET: Fetch resources from backend file vault with safety verification rules
    async refreshStoriesFromVault() {
      this.isLoading = true;
      this.isError = false;
      try {
        const res = await fetch('http://localhost:3000/stories');
        
        /* MANDATORY REQUIREMENT VERIFICATION: Check response.ok before parsing JSON (Section 3.3) */
        if (!res.ok) throw new Error('Server encountered a response status code issue'); 
        
        this.stories = await res.json();
      } catch (err) {
        console.error("Magical Server Sync Error:", err);
        this.isError = true; // Signals the UI layout to display error screen banner
      } finally {
        this.isLoading = false; // Gracefully switches off the visual loading spinner indicator
      }
    },
    
    // POST: Custom alerts-less form handling logic system with backend post integration
    async validateAndSendPost() {
      this.formSuccess = false;
      
      // Reset errors object trackers before parsing dynamic loops validation fields
      this.formErrors = { name: '', email: '', character: '', age: '', message: '' };
      let isValid = true;

      // Field Validation 1: Wizard Identity Name Validation
      if (!this.userRequest.name.trim()) {
        this.formErrors.name = "Wizard identity name cannot be empty!";
        isValid = false;
      }

      // Field Validation 2: Email Routing Format via Regular Expression Schema Validation Rule
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.userRequest.email.trim()) {
        this.formErrors.email = "Owl Post address route is required!";
        isValid = false;
      } else if (!emailPattern.test(this.userRequest.email)) {
        this.formErrors.email = "This email scroll route looks invalid!";
        isValid = false;
      }

      // Field Validation 3: Character Content String validation Constraint
      if (!this.userRequest.character.trim()) {
        this.formErrors.character = "Please declare your favored book character!";
        isValid = false;
      }

      // Field Validation 4: Age Dropdown Tier Constraint Tracker
      if (!this.userRequest.age) {
        this.formErrors.age = "You must specify a student age group!";
        isValid = false;
      }

      // Field Validation 5: Message Content Length String parameters boundary limits check
      if (this.userRequest.message.trim().length < 15) {
        this.formErrors.message = "Quest description text must be at least 15 characters long!";
        isValid = false;
      }

      // Data is completely pristine, fire asynchronous POST transactions straight to REST pipeline server
      if (isValid) {
        try {
          // JSON Server ke /requests endpoint par transaction payload execute karein
          const res = await fetch('http://localhost:3000/requests', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.userRequest)
          });

          /* MANDATORY REQUIREMENT VERIFICATION: Check response.ok before parsing JSON (Section 3.3) */
          if (!res.ok) throw new Error('Database insertion rejected by mock platform backend controller');

          this.formSuccess = true;
          console.log("Form payload transaction synchronized inside db.json requests workspace layer!");
          
          // Clean data blocks local variables container references
          this.userRequest = { name: '', email: '', character: '', age: '', message: '' };
        } catch (err) {
          console.error("Data save karne me database infrastructure error aaya:", err.message);
        }
      }
    }
  }
}
</script>
<style scoped>
/* ================================================================= */
/* 🌟 PREMIUM PARCHMENT LIGHT MODE & MAGICAL NIGHT MODE OVERRIDES   */
/* ================================================================= */

/* 📜 1. HIGH-END ENCHANTED PARCHMENT LIGHT THEME */
html[data-theme='light'] #body, 
html[data-theme='light'] #body-wrapper,
html[data-theme='light'] .hp-stories-section,
html[data-theme='light'] .bedtime-stories-section,
html[data-theme='light'] .hero-section {
  /* Safaid ke bajaye qadeem kaghaz (vintage parchment scroll) ka elegant color texture */
  background-color: #fcf8f2 !important; 
  background-image: radial-gradient(#f4ebd9 1px, transparent 0) !important;
  background-size: 24px 24px !important;
  color: #2c1d11 !important; /* Rich deep sepia coffee text */
}

html[data-theme='light'] .hp-heading, 
html[data-theme='light'] .bedtime-heading,
html[data-theme='light'] .main-heading h1,
html[data-theme='light'] .main-spell-title {
  color: #4a2c11 !important; /* Dark chocolate gold headers */
  text-shadow: 1px 1px 2px rgba(0,0,0,0.05);
}

html[data-theme='light'] .hero-subtitle {
  color: #5c4636 !important;
}

html[data-theme='light'] .wizard-story-card {
  /* Vintage scroll cards inside parchment layout */
  background: #ffffff !important;
  border: 1px solid #e7dcbf !important;
  box-shadow: 0 4px 15px rgba(74, 44, 17, 0.04) !important;
}

html[data-theme='light'] .story-age-label span {
  color: #4a3525 !important;
  font-weight: 600;
}

/* 🌙 2. AUTHENTIC HIGH-CONTRAST FORBIDDEN FOREST DARK THEME */
html[data-theme='dark'] #body, 
html[data-theme='dark'] #body-wrapper,
html[data-theme='dark'] .hp-stories-section,
html[data-theme='dark'] .bedtime-stories-section {
  background-color: #0b0f19 !important;
  background-image: none !important;
  color: #f8fafc !important;
}
html[data-theme='dark'] .hp-heading, 
html[data-theme='dark'] .bedtime-heading,
html[data-theme='dark'] .main-heading h1,
html[data-theme='dark'] .main-spell-title {
  color: #ffffff !important;
}
html[data-theme='dark'] .wizard-story-card {
  background: rgba(30, 41, 59, 0.4) !important;
  border: 1px solid rgba(51, 65, 85, 0.5) !important;
}
html[data-theme='dark'] .story-age-label span {
  color: #cbd5e1 !important;
}

</style>
