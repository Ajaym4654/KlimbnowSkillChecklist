function searchSkills() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const sections = document.querySelectorAll(".skills-section");

  sections.forEach(section => {
    const cards = section.querySelectorAll(".card");
    let sectionHasMatch = false;

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(input)) {
        card.style.display = "block";
        sectionHasMatch = true;
      } else {
        card.style.display = "none";
      }
    });

    section.style.display = sectionHasMatch ? "block" : "none";
  });
}

function filterByCategory(categoryId) {
  const sections = ["nursing", "allied", "rehab"];
  sections.forEach(id => {
    document.getElementById(id).style.display = id === categoryId ? "block" : "none";
  });
}

function showAll() {
  document.getElementById("nursing").style.display = "block";
  document.getElementById("allied").style.display = "block";
  document.getElementById("rehab").style.display = "block";
}