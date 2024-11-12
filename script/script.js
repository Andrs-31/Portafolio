document.addEventListener("DOMContentLoaded", function() {
  // Efecto de desvanecimiento en la carga de secciones
  const sections = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // Enviar formulario de contacto
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (name && email && message) {
          alert(`Gracias por tu mensaje, ${name}! Te contactaré pronto.`);
          contactForm.reset();
      } else {
          alert("Por favor completa todos los campos.");
      }
  });
});

function scrollToSection(sectionId) {
  document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}
