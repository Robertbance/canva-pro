// 🔗 Lien de paiement (à modifier)
const paymentLink = "https://robandigit.com/canva-pro-a-vie/checkout";

// Appliquer le lien à tous les boutons
document.querySelectorAll("a").forEach(link => {
  link.href = paymentLink;
});

// 🎬 Animation au scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

cards.forEach(card => {
  observer.observe(card);
});