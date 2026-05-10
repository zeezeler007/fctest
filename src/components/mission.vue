<template>
  <section class="mission-section">
    <div class="mission-card">
      <span class="mission-label">Our Mission</span>
      <h2>Deliver impactful investment outcomes</h2>
      <p>
        Our mission is to lead the effort to diversify from traditional mainstream assets to alternative asset classes that accelerate the transition to a low-carbon economy, creating jobs and supporting local economic growth</p>
      <p class="mission-note">
       FundCo aims to unlock and mobilize local capital into key sectors like infrastructure, energy, housing and agriculture especially those that are underserved, while promoting a transition to low carbon economy. At the same time, they seek to create opportunities, support local economies and deliver strong financial returns for investors.
      </p>
    </div>
  </section>
</template>

<style scoped>
.mission-section {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 1.5rem;
}

.mission-card {
  width: 100%;
  max-width: 1200px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(18px);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  color: white;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.18);
}

.mission-label {
  display: inline-block;
  font-size: 1.3rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: #a8b7ff;
}

.mission-card h2 {
  font-size: clamp(2rem, 2.4vw, 3rem);
  margin-bottom: 1rem;
  line-height: 1.05;
}

.mission-card p {
  font-size: 1.4rem;
  line-height: 1.8;
  color: #e9ecff;
  margin-bottom: 1rem;
}

.mission-note {
  opacity: 0.9;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .mission-section {
    padding: 2rem 1rem;
  }

  .mission-card {
    padding: 1.8rem 1.2rem;
    border-radius: 20px;
  }

  .mission-card h2 {
    font-size: 2rem;
  }
}
</style>