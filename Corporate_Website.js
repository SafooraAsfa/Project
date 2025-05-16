
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".service-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      cards.forEach(card => {
        if (filter === "all" || card.classList.contains(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

document.getElementById("partnerForm").addEventListener("submit", function(e){
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch("Website.php", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {

    document.getElementById("MessageResponse").innerHTML = data;
    form.reset();
  })
  .catch(error => {

    document.getElementById("MessageResponse").innerText = "Something went wrong. Please try again.";
  });
});

