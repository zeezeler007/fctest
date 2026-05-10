<template>
  <section class="team-section">
    <div class="team-container">

      <!-- Section heading -->
      <div class="team-header">
        <span class="section-label">Leadership</span>
        <h2 class="team-title">Our Team</h2>
        <p class="team-subtitle">
          Meet the experienced professionals driving FundCo's mission to mobilise
          local capital into Nigeria's most critical sectors.
        </p>
      </div>

      <!-- Desktop grid / Mobile single-card view -->
      <div class="team-carousel-wrapper">

        <!-- Cards -->
        <div class="team-grid">
          <div
            v-for="(member, i) in teamMembers"
            :key="member.id"
            class="team-card"
            :class="{
              'team-card--placeholder': !member.image,
              'team-card--hidden': isMobile && i !== carouselIndex
            }"
            @click="member.image && openModal(member)"
          >
            <!-- Photo / placeholder -->
            <div class="team-image-wrapper">
              <img
                v-if="member.image"
                :src="member.image"
                :alt="member.name"
                class="team-image"
              />
              <div v-else class="team-image-placeholder">
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none"
                     stroke="rgba(168,183,255,0.3)" stroke-width="1.2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span>Photo coming soon</span>
              </div>

              <!-- Bottom gradient -->
              <div class="card-gradient"></div>

              <!-- Name + role overlay -->
              <div class="card-info-overlay">
                <h3 class="member-name">{{ member.name }}</h3>
                <span class="member-role">{{ member.role }}</span>
              </div>

              <!-- Hover overlay -->
              <div v-if="member.image" class="team-overlay">
                <span class="view-details">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  View profile
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Arrow buttons (mobile only) -->
        <button class="carousel-btn carousel-btn--prev"
                @click="manualPrev" aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.5"
               stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button> 
        <button class="carousel-btn carousel-btn--next"
                @click="manualNext" aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.5"
               stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>

      <!-- Dot nav + counter (mobile only) -->
      <div class="carousel-footer">
       
        <div class="carousel-dots">
          <button
            v-for="(_, i) in teamMembers"
            :key="i"
            class="carousel-dot"
            :class="{ 'carousel-dot--active': i === carouselIndex }"
            @click="goTo(i)"
            :aria-label="`Member ${i + 1}`"
          />
        </div>
      </div>

    </div>

    <!-- Bio modal -->
    <transition name="modal-fade">
      <div v-if="modalVisible" class="modal-overlay" @click.self="closeModal">
        <div class="modal-container">

          <button class="modal-close" @click="closeModal" aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <div class="modal-inner">
            <div class="modal-image-wrap">
              <img :src="selectedMember?.image" :alt="selectedMember?.name" />
            </div>
            <div class="modal-info">
              <span class="modal-role-badge">{{ selectedMember?.role }}</span>
              <h3 class="modal-name">{{ selectedMember?.name }}</h3>
              <p v-if="selectedMember?.email" class="modal-email">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {{ selectedMember?.email }}
              </p>
              <div class="modal-divider"></div>
              <p class="modal-bio">{{ selectedMember?.bio }}</p>
            </div>
          </div>

        </div>
      </div>
    </transition>

  </section>
</template>


<script>
// ── Image imports ──────────────────────────────────────────────────────────
// To add a new member photo: import MemberFiveImg from '../assets/YourPhoto.jpg'
// ──────────────────────────────────────────────────────────────────────────
import SenboreImg from '../assets/Senbore.jpg'
import AbiodunImg from '../assets/Abiodun-Oni.jpg'
import MauriceImg from '../assets/Maurice-Okoli-2.jpg'
import FionaImg   from '../assets/Fiona-Robertson-1.jpg'

export default {
  name: 'TeamSection',

  data() {
    return {
      modalVisible:   false,
      selectedMember: null,

      // Carousel state (mobile only)
      carouselIndex: 0,
      isMobile:      window.innerWidth < 640,
      touchStartX:   0,
      carouselTimer: null,

      // ── Team members ──────────────────────────────────────────────
      // HOW TO EDIT: change name, role, image, email, bio below.
      // HOW TO ADD 5TH MEMBER:
      //   1. import MemberFiveImg from '../assets/YourPhoto.jpg'
      //   2. Set image: MemberFiveImg
      //   3. Fill in name, role, email, bio.
      // ──────────────────────────────────────────────────────────────
      teamMembers: [

        // Member 1
        {
          id: 1, name: 'YEWANDE SENBORE', role: 'Chairman',
          image: SenboreImg, email: 'ysenbore@olaniwunajayi.net',
          bio: 'An accomplished commercial lawyer with a deep understanding of the world of finance with a wealth of experience garnered over almost 2 decades of spearheading groundbreaking transactions across diverse sectors of the Nigerian economy, including energy, telecommunications, banking and finance, information and communication technology. Assisted entities access much needed capital in excess of $15 billion over the last 10 years, for project development and growth through direct capital injection (debt or equity), mergers and acquisitions, structured financial products, etc.'
        },

        // Member 2
        {
          id: 2, name: 'ABIODUN ONI', role: 'CEO',
          image: AbiodunImg, email: 'aoni@fundco.ng',
          bio: "Prior to assuming this role, Abiodun acted as the West Africa Business Development Lead for Tesla Incorporation, the world's largest vertically integrated renewable energy production and consumption company. Abiodun led Tesla's energy business development across West Africa and concluded the first commercial energy projects for Tesla in the region. He had gained experience with over 15 years in the banking sector at Guaranty Trust Bank and Stanbic IBTC Bank covering Oil & Gas, and Power & Infrastructure."
        },

        // Member 3
        {
          id: 3, name: 'MAURICE OKOLI', role: 'Director',
          image: MauriceImg, email: 'mokoli@fundco.ng',
          bio: "Before founding AFREAL in 2015, Maurice Okoli was an Executive Director in Abbey Mortgage Bank Plc. He was previously a key member of Deutsche Bank's International Capital Markets Group where he headed the Fixed Income Total Return Swaps unit in New York City. Earlier in his career, he worked at Citigroup International, London and ABN Amro N.V, London where he was a Portfolio Manager for Syndicated Loans. Maurice has over 15 years' experience in Syndicated Lending, Commercial Mortgage Securitization, and Mortgage Lending."
        },

        // Member 4
        {
          id: 4, name: 'FIONA ROBERTSON-ETETE', role: 'Non-Executive Director',
          image: FionaImg, email: '',
          bio: "Ms. Fiona Robertson is a development economist and former ODI fellow who has worked in the development sector for seven years with experience in UK, Nigeria, Zambia and Malawi. She has a bachelor's degree in economics and international development (First Class) and an MSc in Development Economics (Distinction) both from the University of Sussex. She is a certified sustainability analyst and serves on several industry working groups."
        },

        // ── 5TH MEMBER SLOT ───────────────────────────────────────
        // 1. import MemberFiveImg from '../assets/YourPhoto.jpg'
        // 2. Replace image: null  →  image: MemberFiveImg
        // 3. Fill in name, role, email, bio.
        // ─────────────────────────────────────────────────────────
        {
          id: 5,
          name:  'TEAM MEMBER NAME',   // ← Full name in CAPS
          role:  'Role / Title',        // ← Job title
          image: null,                  // ← Replace null with imported image
          email: '',                    // ← Email or '' to hide
          bio:   ''                     // ← Biography paragraph
        },
      ]
    }
  },

  methods: {
    goTo(i)      { this.carouselIndex = i; this.resetTimer() },
    manualPrev() { this.carouselIndex = (this.carouselIndex - 1 + this.teamMembers.length) % this.teamMembers.length; this.resetTimer() },
    manualNext() { this.carouselIndex = (this.carouselIndex + 1) % this.teamMembers.length; this.resetTimer() },
    startTimer() { this.carouselTimer = setInterval(() => { this.carouselIndex = (this.carouselIndex + 1) % this.teamMembers.length }, 3500) },
    stopTimer()  { clearInterval(this.carouselTimer); this.carouselTimer = null },
    resetTimer() { this.stopTimer(); this.startTimer() },

    onTouchStart(e) { this.touchStartX = e.touches[0].clientX; this.stopTimer() },
    onTouchEnd(e) {
      const delta = this.touchStartX - e.changedTouches[0].clientX
      if (Math.abs(delta) > 40) { delta > 0 ? this.manualNext() : this.manualPrev() }
      else { this.startTimer() }
    },

    openModal(member)  { this.selectedMember = member; this.modalVisible = true; document.body.style.overflow = 'hidden' },
    closeModal()       { this.modalVisible = false; this.selectedMember = null; document.body.style.overflow = '' }
  },

  mounted() {
    this.startTimer()
    this._resizeHandler = () => {
      this.isMobile = window.innerWidth < 640
      if (!this.isMobile) this.carouselIndex = 0
    }
    window.addEventListener('resize', this._resizeHandler)
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && this.modalVisible) this.closeModal() })
  },

  beforeUnmount() {
    this.stopTimer()
    window.removeEventListener('resize', this._resizeHandler)
    document.body.style.overflow = ''
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');

/* ── Section ─────────────────────────────────────────────────────── */
.team-section {
  width: 100%;
  padding: 5rem 1.5rem 4rem;
  font-family: 'Inter', sans-serif;
  background: rgba(7, 3, 43);
  background-image: radial-gradient(ellipse 80% 40% at 50% 0%,
    rgba(102, 126, 234, 0.07) 0%, transparent 70%);
}

.team-container {
  max-width: 1300px;
  margin: 0 auto;
}

/* ── Header ──────────────────────────────────────────────────────── */
.team-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-label {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #a8b7ff;
  background: rgba(168, 183, 255, 0.1);
  border: 1px solid rgba(168, 183, 255, 0.18);
  padding: 0.28rem 1rem;
  border-radius: 40px;
  margin-bottom: 1rem;
}

.team-title {
  font-size: clamp(2.2rem, 3vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #ffffff 30%, #a8b7ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0 0 0.8rem;
}

.team-subtitle {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.7;
  max-width: 500px;
  margin: 0 auto;
}

/* ── Carousel wrapper ─────────────────────────────────────────────── */
.team-carousel-wrapper { position: relative; }

/* Arrow buttons + footer — desktop hidden */
.carousel-btn    { display: none; }
.carousel-footer { display: none; }

/* ── Desktop grid: 5 equal portrait columns ──────────────────────── */
.team-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
}

/* ── Card ─────────────────────────────────────────────────────────── */
.team-card {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 3 / 4;
  border: 1px solid rgba(255, 255, 255, 0.07);
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.3s ease;
  background: rgba(10, 15, 30, 0.8);
}

.team-card:hover {
  transform: translateY(-10px) scale(1.01);
  box-shadow: 0 28px 50px -14px rgba(0, 0, 0, 0.65);
  border-color: rgba(102, 126, 234, 0.5);
}

.team-card--placeholder {
  cursor: default;
  border-style: dashed;
  border-color: rgba(255, 255, 255, 0.1);
}
.team-card--placeholder:hover {
  transform: none;
  box-shadow: none;
  border-color: rgba(255, 255, 255, 0.1);
}

/* ── Image wrapper — fills entire card ───────────────────────────── */
.team-image-wrapper { position: absolute; inset: 0; }

.team-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  transition: transform 0.5s ease;
}

.team-card:hover .team-image { transform: scale(1.06); }

/* ── Placeholder ─────────────────────────────────────────────────── */
.team-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: linear-gradient(160deg, rgba(102,126,234,0.06), rgba(118,75,162,0.06));
}
.team-image-placeholder span {
  font-size: 0.7rem;
  color: rgba(168, 183, 255, 0.35);
  letter-spacing: 0.06em;
}

/* ── Bottom gradient ─────────────────────────────────────────────── */
.card-gradient {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 55%;
  background: linear-gradient(to top, rgba(4,2,30,0.97) 0%, rgba(4,2,30,0.7) 50%, transparent 100%);
  z-index: 2;
  transition: height 0.35s ease;
}
.team-card:hover .card-gradient { height: 65%; }

/* ── Name + role overlay ─────────────────────────────────────────── */
.card-info-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  z-index: 3;
  padding: 1.1rem 1rem 1rem;
  transition: transform 0.35s ease;
}
.team-card:hover .card-info-overlay { transform: translateY(-4px); }

.member-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: white;
  margin: 0 0 0.3rem;
  line-height: 1.25;
}

.member-role {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 600;
  color: #a8b7ff;
  background: rgba(102,126,234,0.2);
  border: 1px solid rgba(168,183,255,0.2);
  padding: 0.18rem 0.65rem;
  border-radius: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* ── Hover "View profile" ────────────────────────────────────────── */
.team-overlay {
  position: absolute;
  inset: 0;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(4,2,30,0.35);
  opacity: 0;
  transition: opacity 0.3s ease;
  padding-bottom: 4.5rem;
}
.team-card:hover .team-overlay { opacity: 1; }

.view-details {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.25);
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.5rem 1.1rem;
  border-radius: 40px;
}

/* ── Tablet: 3 columns ───────────────────────────────────────────── */
@media (max-width: 1100px) and (min-width: 641px) {
  .team-grid { grid-template-columns: repeat(3, 1fr); }
}

/* ── Mobile ──────────────────────────────────────────────────────── */
@media (max-width: 640px) {
  .team-section  { padding: 3.5rem 1.25rem 3rem; }
  .team-header   { margin-bottom: 2rem; }
  .team-title    { font-size: 2rem; }
  .team-subtitle { font-size: 0.88rem; }

  /* Grid shows one card at a time — no flex track, no transform tricks */
  .team-grid {
    display: block;
    position: relative;
  }

  /* All cards hidden by default on mobile */
  .team-card {
    display: none;
    width: 100%;
    aspect-ratio: 4 / 5;
    border-radius: 20px;
  }

  /* Only the active card is shown — controlled by :class binding */
  .team-card:not(.team-card--hidden) {
    display: block;
    animation: cardAppear 0.4s ease;
  }

  @keyframes cardAppear {
    from { opacity: 0; transform: scale(0.96); }
    to   { opacity: 1; transform: scale(1); }
  }

  /* Keep hover effects off on touch */
  .team-card:hover {
    transform: none;
    box-shadow: none;
    border-color: rgba(255,255,255,0.07);
  }
  .team-card:hover .team-image    { transform: none; }
  .team-card:hover .card-gradient { height: 55%; }
  .team-card:hover .card-info-overlay { transform: none; }

  /* Bigger text on the full-width mobile card */
  .member-name { font-size: 1.15rem; }
  .member-role { font-size: 0.78rem; }
  .card-info-overlay { padding: 1.5rem 1.25rem 1.25rem; }

  /* ── Arrow buttons ────────────────────────────────────────────── */
  .carousel-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 42%;
    transform: translateY(-50%);
    z-index: 10;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.18);
    background: rgba(4,2,30,0.6);
    backdrop-filter: blur(8px);
    color: white;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s;
  }
  .carousel-btn:active {
    background: rgba(102,126,234,0.5);
    border-color: rgba(102,126,234,0.6);
  }
  .carousel-btn--prev { left: 0.75rem; }
  .carousel-btn--next { right: 0.75rem; }

  /* Touch swipe target on the visible card */
  .team-grid {
    touch-action: pan-y;
  }

  /* ── Footer: counter + pill dots ─────────────────────────────── */
  .carousel-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.25rem;
  }

  .carousel-counter {
    font-size: 0.75rem;
    font-weight: 700;
    color: rgba(168,183,255,0.6);
    letter-spacing: 0.1em;
    min-width: 3.5rem;
    text-align: right;
  }

  .carousel-dots {
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }

  .carousel-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    border: none;
    padding: 0;
    cursor: pointer;
    transition: background 0.25s, width 0.25s, border-radius 0.25s;
  }

  .carousel-dot--active {
    background: #a8b7ff;
    width: 22px;
    border-radius: 3px;
  }
}

/* ── Modal ───────────────────────────────────────────────────────── */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.82);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
}

.modal-container {
  position: relative;
  width: 92%;
  max-width: 760px;
  max-height: 90vh;
  background: rgba(6,9,24,0.98);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 40px 80px -20px rgba(0,0,0,0.7);
}

.modal-close {
  position: absolute;
  top: 1rem; right: 1rem;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px; height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.7);
  cursor: pointer;
  transition: background 0.2s;
}
.modal-close:hover { background: rgba(255,255,255,0.14); color: white; }

.modal-inner {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  overflow-y: auto;
  overscroll-behavior: contain;
}

.modal-image-wrap { flex-shrink: 0; width: 120px; margin: 0 auto; }
.modal-image-wrap img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: top center;
  border-radius: 16px;
  border: 2px solid rgba(102,126,234,0.25);
}

.modal-info { text-align: center; }

.modal-role-badge {
  display: inline-block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #a8b7ff;
  background: rgba(102,126,234,0.12);
  border: 1px solid rgba(168,183,255,0.2);
  padding: 0.22rem 0.9rem;
  border-radius: 30px;
  margin-bottom: 0.6rem;
}

.modal-name {
  font-size: clamp(1.3rem, 2.5vw, 1.7rem);
  font-weight: 800;
  letter-spacing: -0.01em;
  margin: 0.2rem 0 0.75rem;
  background: linear-gradient(135deg, #fff, #a8b7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.modal-email {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.4);
  margin-bottom: 0.5rem;
}

.modal-divider {
  width: 40px; height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
  margin: 0.75rem auto 1rem;
}

.modal-bio {
  font-size: 0.88rem;
  line-height: 1.78;
  color: rgba(255,255,255,0.72);
  text-align: left;
}

@media (min-width: 560px) {
  .modal-inner {
    flex-direction: row;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;
  }
  .modal-image-wrap { width: 150px; margin: 0; }
  .modal-info       { text-align: left; flex: 1; }
  .modal-divider    { margin: 0.75rem 0 1rem; }
}

.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.25s ease; }
.modal-fade-enter-from,   .modal-fade-leave-to     { opacity: 0; }
</style>
