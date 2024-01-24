// content.js
document.addEventListener("click", function (event) {
    const target = event.target;
  
    if (target.tagName === "A" && target.href) {
      const confirmOpen = window.confirm("Are you sure you want to open this link?\n\n" + target.href);
  
      if (!confirmOpen) {
        event.preventDefault();
      }
    }
  });
  