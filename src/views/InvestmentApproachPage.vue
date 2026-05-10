<template>
  <div class="invest-page">

    <!-- Hero -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-inner">
        <span class="label">Our Approach</span>
        <h1>Investment Approach</h1>
        <p>We identify, structure, aggregate and connect real assets within our target sectors to the domestic institutional market — delivering risk-adjusted returns with measurable impact.</p>
      </div>
    </section>

    <!-- Strategy overview -->
    <section class="section">
      <div class="container">
        <div class="glass-card">
          <span class="label">Core Strategy</span>
          <h2>Targeting the real sector opportunity</h2>
          <p>FundCo targets small and medium-sized enterprises in the real sector that deliver essential services to underserved markets. We focus on companies with scalability potential, climate change mitigation benefits, and the capacity to drive local economic growth.</p>
          <p>We recognise that domestic institutional investors — pension funds, insurance companies, and similar entities — are Africa's primary source of long-term patient capital. Our role is to make this capital accessible to the real assets that need it most, through properly structured, risk-managed fund vehicles.</p>

          <div class="process-steps">
            <div class="step" v-for="(step, i) in steps" :key="step.title">
              <div class="step-num">{{ i + 1 }}</div>
              <div class="step-body">
                <h3>{{ step.title }}</h3>
                <p>{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SDG Pillars -->
    <section class="section section--dark">
      <div class="container">
        <div class="section-header">
          <span class="label">Sustainability Framework</span>
          <h2>Aligned with the UN Sustainable Development Goals</h2>
          <p class="section-sub">Every investment we make is evaluated against all three pillars of the UN SDGs, ensuring our portfolio creates lasting value across economic, environmental, and social dimensions.</p>
        </div>
        <div class="sdg-grid">
          <div class="sdg-card" v-for="sdg in sdgPillars" :key="sdg.title">
            <div class="sdg-icon">{{ sdg.icon }}</div>
            <h3>{{ sdg.title }}</h3>
            <p>{{ sdg.desc }}</p>
            <ul>
              <li v-for="point in sdg.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Defensive asset class -->
    <section class="section">
      <div class="container">
        <div class="two-col">
          <div>
            <span class="label">Asset Class</span>
            <h2>The defensive case for alternatives</h2>
            <p>Alternative investments in sectors providing essential services represent a fundamentally defensive asset class. Unlike listed equities, these assets are characterised by:</p>
            <div class="feature-list">
              <div class="feature-item" v-for="f in features" :key="f.title">
                <div class="feature-dot"></div>
                <div>
                  <strong>{{ f.title }}</strong>
                  <span>{{ f.desc }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="quote-block">
            <p>"As demand for asset allocation to alternatives continues to increase, institutional investors need specialist managers to show them the right path."</p>
            <span>— FundCo Capital Manager</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ESG Integration -->
    <section class="section section--dark">
      <div class="container">
        <div class="section-header">
          <span class="label">ESG Integration</span>
          <h2>Impact is not optional — it's structural</h2>
          <p class="section-sub">Environmental, Social, and Governance considerations are built into every stage of our investment process — from deal origination through to portfolio exit.</p>
        </div>
        <div class="esg-grid">
          <div class="esg-card" v-for="esg in esgItems" :key="esg.letter">
            <div class="esg-letter">{{ esg.letter }}</div>
            <h3>{{ esg.title }}</h3>
            <p>{{ esg.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Market opportunity -->
    <section class="section">
      <div class="container">
        <div class="glass-card">
          <span class="label">Market Opportunity</span>
          <h2>Non-consumption markets: the untapped frontier</h2>
          <p>FundCo's primary focus is the substantial opportunity within non-consumption markets — areas where essential services remain either inaccessible or unaffordable to significant portions of the population. These markets are characterised by strong underlying demand, limited competition from international capital, and the ability to generate returns that are genuinely uncorrelated with listed markets.</p>
          <div class="market-stats">
            <div class="mstat" v-for="ms in marketStats" :key="ms.label">
              <span class="mstat-val">{{ ms.val }}</span>
              <span class="mstat-lbl">{{ ms.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-card">
          <h2>Explore our fund offerings</h2>
          <p>See how our investment approach translates into concrete fund structures targeting Nigeria's most critical sectors.</p>
          <div class="cta-actions">
            <router-link to="/funds" class="btn-primary">View Our Funds</router-link>
            <router-link to="/contact" class="btn-outline">Speak to Our Team</router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'InvestmentApproachPage',
  data() {
    return {
      steps: [
        { title: 'Identify', desc: 'We source SMEs and infrastructure projects in our target sectors that have clear scalability potential and demonstrate climate change mitigation or adaptation benefits.' },
        { title: 'Structure', desc: 'We build investable fund vehicles with appropriate risk-return profiles, governance frameworks, and impact metrics that meet the requirements of domestic institutional investors.' },
        { title: 'Aggregate', desc: 'We pool individual assets into fundable portfolios, creating the scale necessary to attract pension funds and insurance companies that cannot invest in single small projects.' },
        { title: 'Connect', desc: 'We place these structured portfolios into the domestic institutional market, providing investors with access to an alternative asset class that supports the real economy.' }
      ],
      sdgPillars: [
        {
          icon: '📈',
          title: 'Economic Sustainability',
          desc: 'Investments that generate sustainable financial returns while building productive capacity in the Nigerian economy.',
          points: ['Create employment opportunities', 'Advance gender diversity initiatives', 'Strengthen local supply chains']
        },
        {
          icon: '🌍',
          title: 'Environmental Sustainability',
          desc: 'A core focus on climate change mitigation and adaptation, aligned with Nigeria\'s National Determined Contributions.',
          points: ['Reduce carbon emissions', 'Support renewable energy transition', 'Finance climate-resilient infrastructure']
        },
        {
          icon: '🤝',
          title: 'Social Sustainability',
          desc: 'Improving access to essential services for underserved communities across Nigeria and the wider region.',
          points: ['Expand access to clean energy', 'Reduce poverty levels', 'Improve housing affordability']
        }
      ],
      features: [
        { title: 'Geographic diversity ', desc: '— assets spread across multiple locations and sectors reduce concentration risk.' },
        { title: 'Secure cash flows ', desc: '— essential services generate predictable, recurring revenue streams.' },
        { title: 'Recession resilience ', desc: '— demand for energy, housing, food, and healthcare persists through economic cycles.' },
        { title: 'Inflation protection ', desc: '— real assets typically appreciate in value with inflation, preserving purchasing power.' },
        { title: 'Low correlation ', desc: '— returns are largely uncorrelated with listed equity and bond markets.' }
      ],
      esgItems: [
        {
          letter: 'E',
          title: 'Environmental',
          desc: 'All portfolio companies are screened for carbon footprint, energy efficiency, and environmental management systems. Clean energy and low-carbon transition projects receive priority allocation.'
        },
        {
          letter: 'S',
          title: 'Social',
          desc: 'We evaluate job creation, community impact, gender inclusion, and access to essential services. We actively support portfolio companies in improving their social performance.'
        },
        {
          letter: 'G',
          title: 'Governance',
          desc: 'Robust governance structures — independent boards, transparent reporting, anti-corruption policies — are prerequisites for investment and monitored actively throughout the hold period.'
        }
      ],
      marketStats: [
        { val: '85M+', label: 'Nigerians without energy access' },
        { val: '20M+', label: 'Unit housing deficit in Nigeria' },
        { val: '43%', label: 'Population lacking reliable power' },
        { val: '2.6%', label: 'Annual population growth rate' }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');

.invest-page {
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
  max-width: 700px;
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
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.7;
}

/* Hero */
.hero {
  position: relative;
  min-height: 52vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 1.5rem 4rem;
  background-image: url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80');
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
  margin: 0.75rem 0 1.25rem;
  background: linear-gradient(135deg, #fff, #a8b7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero p {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  max-width: 620px;
  margin: 0 auto;
}

/* Glass card */
.glass-card {
  background: rgba(10, 15, 30, 0.65);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  padding: 2.5rem 3rem;
}

.glass-card h2 {
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 800;
  margin: 0.5rem 0 1.25rem;
  background: linear-gradient(135deg, #fff, #c0c8ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.glass-card p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.75;
  margin-bottom: 1rem;
  max-width: 820px;
}

/* Process steps */
.process-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.step {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  padding: 1.25rem 1.5rem;
  transition: background 0.2s;
}

.step:hover { background: rgba(102, 126, 234, 0.08); }

.step-num {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.step-body h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #a8b7ff;
  margin-bottom: 0.3rem;
}

.step-body p {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.6;
  margin: 0;
}

/* SDG grid */
.sdg-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.sdg-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 2rem 1.5rem;
  transition: transform 0.25s, background 0.25s;
}

.sdg-card:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.07);
}

.sdg-icon { font-size: 2.2rem; margin-bottom: 0.75rem; }

.sdg-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #a8b7ff;
  margin-bottom: 0.6rem;
}

.sdg-card p {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.sdg-card ul {
  padding-left: 1.2rem;
  margin: 0;
}

.sdg-card li {
  font-size: 0.83rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.3rem;
  line-height: 1.4;
}

/* Two col */
.two-col {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: center;
}

.two-col h2 {
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 800;
  margin: 0.5rem 0 1.25rem;
  background: linear-gradient(135deg, #fff, #c0c8ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.2;
}

.two-col > div > p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.feature-list { display: flex; flex-direction: column; gap: 0.7rem; }

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
}

.feature-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #667eea;
  flex-shrink: 0;
  margin-top: 6px;
}

.feature-item strong { color: white; }

.quote-block {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.12), rgba(118, 75, 162, 0.12));
  border: 1px solid rgba(102, 126, 234, 0.25);
  border-radius: 28px;
  padding: 2.5rem 2rem;
}

.quote-block p {
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.quote-block span {
  font-size: 0.82rem;
  color: #a8b7ff;
  font-weight: 600;
}

/* ESG */
.esg-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.esg-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 2rem 1.5rem;
}

.esg-letter {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.esg-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #a8b7ff;
  margin-bottom: 0.6rem;
}

.esg-card p {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.65;
}

/* Market stats */
.market-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 2rem;
}

.mstat { text-align: center; }

.mstat-val {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: #a8b7ff;
  margin-bottom: 0.3rem;
}

.mstat-lbl {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.4;
}

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
  .sdg-grid { grid-template-columns: 1fr 1fr; }
  .esg-grid { grid-template-columns: 1fr 1fr; }
  .market-stats { grid-template-columns: repeat(2, 1fr); }
  .two-col { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .section { padding: 3.5rem 0; }
  .sdg-grid { grid-template-columns: 1fr; }
  .esg-grid { grid-template-columns: 1fr; }
  .glass-card { padding: 1.75rem; }
}
</style>
