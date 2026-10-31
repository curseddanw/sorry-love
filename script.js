const forgiveBtn = document.getElementById("forgiveBtn");
const loveBtn = document.getElementById("loveBtn");
const response = document.getElementById("response");

// Tombol maafin
forgiveBtn.addEventListener("click", () => {
    response.innerHTML = "Makasih udah maafin aku sayang! 🥺💗";
    celebrate();
});

// Tombol sayang
loveBtn.addEventListener("click", () => {
    response.innerHTML = "Aku juga sayang kamu, selamanya! ♡";
    celebrate();
});

// Membuat hati
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Hati otomatis
setInterval(createHeart, 700);

// Efek saat tombol diklik
function celebrate() {
    for (let i = 0; i < 35; i++) {
        setTimeout(createHeart, i * 80);
    }
}

// Membuat bintang
for (let i = 0; i < 45; i++) {
    const star = document.createElement("div");

    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 3 + "s";

    document.body.appendChild(star);
}