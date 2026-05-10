<template>
  <div class="housing-page">

    <!-- Hero -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-label">Affordable Housing Fund</span>
        <h1 class="hero-title">Closing Nigeria's<br>Housing Gap</h1>
        <p class="hero-subtitle">A blended finance REIT structure targeting Nigeria's 20 million unit housing deficit — delivering affordable long-dated mortgage loans and sustainable construction financing.</p>
        <div class="hero-actions">
          <router-link to="/contact" class="btn-primary">Request Information</router-link>
          <a href="https://housingsolutionfund.ng" target="_blank" rel="noopener" class="btn-outline">Housing Solution Fund ↗</a>
        </div>
      </div>
    </section>

    <!-- Key stats bar -->
    <div class="stats-bar">
      <div class="stats-bar-inner">
        <div class="stat-item" v-for="s in heroStats" :key="s.label">
          <span class="stat-val">{{ s.val }}</span>
          <span class="stat-lbl">{{ s.label }}</span>
        </div>
      </div>
    </div>

    <!-- Market overview -->
    <section class="section">
      <div class="container">
        <div class="two-col">
          <div class="col-content">
            <span class="label">Market Overview</span>
            <h2>A housing crisis driven by rapid urbanisation</h2>
            <p>Nigeria's housing sector faces one of the most acute deficits in the world, shaped by population growth, rapid urbanisation, and chronic underinvestment in affordable supply. The PwC-estimated shortfall stands at <strong>20 million housing units</strong>, with the deficit widening each year.</p>
            <p>Nigeria's population is growing at <strong>2.6% annually</strong>, and urban areas already account for <strong>50.34%</strong> of the population. The United Nations projects that by 2050, <strong>68% of Nigerians</strong> will live in urban centres — representing approximately 189 million urban dwellers who will need access to quality, affordable housing.</p>
            <p>To close this gap, Nigeria must deliver roughly <strong>4.9 million standard housing units per year</strong> over the next decade — a scale of development that the public sector alone cannot finance.</p>
          </div>
          <div class="col-cards">
            <div class="data-card" v-for="d in dataCards" :key="d.label">
              <span class="data-val">{{ d.val }}</span>
              <span class="data-label">{{ d.label }}</span>
              <p class="data-note">{{ d.note }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The problem -->
    <section class="section section--dark">
      <div class="container">
        <div class="section-header">
          <span class="label">The Challenge</span>
          <h2>Supply cannot meet demand</h2>
          <p class="section-sub">Nigeria's existing housing stock is overwhelmingly weighted toward rental accommodation, with limited pathways to homeownership for the majority of the population.</p>
        </div>
        <div class="challenge-grid">
          <div class="challenge-card" v-for="c in challenges" :key="c.title">
            <div class="challenge-icon">{{ c.icon }}</div>
            <h3>{{ c.title }}</h3>
            <p>{{ c.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- The Fund -->
    <section class="section">
      <div class="container">
        <div class="glass-card fund-card">
          <div class="fund-card-header">
            <div>
              <span class="label">The Fund</span>
              <h2>Housing Solution Fund</h2>
              <p class="fund-intro">FundCo is collaborating with development partners on the Housing Solution Fund — structured as a Real Estate Investment Trust (REIT) using blended finance to address both the supply and demand sides of Nigeria's housing crisis.</p>
            </div>
            <div class="fund-badge-wrap">
              <div class="fund-badge">
                <span class="badge-icon">🏛️</span>
                <span class="badge-text">REIT Structure</span>
              </div>
              <div class="fund-badge">
                <span class="badge-icon">🔗</span>
                <span class="badge-text">Blended Finance</span>
              </div>
              <div class="fund-badge">
                <span class="badge-icon">📋</span>
                <span class="badge-text">SEC Registration</span>
              </div>
            </div>
          </div>

          <div class="fund-pillars">
            <div class="fund-pillar" v-for="p in fundPillars" :key="p.title">
              <div class="pillar-num">{{ p.num }}</div>
              <div>
                <h3>{{ p.title }}</h3>
                <p>{{ p.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Investment structure -->
    <section class="section section--dark">
      <div class="container">
        <div class="section-header">
          <span class="label">Investment Structure</span>
          <h2>How the fund works</h2>
        </div>
        <div class="timeline">
          <div class="timeline-step" v-for="(step, i) in timeline" :key="step.title">
            <div class="step-num">{{ i + 1 }}</div>
            <div class="step-body">
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why invest -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="label">Why Invest</span>
          <h2>A compelling case for institutional investors</h2>
        </div>
        <div class="reasons-grid">
          <div class="reason-card" v-for="r in reasons" :key="r.title">
            <div class="reason-icon">{{ r.icon }}</div>
            <h3>{{ r.title }}</h3>
            <p>{{ r.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SDG alignment -->
    <section class="section section--dark">
      <div class="container">
        <div class="glass-card sdg-strip">
          <div class="sdg-text">
            <span class="label">SDG Alignment</span>
            <h2>Contributing to Sustainable Development</h2>
            <p>The Housing Solution Fund directly advances several UN Sustainable Development Goals, delivering measurable social, economic, and environmental impact alongside financial returns.</p>
          </div>
          <div class="sdg-goals">
            <div class="sdg-goal" v-for="g in sdgGoals" :key="g.code">
              <span class="sdg-code">{{ g.code }}</span>
              <span class="sdg-name">{{ g.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-card">
          <h2>Invest in Nigeria's housing future</h2>
          <p>Join FundCo and our development partners in financing sustainable, affordable housing — earning competitive REIT returns while closing a critical infrastructure gap.</p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn-primary">Request Investor Information</router-link>
            <router-link to="/investment-approach" class="btn-outline">Our Investment Approach</router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'HousingPage',
  data() {
    return {
      heroStats: [
        { val: '20M+', label: 'Unit housing deficit (PwC)' },
        { val: '₦5.9T', label: 'Housing market size' },
        { val: '2.6%', label: 'Annual population growth' },
        { val: '75%', label: 'Households in rented accommodation' },
        { val: '4.9M', label: 'Units needed per year' }
      ],
      dataCards: [
        { val: '₦5.9T', label: 'Current market size', note: 'Projected to reach ₦7.2 trillion by 2024 — a 22% increase' },
        { val: '41M+', label: 'Nigerian households', note: '75% relying on rented accommodation with limited ownership pathways' },
        { val: '189M', label: 'Projected urban dwellers by 2050', note: 'UN estimate — 68% of Nigeria\'s total population living in cities' },
        { val: '700K', label: 'Units needed annually', note: 'Minimum annual delivery required to accommodate urban population growth' }
      ],
      challenges: [
        { icon: '🏙️', title: 'Rapid urbanisation', desc: 'Urban areas already account for 50.34% of Nigeria\'s population, with the proportion set to reach 68% by 2050. City housing stock cannot absorb this growth without deliberate investment.' },
        { icon: '💸', title: 'Mortgage market immaturity', desc: 'Nigeria\'s mortgage-to-GDP ratio remains below 1%, compared to over 80% in developed markets. Long-dated, affordable mortgage finance is essentially unavailable to most Nigerians.' },
        { icon: '🏗️', title: 'Developer financing gap', desc: 'Property developers face prohibitive borrowing costs and short-tenor bank loans, constraining the pace of affordable construction and limiting supply-side responses.' },
        { icon: '📊', title: 'Widening deficit', desc: 'At current delivery rates, the 20 million unit deficit continues to grow. Nigeria needs 4.9 million units per year — a level of output never previously achieved.' }
      ],
      fundPillars: [
        {
          num: '01',
          title: 'Demand-side: Affordable mortgage loans',
          desc: 'The fund provides affordable, long-dated blended mortgage loans to qualifying Nigerian households — making homeownership accessible to the middle- and lower-income segments that currently have no viable financing pathway.'
        },
        {
          num: '02',
          title: 'Supply-side: Construction financing',
          desc: 'The fund enables housing developers to access sustainable, appropriately-structured construction financing — allowing them to build at scale and at price points that the target market can afford.'
        },
        {
          num: '03',
          title: 'Blended finance structure',
          desc: 'By combining concessional development capital with commercial institutional investment, the fund achieves interest rate levels and loan tenors that pure commercial lenders cannot offer — without sacrificing risk-adjusted returns for investors.'
        }
      ],
      timeline: [
        { title: 'Capital commitment', desc: 'Open to pension funds, insurance companies, development finance institutions, and qualified institutional investors seeking asset-backed, long-term returns.' },
        { title: 'Project origination & due diligence', desc: 'FundCo identifies and underwrites housing projects and mortgage portfolios across strategic locations, applying rigorous ESG and credit analysis.' },
        { title: 'Blended finance deployment', desc: 'Capital is deployed into mortgage loan portfolios and construction financing facilities, with concessional tranches absorbing first-loss risk to protect senior investors.' },
        { title: 'Active portfolio management', desc: 'FundCo provides ongoing oversight of loan performance, construction progress, and developer compliance — ensuring assets perform to underwritten expectations.' },
        { title: 'Distributions & exit', desc: 'As a REIT, the fund distributes income from rental revenues, mortgage repayments, and property sales on a regular basis, with full exit targeted within the fund\'s lifecycle.' }
      ],
      reasons: [
        { icon: '🛡️', title: 'Asset-backed security', desc: 'All investments are backed by real property assets, providing tangible collateral and downside protection rarely available in listed asset classes.' },
        { icon: '📈', title: 'Structural demand', desc: 'With a 20M+ unit deficit and 2.6% annual population growth, the demand for affordable housing is structural, persistent, and essentially recession-proof.' },
        { icon: '🌿', title: 'ESG credentials', desc: 'The fund advances SDG 11 (Sustainable Cities), SDG 1 (No Poverty), and SDG 8 (Decent Work) — meeting the growing ESG mandates of institutional investors.' },
        { icon: '💱', title: 'Local currency returns', desc: 'Returns generated and distributed in Nigerian Naira, eliminating currency risk for domestic pension and insurance investors with Naira-denominated liabilities.' },
        { icon: '🏛️', title: 'REIT transparency', desc: 'The REIT structure provides regulated, transparent investment governance — with mandatory income distribution, independent valuation, and SEC oversight.' },
        { icon: '🤝', title: 'Development partner support', desc: 'Blended finance contributions from development partners reduce the cost of capital and first-loss exposure, enhancing the risk-return profile for commercial investors.' }
      ],
      sdgGoals: [
        { code: 'SDG 1', name: 'No Poverty' },
        { code: 'SDG 8', name: 'Decent Work & Growth' },
        { code: 'SDG 9', name: 'Industry & Innovation' },
        { code: 'SDG 11', name: 'Sustainable Cities' },
        { code: 'SDG 13', name: 'Climate Action' }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');

.housing-page {
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

/* ── Hero ── */
.hero-section {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80') center / cover no-repeat;
  padding: 7rem 1.5rem 5rem;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(7,3,43,0.92) 0%, rgba(7,3,43,0.78) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 820px;
}

.hero-label {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #a8b7ff;
  background: rgba(168, 183, 255, 0.15);
  border: 1px solid rgba(168, 183, 255, 0.25);
  padding: 0.35rem 1rem;
  border-radius: 40px;
  margin-bottom: 1.25rem;
}

.hero-title {
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.05;
  margin: 0 0 1.25rem;
  background: linear-gradient(135deg, #fff, #a8b7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-subtitle {
  font-size: clamp(0.95rem, 1.5vw, 1.15rem);
  color: rgba(255,255,255,0.78);
  line-height: 1.7;
  max-width: 660px;
  margin: 0 auto 2rem;
}

.hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

/* ── Stats bar ── */
.stats-bar {
  background: rgba(10, 15, 30, 0.9);
  border-top: 1px solid rgba(255,255,255,0.07);
  border-bottom: 1px solid rgba(255,255,255,0.07);
  padding: 1.5rem;
}

.stats-bar-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.stat-item { text-align: center; }

.stat-val {
  display: block;
  font-size: 1.7rem;
  font-weight: 800;
  color: #a8b7ff;
  margin-bottom: 0.2rem;
}

.stat-lbl {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.3;
}

/* ── Two col ── */
.two-col {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.col-content h2 {
  font-size: clamp(1.5rem, 2.2vw, 2rem);
  font-weight: 800;
  margin: 0.5rem 0 1.25rem;
  background: linear-gradient(135deg, #fff, #c0c8ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.2;
}

.col-content p {
  font-size: 0.93rem;
  color: rgba(255,255,255,0.72);
  line-height: 1.75;
  margin-bottom: 1rem;
}

.col-content strong { color: white; }

.col-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.data-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 1.25rem;
}

.data-val {
  display: block;
  font-size: 1.6rem;
  font-weight: 800;
  color: #a8b7ff;
  margin-bottom: 0.2rem;
}

.data-label {
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  color: rgba(255,255,255,0.7);
  margin-bottom: 0.4rem;
}

.data-note {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.45);
  line-height: 1.4;
  margin: 0;
}

/* ── Challenge grid ── */
.challenge-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.challenge-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 1.75rem 1.5rem;
  transition: transform 0.25s, background 0.25s;
}

.challenge-card:hover { transform: translateY(-5px); background: rgba(255,255,255,0.07); }

.challenge-icon { font-size: 1.8rem; margin-bottom: 0.75rem; }

.challenge-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #a8b7ff;
  margin-bottom: 0.5rem;
}

.challenge-card p { font-size: 0.87rem; color: rgba(255,255,255,0.62); line-height: 1.65; }

/* ── Fund card ── */
.glass-card {
  background: rgba(10, 15, 30, 0.65);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 32px;
  padding: 2.5rem;
}

.fund-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
}

.fund-card-header h2 {
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 800;
  margin: 0.5rem 0 1rem;
  background: linear-gradient(135deg, #fff, #c0c8ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.fund-intro {
  font-size: 0.93rem;
  color: rgba(255,255,255,0.72);
  line-height: 1.7;
  margin: 0;
  max-width: 620px;
}

.fund-badge-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex-shrink: 0;
}

.fund-badge {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  padding: 0.5rem 0.9rem;
  white-space: nowrap;
}

.badge-icon { font-size: 1rem; }

.badge-text {
  font-size: 0.78rem;
  font-weight: 600;
  color: #a8b7ff;
}

.fund-pillars {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid rgba(255,255,255,0.07);
  padding-top: 2rem;
}

.fund-pillar {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  background: rgba(255,255,255,0.03);
  border-radius: 20px;
  padding: 1.25rem 1.5rem;
  transition: background 0.2s;
}

.fund-pillar:hover { background: rgba(102, 126, 234, 0.07); }

.pillar-num {
  font-size: 1.5rem;
  font-weight: 800;
  color: rgba(102, 126, 234, 0.5);
  flex-shrink: 0;
  min-width: 36px;
}

.fund-pillar h3 {
  font-size: 0.97rem;
  font-weight: 700;
  color: #a8b7ff;
  margin: 0 0 0.35rem;
}

.fund-pillar p {
  font-size: 0.87rem;
  color: rgba(255,255,255,0.62);
  line-height: 1.65;
  margin: 0;
}

/* ── Timeline ── */
.timeline {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.timeline-step {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 18px;
  padding: 1.1rem 1.25rem;
  transition: background 0.2s;
}

.timeline-step:hover { background: rgba(102, 126, 234, 0.07); }

.step-num {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.95rem;
  flex-shrink: 0;
}

.step-body h3 { font-size: 0.95rem; font-weight: 700; color: #a8b7ff; margin: 0 0 0.25rem; }
.step-body p { font-size: 0.85rem; color: rgba(255,255,255,0.62); line-height: 1.55; margin: 0; }

/* ── Reasons ── */
.reasons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.reason-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 1.75rem 1.5rem;
  transition: transform 0.25s, background 0.25s;
}

.reason-card:hover { transform: translateY(-5px); background: rgba(255,255,255,0.07); }

.reason-icon { font-size: 1.8rem; margin-bottom: 0.75rem; }

.reason-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #a8b7ff;
  margin-bottom: 0.5rem;
}

.reason-card p { font-size: 0.86rem; color: rgba(255,255,255,0.62); line-height: 1.6; }

/* ── SDG strip ── */
.sdg-strip {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: center;
}

.sdg-text h2 {
  font-size: clamp(1.4rem, 1.8vw, 1.8rem);
  font-weight: 800;
  margin: 0.5rem 0 1rem;
  background: linear-gradient(135deg, #fff, #c0c8ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.sdg-text p {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.7;
  margin: 0;
}

.sdg-goals { display: flex; flex-direction: column; gap: 0.6rem; }

.sdg-goal {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255,255,255,0.04);
  border-radius: 12px;
  padding: 0.6rem 1rem;
}

.sdg-code {
  font-size: 0.72rem;
  font-weight: 800;
  color: #667eea;
  background: rgba(102, 126, 234, 0.12);
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  white-space: nowrap;
}

.sdg-name { font-size: 0.88rem; color: rgba(255,255,255,0.75); }

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

.cta-card p { font-size: 1rem; color: rgba(255,255,255,0.7); margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto; }

.cta-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

/* ── Buttons ── */
.btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 40px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
  display: inline-block;
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
  display: inline-block;
}

.btn-outline:hover { background: rgba(255,255,255,0.08); transform: translateY(-2px); }

/* ── Responsive ── */
@media (max-width: 1024px) {
  .reasons-grid { grid-template-columns: repeat(2, 1fr); }
  .two-col { grid-template-columns: 1fr; }
  .col-cards { grid-template-columns: repeat(4, 1fr); }
  .sdg-strip { grid-template-columns: 1fr; }
  .fund-card-header { flex-direction: column; }
}

@media (max-width: 768px) {
  .section { padding: 3.5rem 0; }
  .challenge-grid { grid-template-columns: 1fr; }
  .reasons-grid { grid-template-columns: 1fr; }
  .stats-bar-inner { gap: 1.25rem; }
  .col-cards { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .col-cards { grid-template-columns: 1fr; }
}
</style>
