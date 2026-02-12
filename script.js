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
console.log('%c💖 Made with Love 💖', 'font-size: 20px; color: #ec407a; font-weight: bold;');
console.log('%cHappy Valentine\'s Day! 💕', 'font-size: 16px; color: #f06292;');
```
