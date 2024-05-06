document.addEventListener("DOMContentLoaded", function () {
  const section1 = document.querySelector(".section-1");
  const parentContainer = document.body;
  const latestRelease = document.querySelectorAll(".play-button");

  let isHovering = false;

  // Function to enable scrolling for section-1
  function enableScroll() {
    parentContainer.classList.add("scrollable");
  }

  // Function to disable scrolling for section-1
  function disableScroll() {
    parentContainer.classList.remove("scrollable");
  }

  // Add event listener for mouseenter event on section-1
  section1.addEventListener("mouseenter", () => {
    isHovering = true;
    enableScroll();
  });

  // Add event listener for mouseleave event on section-1
  section1.addEventListener("mouseleave", () => {
    isHovering = false;
    disableScroll();
  });

  const heartIcons = document.querySelectorAll(".heart-icon");

  heartIcons.forEach(function (heartIcon) {
    heartIcon.addEventListener("click", function () {
      if (this.classList.contains("glow")) {
        this.classList.remove("glow");
      } else {
        this.classList.add("glow");
      }
    });
  });

  document.querySelectorAll(".prevent-default").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });

  // Function to check if the content overflows horizontally
  function checkOverflow() {
    const containers = document.querySelectorAll(".footer .details .song-desc");
    containers.forEach((container) => {
      const content = container.querySelector(".song-name");
      if (content.scrollWidth > container.offsetWidth) {
        content.classList.add("scrolling-animation");
      } else {
        content.classList.remove("scrolling-animation");
      }
    });
  }

  // Run the checkOverflow function initially
  checkOverflow();

  // Listen for window resize event and re-run the checkOverflow function
  window.addEventListener("resize", checkOverflow);

  function toggleFooter() {
    var footer = document.querySelector(".footer");
    footer.classList.toggle("show");
  }

  latestRelease.forEach(function (playbutton) {
    playbutton.addEventListener("click", () => {
      toggleFooter();
    });
  });

  document.querySelectorAll(".play-button").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });

  document
    .querySelectorAll(".playlist-content.playlist-tile.right-content a")
    .forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
      });
    });

  // JavaScript
  document.querySelectorAll("#animated-link").forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Prevent the default behavior (navigation)
      event.preventDefault();

      // Add a class to trigger the transition effect
      document.body.classList.add("transition-effect");

      // After a short delay, navigate to the target page
      setTimeout(function () {
        window.location.href = "SinglePlaylistScreen.html"; // Navigate to the target page
      }, 500); // Adjust the delay to match the transition duration
    });
  });
});
