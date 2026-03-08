const messages = [
    "ถ้าเป็นแฟนกัน จะทำให้ยิ้มทุกวัน 😘",
    "เป็นแฟนกันนะเดี๋ยวทำกับข้าวให้ 🍳",
    "ถ้าเป็นแฟน จะพาไปเที่ยวทุกที่ 🌍",
    "อยากดูแลใจเธอจัง 🌈",
    "ถ้าเป็นแฟน จะกอดทุกวันเลย 🤗",
    "โอกาสติดมีกี่เปอร์เซ็นต์น้า 💓",
    "จีบตอนนี้ แถมฟรีคนรักจริง 🕊️",
    "หน้าสดก็น่ารักรับได้หมดเลย ✨"
];
function createFallingMessage() {
    const msg = document.createElement('div');
    msg.className = 'falling-message';
    msg.textContent = messages[Math.floor(Math.random() * messages.length)];
    document.body.appendChild(msg);
    const windowWidth = window.innerWidth;
    const msgWidth = msg.offsetWidth || 200;
    const maxLeft = Math.max(0, windowWidth - msgWidth - 20);
    msg.style.left = Math.random() * maxLeft + 'px';
    const duration = 5 + Math.random() * 3;
    msg.style.animationDuration = duration + 's';
    setTimeout(() => {
        msg.remove();
    }, duration * 1000);
}
setTimeout(createFallingMessage, 500);
setInterval(createFallingMessage, 2200);
const setVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', setVh);
setVh();