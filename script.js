function setExpression(mood) {
  const leftEye = document.getElementById("leftEye");
  const rightEye = document.getElementById("rightEye");
  const mouth = document.getElementById("mouth");
  const expressionIcon = document.getElementById("expressionIcon");
  const robotHead = document.querySelector(".robot-head");

  const moods = [
    "happy", "sad", "angry", "surprised", "neutral",
    "love", "curious", "sleepy", "furious", "scared",
    "flirty", "crying", "glitch", "cool", "sick",
    "celebration", "nervous", "blank", "shocked"
  ];

  // Remove all previous mood classes
  moods.forEach(m => {
    expressionIcon.classList.remove(m);
    leftEye.classList.remove(m);
    rightEye.classList.remove(m);
    mouth.classList.remove(m);
    robotHead.classList.remove(m);
  });

  // Add new mood classes
  expressionIcon.classList.add(mood);
  leftEye.classList.add(mood);
  rightEye.classList.add(mood);
  mouth.classList.add(mood);

  // Trigger animation reset for robot-head
  if (mood === "happy") {
    // Re-trigger happy animation
    void robotHead.offsetWidth; // Force reflow
  }

  robotHead.classList.add(mood);
}

// Optional: Start robot automatically in listening mode
function askJarvis() {
  console.log("[Jarvis] Voice system initialized and ready.");
  // You can later integrate this with SpeechRecognition
}

// Auto-run on page load
window.onload = () => {
  askJarvis();
};
