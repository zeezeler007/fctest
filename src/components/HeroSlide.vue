<template>
  <section class="hero-slide">
    <div class="hero-slide__overlay"></div>

    <div class="hero-slide__content">
      <div class="hero-slide__text">
        <h1>{{ currentSlide.title }}</h1>
        
      </div>

      <div class="hero-slide__dots">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          type="button"
          :class="['hero-slide__dot', { 'hero-slide__dot--active': index === currentIndex } ]"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
        />
      </div>

      
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Slide data holds the text content that will rotate in the carousel.
const slides = [
  {
    title: 'As demand for assest allocation to alternatives continues to increase',
    
  },
  {
    title: 'Institutional investors need specialist managers to show them the right path',
   
  },
  {
    title: 'Market Insights, Delivered',
    
  },
]

// Tracks the current visible slide index.
const currentIndex = ref(0)

// Computes the slide object for the current index.
const currentSlide = computed(() => slides[currentIndex.value])

let slideTimer = null

// Advance to the next slide and wrap around at the end.
function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

// Move to the previous slide and wrap around to the last slide.
function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}

// Jump directly to a slide by index.
function goToSlide(index) {
  currentIndex.value = index % slides.length
}

// Start the automatic carousel rotation when the component mounts.
onMounted(() => {
  slideTimer = window.setInterval(nextSlide, 6000)
})

// Clean up the interval when the component is removed from the DOM.
onBeforeUnmount(() => {
  if (slideTimer) {
    window.clearInterval(slideTimer)
    slideTimer = null
  }
})
</script>

<style scoped>
.hero-slide {
  position: relative;
  min-height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 120px;
  color: white;
  background-image: url('https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
}

.hero-slide__overlay {
  position: absolute;
  inset: 0;
  background: rgba(4, 6, 27, 0.62);
  z-index: 2;
}

.hero-slide__content {
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 960px;
  padding: 3rem 5.5rem;
  text-align: center;
  
  font-family: 'Bebas Neue', sans-serif !important;
}

.hero-slide__text h1 {
  font-size: clamp(2rem, 4vw, 4rem);
  margin-bottom: 1rem;
  line-height: 1.05;
}

.hero-slide__text p {
  font-size: clamp(1rem, 1.4vw, 1.5rem);
  color: #e0e7ff;
  max-width: 760px;
  margin: 0 auto 2rem;
}

.hero-slide__dots {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.hero-slide__dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: transparent;
  transition: transform 0.25s ease, background-color 0.25s ease;
}

.hero-slide__dot--active {
  background: #ffffff;
  transform: scale(1.2);
}

.hero-slide__controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-slide__controls button {
  min-width: 140px;
  padding: 0.9rem 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.08);
  color: white;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.2s ease;
}

.hero-slide__controls button:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: translateY(-1px);
}

@media (max-width: 1024px) {
  .hero-slide {
    
    width: 100%;
    margin-top: 80px;
    
  }

  .hero-slide__content {
    padding: 1.5rem 1rem;
  }

  .hero-slide__controls button {
    width: 100%;
    max-width: 260px;
  }
}

</style>
