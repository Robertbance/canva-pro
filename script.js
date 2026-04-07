// =====================
// Animation au scroll (optimisée)
// =====================

const elements = document.querySelectorAll(".card");

// Options de l'observer (déclenchement plus fluide)
const observerOptions = {
  threshold: 0.2 // déclenche quand 20% de l'élément est visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      // Stop observer après animation (optimisation performance)
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observer chaque carte
elements.forEach(el => observer.observe(el));


// =====================
// Animation bouton (clic)
// =====================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";

    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});


// =====================
// Effet apparition HERO
// =====================

window.addEventListener("load", () => {
  const hero = document.querySelector(".hero");

  hero.style.opacity = "0";
  hero.style.transform = "translateY(20px)";

  setTimeout(() => {
    hero.style.transition = "all 0.6s ease";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }, 200);
});