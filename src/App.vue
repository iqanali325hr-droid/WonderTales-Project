<template>
  <router-view /> </template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* top container */
:root {
    --void-dark: #05020a;          
    --chamber-purple: #130a2a;     
    --gold-snitch: #f1c40f;       
    --bright-sparkle: #fff4cc;     
    --parchment-scroll: #f5eedc;  
}

#body {
    background-image: url("../public/images/castel.jpg");
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-color: var(--void-dark);
    font-family: 'Fredoka', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    color: var(--parchment-scroll);

}
.sky-zone-forbidden-forest {
    position: fixed;
    top: 0; 
    left: 0; 
    width: 100vw; 
    height: 100vh;
    background: radial-gradient(circle at 50% 30%, rgba(19, 10, 42, 0.88) 0%, rgba(5, 2, 10, 0.96) 90%);  
    pointer-events: none;
    z-index: 1; 
}

.hero-section {
    position: relative;
    z-index: 5;
    min-height: 100vh;
    padding-top: 150px;
    padding-bottom: 100px;
    display: flex;
    align-items: center;
}
.flying-jharo {
    position: absolute;
    font-size: 2.3rem;
    z-index: 3;
    pointer-events: none;
    animation: flight-pass 16s linear infinite;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.6));
}
.magic-dust {
    font-size: 1rem;
    position: relative;
    top: -8px;
    opacity: 0.8;
}

/* 2. Choti Choti Floating Cheezen (Wizard Cap, Orb, Particles) */
.floating-magic {
    position: absolute;
    z-index: 2;
    font-size: 1.8rem;
    pointer-events: none;
    animation: floating-sway 4s ease-in-out infinite;
    opacity: 0.7;
}
.item-1 { top: 25%; right: 15%; animation-delay: 1s; }                 
.item-2 { bottom: 25%; left: 8%; animation-delay: 2s; }                 /* Magic Orb 🔮 */
.item-3 { top: 18%; left: 45%; animation-delay: 0.5s; font-size: 1.2rem; } /* Magic Dust ✨ */

/* 3. Great Hall Floating Candles Layout */
.candles-zone {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 2;
    pointer-events: none;
}
.magic-candle {
    position: absolute;
    width: 6px; height: 35px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 3px;
    box-shadow: 0 0 8px #ffffff, 0 -3px 10px var(--gold-snitch);
}
.magic-candle::before { 
    content: ''; position: absolute;
    top: -7px; left: -1px; width: 7px; height: 7px;
    background: #ff9d00; border-radius: 50% 50% 20% 20%;
    box-shadow: 0 0 8px #ff6a00;
}
.c1 { top: 12%; left: 5%; animation: float-candle 6s infinite ease-in-out; }
.c2 { top: 22%; left: 38%; animation: float-candle 8s infinite ease-in-out 1s; }
.c3 { top: 15%; left: 65%; animation: float-candle 7s infinite ease-in-out 0.5s; }
.c4 { top: 28%; left: 92%; animation: float-candle 9s infinite ease-in-out 2s; }
 /* FLOATING WIZARD NAVBAR */
.custom-nav {
    background: rgba(5, 2, 10, 0.9) !important;
    backdrop-filter: blur(12px);
    border-bottom: 2px double rgba(241, 196, 15, 0.25);
    padding: 12px 0;
    box-shadow: 0 10px 40px rgba(0,0,0,0.9);
}
.logo {
    font-family: 'Cinzel Decorative', serif;
    font-weight: 900;
    font-size: 1.9rem;
    color: #ffffff !important;
    text-shadow: 0 0 15px rgba(241, 196, 15, 0.5);
}
.letter-w, .letter-t {
    color: var(--gold-snitch);
    font-weight: 900;
}
.nav-btn {
    font-family: 'Cinzel', serif;
    font-weight: 700;
    color: #b3a7cc !important;
    letter-spacing: 1.2px;
    transition: 0.3s ease;
}
.nav-btn:hover, .nav-btn.active {
    color: var(--gold-snitch) !important;
    text-shadow: 0 0 8px rgba(241, 196, 15, 0.5);
    background: rgba(241, 196, 15, 0.04);
}

.main-spell-title {
    font-family: 'Cinzel Decorative', serif;
    font-size: 4rem;
    font-weight: 900;
    line-height: 1.25;
    color: #ffffff;
    text-shadow: 0 4px 15px rgba(0,0,0,0.95);
}
.letter-cinzel {
    font-size: 4.8rem;
    color: var(--gold-snitch);
}
.hero-subtitle {
    font-size: 1.25rem;
    color: #cbd5e1;
    max-width: 530px;
    line-height: 1.7;
}

/* Action Buttons */
.btn-spell-cast {
    background: linear-gradient(135deg, var(--gold-snitch) 0%, #d35400 100%);
    color: var(--void-dark);
    border: 1px solid var(--bright-sparkle);
    padding: 15px 40px;
    font-family: 'Cinzel', serif;
    font-weight: 800;
    letter-spacing: 1px;
    border-radius: 2px;
    box-shadow: 0 0 20px rgba(241, 196, 15, 0.3);
    transition: 0.4s ease;
}
.btn-spell-cast:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 35px var(--gold-snitch);
    background: #ffffff;
    color: #000000;
}
.btn-owl-post {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(241, 196, 15, 0.4);
    color: var(--gold-snitch);
    padding: 15px 40px;
    font-family: 'Cinzel', serif;
    font-weight: 700;
    border-radius: 2px;
    transition: 0.3s;
}
.btn-owl-post:hover {
    background: rgba(241, 196, 15, 0.1);
    color: white;
}

/* Sorting Panel */
.sorting-hat-filter-panel {
    background: rgba(17, 9, 38, 0.75);
    border: 1px solid rgba(241, 196, 15, 0.2);
    box-shadow: 0 15px 40px rgba(0,0,0,0.6);
    border-radius: 12px;
    padding: 25px;
    backdrop-filter: blur(10px);
}
.filter-spell-title {
    font-family: 'Cinzel', serif;
    font-size: 0.95rem;
    color: var(--gold-snitch);
    margin-bottom: 10px;
    display: block;
}
.parchment-select {
    background: #05020a;
    border: 1px solid rgba(241, 196, 15, 0.3);
    color: var(--parchment-scroll);
    border-radius: 4px;
    padding: 12px;
}

/* ==========================================
   7. ARCHED WINDOW PORTAL FRAME
   ========================================== */
.arched-window-portal {
    position: relative;
    padding: 20px;
    display: inline-block;
    z-index: 5;
}
.magic-portal-halo {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 106%; height: 106%;
    border-radius: 50% 50% 0 0;
    box-shadow: 0 0 50px rgba(241, 196, 15, 0.15);
    pointer-events: none;
}
.portal-view {
    background: #05020a;
    border: 4px double var(--gold-snitch);
    border-radius: 300px 300px 20px 20px;
    padding: 25px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.9);
}
.wizard-asset {
    max-height: 480px;
    object-fit: cover;
    animation: floating-asset 6s ease-in-out infinite;
    filter: drop-shadow(0 15px 25px rgba(0,0,0,0.7));
}
.spell-tag {
    display: inline-block;
    margin-top: 20px;
    background: rgba(19, 10, 42, 0.9);
    color: var(--gold-snitch);
    border: 1px solid var(--gold-snitch);
    padding: 5px 25px;
    font-family: 'Cinzel', serif;
    font-size: 0.85rem;
    letter-spacing: 2px;
}

/* ==========================================
   8. KEYFRAMES ANIMATION ENGINES
   ========================================== */
@keyframes floating-sway {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}
@keyframes float-candle {
    0%, 100% { transform: translateY(0); opacity: 0.6; }
    50% { transform: translateY(-12px); opacity: 0.95; }
}
@keyframes floating-asset {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-10px) scale(1.02); }
}
@keyframes flight-pass {
    0% { top: 80%; left: -15%; transform: rotate(15deg); }
    50% { top: 18%; left: 45%; transform: rotate(5deg); }
    100% { top: 50%; left: 115%; transform: rotate(20deg); }
}

.wave-transition {
    position: absolute;
    bottom: -10px;
    width: 100%; height: 100px;
    background: linear-gradient(to top, var(--void-dark), transparent);
    z-index: 6;
}
.wizard-dropdown-menu {
    background: rgba(5, 2, 10, 0.95) !important;
    border: 1px solid rgba(241, 196, 15, 0.3) !important;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 6px !important;
    padding: 8px 0 !important;
    margin-top: 10px !important;
}

.wizard-dropdown-menu .dropdown-item {
    font-family: 'Fredoka', sans-serif;
    color: var(--parchment-scroll) !important;
    font-size: 0.95rem;
    padding: 10px 20px;
    transition: all 0.2s ease;
}

.wizard-dropdown-menu .dropdown-item small {
    display: block;
    font-size: 0.75rem;
    color: #b3a7cc;
}

.wizard-dropdown-menu .dropdown-item:hover {
    background: rgba(241, 196, 15, 0.1) !important;
    color: var(--gold-snitch) !important;
    padding-left: 24px;
}
.nav-btn.dropdown-toggle::after {
    color: var(--gold-snitch);
    margin-left: 8px;
}
/* ==========================================
   WIZARD NAME INPUT FIELD GLOW STYLE
   (Add this at the very end of your style.css)
   ========================================== */
input.parchment-select {
    background-color: #05020a !important;
    border: 1px solid rgba(241, 196, 15, 0.3) !important;
    color: var(--parchment-scroll) !important;
    padding: 12px;
    border-radius: 4px;
    transition: all 0.3s ease;
}

/* Jab bacha name box par click kare toh gold glow aaye */
input.parchment-select:focus {
    background-color: #0d0614 !important;
    border-color: var(--gold-snitch) !important;
    box-shadow: 0 0 10px rgba(241, 196, 15, 0.3) !important;
    outline: none;
}

/* Placeholder text ka color thora light rakhne ke liye */
input.parchment-select::placeholder {
    color: rgba(245, 238, 220, 0.4) !important;
}
.main-heading{
     color:white;
    position: relative;
    z-index: 10;
    margin-top: 50px;
}
.main-heading h1 {
    font-family: 'Cinzel Decorative', serif;
    font-weight: 900;
    color: var(--gold-snitch);
    text-shadow: 0 4px 15px rgba(241, 196, 15, 0.4);
    letter-spacing: 2px;
    font-size: 3rem;
}
/* section css */

.stories-showcase-section {
    position: relative;
    z-index: 10;
    background-color: #05020a;
}


.wizard-story-card {
    display: block;
    text-decoration: none !important; 
    background: transparent;
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}


.wizard-story-card:hover {
    transform: translateY(-8px);
}


.story-image-wrapper {
    aspect-ratio: 1 / 1; 
    overflow: hidden;
    border-radius: 4px;
    border: 1px solid rgba(241, 196, 15, 0.15);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.wizard-story-card:hover .story-image-wrapper {
    border-color: rgba(241, 196, 15, 0.6);
    box-shadow: 0 12px 25px rgba(241, 196, 15, 0.2);
}

.story-cover-img {
    width: 100%;
    height: 100%;
   object-fit: contain; 
    background-color: #05020a;
}
.story-age-label span {
    font-family: 'Fredoka', sans-serif;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    color: rgba(245, 238, 220, 0.7); 
    transition: color 0.3s ease;
}
.wizard-story-card:hover .story-age-label span {
    color: #f1c40f; 
}

/* img chracter  */
.magical-character-container {
    display: flex;
    justify-content: center; 
    margin: 40px auto;
    position: relative;
    z-index: 10;
}

.wizard-character {
    width: 250px; 
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--gold-snitch); 
    box-shadow: 0 0 20px rgba(241, 196, 15, 0.4), inset 0 0 20px rgba(0,0,0,0.6);
    background: #0d0614;
    
  /* animation to fly ..... */
    animation: Float 4s ease-in-out infinite;
}

.character-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Hawa me floating effect ki coding */
@keyframes Float {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-12px); 
    }
    100% {
        transform: translateY(0px);
    }
}
/* harry potter collection */
.hp-heading {
    color: #f1c40f; 
    text-shadow: 0 0 10px rgba(241, 196, 15, 0.5);
    font-family: 'Cinzel', serif; 
    letter-spacing: 2px;
}

.hp-stories-section {
    background-color: #0d0614; 
    border-top: 1px solid rgba(241, 196, 15, 0.1);
}
/* bed tales */

.bedtime-heading {
    color: #a29bfe;
    text-shadow: 0 0 15px rgba(162, 155, 254, 0.4);
    font-family: 'Fredoka', sans-serif;
}

.bedtime-stories-section {
    background-color: #080a14; 
    border-top: 1px solid rgba(162, 155, 254, 0.2);
}
/* footer */
.wizard-footer {
    background: linear-gradient(to top, #020105 0%, var(--void-dark) 100%);
    border-top: 2px double rgba(241, 196, 15, 0.25);
    position: relative;
    z-index: 10;
}

.footer-spell-text {
    font-size: 0.95rem;
    color: rgba(245, 238, 220, 0.6);
    letter-spacing: 0.5px;
}

.scroll-top-btn {
    color: var(--gold-snitch);
    text-decoration: none !important;
    font-family: 'Cinzel', serif;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 1px;
    border: 1px solid rgba(241, 196, 15, 0.3);
    padding: 8px 18px;
    border-radius: 4px;
    background: rgba(5, 2, 10, 0.5);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.scroll-top-btn:hover {
    background: rgba(241, 196, 15, 0.1);
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(241, 196, 15, 0.3);
    border-color: var(--gold-snitch);
}

/* ..................................story-detail............................................... */
/* harry potter  */
/* part 1  */
/* ==========================================================================
   14. SYSTEM MASTER HARRY POTTER STORY INTERFACE - FORCE FIXED
   ========================================================================== */
body.hp-master-dark-bg {
    background: #040209 !important;
    color: #ffffff !important;
}

.hp-universe-badge {
    background: rgba(241, 196, 15, 0.1) !important;
    border: 1px solid #f1c40f !important;
    color: #f1c40f !important;
    font-family: 'Cinzel', serif !important;
    padding: 6px 16px !important;
    letter-spacing: 1.5px !important;
    display: inline-block !important;
}

.hp-story-main-title {
    font-family: 'Cinzel Decorative', serif !important;
    font-weight: 900 !important;
    color: #ffffff !important;
    text-shadow: 0 4px 15px rgba(0,0,0,0.8) !important;
}

.hp-back-btn {
    color: #f1c40f !important;
    font-family: 'Cinzel', serif !important;
    border: 1px solid rgba(241, 196, 15, 0.3) !important;
    padding: 8px 20px !important;
    border-radius: 4px !important;
    background: rgba(14, 7, 26, 0.6) !important;
    transition: all 0.3s ease !important;
    display: inline-block !important;
}
.hp-back-btn:hover {
    background: #f1c40f !important;
    color: #000000 !important;
    box-shadow: 0 0 15px #f1c40f !important;
}

/* 3D Book Grid Wrapper */
.hp-3d-storybook {
    position: relative !important;
    background: #190e04 !important; 
    padding: 10px !important;
    border-radius: 14px !important;
    box-shadow: 0 30px 60px rgba(0,0,0,0.9) !important;
    margin-top: 20px !important;
}

.book-pages-container {
    background: #000000 !important;
    border-radius: 8px !important;
    overflow: hidden !important;
}

.hp-page-inner {
    padding: 40px !important;
    min-height: 500px !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
}

/* Left Page Mechanics */
.hp-page-left {
    background: #090514 !important;
    box-shadow: inset -20px 0 40px rgba(0,0,0,0.8) !important;
}

.hp-illustration-window {
    border: 2px solid rgba(241, 196, 15, 0.2) !important;
    border-radius: 8px !important;
    overflow: hidden !important;
    position: relative !important;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5) !important;
}

.hp-scene-image {
    width: 100% !important;
    height: 100% !important;
    max-height: 420px !important;
    object-fit: contain !important;
    display: block !important;
    background-color: #05020a;
}

/* Right Parchment Page Mechanics */
.hp-page-right {
    box-shadow: inset 20px 0 40px rgba(0,0,0,0.3) !important;
}

.hp-parchment-texture {
    background: #f5eedc !important; 
    color: #1a0f02 !important; 
}

.hp-ink-text-area {
    font-family: 'Fredoka', sans-serif !important;
    font-size: 1.15rem !important;
    line-height: 1.8 !important;
    text-align: justify !important;
    color: #1a0f02 !important;
}

.hp-drop-cap {
    font-family: 'Cinzel Decorative', serif !important;
    font-size: 3.5rem !important;
    font-weight: 900 !important;
    float: left !important;
    line-height: 0.8 !important;
    margin-right: 8px !important;
    color: #721c24 !important;
}

.hp-story-p {
    margin-bottom: 18px !important;
    color: #1a0f02 !important;
}

.hp-page-number {
    text-align: center !important;
    font-family: 'Cinzel', serif !important;
    font-size: 0.8rem !important;
    color: rgba(26, 15, 2, 0.4) !important;
    margin-top: auto !important;
}

/* Center Binding Spine simulation */
.hp-book-spine {
    position: absolute !important;
    top: 10px !important; left: 50% !important;
    transform: translateX(-50%) !important;
    width: 14px !important;
    height: calc(100% - 20px) !important;
    background: linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%) !important;
    z-index: 10 !important;
}

/* CHOICE SPELL CARDS */
.hp-choice-heading {
    font-family: 'Cinzel Decorative', serif !important;
    color: #f1c40f !important;
    font-size: 1.3rem !important;
}

.hp-spell-card {
    background: linear-gradient(135deg, #120926 0%, #06030d 100%) !important;
    border: 1px solid rgba(241, 196, 15, 0.15) !important;
    padding: 18px !important;
    border-radius: 12px !important;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
    color: #ffffff !important;
}

.hp-card-flex {
    display: flex !important;
    align-items: center !important;
    gap: 15px !important;
}

.hp-spell-icon {
    font-size: 2rem !important;
    background: rgba(0, 0, 0, 0.3) !important;
    padding: 8px !important;
    border-radius: 8px !important;
    transition: all 0.3s ease !important;
}

.hp-spell-texts h4 {
    font-family: 'Cinzel', serif !important;
    color: #ffffff !important;
    font-size: 1.05rem !important;
    margin-bottom: 4px !important;
}

.hp-spell-texts p {
    font-size: 0.85rem !important;
    color: #a4b0be !important;
    margin: 0 !important;
}

/* Card Hovers */
.hp-spell-card:hover {
    transform: translateY(-5px) !important;
    border-color: #f1c40f !important;
    box-shadow: 0 10px 25px rgba(241, 196, 15, 0.15) !important;
}
.hp-spell-card:hover .hp-spell-icon {
    background: #f1c40f !important;
    transform: scale(1.05) !important;
}
.hp-spell-card:hover .hp-spell-texts h4 {
    color: #f1c40f !important;
}

/* Responsive Overrides */
@media (max-width: 991px) {
    .hp-book-spine { display: none !important; }
    .hp-page-left { border-bottom: 2px solid #190e04 !important; }
    .hp-page-inner { padding: 25px 20px !important; min-height: auto !important; }
}
/* popular stories  */
/* ==========================================================================
   1. ROOT VARIABLES
   ========================================================================== */
:root {
    --void-dark: #05020a;          
    --chamber-purple: #130a2a;     
    --gold-snitch: #f1c40f;       
    --bright-sparkle: #fff4cc;     
    --parchment-scroll: #f5eedc;  
}

/* ==========================================================================
   2. GLOBAL BODY & STORY PAGE BACKGROUND (FIXED)
   ========================================================================== */
body {
    font-family: 'Fredoka', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    color: var(--parchment-scroll);
    background-color: var(--void-dark);
}

/* Ye class aapki body par apply hogi (the-gardian-of-lord.html mein) */
.story-page-bg {
    background: url('../public/images/story1.webp') no-repeat center center fixed !important;
    background-size: cover !important;
    min-height: 100vh !important;
}
.story-page-bg2 {
    background: url('../public/images/story6.webp') no-repeat center center fixed !important;
    background-size: cover !important;
    min-height: 100vh !important;
}
.story-page-bg3{
     background: url('../public/images/story8.webp') no-repeat center center fixed !important;
    background-size: cover !important;
    min-height: 100vh !important;
}
/* ==========================================================================
   3. GLASS CONTAINER (STORY DETAIL PAGE)
   ========================================================================== */
.chapter-container {
    background: rgba(0, 0, 0, 0.7) !important;
    backdrop-filter: blur(10px) !important;
    padding: 40px;
    border-radius: 20px;
    border: 1px solid var(--gold-snitch) !important;
    margin: 50px auto !important;
    max-width: 1000px !important;
    width: 90% !important;
    color: #eee;
}

.nav-card {
    background: rgba(0, 0, 0, 0.4) !important;
    border: 1px solid var(--gold-snitch) !important;
    border-radius: 15px;
}

.chapter-link {
    color: var(--gold-snitch);
    text-decoration: none;
    display: block;
    padding: 8px 0;
    transition: 0.3s;
}

.chapter-link:hover {
    color: #fff;
    padding-left: 10px;
}

.story-section {
    padding-top: 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid #333;
}

.story-section h3 {
    color: var(--gold-snitch);
    margin-bottom: 15px;
}

/* ==========================================================================
   4. HOME PAGE ELEMENTS (KEEPING PREVIOUS STYLES)
   ========================================================================== */
.custom-nav {
    background: rgba(5, 2, 10, 0.9) !important;
    backdrop-filter: blur(12px);
    border-bottom: 2px double rgba(241, 196, 15, 0.25);
    padding: 12px 0;
}

.btn-spell-cast {
    background: linear-gradient(135deg, var(--gold-snitch) 0%, #d35400 100%);
    color: var(--void-dark);
    padding: 15px 40px;
    font-family: 'Cinzel', serif;
    font-weight: 800;
    border-radius: 2px;
}

/* ==========================================================================
   5. KEYFRAMES
   ========================================================================== */
@keyframes Float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
}

/* ==========================================================================
   6. RESPONSIVE FIXES
   ========================================================================== */
@media (max-width: 768px) {
    .chapter-container { padding: 20px; }
}
/* Back to Top Button Styling */
.back-to-top-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: rgba(241, 196, 15, 0.2); /* Gold transparent */
    color: #f1c40f;
    border: 1px solid #f1c40f;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 45px;
    font-size: 24px;
    text-decoration: none;
    border-radius: 50%;
    transition: all 0.3s ease;
    z-index: 1000;
}

.back-to-top-btn:hover {
    background: #f1c40f;
    color: #05020a;
    box-shadow: 0 0 15px #f1c40f;
    transform: translateY(-5px);
}
/* --- Story Page Specific Styles --- */

.story-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fdfcf8; /* Light paper background */
}

.story-container article {
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.story-content {
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: center;
    margin: 30px 0;
    color: white;
}

.story-content p {
    margin-bottom: 20px;
}

.video-container {
    background: #eee;
    padding: 50px;
    text-align: center;
    border: 2px dashed #ccc;
    margin-top: 30px;
}

.story-footer {
    margin-top: 50px;
    text-align: center;
    font-size: 0.9rem;
    color: #777;
}
/* --- Story Page Minimalist Design --- */
/* Story Page Styles */
.story-page-wrapper {
    max-width: 700px;
    margin: 40px auto;
    text-align: center;
    font-family: 'Georgia', serif;
    color: #222;background-color: white;
}

.story-page-wrapper h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
}

.story-description {
    font-size: 1.1rem;
    margin-bottom: 30px;
    line-height: 1.5;
}

.story-meta {
    font-size: 1rem;
    margin-bottom: 40px;
    color: #555;
}

.story-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    margin-bottom: 40px;
}

.story-text {
    font-size: 1.25rem;
    line-height: 2;
    text-align: center;
}

.stanza {
    margin-bottom: 30px;
}
#white{
    background-color: white;
}
#hair {
    background-color: #ffffff;
    color: #333;
}

h1 {
    font-family: 'Alegreya Sans', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.story-content {
    font-family: 'EB Garamond', serif; /* Elegant storybook font */
    font-size: 1.4rem;
    line-height: 1.8;
}

.story-content p {
    margin-bottom: 1.5rem;
}

.img-fluid {
    width: 100%;
    transition: transform 0.3s ease;
}
.story-part p {
    font-size: 1.25rem;
    line-height: 2;
    margin-bottom: 1.5rem;
    color: #333;
}

.image-container {
    margin-top: 2rem;
}

.image-container img {
    max-width: 100%;
    height: auto;
}
.video-section h3 {
    font-family: 'Alegreya Sans', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #333;
}

.ratio {
    max-width: 800px;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
/* story bed time..................................................................................................... */
/* General page setup */
/* Custom Typography */
#body1{
    background-color: #03041a; /* Darker navy fallback */
    background-size: 110%; /* Reduced from cover to prevent zoom and show more of the image */
    background-position: center bottom; /* Better alignment for story text */
    background-attachment: scroll; /* Fixed is often the cause of bad zooming */
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    color: #e0e6ed;
    overflow-x: hidden; /* Prevent horizontal scroll from bg scale */
}

/* Glassmorphism Refined */
.content-box.premium-glass {
    background: rgba(0, 0, 0, 0.7); /* Darker overlay for better text contrast */
    padding: 60px; /* More breathing room */
    border-radius: 25px; /* Softer corners */
    backdrop-filter: blur(12px) saturate(180%);
    -webkit-backdrop-filter: blur(12px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    margin-bottom: 50px;
}

/* Story Elements */
.story-title {
    font-family: 'Playfair Display', serif;
    color: #ffd700; /* Rich gold for title */
    margin-bottom: 15px;
    font-size: 3rem;
    font-weight: 700;
}

.story-lead {
    font-size: 1.25rem;
    font-weight: 300;
    font-style: italic;
    color: #c0c9d6;
    margin-bottom: 35px;
    text-align: center;
}

.story-body p {
    font-size: 1.15rem;
    line-height: 1.9;
    margin-bottom: 1.8rem;
    color: #f1f4f8; /* Softer ivory for readability */
}

.story-footer-thought {
    font-weight: 300;
    color: #a0aec0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 20px;
}

/* Premium Button Styling */
.btn-premium-outline {
    color: #ffd700;
    border: 1px solid #ffd700;
    border-radius: 50px;
    padding: 8px 24px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-premium-outline:hover {
    background-color: #ffd700;
    color: #03041a;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
}

/* Video Section Refined */
.premium-divider {
    border-top: 2px solid rgba(255, 215, 0, 0.2);
    width: 60%;
    margin-left: auto;
    margin-right: auto;
}

.premium-video-title {
    font-family: 'Playfair Display', serif;
    color: #ffd700;
    font-size: 2rem;
}

.premium-video-container {
    padding: 10px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}
.footer {
    background: rgba(0, 0, 0, 0.4);
    color: #888;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;
}

.footer a {
    color: #ffd700;
    text-decoration: none;
    margin: 0 10px;
    transition: 0.3s;
}

.footer a:hover {
    color: white;
}
.wizard-story-card {
    position: relative;
    z-index: 10;
    display: block;
    text-decoration: none;
}

/* Agar dark overlay hai toh usse remove/light karein */
.bedtime-stories-section {
    position: relative;
    z-index: 1;
}
/* back button */
/* Elegant Back to Library Button Style */
.btn-back-library {
  background-color: #ffffff !important;
  border: 1px solid #cbd5e1 !important;
  color: #334155 !important;
  font-weight: 600 !important;
  font-size: 14px;
  padding: 10px 20px !important;
  border-radius: 10px !important;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
}

.btn-back-library:hover {
  background-color: #f1f5f9 !important;
  color: #0f172a !important;
  border-color: #94a3b8 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05) !important;
}

</style>
