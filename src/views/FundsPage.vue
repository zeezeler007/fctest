<template>
  <div class="funds-page">

    <!-- Hero -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-inner">
        <span class="label">Our Funds</span>
        <h1>Investing in Nigeria's<br>Essential Infrastructure</h1>
        <p>FundCo currently has two funds in implementation, undergoing SEC registration — targeting Nigeria's most critical and underserved sectors.</p>
      </div>
    </section>

    <!-- Defensive asset class intro -->
    <section class="section">
      <div class="container">
        <div class="glass-card intro-card">
          <span class="label">Asset Class</span>
          <h2>Alternative investments as a defensive asset class</h2>
          <p>FundCo's funds invest in the "defensive asset class" — alternative investments targeting sectors that provide essential services to underserved markets. These assets exhibit strong structural characteristics that make them highly attractive to institutional investors seeking resilience alongside returns.</p>
          <div class="asset-traits">
            <div class="trait" v-for="t in traits" :key="t">
              <i class="fas fa-check-circle"></i>
              <span>{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Funds -->
    <section class="section section--dark">
      <div class="container">
        <div class="section-header">
          <span class="label">Fund Offerings</span>
          <h2>Current Funds</h2>
          <p class="section-sub">Both funds are in the implementation phase and undergoing registration with the Securities &amp; Exchange Commission of Nigeria.</p>
        </div>

        <div class="funds-grid">

          <!-- Clean Energy Fund -->
          <div class="fund-card fund-card--energy">
            <div class="fund-badge">SEC Registration in Progress</div>
            <div class="fund-header">
              <span class="fund-icon">⚡</span>
              <div>
                <h3>Clean Energy Fund</h3>
                <span class="fund-type">Infrastructure / Renewable Energy</span>
              </div>
            </div>
            <p class="fund-summary">Catalysing private sector participation in climate adaptation by attracting institutional investors — pension funds and insurance companies — into renewable energy projects aligned with Nigeria's National Determined Contributions.</p>

            <div class="fund-stats">
              <div class="fstat" v-for="s in energyStats" :key="s.label">
                <span class="fstat-val">{{ s.val }}</span>
                <span class="fstat-lbl">{{ s.label }}</span>
              </div>
            </div>

            <div class="fund-details">
              <h4>Investment Focus</h4>
              <ul>
                <li v-for="item in energyFocus" :key="item">{{ item }}</li>
              </ul>
            </div>

            <div class="fund-details">
              <h4>Target Investors</h4>
              <p>Pension funds, insurance companies, DFIs, and qualified institutional investors seeking long-term, inflation-protected returns with ESG credentials.</p>
            </div>

            <router-link to="/energy" class="fund-btn">Explore the Fund →</router-link>
          </div>

          <!-- Affordable Housing Fund -->
          <div class="fund-card fund-card--housing">
            <div class="fund-badge">SEC Registration in Progress</div>
            <div class="fund-header">
              <span class="fund-icon">🏘️</span>
              <div>
                <h3>Affordable Housing Fund</h3>
                <span class="fund-type">Real Estate / Infrastructure</span>
              </div>
            </div>
            <p class="fund-summary">Addressing Nigeria's acute housing deficit through financing quality, affordable housing infrastructure driven by the country's sustained population growth, projected at 2.6% per annum.</p>

            <div class="fund-stats">
              <div class="fstat" v-for="s in housingStats" :key="s.label">
                <span class="fstat-val">{{ s.val }}</span>
                <span class="fstat-lbl">{{ s.label }}</span>
              </div>
            </div>

            <div class="fund-details">
              <h4>Investment Focus</h4>
              <ul>
                <li v-for="item in housingFocus" :key="item">{{ item }}</li>
              </ul>
            </div>

            <div class="fund-details">
              <h4>Target Investors</h4>
              <p>Pension funds, insurance companies, family offices, and development finance institutions seeking stable, asset-backed returns with strong social impact.</p>
            </div>

            <router-link to="/housing" class="fund-btn">Explore the Fund →</router-link>
          </div>

        </div>
      </div>
    </section>

    <!-- Pipeline sectors -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="label">Pipeline</span>
          <h2>Future Fund Development</h2>
          <p class="section-sub">FundCo's mandate covers five core sectors. Beyond our current two funds, we are developing investment vehicles in the following areas.</p>
        </div>
        <div class="pipeline-grid">
          <div class="pipeline-card" v-for="s in pipelineSectors" :key="s.name">
            <span class="pipeline-icon">{{ s.icon }}</span>
            <h3>{{ s.name }}</h3>
            <p>{{ s.desc }}</p>
            <span class="pipeline-stage">{{ s.stage }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SDG alignment -->
    <section class="section section--dark">
      <div class="container">
        <div class="glass-card sdg-card">
          <div class="sdg-inner">
            <div>
              <span class="label">Sustainability</span>
              <h2>Aligned with all three UN SDG pillars</h2>
              <p>Every FundCo fund is structured to deliver measurable outcomes across the economic, environmental, and social dimensions of the United Nations Sustainable Development Goals.</p>
              <div class="sdg-pills">
                <span v-for="sdg in sdgGoals" :key="sdg" class="sdg-pill">{{ sdg }}</span>
              </div>
            </div>
            <div class="sdg-icons-wrap">
              <div class="sdg-big" v-for="pillar in sdgPillars" :key="pillar.name">
                <span>{{ pillar.icon }}</span>
                <strong>{{ pillar.name }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-card">
          <h2>Interested in investing?</h2>
          <p>Speak to our team to learn more about fund structures, minimum commitments, and expected timelines for SEC registration.</p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn-primary">Request Fund Information</router-link>
            <router-link to="/investment-approach" class="btn-outline">Our Investment Approach</router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'FundsPage',
  data() {
    return {
      traits: [
        'Geographic diversification across multiple locations and sectors',
        'Secure, predictable cash flows from essential-service providers',
        'Resilience through economic downturns — demand persists regardless of cycle',
        'Natural inflation protection — real assets appreciate with price levels',
        'Low correlation with listed equity and bond markets'
      ],
      energyStats: [
        { val: '₦30B', label: 'Target Fund Size' },
        { val: '2.5GW', label: 'Target Capacity' },
        { val: '18%', label: 'Target IRR' },
        { val: '500K+', label: 'Households Impacted' }
      ],
      energyFocus: [
        'Utility-scale solar farms and C&I rooftop installations',
        'Onshore wind projects with long-term power purchase agreements',
        'Battery storage and hybrid systems to stabilise grids',
        'Decentralised renewable mini-grids for rural and peri-urban communities',
        'Off-grid solar home systems for underserved households'
      ],
      housingStats: [
        { val: '₦50B', label: 'Target Fund Size' },
        { val: '20M+', label: 'Unit Housing Deficit' },
        { val: '15%', label: 'Target IRR' },
        { val: '2.6%', label: 'Annual Population Growth' }
      ],
      housingFocus: [
        'Affordable and mid-market residential developments',
        'Social housing partnerships with state governments',
        'Green building technologies and energy-efficient design',
        'Mortgage-linked and rent-to-own housing schemes',
        'Estate infrastructure and community development'
      ],
      pipelineSectors: [
        { icon: '🌾', name: 'Agriculture', desc: 'Agri-business infrastructure, processing, and off-taker financing to strengthen food security and rural value chains.', stage: 'Pipeline' },
        { icon: '🏥', name: 'Healthcare', desc: 'Diagnostic centres, specialist hospitals, and healthcare logistics infrastructure to expand access to quality care.', stage: 'Pipeline' },
        { icon: '🎓', name: 'Education', desc: 'School infrastructure, vocational training facilities, and edtech platforms that improve learning outcomes at scale.', stage: 'Pipeline' }
      ],
      sdgGoals: ['SDG 1 – No Poverty', 'SDG 3 – Good Health', 'SDG 4 – Quality Education', 'SDG 7 – Clean Energy', 'SDG 8 – Decent Work', 'SDG 9 – Industry & Innovation', 'SDG 11 – Sustainable Cities', 'SDG 13 – Climate Action'],
      sdgPillars: [
        { icon: '📈', name: 'Economic' },
        { icon: '🌍', name: 'Environmental' },
        { icon: '🤝', name: 'Social' }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');

.funds-page {
  font-family: 'Inter', sans-serif;
  background: rgba(7, 3, 43);
  color: white;
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
.section { padding: 5rem 0; }
.section--dark { background: rgba(4, 2, 30, 0.6); }

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

.section-sub { font-size: 0.95rem; color: rgba(255,255,255,0.65); line-height: 1.7; }

/* Hero */
.hero {
  position: relative;
  min-height: 52vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 1.5rem 4rem;
  background-image: url('https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(7,3,43,0.90) 0%, rgba(7,3,43,0.75) 100%);
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

.hero p { font-size: 1.05rem; color: rgba(255,255,255,0.7); line-height: 1.7; max-width: 580px; margin: 0 auto; }

/* Glass card */
.glass-card {
  background: rgba(10, 15, 30, 0.65);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  padding: 2.5rem;
}

.intro-card h2 {
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 800;
  margin: 0.5rem 0 1rem;
  background: linear-gradient(135deg, #fff, #c0c8ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.intro-card > p { font-size: 0.93rem; color: rgba(255,255,255,0.72); line-height: 1.75; margin-bottom: 1.5rem; max-width: 820px; }

.asset-traits {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.trait {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.75);
}

.trait i { color: #667eea; flex-shrink: 0; }

/* Fund cards */
.funds-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.fund-card {
  background: rgba(10, 15, 30, 0.7);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 28px;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: border-color 0.25s;
}

.fund-card--energy { border-top: 3px solid #667eea; }
.fund-card--housing { border-top: 3px solid #764ba2; }

.fund-card:hover { border-color: rgba(102, 126, 234, 0.4); }

.fund-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fbbf24;
  background: rgba(251, 191, 36, 0.1);
  border: 1px solid rgba(251, 191, 36, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  align-self: flex-start;
}

.fund-header {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.fund-icon { font-size: 2.2rem; flex-shrink: 0; }

.fund-header h3 {
  font-size: 1.3rem;
  font-weight: 800;
  color: white;
  margin: 0 0 0.2rem;
}

.fund-type {
  font-size: 0.78rem;
  font-weight: 600;
  color: #a8b7ff;
  letter-spacing: 0.04em;
}

.fund-summary { font-size: 0.9rem; color: rgba(255,255,255,0.7); line-height: 1.65; }

.fund-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  background: rgba(255,255,255,0.03);
  border-radius: 18px;
  padding: 1.25rem 1rem;
}

.fstat { text-align: center; }

.fstat-val {
  display: block;
  font-size: 1.2rem;
  font-weight: 800;
  color: #a8b7ff;
  margin-bottom: 0.2rem;
}

.fstat-lbl { font-size: 0.7rem; color: rgba(255,255,255,0.45); line-height: 1.3; }

.fund-details h4 {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #a8b7ff;
  margin-bottom: 0.6rem;
}

.fund-details ul {
  padding-left: 1.2rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.fund-details li { font-size: 0.85rem; color: rgba(255,255,255,0.65); line-height: 1.45; }

.fund-details p { font-size: 0.85rem; color: rgba(255,255,255,0.65); line-height: 1.55; margin: 0; }

.fund-btn {
  display: inline-block;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 40px;
  font-weight: 600;
  font-size: 0.88rem;
  text-decoration: none;
  align-self: flex-start;
  margin-top: auto;
  transition: opacity 0.2s, transform 0.2s;
}

.fund-btn:hover { opacity: 0.88; transform: translateY(-2px); }

/* Pipeline */
.pipeline-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.pipeline-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.pipeline-icon { font-size: 2.2rem; }
.pipeline-card h3 { font-size: 1.1rem; font-weight: 700; color: #a8b7ff; }
.pipeline-card p { font-size: 0.88rem; color: rgba(255,255,255,0.62); line-height: 1.6; flex: 1; }

.pipeline-stage {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  background: rgba(255,255,255,0.06);
  padding: 0.2rem 0.75rem;
  border-radius: 30px;
  align-self: flex-start;
  margin-top: 0.25rem;
}

/* SDG card */
.sdg-inner {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 3rem;
  align-items: center;
}

.sdg-card h2 {
  font-size: clamp(1.4rem, 2vw, 1.9rem);
  font-weight: 800;
  margin: 0.5rem 0 1rem;
  background: linear-gradient(135deg, #fff, #c0c8ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.sdg-card p { font-size: 0.93rem; color: rgba(255,255,255,0.7); line-height: 1.7; margin-bottom: 1.25rem; }

.sdg-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; }

.sdg-pill {
  font-size: 0.72rem;
  font-weight: 600;
  color: #a8b7ff;
  background: rgba(168, 183, 255, 0.1);
  border: 1px solid rgba(168, 183, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
}

.sdg-icons-wrap {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.sdg-big {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255,255,255,0.04);
  border-radius: 16px;
  padding: 1rem 1.25rem;
}

.sdg-big span { font-size: 1.8rem; }
.sdg-big strong { font-size: 1rem; color: rgba(255,255,255,0.85); }

/* CTA */
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

.cta-card p { font-size: 1rem; color: rgba(255,255,255,0.7); margin-bottom: 2rem; }

.cta-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

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
  border: 1px solid rgba(255,255,255,0.3);
  transition: background 0.2s, transform 0.2s;
}

.btn-outline:hover { background: rgba(255,255,255,0.08); transform: translateY(-2px); }

/* Responsive */
@media (max-width: 1024px) {
  .funds-grid { grid-template-columns: 1fr; }
  .sdg-inner { grid-template-columns: 1fr; }
  .pipeline-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 640px) {
  .section { padding: 3.5rem 0; }
  .pipeline-grid { grid-template-columns: 1fr; }
  .fund-stats { grid-template-columns: repeat(2, 1fr); }
}
</style>
