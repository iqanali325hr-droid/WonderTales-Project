<template>
    <body v-if="story" class="hp-master-dark-bg">

    <main class="hp-story-wrapper py-5">
        <div class="container pt-4">
            
            <div class="mb-4">
                <router-link to="/" class="hp-back-btn text-decoration-none">🏰 Back to Great Hall</router-link>
            </div>

            <div class="text-center mb-5">
                <span class="badge hp-universe-badge mb-2">⚡ WIZARDING YEAR V</span>
                <h1 class="hp-story-main-title">{{story.title}}</h1>
                <span>Ages {{ story.ageGroup }}</span>
            </div>

            <div class="hp-3d-storybook">
                <div class="hp-book-spine"></div>
                
                <div class="row g-0 book-pages-container">
                    
                    <div class="col-lg-6 hp-page-left">
                        <div class="hp-page-inner">
                            <div class="hp-illustration-window">
                                <img :src="story.image" alt="Story Scene" class="hp-scene-image">
                                <div class="hp-image-vignette"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 hp-page-right">
                        <div class="hp-page-inner hp-parchment-texture">
                            <div class="hp-ink-text-area">
                                <span class="hp-drop-cap">T</span>
                                <p class="hp-story-p">
                                  {{ story.pages[currentPage] }}
                                </p>
                            </div>
                            <div class="hp-page-number" @click="turnPage" style="cursor: pointer;"><span style="font-size: 1.2rem;">📖</span>- Turn Page - </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="hp-choice-panel mt-5 text-center">
                <h3 class="hp-choice-heading mb-4">🔮 WHAT WILL YOU DO NEXT?</h3>
                
                <div class="row g-4 justify-content-center px-2">
                    
                    <div class="col-md-5">
                        <a href="#" class="hp-spell-card text-start d-block text-decoration-none">
                            <div class="hp-card-flex">
                                <div class="hp-spell-icon">🦁</div>
                                <div class="hp-spell-texts">
                                    <h4>Enter Department of Mysteries</h4>
                                    <p>Follow the whispering voices to find the hidden prophecy globe.</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="col-md-5">
                        <a href="#" class="hp-spell-card text-start d-block text-decoration-none">
                            <div class="hp-card-flex">
                                <div class="hp-spell-icon">🦅</div>
                                <div class="hp-spell-texts">
                                    <h4>Alert the Dumbledore's Army</h4>
                                    <p>Send an owl post immediately to gather your friends for help.</p>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>

        </div>
    </main>

    </body>
    <div v-else class="text-center text-white" style="margin-top: 200px;">
        <h2 class="loading-text">🪄 Loading the magical scroll...</h2>
    </div>
</template>
<script>
export default {
  data() {
    return {
      story: null,
      currentPage: 0 // Yahan se shuruat hogi
    }
  },
 async mounted() {
  try {
    const id = this.$route.params.id;
    const res = await fetch('http://localhost:3000/stories/' + id);
    
    if (!res.ok) throw new Error("Could not fetch the data"); // Guidelines requirement
    
    const data = await res.json();
    this.story = data;
  } catch (err) {
    console.error("Error loading story:", err);
    // Yahan aap ek error message state set kar sakti hain jo screen par dikhe
  }
},
  methods: {
    turnPage() {
      // Check karein ke agla safha maujood hai ya nahi
      if (this.currentPage < this.story.pages.length - 1) {
        this.currentPage++;
      } else {
        // Agar aakhri safha ho, toh wapas shuruat par aa jayein ya wahi rukein
        alert("story end!");
        this.currentPage = 0; 
      }
    }
  }
}
</script>
<style>
.hp-page-number:hover {
    color: #8b0000; /* Dark Red color */
    transform: scale(1.1); /* Halka sa bada ho jayega */
    transition: 0.3s;
}</style>

