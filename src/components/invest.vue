<template>
  <section class="gallery-section">
    <div class="gallery-header">
      <span class="label">Explore</span>
      <h2>Our Funds &amp; Resources</h2>
      <p>Discover our investment vehicles, target sectors, and key resources — designed to deliver impact-driven returns for institutional investors.</p>
    </div>

    <ul class="image-grid">
      <li v-for="(item, index) in galleryItems" :key="index" :class="item.size">
        <router-link :to="item.route" class="card-link">
          <figure>
            <img :src="item.src" :alt="item.alt" loading="lazy" />
            <figcaption>
              <div class="caption-inner">
                <div class="default-content">
                  <div class="icon-wrap">
                    <svg class="caption-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                      <use :href="`#${item.iconId}`" />
                    </svg>
                  </div>
                  <span class="default-caption">{{ item.caption }}</span>
                  <span class="default-sub">{{ item.sub }}</span>
                </div>

                <div class="hover-content">
                  <span class="hover-text">{{ item.hoverMessage }}</span>
                  <span class="details-btn">{{ item.cta }} →</span>
                </div>
              </div>
            </figcaption>
          </figure>
        </router-link>
      </li>
    </ul>
  </section>

  <!-- SVG sprite -->
  <svg style="display:none;" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <symbol id="icon-sun" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </symbol>
      <symbol id="icon-home" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-5v-8H9v8H5a2 2 0 0 1-2-2z"/>
      </symbol>
      <symbol id="icon-download" viewBox="0 0 24 24">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </symbol>
      <symbol id="icon-chart" viewBox="0 0 24 24">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6"  y1="20" x2="6"  y2="14"/>
        <line x1="2"  y1="20" x2="22" y2="20"/>
      </symbol>
      <symbol id="icon-star" viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </symbol>
    </defs>
  </svg>
</template>

<script>
import cefImg    from '../assets/cef.jpg'
import hsfImg    from '../assets/hsf.jpeg'
import factsheetImg from '../assets/factsheet.jpeg'
import investImg from '../assets/invest.jpeg'

export default {
  data() {
    return {
      galleryItems: [
        {
          src: cefImg,
          alt: 'Clean Energy Fund',
          caption: 'Clean Energy Fund',
          sub: 'Infrastructure · Renewable',
          hoverMessage: 'Accelerating Nigeria\'s transition to clean energy',
          cta: 'Explore fund',
          iconId: 'icon-sun',
          route: '/energy',
          size: 'card--tall'
        },
        {
          src: hsfImg,
          alt: 'Housing Solution Fund',
          caption: 'Affordable Housing Fund',
          sub: 'Real Estate · REIT',
          hoverMessage: 'Closing Nigeria\'s 20 million unit housing deficit',
          cta: 'Explore fund',
          iconId: 'icon-home',
          route: '/housing',
          size: 'card--tall'
        },
        {
          src: investImg,
          alt: 'Investment Approach',
          caption: 'Investment Approach',
          sub: 'Strategy · ESG',
          hoverMessage: 'Identify, structure, aggregate, connect',
          cta: 'Read more',
          iconId: 'icon-chart',
          route: '/investment-approach',
          size: 'card--wide'
        },
        {
          src: factsheetImg,
          alt: 'Our Funds',
          caption: 'All Funds',
          sub: 'Portfolio · Pipeline',
          hoverMessage: 'View our full fund portfolio and pipeline',
          cta: 'View funds',
          iconId: 'icon-download',
          route: '/funds',
          size: ''
        },
        {
          src: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=80',
          alt: 'About FundCo',
          caption: 'About FundCo',
          sub: 'Company · SEC Registered',
          hoverMessage: 'A specialist alternative asset manager',
          cta: 'Learn more',
          iconId: 'icon-star',
          route: '/about',
          size: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');

/* ── Section ── */
.gallery-section {
  width: 100%;
  padding: 5rem 1.5rem;
  font-family: 'Inter', sans-serif;
  background: rgba(7, 3, 43);
}

.gallery-header {
  max-width: 1200px;
  margin: 0 auto 2.5rem;
  text-align: center;
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
  margin-bottom: 0.85rem;
}

.gallery-header h2 {
  font-size: clamp(1.8rem, 2.5vw, 2.6rem);
  font-weight: 800;
  margin: 0 0 0.75rem;
  background: linear-gradient(135deg, #ffffff, #a8b7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.gallery-header p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  max-width: 580px;
  margin: 0 auto;
}

/* ── Grid ── */
.image-grid {
  max-width: 1200px;
  margin: 0 auto;
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 1rem;
}

/* Card 1: 1 column portrait */
.card--tall { grid-row: span 1; }

/* Card 2: fills the remaining 2 columns to the right */
.image-grid li:nth-child(2) { grid-column: 2 / -1; }

/* Third card spans full width */
.card--wide {
  grid-column: 1 / -1;
}

/* Last two share the remaining space */
.image-grid li:nth-child(4) { grid-column: 1 / 2; }
.image-grid li:nth-child(5) { grid-column: 2 / 4; }

/* ── Card link ── */
.card-link {
  display: block;
  text-decoration: none;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.4, 1.1),
              box-shadow 0.35s ease,
              border-color 0.3s ease;
}

.card-link:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.5);
  border-color: rgba(102, 126, 234, 0.35);
}

figure {
  margin: 0;
  position: relative;
  overflow: hidden;
}

/* Aspect ratios */
figure { aspect-ratio: 4 / 3; }
.card--tall figure { aspect-ratio: 3 / 4; }
.image-grid li:nth-child(2) figure { aspect-ratio: 16 / 9; }
.card--wide figure { aspect-ratio: 16 / 4; }
.image-grid li:nth-child(5) figure { aspect-ratio: 16 / 5; }

img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.55s ease;
}

.card-link:hover img {
  transform: scale(1.07);
}

/* ── Overlay / figcaption ── */
figcaption {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background: linear-gradient(
    to top,
    rgba(4, 2, 30, 0.92) 0%,
    rgba(4, 2, 30, 0.55) 50%,
    rgba(4, 2, 30, 0.12) 100%
  );
  padding: 1.5rem;
  transition: background 0.35s ease;
}

.card-link:hover figcaption {
  background: linear-gradient(
    to top,
    rgba(4, 2, 30, 0.97) 0%,
    rgba(4, 2, 30, 0.8) 60%,
    rgba(4, 2, 30, 0.3) 100%
  );
}

.caption-inner {
  width: 100%;
  position: relative;
}

/* ── Default content ── */
.default-content {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.caption-icon {
  width: 28px;
  height: 28px;
  color: #a8b7ff;
}

.default-caption {
  font-size: 1.35rem;
  font-weight: 700;
  color: white;
  line-height: 1.2;
}

.default-sub {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(168, 183, 255, 0.75);
  letter-spacing: 0.04em;
}

/* ── Hover content ── */
.hover-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.75rem;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

.card-link:hover .default-content {
  opacity: 0;
  transform: translateY(-6px);
}

.card-link:hover .hover-content {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.hover-text {
  font-size: 1.05rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
  max-width: 340px;
}

.details-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 0.6rem 1.4rem;
  border-radius: 40px;
  align-self: flex-start;
  transition: opacity 0.2s, transform 0.2s;
}

.details-btn:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}

/* ── Focus ── */
.card-link:focus-visible {
  outline: 2px solid #667eea;
  outline-offset: 3px;
}

/* ── Responsive ── */

/* Tablet: 2-column, reset desktop column placements */
@media (max-width: 900px) {
  .image-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  /* Reset all custom column spans back to auto */
  .image-grid li:nth-child(2) { grid-column: auto; }
  .image-grid li:nth-child(4) { grid-column: auto; }
  .image-grid li:nth-child(5) { grid-column: auto; }

  /* Wide card still spans full width */
  .card--wide { grid-column: 1 / -1; }

  /* Squarer aspect ratios for the narrower cards */
  figure                              { aspect-ratio: 4 / 3; }
  .card--tall figure                  { aspect-ratio: 4 / 3; }
  .image-grid li:nth-child(2) figure  { aspect-ratio: 4 / 3; }
  .image-grid li:nth-child(5) figure  { aspect-ratio: 4 / 3; }
  .card--wide figure                  { aspect-ratio: 16 / 6; }
}

/* Mobile: 2-column card grid — visually balanced, not a single stacked list */
@media (max-width: 600px) {
  .gallery-section { padding: 3rem 1rem; }

  .gallery-header h2  { font-size: 1.6rem; }
  .gallery-header p   { font-size: 0.88rem; }

  .image-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
  }

  /* Reset all column overrides for a clean 2-col flow */
  .image-grid li,
  .image-grid li:nth-child(2),
  .image-grid li:nth-child(4),
  .image-grid li:nth-child(5) {
    grid-column: auto;
  }

  /* Wide/Investment Approach card spans both columns.
     Must use .image-grid .card--wide (specificity 0,2,0) so it
     beats the blanket .image-grid li reset above (0,1,1). */
  .image-grid .card--wide { grid-column: 1 / -1; }

  /* Portrait cards — tall enough to show the image and caption */
  figure,
  .card--tall figure,
  .image-grid li:nth-child(2) figure,
  .image-grid li:nth-child(5) figure { aspect-ratio: 3 / 4; }

  /* Wide card cinematic strip */
  .card--wide figure { aspect-ratio: 16 / 7; }

  /* Scale text and icons down slightly for smaller screens */
  .default-caption  { font-size: 1.05rem; }
  .default-sub      { font-size: 0.78rem; }
  .hover-text       { font-size: 0.88rem; }
  .details-btn      { font-size: 0.8rem; padding: 0.45rem 1rem; }
  .icon-wrap        { width: 40px; height: 40px; }
  .caption-icon     { width: 22px; height: 22px; }
  figcaption        { padding: 1rem; }
}
</style>
