document.addEventListener("DOMContentLoaded", function () {
    const words = ["Developer", "Photographer", "Reader", "Cricketer"];
    const animatedTextElement = document.getElementById("animatedText");
    let wordIndex = 0;
    let charIndex = 0;
    let isAdding = true;

    function animateText() {
      const currentWord = words[wordIndex];
      
      if (isAdding) {
        // Add characters one by one
        animatedTextElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentWord.length) {
          isAdding = false; // Start removing characters
          animatedTextElement.classList.add("show-underline"); // Show underline
          setTimeout(animateText, 1000); // Pause before removing
          return;
        }
      } else {
        // Remove characters one by one
        animatedTextElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
          isAdding = true; // Switch back to adding characters
          animatedTextElement.classList.remove("show-underline"); // Hide underline
          wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        }
      }

      // Adjust speed of animation
      const delay = isAdding ? 150 : 100; // Faster when removing
      setTimeout(animateText, delay);
    }

    // Start the animation
    animateText();
});
