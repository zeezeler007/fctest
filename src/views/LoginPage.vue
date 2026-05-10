<template>
  <section class="page-section">
    <div class="glass-card login-card">
      <h1 class="page-title">Client Login</h1>
      <form @submit.prevent="login">
        <div class="input-group">
          <label>Email</label>
          <input type="email" v-model="credentials.email" required>
        </div>
        <div class="input-group">
          <label>Password</label>
          <input type="password" v-model="credentials.password" required>
        </div>
        <button type="submit" class="login-btn">Sign In</button>
        <p class="register-link">Don't have an account? <a href="#" @click.prevent="register">Contact us</a></p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      credentials: { email: '', password: '' }
    }
  },
  methods: {
    login() {
      alert(`Login attempt for ${this.credentials.email} – demo only.`);
    },
    register() {
      alert('Please contact our support team to set up an account.');
    }
  }
}
</script>

<style scoped>
.page-section {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 6rem 1.5rem 4rem;
}
.login-card {
  max-width: 450px;
  text-align: center;
}
.page-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #fff, #a8b7ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.input-group {
  margin-bottom: 1.2rem;
  text-align: left;
}
.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #ccc;
}
.input-group input {
  width: 100%;
  padding: 0.8rem;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 16px;
  color: white;
}
.login-btn {
  width: 100%;
  padding: 0.8rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 40px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-top: 0.5rem;
}
.register-link {
  margin-top: 1rem;
  font-size: 0.9rem;
}
.register-link a {
  color: #a8b7ff;
  text-decoration: none;
}
</style>