/**
 * ONIGUIRI GUIRI (おにぎりぎり) • SCRIPT PRINCIPAL
 * - Canvas sutil de partículas com otimização de CPU/bateria
 * - Atualização dinâmica do ano no rodapé
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  updateFooterYear();
});

/* ==========================================================================
   1. Canvas de Partículas Ambientes (Gergelim Dourado / Matcha)
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;

  // Desativa animação se o usuário preferir movimento reduzido
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Quantidade sutil de partículas (24 itens para 0% impacto de processamento)
  const particleCount = 24;
  const particles = [];

  const colors = [
    'rgba(196, 147, 65, 0.45)', // Gergelim tostado dourado
    'rgba(75, 111, 80, 0.25)',  // Verde matcha suave
    'rgba(199, 84, 64, 0.25)',  // Umeboshi suave
    'rgba(40, 60, 42, 0.2)',    // Nori leve
  ];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 1.5 + Math.random() * 2.2,
      speedY: 0.25 + Math.random() * 0.4,
      speedX: (Math.random() - 0.5) * 0.2,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      aspect: 0.6 + Math.random() * 0.4, // formato elíptico sutil de semente de gergelim
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }

  let animationFrameId;
  let isRunning = true;

  function render() {
    if (!isRunning) return;

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;

      // Wrap around
      if (p.y > height + 10) {
        p.y = -10;
        p.x = Math.random() * width;
      }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      // Desenha semente de gergelim suave (elipse)
      ctx.ellipse(0, 0, p.size * p.aspect, p.size, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    animationFrameId = requestAnimationFrame(render);
  }

  render();

  // Economia de bateria: pausa quando a aba não está visível
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
    } else {
      isRunning = true;
      render();
    }
  });
}

/* ==========================================================================
   2. Ano Atual no Rodapé
   ========================================================================== */
function updateFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}
