
// ===============================
// WEB ATELIER (UDIT) - Student Project Template JavaScript
//
// Este archivo contiene la funcionalidad interactiva principal del proyecto web.
// A continuación se explican las partes más importantes del código y se incluyen sugerencias de mejora.
// ===============================

// Evento que espera a que todo el contenido del DOM esté cargado antes de ejecutar el código principal.
// Esto asegura que los elementos del HTML estén disponibles para ser manipulados por JavaScript.
document.addEventListener('DOMContentLoaded', function () {

   // Inicializa la funcionalidad del proyecto (puedes añadir aquí más inicializaciones si lo necesitas)
   console.log('WEB ATELIER (UDIT) - Student project initialized');


   // --- DESPLAZAMIENTO SUAVE (Smooth Scrolling) ---
   // Permite que al hacer clic en enlaces internos (anclas), la página se desplace suavemente hasta la sección correspondiente.
   // Mejora la experiencia de usuario y la accesibilidad.
   const links = document.querySelectorAll('a[href^="#"]');
   links.forEach((link) => {
	   link.addEventListener('click', function (e) {
		   e.preventDefault();
		   const targetId = this.getAttribute('href').substring(1);
		   const targetElement = document.getElementById(targetId);
		   if (targetElement) {
			   targetElement.scrollIntoView({
				   behavior: 'smooth',
			   });
		   }
	   });
   });

   // SUGERENCIA DE MEJORA:
   // - Comprobar si el enlace apunta a un id válido antes de prevenir el comportamiento por defecto.
   // - Añadir control para enlaces externos o vacíos.


   // --- ENLACE DE SALTO (Skip Link) ---
   // Mejora la accesibilidad permitiendo saltar directamente al contenido principal.
   // Útil para usuarios que navegan con teclado o lectores de pantalla.
   const skipLink = document.querySelector('.skip-link');
   if (skipLink) {
	   skipLink.addEventListener('click', function (e) {
		   e.preventDefault();
		   const target = document.querySelector(this.getAttribute('href'));
		   if (target) {
			   target.focus();
			   target.scrollIntoView({ behavior: 'smooth' });
		   }
	   });
   }

   // SUGERENCIA DE MEJORA:
   // - Permitir múltiples enlaces de salto si hay más de uno en la página.
   // - Añadir mensajes de confirmación visual para usuarios de teclado.
});


// ===============================
// FUNCIONES PERSONALIZADAS
// ===============================

// updatePageMetadata: Actualiza el título y la meta descripción de la página.
// Útil para mejorar el SEO y la accesibilidad.
function updatePageMetadata(title, description) {
   document.title = title;

   let metaDescription = document.querySelector('meta[name="description"]');
   if (metaDescription) {
	   metaDescription.setAttribute('content', description);
   } else {
	   metaDescription = document.createElement('meta');
	   metaDescription.setAttribute('name', 'description');
	   metaDescription.setAttribute('content', description);
	   document.head.appendChild(metaDescription);
   }
}

// SUGERENCIA DE MEJORA:
// - Añadir más metadatos (por ejemplo, Open Graph, Twitter Cards) para mejorar la presencia en redes sociales.
// - Validar los parámetros recibidos para evitar errores si son nulos o vacíos.
