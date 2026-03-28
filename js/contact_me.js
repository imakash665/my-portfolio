document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const btn = document.getElementById("sendMessageButton");
    btn.disabled = true;
    btn.textContent = "Sending...";

    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Failed to send message. Please try again.");
    }

    btn.disabled = false;
    btn.textContent = "Send Message";
  });
});
