// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Manejo del formulario de contacto
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert("¡Gracias por tu mensaje! Te contactaré pronto.");
    this.reset();
  });

// Animación de aparición al hacer scroll
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "all 0.5s ease-out";
  observer.observe(section);
});
