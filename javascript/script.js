document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.querySelector("#navBtn");
  const navItems = document.querySelector(".navItems");
  const navBar = document.querySelector(".navbar");

  navBtn.addEventListener("click", () => {
    navItems.classList.toggle("expand");
    navBar.classList.toggle("navOnExpand");
  });

  // Navbar details
  var details = document.querySelectorAll("details");
  details.forEach(function (detail) {
    detail.addEventListener("click", function () {
      details.forEach(function (otherDetail) {
        if (otherDetail !== detail && otherDetail.open) {
          otherDetail.open = false;
        }
      });
    });
  });

  // Footer
  const footerTitles = document.querySelectorAll(".footerTitle");
  const footerLinks = document.querySelectorAll(".footerLinks");

  footerTitles.forEach((title, index) => {
    title.addEventListener("click", () => {
      footerLinks.forEach((link, i) => {
        if (i === index) {
          link.classList.toggle("hideShowLinks");
        } else {
          link.classList.remove("hideShowLinks");
        }
      });
    });
  });
});

// ---------- Navigation
