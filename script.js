
  const container = document.getElementById('particle-container');

  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Posición inicial
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';

    // Movimiento
    const speed = Math.random() * 2 + 0.5;
    const direction = Math.random() * 360;
    const angle = direction * (Math.PI / 180);

    let x = parseFloat(particle.style.left);
    let y = parseFloat(particle.style.top);
    let dx = Math.cos(angle) * speed;
    let dy = Math.sin(angle) * speed;

    container.appendChild(particle);

    // Animación
    const interval = setInterval(() => {
      x += dx;
      y += dy;
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';

      if (x < 0 || y < 0 || x > window.innerWidth || y > window.innerHeight) {
        clearInterval(interval);
        container.removeChild(particle);
      }
    }, 16); // ~60fps
  }

  // Crear partículas cada cierto tiempo
  setInterval(createParticle, 150);

