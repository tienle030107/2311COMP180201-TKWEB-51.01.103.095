const aquarium = document.getElementById('aquarium');
const shark = document.getElementById('shark');
const diver1 = document.getElementById('diver1');
const diver2 = document.getElementById('diver2');
const diver3 = document.getElementById('diver3');
const turtle = document.getElementById('turtle');
const goldFishSchool = document.getElementById('goldFishSchool');
const faintSchool = document.getElementById('faintSchool');
const changeBgBtn = document.getElementById('change-bg-btn');
const musicBtn = document.getElementById('music-btn');
const music = document.getElementById('bg-music');
const musicIcon = musicBtn.querySelector('i');
const musicText = musicBtn.querySelector('span');
let sharkState = { x: 50, y: 300, speedX: 2.5, speedY: 0.8 };
let diver1State = { x: 800, y: 100, speedX: -1.2, speedY: -0.6 };
let diver2State = { x: 150, y: 400, speedX: 1, speedY: 0.5 };
let diver3State = { x: 200, y: 50, speedX: 0.9, speedY: 1.1 };
let turtleState = { x: 700, y: 500, speedX: -0.8, speedY: -0.3 };
let goldFishState = { x: 400, y: 250, speedX: -1, speedY: 0.2 };
let faintState = { x: 50, y: 150, speedX: 0.7, speedY: 0.1 };
function updateObjectPosition(element, state) {
    state.x += state.speedX;
    state.y += state.speedY;
    if (state.x + element.clientWidth >= aquarium.clientWidth || state.x <= 0) {
        state.speedX *= -1;
    }
    if (state.y + element.clientHeight >= aquarium.clientHeight - 80 || state.y <= 0) {
        state.speedY *= -1;
    }
    element.style.transform = state.speedX > 0 ? 'scaleX(1)' : 'scaleX(-1)';
    element.style.left = state.x + 'px';
    element.style.top = state.y + 'px';
}
function animateAll() {
    updateObjectPosition(shark, sharkState);
    updateObjectPosition(diver1, diver1State);
    updateObjectPosition(diver2, diver2State);
    updateObjectPosition(diver3, diver3State);
    updateObjectPosition(turtle, turtleState);
    updateObjectPosition(goldFishSchool, goldFishState);
    updateObjectPosition(faintSchool, faintState);
    requestAnimationFrame(animateAll);
}
animateAll();
const backgrounds = [
    'https://th.bing.com/th/id/R.6e2e3a1fc51f6e2889a03b9087f89315?rik=YGVI4na5KCiOtA&pid=ImgRaw&r=0', 
    'https://wallpapercave.com/wp/wp14039275.jpg', 
    'https://tse1.mm.bing.net/th/id/OIP.5NpsOoTbqUxyMGUU7gfCqwHaNK?cb=12&w=1080&h=1920&rs=1&pid=ImgDetMain&o=7&rm=3',
    'https://tse1.mm.bing.net/th/id/OIP.qNBCVqzJpFKBwptOqZokIQHaLH?cb=12&w=512&h=768&rs=1&pid=ImgDetMain&o=7&rm=3', 
    'https://i.pinimg.com/originals/67/b8/38/67b8387138cc1104e29e1dffecbfccd5.jpg'
];
let currentBgIndex = 0;
aquarium.style.backgroundImage = `url('${backgrounds[currentBgIndex]}')`;
function changeBackground() {
    currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
    aquarium.style.backgroundImage = `url('${backgrounds[currentBgIndex]}')`;
}
changeBgBtn.addEventListener('click', changeBackground);
function toggleMusic() {
    if (music.paused) {
        music.play();
        musicIcon.className = 'fas fa-pause';
        musicText.textContent = 'Tạm dừng';
    } else {
        music.pause();
        musicIcon.className = 'fas fa-play';
        musicText.textContent = 'Phát nhạc';
    }
}
musicBtn.addEventListener('click', toggleMusic);