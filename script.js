document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Sticky Effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // 15% del elemento debe ser visible antes de animar
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                // Opcional: Descomentar la siguiente línea si se desea que la animación ocurra solo la primera vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observamos todos los elementos con clases de animación
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    animatedElements.forEach(el => observer.observe(el));

    // 3. Botón "Volver arriba"
    const volverArribaBtn = document.querySelector('.volver-arriba');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            volverArribaBtn.classList.add('visible');
        } else {
            volverArribaBtn.classList.remove('visible');
        }
    });
});
