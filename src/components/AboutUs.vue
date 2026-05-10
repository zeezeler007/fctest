<template>
  <section class="target-section">
    <div class="target-card">
      <span class="target-label">Target Sectors</span>
      <p class="target-description">
        Our investments will directly address key sustainability challenges and provide innovative solutions that seek a positive impact while also achieving strong risk-adjusted financial returns in the following market segments:
      </p>
<router-view />
      <!-- Two cards side by side -->
      <div class="sectors-grid">
        <!-- Housing Sector -->
         
 <router-link to="/housing" class="sector-card-link">
          <div class="sector-card">
            <div class="sector-icon">
              <img src="../assets/housing.png" alt="Housing icon" />
            </div>
            <h3 class="sector-title">Housing & Real Estate</h3>
            <p class="sector-text">
              Investing in sustainable housing projects, green building technologies,
              and energy-efficient real estate developments to promote environmentally
              friendly living spaces.
            </p>
          </div>
        </router-link>

        <!-- Energy Sector -->
                <router-link to="/energy" class="sector-card-link">
          <div class="sector-card">
            <div class="sector-icon">
              <img src="../assets/energy.png" alt="Energy icon" />
            </div>
            <h3 class="sector-title">Energy & Utilities</h3>
            <p class="sector-text">
              Supporting renewable energy projects, energy storage solutions,
              and sustainable utility services to drive the transition to clean energy sources.
            </p>
          </div>
        </router-link>
        </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'TargetSectors'
}
</script>

<style scoped>
/* Import a modern font */
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700&display=swap');

.target-section {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4rem 1.5rem;
  font-family: 'Inter', sans-serif;
}

/* Glassmorphic card – dark, blurred, no white background */
.target-card {
  max-width: 1200px;
  width: 100%;
  background: rgba(10, 15, 30, 0.65);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 32px;
  padding: 2.5rem 2rem;
  box-shadow: 0 25px 45px -12px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
  text-align: center;
}

.target-card:hover {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(10, 15, 30, 0.75);
}

/* Label styling */
.target-label {
  display: inline-block;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: #a8b7ff;
  background: rgba(168, 183, 255, 0.12);
  padding: 0.3rem 1rem;
  border-radius: 40px;
  backdrop-filter: blur(4px);
  
}

/* Description text */
.target-description {
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2.5rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Two columns side by side */
.sectors-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

/* Individual sector card */
.sector-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 1.8rem;
  text-align: center;
  transition: transform 0.25s ease, background 0.25s ease;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.sector-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.15);
}

/* Icon styling */
.sector-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 1.2rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  transition: transform 0.2s;
}

.sector-card:hover .sector-icon {
  transform: scale(1.05);
}

.sector-icon img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

/* Titles */
.sector-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #ffffff, #c0c8ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.3px;
}

/* Description text inside sector cards */
.sector-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
}

/* Responsive: stack on mobile */
@media (max-width: 768px) {
  .target-section {
    padding: 2rem 1rem;
  }
  .target-card {
    padding: 1.5rem;
  }
  .sectors-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .sector-title {
    font-size: 1.3rem;
  }
  .target-description {
    font-size: 0.95rem;
  }
}
</style>