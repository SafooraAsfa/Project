document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const regionFilter = document.getElementById("regionFilter");
  const typeFilter = document.getElementById("typeFilter");
  const modeFilter = document.getElementById("modeFilter");
  const jobCards = document.querySelectorAll(".job-card");

  function filterJobs() {
    const searchVal = searchInput.value.toLowerCase();
    const categoryVal = categoryFilter.value;
    const regionVal = regionFilter.value;
    const typeVal = typeFilter.value;
    const modeVal = modeFilter.value;

    jobCards.forEach(card => {
      const category = card.dataset.category;
      const region = card.dataset.region;
      const type = card.dataset.type;
      const mode = card.dataset.mode;
      const content = card.innerText.toLowerCase();

      const matchSearch = content.includes(searchVal);
      const matchCategory = !categoryVal || category === categoryVal;
      const matchRegion = !regionVal || region === regionVal;
      const matchType = !typeVal || type === typeVal;
      const matchMode = !modeVal || mode === modeVal;

      if (matchSearch && matchCategory && matchRegion && matchType && matchMode) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", filterJobs);
  categoryFilter.addEventListener("change", filterJobs);
  regionFilter.addEventListener("change", filterJobs);
  typeFilter.addEventListener("change", filterJobs);
  modeFilter.addEventListener("change", filterJobs);
});