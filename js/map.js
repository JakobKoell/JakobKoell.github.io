document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    // Navbar background change
    if(window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    // Fade-in sections
    document.querySelectorAll('.fade-in').forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100) el.classList.add('visible');
    });
  });

  // Trigger initial fade-in
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight) el.classList.add('visible');
  });
});
