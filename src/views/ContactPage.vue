<template>
  <div class="contact-page">

    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-inner">
        <span class="label">Get In Touch</span>
        <h1>Contact Us</h1>
        <p>Whether you're an investor, a potential partner, or simply want to learn more — our team is ready to help.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">

          <!-- Info panel -->
          <div class="info-panel">
            <h2>Our Office</h2>

            <div class="info-item">
              <div class="info-icon"><i class="fas fa-map-marker-alt"></i></div>
              <div>
                <strong>Address</strong>
                <span>6th Floor Landmark Towers, 5B Water Corporation Way Oniru, Victoria Island, Lagos</span>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon"><i class="fas fa-phone"></i></div>
              <div>
                <strong>Phone</strong>
                <span>+234 01-4545361</span>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon"><i class="fas fa-envelope"></i></div>
              <div>
                <strong>Email</strong>
                <span>info@fundco.ng</span>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon"><i class="fas fa-clock"></i></div>
              <div>
                <strong>Business Hours</strong>
                <span>Monday – Friday, 9:00 AM – 5:00 PM WAT</span>
              </div>
            </div>

            <div class="social-row">
              <a href="#" class="social-btn" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" class="social-btn" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
              <a href="#" class="social-btn" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social-btn" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            </div>

            <div class="reg-notice">
              <i class="fas fa-shield-alt"></i>
              <p>FundCo is authorised and registered by the Securities &amp; Exchange Commission, Nigeria.</p>
            </div>
          </div>

          <!-- Form panel -->
          <div class="form-panel">
            <h2>Send a Message</h2>
            <form @submit.prevent="submitForm" class="contact-form" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Full Name *</label>
                  <input id="name" type="text" v-model="form.name" placeholder="Your full name" required />
                </div>
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input id="email" type="email" v-model="form.email" placeholder="your@email.com" required />
                </div>
              </div>

              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input id="phone" type="tel" v-model="form.phone" placeholder="+234 000 000 0000" />
              </div>

              <div class="form-group">
                <label for="subject">Subject *</label>
                <div class="select-wrap">
                  <select id="subject" v-model="form.subject" required>
                    <option value="" disabled>Select a subject</option>
                    <option value="Investment Enquiry">Investment Enquiry</option>
                    <option value="Fund Information">Fund Information</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Investor Relations">Investor Relations</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                  <i class="fas fa-chevron-down select-arrow"></i>
                </div>
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea id="message" v-model="form.message" rows="5" placeholder="How can we help you?" required></textarea>
              </div>

              <button type="submit" class="submit-btn" :disabled="submitting">
                <span v-if="!submitting">Send Message <i class="fas fa-arrow-right"></i></span>
                <span v-else>Sending…</span>
              </button>

              <p v-if="successMsg" class="success-msg"><i class="fas fa-check-circle"></i> {{ successMsg }}</p>
            </form>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      submitting: false,
      successMsg: '',
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      this.submitting = true
      await new Promise(r => setTimeout(r, 900))
      this.successMsg = `Thank you, ${this.form.name}. We'll be in touch soon.`
      this.form = { name: '', email: '', phone: '', subject: '', message: '' }
      this.submitting = false
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');

.contact-page {
  font-family: 'Inter', sans-serif;
  background: rgba(7, 3, 43);
  color: white;
  min-height: 100vh;
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

/* Hero */
.hero {
  position: relative;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 1.5rem 3rem;
  background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(7,3,43,0.90) 0%, rgba(7,3,43,0.78) 100%);
}

.hero-inner { position: relative; z-index: 2; max-width: 600px; }

.hero h1 {
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  font-weight: 800;
  margin: 0.75rem 0 1rem;
  background: linear-gradient(135deg, #fff, #a8b7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.7;
}

/* Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2.5rem;
  align-items: start;
}

/* Info panel */
.info-panel {
  background: rgba(10, 15, 30, 0.65);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 28px;
  padding: 2.5rem 2rem;
}

.info-panel h2 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.75rem;
  background: linear-gradient(135deg, #fff, #a8b7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.info-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.info-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(102, 126, 234, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.info-item strong {
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  color: #a8b7ff;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
}

.info-item span {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.5;
}

.social-row {
  display: flex;
  gap: 0.6rem;
  margin: 1.75rem 0;
}

.social-btn {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.82rem;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}

.social-btn:hover {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-color: transparent;
  color: white;
  transform: translateY(-2px);
}

.reg-notice {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  background: rgba(102, 126, 234, 0.08);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 14px;
  padding: 0.9rem 1rem;
  margin-top: 0.5rem;
}

.reg-notice i {
  color: #667eea;
  font-size: 0.9rem;
  margin-top: 2px;
  flex-shrink: 0;
}

.reg-notice p {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.5;
  margin: 0;
}

/* Form panel */
.form-panel {
  background: rgba(10, 15, 30, 0.65);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 28px;
  padding: 2.5rem 2rem;
}

.form-panel h2 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.75rem;
  background: linear-gradient(135deg, #fff, #a8b7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.contact-form { display: flex; flex-direction: column; gap: 1.1rem; }

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group { display: flex; flex-direction: column; gap: 0.4rem; }

.form-group label {
  font-size: 0.78rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.04em;
}

.form-group input,
.form-group textarea,
.form-group select {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 0.75rem 1rem;
  color: white;
  font-family: inherit;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: rgba(102, 126, 234, 0.6);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.form-group textarea { resize: vertical; min-height: 120px; }

.select-wrap { position: relative; }

.select-wrap select {
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

.select-wrap select option {
  background: #0a0f1e;
  color: white;
}

.select-arrow {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  pointer-events: none;
}

.submit-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 12px;
  padding: 0.9rem 2rem;
  color: white;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-btn:hover:not(:disabled) { opacity: 0.88; transform: translateY(-1px); }
.submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.success-msg {
  font-size: 0.9rem;
  color: #86efac;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Responsive */
@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; }
}

@media (max-width: 560px) {
  .form-row { grid-template-columns: 1fr; }
  .form-panel, .info-panel { padding: 1.75rem 1.25rem; }
}
</style>
