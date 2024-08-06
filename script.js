const words = ["UI/UX Design", "Web Design"];
let currentIndex = 0;

function changeText() {
  const textElement = document.getElementById("changing-text");
  textElement.classList.add('fade-out');
  
  setTimeout(() => {
    textElement.textContent = words[currentIndex];
    textElement.classList.remove('fade-out');
    currentIndex = (currentIndex + 1) % words.length;
  }, 500); // Match with CSS transition duration
}

setInterval(changeText, 2000); // Change text every 2 seconds

function openTab(evt, tabName) {
  // Get all elements with class="tabcontent" and hide them
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablink" and remove the class "active"
  let tablinks = document.getElementsByClassName("tablink");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Set the default tab to open
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.tablink').click();
});

window.addEventListener('load', function() {
  const rightContainer = document.querySelector('.right-container');
  const resumeScroll = document.querySelector('.resume-scroll');
  const resumeContent = document.querySelector('.resume-content');

  function adjustScrollHeight() {
    // Set the height of the .resume-scroll to fit within the .right-container
    resumeScroll.style.maxHeight = `${rightContainer.clientHeight - 260}px`; // Adjust as needed for padding/margins
  }

  // Adjust on page load
  adjustScrollHeight();

  // Optionally, adjust on window resize to handle responsive design
  window.addEventListener('resize', adjustScrollHeight);
});
