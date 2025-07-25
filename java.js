function createShootingStar() {
  const star = document.createElement('div');
  star.className = 'shooting-star';
  // Randomize starting position and angle
  star.style.top = Math.random() * 80 + '%';
  star.style.left = Math.random() * 80 + '%';
  star.style.width = Math.random() * 2 + 1 + 'px';
  star.style.height = Math.random() * 80 + 40 + 'px';
  star.style.animationDuration = Math.random() * 1.5 + 1 + 's';
  star.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
  document.getElementById('stars').appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 2000);
}

// Create shooting stars at random intervals
setInterval(createShootingStar, 800);