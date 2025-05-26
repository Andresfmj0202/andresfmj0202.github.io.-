const container = document.getElementById('particle-container');
const containerDiv = document.getElementById('panelMision');

function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';

  // Obtener las dimensiones del contenedor padre
  const containerWidth = containerDiv.offsetWidth; // O .clientWidth
  const containerHeight = containerDiv.offsetHeight; // O .clientHeight

  // Posición inicial aleatoria dentro de containerDiv
  // Aseguramos que la partícula no empiece justo en el borde para evitar desaparecer inmediatamente
  particle.style.left = Math.random() * containerWidth + 'px';
  particle.style.top = Math.random() * containerHeight + 'px';

  // Movimiento
  const speed = Math.random() * 2 + 0.5; // Velocidad entre 0.5 y 2.5
  const direction = Math.random() * 360; // Ángulo en grados
  const angle = direction * (Math.PI / 180); // Convertir a radianes

  // Convertir a float para los cálculos de movimiento
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

    // Eliminar partícula si sale de los límites del containerDiv
    if (x < 0 || y < 0 || x > containerWidth || y > containerHeight) {
      clearInterval(interval);
      container.removeChild(particle);
    }
  }, 16); // Aproximadamente 60fps (1000ms / 60 = 16.67ms)
}

// Crear partículas cada cierto tiempo
setInterval(createParticle, 150); // Crea una nueva partícula cada 150 milisegundos