```javascript
/* ============================================ */
/* FILE: script.js */
/* ============================================ */

// Smooth page transition function
function fadeTransition(url) {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}

// Page load fade in
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    }, 100);
});

// Create additional floating hearts dynamically
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    if (!heartsContainer) return;

    const symbols = ['💕', '💖', '💗', '💝', '✨', '⭐', '💫'];
    const numberOfHearts = 15;

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.style.opacity = '0.3';
        heart.style.animation = `float ${Math.random() * 10 + 10}s infinite`;
        heart.style.animationDelay = Math.random() * 5 + 's';
        heartsContainer.appendChild(heart);
    }
}

// Initialize floating hearts
createFloatingHearts();

// Prevent right-click on images (optional - for protecting photos)
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Add sparkle effect on button hover
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Optional: Background music toggle
let backgroundMusic = null;

function toggleMusic() {
    if (!backgroundMusic) {
        backgroundMusic = new Audio('your-music-file.mp3'); // Replace with your music file
        backgroundMusic.loop = true;
        backgroundMusic.volume = 0.3;
    }
    
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
}

// Add music toggle button (optional - can be added to any page)
function addMusicToggle() {
    const musicBtn = document.createElement('button');
    musicBtn.innerHTML = '🎵';
    musicBtn.className = 'music-toggle';
    musicBtn.style.position = 'fixed';
    musicBtn.style.bottom = '20px';
    musicBtn.style.right = '20px';
    musicBtn.style.width = '50px';
    musicBtn.style.height = '50px';
    musicBtn.style.borderRadius = '50%';
    musicBtn.style.border = 'none';
    musicBtn.style.background = 'linear-gradient(135deg, #f06292, #ec407a)';
    musicBtn.style.color = 'white';
    musicBtn.style.fontSize = '1.5rem';
    musicBtn.style.cursor = 'pointer';
    musicBtn.style.boxShadow = '0 4px 15px rgba(236, 64, 122, 0.4)';
    musicBtn.style.zIndex = '1000';
    musicBtn.style.transition = 'transform 0.3s ease';
    
    musicBtn.addEventListener('click', toggleMusic);
    musicBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    musicBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(musicBtn);
}

// Uncomment to enable music toggle
// addMusicToggle();

// Console message (easter egg)

// ===============================
// Button navigation logic
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const tryAgainBtn = document.getElementById("tryAgainBtn");

    if (yesBtn) {
        yesBtn.addEventListener("click", function () {
            fadeTransition("intro.html"); // goes to next page
        });
    }

    if (noBtn) {
        noBtn.addEventListener("click", function () {
            fadeTransition("wrong.html"); // goes to wrong choice page
        });
    }

    if (tryAgainBtn) {
        tryAgainBtn.addEventListener("click", function () {
            fadeTransition("index.html"); // back to first page
        });
    }
});
console.log('%c💖 Made with Love 💖', 'font-size: 20px; color: #ec407a; font-weight: bold;');
console.log('%cHappy Valentine\'s Day! 💕', 'font-size: 16px; color: #f06292;');
```

// ===============================
// Index page button logic
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const tryAgainBtn = document.getElementById("tryAgainBtn");

    const questionScreen = document.getElementById("questionScreen");
    const wrongChoice = document.getElementById("wrongChoice");

    if (yesBtn) {
        yesBtn.addEventListener("click", function () {
            fadeTransition("intro.html");
        });
    }

    if (noBtn && questionScreen && wrongChoice) {
        noBtn.addEventListener("click", function () {
            questionScreen.classList.add("hidden");
            wrongChoice.classList.remove("hidden");
        });
    }

    if (tryAgainBtn) {
        tryAgainBtn.addEventListener("click", function () {
            fadeTransition("intro.html");
        });
    }
});

// ===============================
// Intro page button logic
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    const continueBtn = document.getElementById("continueBtn");

    if (continueBtn) {
        continueBtn.addEventListener("click", function () {
            fadeTransition("message.html");
        });
    }
});

// ===============================
// Message page logic (typing + next)
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById("typingText");
    const nextBtn = document.getElementById("nextBtn");

    if (typingText && nextBtn) {
        const message = "From the moment I met you, my world became brighter. Every day with you is a gift, and every moment we share is a treasure I hold close to my heart. You make me laugh when I'm down, you understand me like no one else, and you fill my life with so much love and joy. Being your Valentine isn't just about today—it's about every day I get to spend with you. I love you more than words can say. 💕";

        let index = 0;
        const typingSpeed = 50;

        function typeWriter() {
            if (index < message.length) {
                typingText.textContent += message.charAt(index);
                index++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                setTimeout(() => {
                    nextBtn.classList.remove("hidden");
                }, 500);
            }
        }

        setTimeout(typeWriter, 1000);

        nextBtn.addEventListener("click", function () {
            fadeTransition("gallery.html");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.getElementById('lightboxContent');
  const closeLightbox = document.getElementById('closeLightbox');
  const finalBtn = document.getElementById('finalBtn');
  const clickSound = document.getElementById('clickSound');

  // Gallery lightbox
  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const clone = item.querySelector('.photo-placeholder').cloneNode(true);
      lightboxContent.innerHTML = '';
      lightboxContent.appendChild(clone);
      lightbox.classList.remove('hidden');
    });
  });

  // Close lightbox
  if (closeLightbox) {
    closeLightbox.addEventListener('click', () => {
      lightbox.classList.add('hidden');
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.add('hidden');
      }
    });
  }

  // Simple fade + redirect
  function fadeTransition(url) {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "0";
    setTimeout(() => {
      window.location.href = url;
    }, 500);
  }

  // Final button
  if (finalBtn) {
    finalBtn.addEventListener('click', () => {
      if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});
      }
      fadeTransition('surprise.html');
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const replayBtn = document.getElementById('replayBtn');
  const clickSound = document.getElementById('clickSound');
  const confettiContainer = document.getElementById('confettiContainer');

  // Fade transition function
  function fadeTransition(url) {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "0";
    setTimeout(() => {
      window.location.href = url;
    }, 500);
  }

  // Create confetti if container exists
  if (confettiContainer) {
    const colors = ['#ff1744', '#f50057', '#d500f9', '#651fff', '#ff4081', '#ff80ab'];
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 3 + 's';
      confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
      confettiContainer.appendChild(confetti);
    }
  }

  // Replay button
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});
      }
      fadeTransition('index.html');
    });
  }
});

