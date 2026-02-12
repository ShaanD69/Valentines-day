/* ============================================ */
/* FILE: script.js */
/* ============================================ */

// ===============================
// Smooth page transition
// ===============================
function fadeTransition(url) {
  document.body.style.transition = "opacity 0.5s ease";
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = url;
  }, 500);
}

// ===============================
// Fade in on page load
// ===============================
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 50);
});

// ===============================
// Floating hearts
// ===============================
function createFloatingHearts() {
  const heartsContainer = document.querySelector(".floating-hearts");
  if (!heartsContainer) return;

  const symbols = ["💕", "💖", "💗", "💝", "✨", "⭐", "💫"];
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.opacity = "0.3";
    heart.style.animation = `float ${Math.random() * 10 + 10}s infinite`;
    heart.style.animationDelay = Math.random() * 5 + "s";
    heartsContainer.appendChild(heart);
  }
}

// ===============================
// Main DOM logic (ALL PAGES)
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  createFloatingHearts();

  const clickSound = document.getElementById("clickSound");

  // ---------- Index page ----------
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const tryAgainBtn = document.getElementById("tryAgainBtn");

  if (yesBtn) {
    yesBtn.addEventListener("click", () => fadeTransition("intro.html"));
  }

  if (noBtn) {
    noBtn.addEventListener("click", () => fadeTransition("wrong.html"));
  }

  if (tryAgainBtn) {
    tryAgainBtn.addEventListener("click", () => fadeTransition("index.html"));
  }

  // ---------- Intro page ----------
  const continueBtn = document.getElementById("continueBtn");
  if (continueBtn) {
    continueBtn.addEventListener("click", () => fadeTransition("message.html"));
  }

  // ---------- Message page ----------
  const typingText = document.getElementById("typingText");
  const nextBtn = document.getElementById("nextBtn");

  if (typingText && nextBtn) {
    const message =
      "From the moment I met you, my world became brighter. Every day with you is a gift, and every moment we share is a treasure I hold close to my heart. You make me laugh when I'm down, you understand me like no one else, and you fill my life with so much love and joy. Being your Valentine isn't just about today—it's about every day I get to spend with you. I love you more than words can say. 💕";

    let i = 0;
    function typeWriter() {
      if (i < message.length) {
        typingText.textContent += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
      } else {
        nextBtn.classList.remove("hidden");
      }
    }
    setTimeout(typeWriter, 500);

    nextBtn.addEventListener("click", () => fadeTransition("gallery.html"));
  }

  // ---------- Gallery page ----------
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.getElementById("lightboxContent");
  const closeLightbox = document.getElementById("closeLightbox");
  const finalBtn = document.getElementById("finalBtn");

  if (galleryItems && lightbox && lightboxContent) {
    galleryItems.forEach((item) => {
      item.addEventListener("click", () => {
        const clone = item.querySelector(".photo-placeholder").cloneNode(true);
        lightboxContent.innerHTML = "";
        lightboxContent.appendChild(clone);
        lightbox.classList.remove("hidden");
      });
    });
  }

  if (closeLightbox && lightbox) {
    closeLightbox.addEventListener("click", () => lightbox.classList.add("hidden"));
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.classList.add("hidden");
    });
  }

  if (finalBtn) {
    finalBtn.addEventListener("click", () => {
      if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});
      }
      fadeTransition("surprise.html");
    });
  }

  // ---------- Surprise page ----------
  const replayBtn = document.getElementById("replayBtn");
  const confettiContainer = document.getElementById("confettiContainer");

  if (confettiContainer) {
    const colors = ["#ff1744", "#f50057", "#d500f9", "#651fff", "#ff4081", "#ff80ab"];
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 3 + "s";
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
      confettiContainer.appendChild(confetti);
    }
  }

  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});
      }
      fadeTransition("index.html");
    });
  }
});

// ===============================
// Console easter egg 😄
// ===============================
console.log("%c💖 Made with Love 💖", "font-size: 20px; color: #ec407a; font-weight: bold;");
console.log("%cHappy Valentine's Day! 💕", "font-size: 16px; color: #f06292;");
