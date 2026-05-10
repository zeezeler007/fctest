<template>
  <footer class="footer">
    <div class="footer-content">

      <!-- Brand -->
      <div class="footer-section footer-brand">
        <h3 class="footer-logo">FundCo</h3>
        <p class="company-description">
          FundCo is authorised and registered by the Nigeria Securities &amp; Exchange Commission
          to conduct the business of a fund portfolio manager.
        </p>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#" class="social-link" aria-label="Twitter / X">
            <i class="fab fa-x-twitter"></i>
          </a>
          <a href="#" class="social-link" aria-label="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social-link" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <!-- Navigation -->
      <div class="footer-section">
        <h4 class="footer-heading">Navigation</h4>
        <ul class="footer-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/investment-approach">Investment Approach</router-link></li>
          <li><router-link to="/procurement">Procurement</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer-section">
        <h4 class="footer-heading">Contact Us</h4>
        <ul class="contact-info">
          <li>
            <i class="fas fa-map-marker-alt"></i>
            <span>6th Floor Landmark Towers, 5B Water Corporation Way Oniru, Victoria Island, Lagos</span>
          </li>
          <li>
            <i class="fas fa-phone"></i>
            <span>+234 01-4545361</span>
          </li>
          <li>
            <i class="fas fa-envelope"></i>
            <span>info@fundco.ng</span>
          </li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div class="footer-section">
        <h4 class="footer-heading">Stay Updated</h4>
        <p class="newsletter-blurb">Subscribe to receive fund updates and market insights.</p>
        <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
          <input
            type="email"
            v-model="newsletterEmail"
            placeholder="Your email address"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} FundCo. All rights reserved.</p>
      <p class="footer-disclaimer">Regulated by the Securities &amp; Exchange Commission, Nigeria.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      newsletterEmail: ''
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  },
  methods: {
    subscribeNewsletter() {
      alert(`Thank you! Updates will be sent to ${this.newsletterEmail}.`)
      this.newsletterEmail = ''
    }
  }
}
</script>

<style scoped>
.footer {
  background: rgba(4, 2, 30);
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  color: #fff;
  padding: 60px 24px 24px;
  font-family: 'Inter', sans-serif;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto 48px;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.4fr 1.4fr;
  gap: 40px;
}

/* ── Brand column ── */
.footer-logo {
  font-size: 1.6rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 14px;
}

.company-description {
  font-size: 0.88rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 10px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.85rem;
  text-decoration: none;
  transition: background 0.25s, color 0.25s, transform 0.25s;
}

.social-link:hover {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-color: transparent;
  color: #fff;
  transform: translateY(-3px);
}

/* ── Shared section heading ── */
.footer-heading {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #a8b7ff;
  margin-bottom: 18px;
}

/* ── Nav links ── */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.2s, padding-left 0.2s;
}

.footer-links a:hover,
.footer-links a.router-link-active {
  color: #a8b7ff;
  padding-left: 4px;
}

/* ── Contact list ── */
.contact-info {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-info li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 14px;
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.5;
}

.contact-info i {
  margin-top: 2px;
  color: #667eea;
  width: 14px;
  flex-shrink: 0;
}

/* ── Newsletter ── */
.newsletter-blurb {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 14px;
  line-height: 1.5;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.newsletter-form input {
  padding: 10px 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  font-size: 0.88rem;
  outline: none;
  transition: border-color 0.2s;
}

.newsletter-form input:focus {
  border-color: rgba(102, 126, 234, 0.6);
}

.newsletter-form input::placeholder {
  color: rgba(255, 255, 255, 0.35);
}

.newsletter-form button {
  padding: 10px 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
}

.newsletter-form button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* ── Bottom bar ── */
.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.footer-bottom p {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.4);
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
