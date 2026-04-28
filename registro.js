// ===============================
// REGISTRO.JS COMPLETO
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  console.log("Registro JS cargado 🚀");

  // =========================
  // ELEMENTOS DEL DOM
  // =========================
  const params = new URLSearchParams(window.location.search);
  const plan = params.get("plan");
  const planText = document.getElementById("planSeleccionado");
  const planInput = document.getElementById("planInput");
  const form = document.getElementById("formRegistro");


// =========================
// MOSTRAR PLAN
// =========================
  if (planText) {
    planText.textContent = plan || "Sin plan";
  }

  if (planInput) {
    planInput.value = plan || "";
  }

  console.log("PLAN:", plan);

  // =========================
  // VALIDACIONES
  // =========================
  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validarTarjeta(num) {
    return /^[0-9]{13,19}$/.test(num.replace(/\s/g, ""));
  }

  function validarCVV(cvv) {
    return /^[0-9]{3,4}$/.test(cvv);
  }

  // =========================
  // SUBMIT DEL FORM
  // =========================
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = form.querySelector('input[type="email"]')?.value || "";
      const tarjeta = form.querySelector('input[name="tarjeta"]')?.value || "";
      const cvv = form.querySelector('input[name="cvv"]')?.value || "";

      // Validaciones
      if (!validarEmail(email)) {
        alert("Correo inválido ❌");
        return;
      }

      if (!validarTarjeta(tarjeta)) {
        alert("Número de tarjeta inválido ❌");
        return;
      }

      if (!validarCVV(cvv)) {
        alert("CVV inválido ❌");
        return;
      }

      // =========================
      // SIMULACIÓN DE PAGO
      // =========================
      console.log("Procesando pago...");
      console.log("Plan:", plan);

      setTimeout(() => {
        alert(`Pago del plan ${plan || "N/A"} realizado con éxito 💳`);

        form.reset();

        // Mantener el plan después del reset
        if (planInput) {
          planInput.value = plan || "";
        }

      }, 800);
    });
  }

  // =========================
  // FORMATO TARJETA (#### #### #### ####)
  // =========================
  const inputTarjeta = document.querySelector('input[name="tarjeta"]');

  if (inputTarjeta) {
    inputTarjeta.addEventListener("input", (e) => {
      let valor = e.target.value.replace(/\D/g, "");
      valor = valor.substring(0, 16); // límite 16 dígitos
      valor = valor.replace(/(.{4})/g, "$1 ").trim();
      e.target.value = valor;
    });
  }

});