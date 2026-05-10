<template>
    <nav class="navbar-container">
        <div class="navbar">
            <!-- Brand/Logo -->
            <a href="#" class="navbar-brand">
                <img src="/logo.svg" alt="Logo" class="logo-icon" />
            </a>

            <!-- Navigation Links -->
            <ul class="navbar-nav" id="navbarNav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" active-class="active">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-house" viewBox="0 0 16 16">
                            <path
                                d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                        </svg>
                        <span>Home</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link" active-class="active">
                        <svg class="nav-icon" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                        <span>About Us</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/investment-approach" class="nav-link" active-class="active">
                        <svg class="nav-icon" viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                        <span>Investment Approach</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/procurement" class="nav-link" active-class="active">
                        <svg class="nav-icon" viewBox="0 0 24 24">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 3h6v4"></path>
                            <path d="m22 7-10-4-10 4"></path>
                        </svg>
                        <span>Procurement</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/contact" class="nav-link" active-class="active    ">
                        <svg class="nav-icon" viewBox="0 0 24 24">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                            </path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span>Contact Us</span>
                    </router-link>
                </li>
               
            </ul>

            <!-- Mobile Toggle -->
            <button class="mobile-toggle" id="mobileToggle" @click="toggleMobileMenu">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu-overlay" :class="{ active: isMobileMenuOpen }" @click="closeMobileMenu"></div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ active: isMobileMenuOpen }">
        <div class="mobile-menu-header">
            <a href="#" class="mobile-menu-brand">
                <img src="/logo.svg" alt="Company Logo" />
            </a>
            <button class="mobile-menu-close" @click="closeMobileMenu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <ul class="mobile-menu-nav">
            <li class="mobile-menu-item">
                <router-link to="/" class="nav-link" active-class="active">
                    <svg class="mobile-menu-icon" viewBox="0 0 24 24">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9,22 9,12 15,12 15,22"></polyline>
                    </svg>
                    <span>Home</span>
                </router-link>
            </li>
            <li class="mobile-menu-item">
                <router-link to="/about" class="nav-link" active-class="active">
                    <svg class="mobile-menu-icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    <span>About</span>
                </router-link>
            </li>
            <li class="mobile-menu-item">
                <router-link to="/procurement" class="nav-link" active-class="active">
                    <svg class="mobile-menu-icon" viewBox="0 0 24 24">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                    <span>Procurement</span>
                </router-link>
            </li>
            <li class="mobile-menu-item">
                <router-link to="/investment-approach" class="nav-link" active-class="active">
                    <svg class="mobile-menu-icon" viewBox="0 0 24 24">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 3h6v4"></path>
                        <path d="m22 7-10-4-10 4"></path>
                    </svg>
                    <span>Investment Approach</span>
                </router-link>
            </li>
            <li class="mobile-menu-item">
                <router-link to="/contact" class="nav-link" active-class="active">
                    <svg class="mobile-menu-icon" viewBox="0 0 24 24">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>Contact</span>
                </router-link>
            </li>
            <li class="mobile-menu-item">
                <a href="#cta" class="mobile-menu-link cta-button" @click="handleNavClick('#cta')">
                    Get Started
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import "./navbar.css";
import { useRouter } from "vue-router";

export default {
    name: "Navbar",
    data() {
        return {
            isMobileMenuOpen: false,
        };
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
            if (this.isMobileMenuOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        },
        closeMobileMenu() {
            this.isMobileMenuOpen = false;
            document.body.style.overflow = "";
        },
        handleNavClick(href) {
            this.closeMobileMenu();
            // Smooth scroll to section
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        },
    },
    watch: {
        $route() {
            this.closeMobileMenu();
        },
    },
    mounted() {
        // Handle window resize
        window.addEventListener("resize", () => {
            if (window.innerWidth > 992 && this.isMobileMenuOpen) {
                this.closeMobileMenu();
            }
        });

        // Close on escape
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && this.isMobileMenuOpen) {
                this.closeMobileMenu();
            }
        });
    },
};
</script>
<style scoped></style>
