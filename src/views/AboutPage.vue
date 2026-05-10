<template>
  <div class="about-page">

    <!-- Hero -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-inner">
        <span class="label">Who We Are</span>
        <h1>A Specialist Alternative<br>Asset Manager</h1>
        <p>Authorised and registered by the Nigeria Securities &amp; Exchange Commission to conduct the business of a fund and portfolio manager.</p>
      </div>
    </section>

    <!-- Overview -->
    <section class="section">
      <div class="container">
        <div class="glass-card two-col">
          <div class="col-text">
            <span class="label">Overview</span>
            <h2>Mobilising local capital for a low-carbon future</h2>
            <p>FundCo is a specialised alternative asset manager mobilising and investing local capital in real assets that will lead the transition to a low-carbon economy. We exist at the intersection of impact and returns — identifying opportunities where essential services remain inaccessible or unaffordable to significant populations and channelling domestic institutional capital to close that gap.</p>
            <p>As demand for allocation to alternative assets continues to grow, FundCo provides institutional investors the specialist management they need to access this asset class with confidence, discipline, and purpose.</p>
          </div>
          <div class="col-stats">
            <div class="stat-block">
              <span class="stat-num">SEC</span>
              <span class="stat-lbl">Registered Fund Manager</span>
            </div>
            <div class="stat-block">
              <span class="stat-num">5</span>
              <span class="stat-lbl">Target Investment Sectors</span>
            </div>
            <div class="stat-block">
              <span class="stat-num">2</span>
              <span class="stat-lbl">Funds in Implementation</span>
            </div>
            <div class="stat-block">
              <span class="stat-num">SDG</span>
              <span class="stat-lbl">Aligned Across All 3 Pillars</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="section section--dark">
      <div class="container">
        <div class="mission-wrap">
          <span class="label">Our Mission</span>
          <blockquote>
            "To lead the effort to diversify from traditional mainstream assets to alternative asset classes that accelerate the transition to a low-carbon economy, creating jobs and supporting local economic growth."
          </blockquote>
        </div>
      </div>
    </section>

    <!-- What We Do -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="label">What We Do</span>
          <h2>Connecting real assets to domestic capital</h2>
          <p class="section-sub">FundCo aims to unlock and mobilise local capital into key sectors that are underserved, while promoting a transition to a low-carbon economy and delivering strong financial returns for investors.</p>
        </div>
        <div class="pillars-grid">
          <div class="pillar-card" v-for="pillar in pillars" :key="pillar.title">
            <div class="pillar-icon">{{ pillar.icon }}</div>
            <h3>{{ pillar.title }}</h3>
            <p>{{ pillar.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Target Sectors -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="label">Target Sectors</span>
          <h2>Where we invest</h2>
          <p class="section-sub">Our investments directly address key sustainability challenges in sectors that provide essential services to underserved markets.</p>
        </div>
        <div class="sectors-grid">
          <router-link v-for="sector in sectors" :key="sector.route" :to="sector.route" class="sector-card">
            <span class="sector-icon">{{ sector.icon }}</span>
            <h3>{{ sector.name }}</h3>
            <p>{{ sector.desc }}</p>
            <span class="sector-arrow">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Why FundCo -->
    <section class="section section--dark">
      <div class="container">
        <div class="section-header">
          <span class="label">Why FundCo</span>
          <h2>A different kind of asset manager</h2>
        </div>
        <div class="why-grid">
          <div class="why-item" v-for="item in whyItems" :key="item.title">
            <div class="why-icon">{{ item.icon }}</div>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-card">
          <h2>Ready to explore our funds?</h2>
          <p>Discover how FundCo delivers impact-driven returns for institutional investors.</p>
          <div class="cta-actions">
            <router-link to="/funds" class="btn-primary">View Our Funds</router-link>
            <router-link to="/contact" class="btn-outline">Get in Touch</router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      pillars: [
        {
          icon: '🏗️',
          title: 'Identify',
          desc: 'We identify small and medium-sized enterprises in the real sector with scalability potential, climate change mitigation benefits, and local economic growth capacity.'
        },
        {
          icon: '⚙️',
          title: 'Structure',
          desc: 'We structure investable vehicles that meet the risk-return requirements of domestic institutional investors such as pension funds and insurance companies.'
        },
        {
          icon: '🔗',
          title: 'Aggregate',
          desc: 'We aggregate smaller real assets into fundable portfolios, creating the scale needed to attract institutional capital that would otherwise overlook individual projects.'
        },
        {
          icon: '📡',
          title: 'Connect',
          desc: "We connect these structured, aggregated assets to the domestic institutional market — Africa's primary source of long-term patient capital."
        }
      ],
      sectors: [
        { icon: '⚡', name: 'Clean Energy', desc: 'Solar, wind, storage and mini-grid solutions driving Nigeria\'s energy transition.', route: '/energy' },
        { icon: '🏘️', name: 'Affordable Housing', desc: 'Sustainable, accessible housing projects addressing Nigeria\'s 20M+ unit deficit.', route: '/housing' },
        { icon: '🌾', name: 'Agriculture', desc: 'Agri-business investments supporting food security and rural economic growth.', route: '/funds' },
        { icon: '🏥', name: 'Healthcare', desc: 'Financing healthcare infrastructure that expands access to essential services.', route: '/funds' },
        { icon: '🎓', name: 'Education', desc: 'Investing in education infrastructure and edtech that improves learning outcomes.', route: '/funds' }
      ],
      whyItems: [
        {
          icon: '🛡️',
          title: 'Defensive Asset Class',
          desc: 'Alternative investments in essential-service sectors offer geographic diversity, secure cash flows, recession resilience, and inflation protection.'
        },
        {
          icon: '🌍',
          title: 'Local Capital Focus',
          desc: 'We leverage domestic institutional investors — pension funds and insurance companies — as Africa\'s primary source of long-term patient capital.'
        },
        {
          icon: '📊',
          title: 'Risk-Adjusted Returns',
          desc: 'Our rigorous due diligence and active portfolio management targets strong financial returns alongside measurable social and environmental impact.'
        },
        {
          icon: '🤝',
          title: 'Expert Partnerships',
          desc: 'FundCo works with leading development finance experts and thought leaders in infrastructure and fintech to innovate beyond traditional asset management.'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');

.about-page {
  font-family: 'Inter', sans-serif;
  background: rgba(7, 3, 43);
  color: white;
}

/* ── Shared ── */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section {
  padding: 5rem 0;
}

.section--dark {
  background: rgba(4, 2, 30, 0.6);
}

.label {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #a8b7ff;
  background: rgba(168, 183, 255, 0.1);
  padding: 0.3rem 1rem;
  border-radius: 40px;
  margin-bottom: 1rem;
}

.section-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 3rem;
}

.section-header h2 {
  font-size: clamp(1.8rem, 2.5vw, 2.4rem);
  font-weight: 800;
  margin: 0.5rem 0 1rem;
  background: linear-gradient(135deg, #fff, #a8b7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.section-sub {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
}

/* ── Hero ── */
.hero {
  position: relative;
  min-height: 52vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 1.5rem 4rem;
  background-image: url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(7,3,43,0.88) 0%, rgba(7,3,43,0.72) 100%);
}

.hero-inner { position: relative; z-index: 2; max-width: 760px; }

.hero h1 {
  font-size: clamp(2.2rem, 4vw, 3.6rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0.75rem 0 1.25rem;
  background: linear-gradient(135deg, #fff, #a8b7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  max-width: 560px;
  margin: 0 auto;
}

/* ── Overview card ── */
.glass-card {
  background: rgba(10, 15, 30, 0.65);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  padding: 2.5rem;
}

.two-col {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 3rem;
  align-items: center;
}

.col-text h2 {
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 800;
  margin: 0.5rem 0 1.25rem;
  background: linear-gradient(135deg, #fff, #c0c8ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.2;
}

.col-text p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.75;
  margin-bottom: 1rem;
}

.col-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.stat-block {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 1.25rem;
  text-align: center;
}

.stat-num {
  display: block;
  font-size: 1.8rem;
  font-weight: 800;
  color: #a8b7ff;
  margin-bottom: 0.3rem;
}

.stat-lbl {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.4;
}

/* ── Mission ── */
.mission-wrap {
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
}

blockquote {
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  font-style: italic;
  font-weight: 600;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  border-left: 4px solid #667eea;
  padding: 1rem 2rem;
  margin: 1rem 0 0;
  text-align: left;
  background: rgba(102, 126, 234, 0.06);
  border-radius: 0 16px 16px 0;
}

/* ── Pillars ── */
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.pillar-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 1.75rem 1.5rem;
  transition: transform 0.25s, background 0.25s;
}

.pillar-card:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.08);
}

.pillar-icon {
  font-size: 2rem;
  margin-bottom: 0.9rem;
}

.pillar-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #a8b7ff;
  margin-bottom: 0.6rem;
}

.pillar-card p {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.6;
}

/* ── Sectors ── */
.sectors-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
}

.sector-card {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 1.5rem 1.25rem;
  text-decoration: none;
  color: white;
  transition: transform 0.25s, background 0.25s, border-color 0.25s;
  position: relative;
}

.sector-card:hover {
  transform: translateY(-6px);
  background: rgba(102, 126, 234, 0.12);
  border-color: rgba(102, 126, 234, 0.4);
}

.sector-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.sector-card h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #a8b7ff;
}

.sector-card p {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
  flex: 1;
}

.sector-arrow {
  margin-top: 0.75rem;
  font-size: 1rem;
  color: #667eea;
}

/* ── Why ── */
.why-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.why-item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 1.5rem;
}

.why-icon {
  font-size: 1.75rem;
  flex-shrink: 0;
}

.why-item h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #a8b7ff;
  margin-bottom: 0.4rem;
}

.why-item p {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.6;
}

/* ── CTA ── */
.cta-card {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 32px;
  padding: 3.5rem 2.5rem;
  text-align: center;
}

.cta-card h2 {
  font-size: clamp(1.6rem, 2.5vw, 2.2rem);
  font-weight: 800;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #fff, #a8b7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.cta-card p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 40px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
}

.btn-primary:hover { opacity: 0.88; transform: translateY(-2px); }

.btn-outline {
  background: transparent;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 40px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: background 0.2s, transform 0.2s;
}

.btn-outline:hover { background: rgba(255,255,255,0.08); transform: translateY(-2px); }

/* ── Responsive ── */
@media (max-width: 1024px) {
  .pillars-grid { grid-template-columns: repeat(2, 1fr); }
  .sectors-grid { grid-template-columns: repeat(3, 1fr); }
  .two-col { grid-template-columns: 1fr; }
  .col-stats { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 768px) {
  .section { padding: 3.5rem 0; }
  .sectors-grid { grid-template-columns: repeat(2, 1fr); }
  .why-grid { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .sectors-grid { grid-template-columns: 1fr; }
  .col-stats { grid-template-columns: repeat(2, 1fr); }
  .pillars-grid { grid-template-columns: 1fr; }
}
</style>
