console.log("JS conectado correctamente 🚀");


// ==========================
// Animación aparición cards
// ==========================

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".card, .feature-card, .plan-card")
  .forEach(el => observer.observe(el));



// ==========================
// Selección de membresía
// ==========================

const planes = document.querySelectorAll(".plan-card");

planes.forEach(plan => {

  plan.addEventListener("click", () => {

    planes.forEach(p => p.classList.remove("selected"));

    plan.classList.add("selected");

  });

});



// ==========================
// Navbar sombra al scroll
// ==========================

window.addEventListener("scroll", () => {

  const nav = document.querySelector(".navbar");

  if (!nav) return;

  if (window.scrollY > 50) {
    nav.classList.add("shadow");
  } else {
    nav.classList.remove("shadow");
  }

});



// ==========================
// Modal Registro
// ==========================

const form = document.getElementById("registroForm");

if (form) {

  form.addEventListener("submit", e => {

    e.preventDefault();

    alert("Usuario registrado correctamente 🚀");

    const modalEl = document.getElementById("registroModal");
    const modal = bootstrap.Modal.getInstance(modalEl);

    modal.hide();
  });

}