// Fungsi untuk sanitasi input
function sanitizeInput(input) {
  return input.replace(/[&<>"']/g, function (m) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[m];
  });
}

const tombol = document.getElementById("tombol");
const pesan = document.getElementById("pesan");
const nyancat = document.getElementById("nyancat");
const nyanmusic = document.getElementById("nyanmusic");
let klikCount = 0;

tombol.addEventListener("mouseover", function (e) {
  e.preventDefault();
  const maxX = window.innerWidth - this.clientWidth;
  const maxY = window.innerHeight - this.clientHeight;
  this.style.position = "absolute";
  this.style.left = Math.floor(Math.random() * maxX) + "px";
  this.style.top = Math.floor(Math.random() * maxY) + "px";
  this.textContent = "Ups, meleset!";
  setTimeout(() => (this.textContent = "Klik Aku!"), 1000);
});

tombol.addEventListener("click", function (e) {
  e.preventDefault();
  klikCount++;
  if (klikCount === 1) {
    pesan.textContent = "Wah, beruntung sekali! Coba lagi?";
  } else if (klikCount === 5) {
    pesan.textContent = "Kamu memang hebat! Tapi masih belum cukup...";
    nyancat.style.bottom = "0px";
    nyanmusic.play().catch((error) => {
      console.error("Pemutaran audio gagal:", error);
      alert(
        "Ups! Musik tidak dapat diputar. Pastikan browser Anda mengizinkan autoplay."
      );
    });
  } else if (klikCount === 10) {
    document.body.style.transform = "rotate(180deg)";
    pesan.textContent = "Selamat! Kamu telah membalikkan dunia!";
  }
});

// Mengubah warna latar belakang secara acak setiap 3 detik
setInterval(() => {
  document.body.style.backgroundColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
}, 3000);

// Menambahkan efek hujan emoji
setInterval(() => {
  const emoji = document.createElement("div");
  emoji.style.position = "fixed";
  emoji.style.fontSize = "20px";
  emoji.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  emoji.style.top = "-20px";
  emoji.textContent = ["😂", "🤪", "🤡", "👻", "💩"][
    Math.floor(Math.random() * 5)
  ];
  document.body.appendChild(emoji);
  let pos = -20;
  const interval = setInterval(() => {
    pos += 2;
    emoji.style.top = pos + "px";
    if (pos > window.innerHeight) {
      clearInterval(interval);
      document.body.removeChild(emoji);
    }
  }, 20);
}, 500);

// Menambahkan efek getaran layar
function getarLayar() {
  document.body.style.transform = `translate(${Math.floor(
    Math.random() * 10 - 5
  )}px, ${Math.floor(Math.random() * 10 - 5)}px)`;
  setTimeout(() => {
    document.body.style.transform = "none";
  }, 100);
}
setInterval(getarLayar, 5000);

// Menambahkan efek teks berkedip
setInterval(() => {
  document.body.style.color =
    document.body.style.color === "red" ? "blue" : "red";
}, 100);

// Menambahkan efek cursor berubah
const cursors = [
  "default",
  "pointer",
  "wait",
  "crosshair",
  "not-allowed",
  "grab",
  "zoom-in",
  "cell",
];
setInterval(() => {
  document.body.style.cursor =
    cursors[Math.floor(Math.random() * cursors.length)];
}, 2000);

// Mencegah drag and drop
document.addEventListener("dragstart", function (e) {
  e.preventDefault();
});

// Mencegah klik kanan
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
