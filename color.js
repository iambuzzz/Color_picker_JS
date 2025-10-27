function generaterandomcolor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let randomcolor = `rgb(${red},${green},${blue})`;
  return randomcolor;
}

// Select the h3 and button once
let btn = document.querySelector("button");
let head = document.querySelector("h3");

// Main button click listener
btn.addEventListener("click", function () {
  let box = document.querySelector("#colorbox");
  let col = (box.style.backgroundColor = generaterandomcolor());

  // Update the h3's HTML to include the icon
  head.innerHTML = col + ' <i class="ri-file-copy-line" id="copy-icon"></i>';

  // Apply other styles
  box.style.boxShadow = `10px 10px 100px ${col}`;
  head.style.textShadow = `10px 10px 10px ${col}`;
  let bo = document.querySelector("button");
  bo.style.backgroundColor = col;
  bo.style.boxShadow = `10px 10px 40px ${col}`;
});

// --- NEW CODE FOR THE COPY BUTTON (Using Event Delegation) ---

// 1. Add a click listener to the H3 (the parent element)
head.addEventListener("click", function (event) {
  // 2. Check if the element that was clicked *was* the icon
  if (event.target.id === "copy-icon") {
    // 3. Get the color text only, without the icon's HTML/text
    //    head.firstChild.textContent gets just the 'rgb(...)' text
    let colorToCopy = head.firstChild.textContent.trim();
    const iconElement = event.target; // This is the <i> element

    // 4. Use the Clipboard API to write the text
    navigator.clipboard
      .writeText(colorToCopy)
      .then(() => {
        // 5. Give user feedback: change icon to a "check"
        iconElement.classList.remove("ri-file-copy-line");
        iconElement.classList.add("ri-check-line");

        // 6. Change it back to the copy icon after 1 second
        setTimeout(() => {
          iconElement.classList.remove("ri-check-line");
          iconElement.classList.add("ri-file-copy-line");
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }
});
