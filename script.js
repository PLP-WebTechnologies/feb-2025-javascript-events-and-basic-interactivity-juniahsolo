// Button Click
document.getElementById('myButton').addEventListener('click', function() {
    this.textContent = "Clicked!";
    this.style.backgroundColor = "#4CAF50";
});

// Hover Effects
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.transform = 'scale(1.1)';
});
hoverBox.addEventListener('mouseleave', () => {
    hoverBox.style.transform = 'scale(1)';
});

// Keypress Detection
document.addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
});

// Secret Double-Click Action
const secretArea = document.getElementById('secret');
secretArea.addEventListener('dblclick', () => {
    alert("🎉 You found the secret! 🎉");
    secretArea.style.animation = "rainbow 2s infinite";
});