console.log("JS conectado correctamente 🚀");

document.addEventListener("DOMContentLoaded", () => {

  // =============================
  // Seleccionar SOLO planes
  // =============================
  const plans = document.querySelectorAll("#planes .plan-card");

  console.log("Planes encontrados:", plans.length);

  // =============================
  // Animación de entrada (para TODAS las cards)
  // =============================
  const allCards = document.querySelectorAll(".card");

  setTimeout(() => {
    allCards.forEach(card => {
      card.classList.add("show");
    });
  }, 200);

  // =============================
  // Selección de membresía
  // =============================
  plans.forEach(plan => {

    plan.addEventListener("click", () => {

      plans.forEach(p => p.classList.remove("selected"));
      plan.classList.add("selected");

      console.log("Plan seleccionado:", plan.querySelector(".card-title")?.innerText);
    });

  });

  // =============================
  // Navbar sombra
  // =============================
  const nav = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (!nav) return;
    nav.classList.toggle("shadow", window.scrollY > 50);
  });

});

const params = new URLSearchParams(window.location.search);
console.log(params.get("plan"));