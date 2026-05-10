<template>
  <div class="energy-page">

    <!-- Hero -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-label">Clean Energy Fund</span>
        <h1 class="hero-title">Accelerating Nigeria's<br>Energy Transition</h1>
        <p class="hero-subtitle">Channelling private institutional capital in domestic currency into renewable energy and climate-smart projects — aligned with Nigeria's National Determined Contributions.</p>
        <div class="hero-actions">
          <router-link to="/contact" class="btn-primary">Request Information</router-link>
          <router-link to="/investment-approach" class="btn-outline">Our Approach</router-link>
        </div>
      </div>
    </section>

    <!-- Stats bar -->
    <div class="stats-bar">
      <div class="stats-bar-inner">
        <div class="stat-item" v-for="s in heroStats" :key="s.label">
          <span class="stat-val">{{ s.val }}</span>
          <span class="stat-lbl">{{ s.label }}</span>
        </div>
      </div>
    </div>

    <!-- Market gap -->
    <section class="section">
      <div class="container">
        <div class="two-col">
          <div class="col-content">
            <span class="label">The Energy Crisis</span>
            <h2>The world's largest energy access gap</h2>
            <p>Nigeria is now the country with the <strong>largest population without energy access in the world</strong> — over <strong>85 million people, or 43%</strong> of the total population. This number has been growing due to population expansion, and Sustainable Development Goal 7 (clean energy access) will not be globally achieved without significant progress in Nigeria.</p>
            <p>The electricity supply gap is staggering. Nigeria's demand stands at approximately <strong>180,000 MW</strong>, yet operational capacity is only <strong>3,000–4,500 MW</strong>. Even installed capacity of 11,000 MW (of which just 8,000 MW is operational) represents a fraction of what is needed to power a modern economy of 200 million people.</p>
            <p>To compensate, <strong>Nigerian businesses spend $14 billion per year</strong> running fossil fuel generators — a direct cost that erodes competitiveness, drives carbon emissions, and diverts capital away from productive investment.</p>
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

    <!-- Opportunity -->
    <section class="section section--dark">
      <div class="container">
        <div class="glass-card opportunity-card">
          <div class="opp-header">
            <div>
              <span class="label">Market Opportunity</span>
              <h2>A $9.2 billion off-grid opportunity</h2>
              <p>The off-grid renewable energy sector in Nigeria represents a <strong>$9.2 billion market opportunity</strong>. A well-structured transition to clean energy could enable Nigeria to <strong>save approximately $4.4 billion annually</strong> while simultaneously reducing carbon emissions and expanding energy access for the 85 million currently unserved.</p>
              <p>This opportunity is largely untapped by domestic institutional capital — pension funds and insurance companies that hold long-term Naira liabilities and need assets with matching characteristics. FundCo's Clean Energy Fund bridges this gap.</p>
            </div>
            <div class="opp-stats">
              <div class="opp-stat" v-for="o in oppStats" :key="o.val">
                <span class="opp-val">{{ o.val }}</span>
                <span class="opp-lbl">{{ o.lbl }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fund mission -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="label">Fund Mission</span>
          <h2>Accelerating private capital into clean energy</h2>
          <p class="section-sub">FundCo's Clean Energy Fund is designed to mobilise private institutional capital — denominated in domestic currency — into renewable energy and climate-smart infrastructure projects across Nigeria.</p>
        </div>
        <div class="mission-grid">
          <div class="mission-card" v-for="m in missionItems" :key="m.title">
            <div class="mission-icon">{{ m.icon }}</div>
            <h3>{{ m.title }}</h3>
            <p>{{ m.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Investment focus -->
    <section class="section section--dark">
      <div class="container">
        <div class="section-header">
          <span class="label">Investment Focus</span>
          <h2>Renewable energy technologies we target</h2>
        </div>
        <div class="focus-grid">
          <div class="focus-card" v-for="f in focusAreas" :key="f.title">
            <div class="focus-icon">{{ f.icon }}</div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
            <div class="focus-tags">
              <span v-for="tag in f.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NDC alignment -->
    <section class="section">
      <div class="container">
        <div class="glass-card ndc-card">
          <div class="ndc-inner">
            <div>
              <span class="label">NDC Alignment</span>
              <h2>Financing Nigeria's climate commitments</h2>
              <p>The Clean Energy Fund is structured to finance projects that directly support Nigeria's National Determined Contributions (NDCs) under the Paris Agreement. Every investment is assessed for its contribution to Nigeria's climate targets — making the fund a credible instrument for development finance institutions and ESG-mandated investors.</p>
              <p>By deepening local capital markets with climate-compliant infrastructure assets, the fund also contributes to the long-term development of Nigeria's domestic green finance ecosystem.</p>
            </div>
            <div class="ndc-goals">
              <div class="ndc-goal" v-for="g in ndcGoals" :key="g.code">
                <span class="ndc-code">{{ g.code }}</span>
                <span class="ndc-name">{{ g.name }}</span>
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
          <h2>Compelling reasons for institutional investors</h2>
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

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-card">
          <h2>Power Nigeria's clean energy future</h2>
          <p>Join FundCo in accelerating Nigeria's transition to renewable energy — earning long-term, inflation-protected returns while advancing climate action at scale.</p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn-primary">Request Investor Deck</router-link>
            <router-link to="/funds" class="btn-outline">View All Funds</router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'EnergyPage',
  data() {
    return {
      heroStats: [
        { val: '85M', label: 'Nigerians without electricity' },
        { val: '43%', label: 'Population energy-poor' },
        { val: '$14B', label: 'Spent on generators annually' },
        { val: '$9.2B', label: 'Off-grid market opportunity' },
        { val: '$4.4B', label: 'Potential annual savings' }
      ],
      dataCards: [
        { val: '180,000 MW', label: 'Electricity demand', note: 'Against operational capacity of just 3,000–4,500 MW — a gap of over 98%' },
        { val: '11,000 MW', label: 'Installed capacity', note: 'Of which only 8,000 MW is operational — serving a population of 200 million' },
        { val: '$14B', label: 'Annual generator spend', note: 'Cost borne by Nigerian businesses every year to self-generate electricity from fossil fuels' },
        { val: '43%', label: 'Population without power', note: 'Nigeria holds the world\'s largest population without access to electricity — 85 million people' }
      ],
      oppStats: [
        { val: '$9.2B', lbl: 'Off-grid market opportunity' },
        { val: '$4.4B', lbl: 'Potential annual savings from clean energy transition' },
        { val: '85M', lbl: 'People to gain energy access' }
      ],
      missionItems: [
        { icon: '🏦', title: 'Mobilise institutional capital', desc: 'The fund channels long-term Naira capital from pension funds and insurance companies — which currently hold over ₦20 trillion in assets — into renewable energy projects, matching asset and liability durations.' },
        { icon: '💱', title: 'Domestic currency financing', desc: 'By deploying capital in local currency, the fund eliminates foreign exchange risk for both investors and project developers — removing one of the key barriers to renewable energy finance in Nigeria.' },
        { icon: '📋', title: 'NDC-aligned investment', desc: 'Every project is assessed for its alignment with Nigeria\'s National Determined Contributions, ensuring the fund contributes directly to the country\'s Paris Agreement climate targets.' },
        { icon: '📊', title: 'Deepen local capital markets', desc: 'The fund creates new climate-compliant infrastructure assets within the Nigerian capital market, offering institutional investors regulated, transparent exposure to the energy transition.' }
      ],
      focusAreas: [
        {
          icon: '☀️',
          title: 'Solar Energy',
          desc: 'From utility-scale solar farms serving the national grid to C&I rooftop installations for commercial and industrial users, and off-grid solar home systems for rural households.',
          tags: ['Utility-scale', 'C&I Rooftop', 'Off-grid SHS']
        },
        {
          icon: '💨',
          title: 'Wind Power',
          desc: 'Onshore wind projects in Nigeria\'s high-resource zones, structured with long-term power purchase agreements to provide revenue certainty and investment security.',
          tags: ['Onshore wind', 'Long-term PPAs']
        },
        {
          icon: '🔋',
          title: 'Energy Storage',
          desc: 'Battery energy storage systems and hybrid configurations that stabilise grids, reduce curtailment, and maximise the effective utilisation of variable renewable generation.',
          tags: ['BESS', 'Hybrid systems', 'Grid stabilisation']
        },
        {
          icon: '🏘️',
          title: 'Mini-grids',
          desc: 'Decentralised renewable mini-grids serving rural and peri-urban communities — a proven model for expanding clean energy access to the 85 million Nigerians currently unserved by the national grid.',
          tags: ['Rural electrification', 'Peri-urban', 'Decentralised']
        }
      ],
      ndcGoals: [
        { code: 'SDG 7', name: 'Affordable & Clean Energy' },
        { code: 'SDG 9', name: 'Industry & Innovation' },
        { code: 'SDG 11', name: 'Sustainable Cities' },
        { code: 'SDG 13', name: 'Climate Action' },
        { code: 'NDC', name: "Nigeria's Paris Agreement Targets" }
      ],
      timeline: [
        { title: 'Capital commitment', desc: 'Open to pension funds, insurance companies, DFIs, and qualified institutional investors. Minimum commitments structured for the fund\'s target capital raise.' },
        { title: 'Project origination & screening', desc: 'FundCo identifies and screens renewable energy projects for technical viability, financial structuring, and NDC alignment. Independent technical advisors assess each opportunity.' },
        { title: 'Due diligence & structuring', desc: 'Rigorous financial, legal, environmental, and social due diligence. Projects are structured with appropriate security packages, off-take agreements, and ESG monitoring frameworks.' },
        { title: 'Deployment & active management', desc: 'Capital deployed to vetted developers and projects. FundCo provides ongoing technical and financial oversight to optimise performance and manage risk throughout the investment period.' },
        { title: 'Distributions & exit', desc: 'Target hold period of 5–7 years, with quarterly or semi-annual distributions from power purchase agreement revenues. Exit via project refinancing, asset sale, or secondary market.' }
      ],
      reasons: [
        { icon: '🌍', title: 'Climate & SDG impact', desc: 'Directly advance Nigeria\'s NDC commitments and SDG 7 (Clean Energy) — with measurable tonnes of CO₂ avoided and households electrified per year of investment.' },
        { icon: '💱', title: 'Local currency returns', desc: 'Returns generated and distributed in Nigerian Naira, perfectly matching the Naira-denominated liabilities of pension funds and insurance companies.' },
        { icon: '📈', title: 'Structural market demand', desc: 'A 98% capacity gap against demand, 85 million unserved citizens, and $14bn in annual generator spend create structural, durable demand for clean energy solutions.' },
        { icon: '🛡️', title: 'PPA-backed cash flows', desc: 'Long-term Power Purchase Agreements provide contracted, inflation-linked revenues that offer visibility and security comparable to bond-like instruments.' },
        { icon: '🏛️', title: 'Policy & DFI support', desc: 'Aligned with Nigerian government energy policy, international climate finance frameworks, and DFI co-investment mandates — providing additional capital and de-risking.' },
        { icon: '🔒', title: 'Currency risk elimination', desc: 'Unlike USD-denominated energy investments, this fund\'s domestic currency structure removes the foreign exchange exposure that has historically deterred Nigerian institutional investors.' }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');

.energy-page {
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
.hero-section {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80') center / cover no-repeat;
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

/* Stats bar */
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

.stat-lbl { font-size: 0.75rem; color: rgba(255,255,255,0.5); line-height: 1.3; }

/* Two col */
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
  font-size: 1.4rem;
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

.data-note { font-size: 0.78rem; color: rgba(255,255,255,0.45); line-height: 1.4; margin: 0; }

/* Opportunity card */
.glass-card {
  background: rgba(10, 15, 30, 0.65);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 32px;
  padding: 2.5rem;
}

.opp-header {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 3rem;
  align-items: center;
}

.opp-header h2 {
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 800;
  margin: 0.5rem 0 1rem;
  background: linear-gradient(135deg, #fff, #c0c8ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.opp-header p {
  font-size: 0.93rem;
  color: rgba(255,255,255,0.72);
  line-height: 1.75;
  margin-bottom: 1rem;
}

.opp-header strong { color: white; }

.opp-stats { display: flex; flex-direction: column; gap: 1rem; }

.opp-stat {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.12), rgba(118, 75, 162, 0.12));
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 20px;
  padding: 1.25rem;
  text-align: center;
}

.opp-val {
  display: block;
  font-size: 1.8rem;
  font-weight: 800;
  color: #a8b7ff;
  margin-bottom: 0.3rem;
}

.opp-lbl { font-size: 0.8rem; color: rgba(255,255,255,0.55); line-height: 1.4; }

/* Mission grid */
.mission-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.mission-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 1.75rem 1.5rem;
  transition: transform 0.25s, background 0.25s;
}

.mission-card:hover { transform: translateY(-5px); background: rgba(255,255,255,0.07); }

.mission-icon { font-size: 1.8rem; margin-bottom: 0.75rem; }

.mission-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #a8b7ff;
  margin-bottom: 0.5rem;
}

.mission-card p { font-size: 0.87rem; color: rgba(255,255,255,0.62); line-height: 1.65; }

/* Focus grid */
.focus-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.focus-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 1.75rem 1.5rem;
  transition: transform 0.25s, background 0.25s;
}

.focus-card:hover { transform: translateY(-5px); background: rgba(255,255,255,0.07); }

.focus-icon { font-size: 2rem; margin-bottom: 0.75rem; }

.focus-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #a8b7ff;
  margin-bottom: 0.5rem;
}

.focus-card p {
  font-size: 0.87rem;
  color: rgba(255,255,255,0.62);
  line-height: 1.65;
  margin-bottom: 0.9rem;
}

.focus-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

.tag {
  font-size: 0.7rem;
  font-weight: 600;
  color: #a8b7ff;
  background: rgba(168, 183, 255, 0.1);
  border: 1px solid rgba(168, 183, 255, 0.15);
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
}

/* NDC card */
.ndc-inner {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 3rem;
  align-items: center;
}

.ndc-inner h2 {
  font-size: clamp(1.4rem, 2vw, 1.9rem);
  font-weight: 800;
  margin: 0.5rem 0 1rem;
  background: linear-gradient(135deg, #fff, #c0c8ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.ndc-inner p {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.ndc-goals { display: flex; flex-direction: column; gap: 0.6rem; }

.ndc-goal {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255,255,255,0.04);
  border-radius: 12px;
  padding: 0.65rem 1rem;
}

.ndc-code {
  font-size: 0.72rem;
  font-weight: 800;
  color: #667eea;
  background: rgba(102, 126, 234, 0.12);
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  white-space: nowrap;
}

.ndc-name { font-size: 0.88rem; color: rgba(255,255,255,0.75); }

/* Timeline */
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

/* Reasons */
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

.cta-card p {
  font-size: 1rem;
  color: rgba(255,255,255,0.7);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

/* Buttons */
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

/* Responsive */
@media (max-width: 1024px) {
  .two-col { grid-template-columns: 1fr; }
  .opp-header { grid-template-columns: 1fr; }
  .ndc-inner { grid-template-columns: 1fr; }
  .focus-grid { grid-template-columns: 1fr; }
  .reasons-grid { grid-template-columns: repeat(2, 1fr); }
  .col-cards { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 768px) {
  .section { padding: 3.5rem 0; }
  .mission-grid { grid-template-columns: 1fr; }
  .reasons-grid { grid-template-columns: 1fr; }
  .col-cards { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .col-cards { grid-template-columns: 1fr; }
}
</style>
