<template>
  <div class="full-page-background">
    <video autoplay muted loop preload="auto" class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video13.mp4" type="video/mp4" loading="lazy">
    </video>
    <div class="content-overlay">
      <div class="about-container">
        <h2 class="title">About</h2>
        <p class="description">At Ahava Lounge, we offer a one-of-a-kind cinematic and dining experience, crafted for those who appreciate luxury. Immerse yourself in our prestige cinema with the finest food and exceptional service.</p>

        <div class="divider"></div>

        <div class="info-section">
          <h3 class="section-title">Operating Hours</h3>
          <p>Monday - Friday: 12:00 PM - 11:00 PM</p>
          <p>Saturday - Sunday: 10:00 AM - 12:00 AM</p>
        </div>

        <div class="divider"></div>

        <div class="info-section">
          <h3 class="section-title">Our Policies</h3>
          <p>We request guests to arrive 15 minutes early for smooth entry. Please note that outside food and drinks are not allowed; however, our gourmet dining options are available during your show.</p>
        </div>
        <div class="divider"></div>
        <div class="info-section">
          <h3 class="section-title">Gourmet Dining</h3>
          <p>Experience exquisite dining with meals prepared by top-tier chefs. Enjoy fresh, high-quality dishes while reclining in our luxury seats for the perfect combination of food and film.</p>
        </div>
        <div class="divider"></div>
        <div class="info-section">
          <h3 class="section-title">Wi-Fi Access</h3>
          <p>Stay connected with complimentary high-speed Wi-Fi available throughout the lounge and screening areas.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.content-overlay {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  color: white;
}

.about-container {
  background-color: rgba(0, 0, 0, 0.6); 
  padding: 3rem;
  border-radius: 8px;
  max-width: 700px;
  width: 90%;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Arial', sans-serif;
}

.description {
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #f5f5f5;
}

.info-section p {
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.75);
}

.divider {
  width: 80%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 2rem auto;
}


/* Responsive design */
@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .description, p {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.5rem;
  }
}
</style>
