// Simple contact form handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for contacting Apex Health! We will get back to you soon.");
      form.reset();
    });
  }
});
