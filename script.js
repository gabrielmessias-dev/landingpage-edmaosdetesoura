      // ── Navbar: adiciona classe .scrolled ao rolar ──────────────
      const navbar = document.getElementById("navbar");
      window.addEventListener(
        "scroll",
        () => {
          navbar.classList.toggle("scrolled", window.scrollY > 60);
        },
        { passive: true },
      );

      // ── Hamburger menu ───────────────────────────────────────────
      const hamburger = document.getElementById("hamburger");
      const mobileMenu = document.getElementById("mobile-menu");

      hamburger.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("open");
        hamburger.classList.toggle("open", isOpen);
        document.body.style.overflow = isOpen ? "hidden" : "";
      });

      // Fecha o menu ao clicar em um link
      document.querySelectorAll(".mobile-nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.remove("open");
          hamburger.classList.remove("open");
          document.body.style.overflow = "";
        });
      });

      // ── Scroll Reveal ────────────────────────────────────────────
      const revealEls = document.querySelectorAll(".reveal");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );

      revealEls.forEach((el) => observer.observe(el));

      // ── Botão WhatsApp na navbar: aparece ao rolar 200px ────────
      const navWppBtn = document.getElementById("nav-wpp-btn");
      window.addEventListener(
        "scroll",
        () => {
          if (window.scrollY > 200) {
            navWppBtn.style.display = "inline-flex";
          } else {
            navWppBtn.style.display = "none";
          }
        },
        { passive: true },
      );

      // ── Smooth scroll para links internos ────────────────────────
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          const target = document.querySelector(anchor.getAttribute("href"));
          if (!target) return;
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });