<template>
  <div class="procurement-page">

    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-inner">
        <span class="label">Procurement</span>
        <h1>Procurement Policy</h1>
        <p>FundCo is committed to fair, transparent, and ethical procurement practices in all its operations and fund activities.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="intro-grid">
          <div class="glass-card">
            <span class="label">Our Commitment</span>
            <h2>Transparent and ethical procurement</h2>
            <p>FundCo's procurement framework governs the selection of goods, services, and contractors across our fund management operations. We apply rigorous standards of transparency, value for money, and ethical conduct in all procurement activities — both for internal operations and within portfolio company investments.</p>
            <p>Our approach is guided by best practice standards for regulated financial institutions and is consistent with our obligations under the Nigeria Securities &amp; Exchange Commission regulatory framework.</p>
          </div>
        </div>

        <!-- Principles -->
        <div class="section-header" style="margin-top: 4rem;">
          <span class="label">Core Principles</span>
          <h2>How we procure</h2>
        </div>
        <div class="principles-grid">
          <div class="principle-card" v-for="p in principles" :key="p.title">
            <div class="principle-icon">{{ p.icon }}</div>
            <h3>{{ p.title }}</h3>
            <p>{{ p.desc }}</p>
          </div>
        </div>

        <!-- Process -->
        <div class="glass-card" style="margin-top: 4rem;">
          <span class="label">Procurement Process</span>
          <h2>Steps to engagement</h2>
          <div class="process-list">
            <div class="process-item" v-for="(step, i) in processSteps" :key="step.title">
              <div class="process-num">{{ i + 1 }}</div>
              <div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Vendor registration -->
        <div class="vendor-cta">
          <div class="vendor-cta-inner">
            <div>
              <h2>Interested in working with FundCo?</h2>
              <p>We invite qualified service providers, consultants, and contractors to express interest in future procurement opportunities. To register your company's capabilities and receive notifications of relevant tenders, please contact our operations team.</p>
            </div>
            <router-link to="/contact" class="btn-primary">Contact Our Team</router-link>
          </div>
        </div>

        <!-- Policies -->
        <div class="section-header" style="margin-top: 4rem;">
          <span class="label">Policies &amp; Compliance</span>
          <h2>Governance documents</h2>
        </div>
        <div class="policies-grid">
          <div class="policy-card" v-for="policy in policies" :key="policy.title">
            <div class="policy-icon"><i :class="policy.icon"></i></div>
            <div>
              <h3>{{ policy.title }}</h3>
              <p>{{ policy.desc }}</p>
            </div>
            <span class="policy-tag">{{ policy.tag }}</span>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'ProcurementPage',
  data() {
    return {
      principles: [
        { icon: '⚖️', title: 'Fairness', desc: 'All vendors are evaluated on an equal, impartial basis. Procurement decisions are free from bias, conflicts of interest, and improper influence.' },
        { icon: '🔍', title: 'Transparency', desc: 'Procurement processes are clearly documented and communicated. Evaluation criteria are defined upfront and applied consistently.' },
        { icon: '💰', title: 'Value for Money', desc: 'We assess not only price but quality, reliability, and total cost of ownership to ensure optimal use of fund resources.' },
        { icon: '🤝', title: 'Ethical Conduct', desc: 'We operate a strict anti-corruption and anti-bribery policy. Any vendor found to have offered inducements will be permanently disqualified.' },
        { icon: '🌍', title: 'Local Content', desc: 'Where quality and value are equivalent, we prioritise Nigerian-owned and operated businesses to support local economic development.' },
        { icon: '📋', title: 'Compliance', desc: 'All procurement activities comply with applicable Nigerian law, SEC regulations, and FundCo\'s internal governance framework.' }
      ],
      processSteps: [
        { title: 'Needs Assessment', desc: 'The relevant business unit identifies the requirement and prepares a specification. Procurement reviews and approves before proceeding.' },
        { title: 'Market Engagement', desc: 'For significant contracts, FundCo issues a Request for Information (RFI) or Request for Proposal (RFP) to a shortlist of qualified vendors.' },
        { title: 'Evaluation', desc: 'An independent evaluation committee assesses submissions against pre-defined technical and commercial criteria. Scores are documented.' },
        { title: 'Due Diligence', desc: 'The preferred vendor undergoes financial, legal, and reputational due diligence before any contract is awarded.' },
        { title: 'Contract Award', desc: 'Contracts are issued on standard FundCo terms. Award notifications are communicated to all participants in the process.' },
        { title: 'Performance Management', desc: 'Vendor performance is monitored throughout the contract period. Satisfactory vendors are eligible for inclusion on the approved supplier register.' }
      ],
      policies: [
        { icon: 'fas fa-file-alt', title: 'Procurement Policy', desc: 'Our comprehensive procurement framework governing all purchasing activities.', tag: 'Governance' },
        { icon: 'fas fa-ban', title: 'Anti-Bribery & Corruption Policy', desc: 'Zero-tolerance approach to bribery, kickbacks, and corrupt practices.', tag: 'Compliance' },
        { icon: 'fas fa-user-secret', title: 'Whistleblowing Policy', desc: 'Secure channels for reporting suspected procurement misconduct.', tag: 'Compliance' },
        { icon: 'fas fa-shield-alt', title: 'Conflict of Interest Policy', desc: 'Mandatory disclosure requirements for all procurement decision-makers.', tag: 'Governance' }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');

.procurement-page {
  font-family: 'Inter', sans-serif;
  background: rgba(7, 3, 43);
  color: white;
}

.container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }
.section { padding: 4rem 0 6rem; }

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
  max-width: 600px;
  margin: 0 auto 2.5rem;
}

.section-header h2 {
  font-size: clamp(1.6rem, 2.2vw, 2.2rem);
  font-weight: 800;
  margin: 0.5rem 0;
  background: linear-gradient(135deg, #fff, #a8b7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Hero */
.hero {
  position: relative;
  min-height: 44vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 1.5rem 3.5rem;
  background-image: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(7,3,43,0.90) 0%, rgba(7,3,43,0.78) 100%);
}

.hero-inner { position: relative; z-index: 2; max-width: 620px; }

.hero h1 {
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  font-weight: 800;
  margin: 0.75rem 0 1rem;
  background: linear-gradient(135deg, #fff, #a8b7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero p { font-size: 1rem; color: rgba(255,255,255,0.65); line-height: 1.7; }

/* Glass card */
.glass-card {
  background: rgba(10, 15, 30, 0.65);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 28px;
  padding: 2.5rem;
}

.glass-card h2 {
  font-size: clamp(1.4rem, 2vw, 1.9rem);
  font-weight: 800;
  margin: 0.5rem 0 1rem;
  background: linear-gradient(135deg, #fff, #c0c8ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.glass-card p {
  font-size: 0.93rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.75;
  margin-bottom: 1rem;
}

/* Principles */
.principles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.principle-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 22px;
  padding: 1.75rem 1.5rem;
  transition: transform 0.25s, background 0.25s;
}

.principle-card:hover { transform: translateY(-5px); background: rgba(255,255,255,0.07); }

.principle-icon { font-size: 1.8rem; margin-bottom: 0.75rem; }

.principle-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #a8b7ff;
  margin-bottom: 0.5rem;
}

.principle-card p { font-size: 0.85rem; color: rgba(255,255,255,0.6); line-height: 1.6; }

/* Process */
.process-list { display: flex; flex-direction: column; gap: 0.85rem; margin-top: 1.5rem; }

.process-item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px;
  padding: 1.1rem 1.25rem;
  transition: background 0.2s;
}

.process-item:hover { background: rgba(102, 126, 234, 0.07); }

.process-num {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.95rem;
  flex-shrink: 0;
}

.process-item h3 { font-size: 0.95rem; font-weight: 700; color: #a8b7ff; margin-bottom: 0.2rem; }
.process-item p { font-size: 0.85rem; color: rgba(255,255,255,0.6); line-height: 1.55; margin: 0; }

/* Vendor CTA */
.vendor-cta {
  margin-top: 3.5rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.13), rgba(118, 75, 162, 0.13));
  border: 1px solid rgba(102, 126, 234, 0.25);
  border-radius: 28px;
  padding: 2.5rem;
}

.vendor-cta-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.vendor-cta h2 {
  font-size: clamp(1.3rem, 2vw, 1.7rem);
  font-weight: 800;
  margin-bottom: 0.6rem;
  background: linear-gradient(135deg, #fff, #a8b7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.vendor-cta p { font-size: 0.88rem; color: rgba(255,255,255,0.65); line-height: 1.65; max-width: 560px; }

.btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 40px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: opacity 0.2s, transform 0.2s;
}

.btn-primary:hover { opacity: 0.88; transform: translateY(-2px); }

/* Policies */
.policies-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.policy-card {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  padding: 1.25rem 1.5rem;
  transition: background 0.2s;
}

.policy-card:hover { background: rgba(255,255,255,0.07); }

.policy-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(102, 126, 234, 0.15);
  color: #667eea;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}

.policy-card h3 { font-size: 0.95rem; font-weight: 700; color: white; margin-bottom: 0.2rem; }
.policy-card p { font-size: 0.83rem; color: rgba(255,255,255,0.55); line-height: 1.4; margin: 0; }
.policy-card > div { flex: 1; }

.policy-tag {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a8b7ff;
  background: rgba(168, 183, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  white-space: nowrap;
}

/* Responsive */
@media (max-width: 900px) {
  .principles-grid { grid-template-columns: repeat(2, 1fr); }
  .vendor-cta-inner { flex-direction: column; align-items: flex-start; }
}

@media (max-width: 560px) {
  .principles-grid { grid-template-columns: 1fr; }
  .glass-card { padding: 1.5rem; }
}
</style>
