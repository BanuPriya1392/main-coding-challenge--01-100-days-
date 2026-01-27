// 1. Data: Baby Image URLs
const images = [
  "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=500&h=350&auto=format&fit=crop",
  "https://i.pinimg.com/1200x/f8/96/d8/f896d853421a27a7a1604d38f6d549d9.jpg",
  "https://i.pinimg.com/736x/b3/8f/eb/b38feb86fc87a6f5d21926cfecbfa160.jpg",
  "https://i.pinimg.com/736x/64/8e/bc/648ebcc30d700279f12d7e52a6c37f4a.jpg",
  "https://i.pinimg.com/1200x/8a/dc/fb/8adcfb83b6aca80811327c95e4af9d1e.jpg",
  "https://i.pinimg.com/736x/17/86/c9/1786c9a8db80d288eaf8c2e394646efc.jpg",
  "https://i.pinimg.com/1200x/b8/e2/43/b8e2438c1e951a25bb7d525f6f9a5b34.jpg",
];

let currentIndex = 0;

const imgElement = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateImage() {
  // Add a slight fade effect class
  imgElement.classList.remove("fade-in");
  void imgElement.offsetWidth; // Trigger reflow
  imgElement.src = images[currentIndex];
  imgElement.classList.add("fade-in");
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

updateImage();
