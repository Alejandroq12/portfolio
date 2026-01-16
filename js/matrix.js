// Matrix Rain Effect
const initMatrixRain = () => {
  const canvas = document.getElementById('matrix-rain');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // Set canvas size to match parent container
  const resizeCanvas = () => {
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Matrix characters
  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>/{}[]();';
  const charArray = chars.split('');

  // Column settings
  const fontSize = 14;
  let columns = Math.floor(canvas.width / fontSize);

  const drops = [];
  for (let i = 0; i < columns; i += 1) {
    drops[i] = Math.random() * -100;
  }

  // Draw function
  const draw = () => {
    ctx.fillStyle = 'rgba(10, 10, 20, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#50fa7b';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i += 1) {
      const text = charArray[Math.floor(Math.random() * charArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i] += 0.5;
    }
  };

  setInterval(draw, 50);

  window.addEventListener('resize', () => {
    resizeCanvas();
    columns = Math.floor(canvas.width / fontSize);

    while (drops.length < columns) {
      drops.push(Math.random() * -100);
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMatrixRain);
} else {
  initMatrixRain();
}
