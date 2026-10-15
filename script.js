
const searchInput = document.querySelector("#topic-search");
const topicCards = document.querySelectorAll(".topic-card");
const searchMessage = document.querySelector("#search-message");
const year = document.querySelector("#year");

// Display the current year automatically.
year.textContent = new Date().getFullYear();

// Filter learning cards when a visitor searches.
searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase().trim();
  let visibleCards = 0;

  topicCards.forEach(function (card) {
    const searchableText =
      card.textContent.toLowerCase() + " " +
      card.dataset.topic.toLowerCase();

    const matches = searchableText.includes(searchTerm);

    card.hidden = !matches;

    if (matches) {
      visibleCards++;
    }
  });

  if (visibleCards === 0) {
    searchMessage.textContent =
      "No matching topics yet. Try another search.";
  } else if (searchTerm === "") {
    searchMessage.textContent = "";
  } else {
    searchMessage.textContent =
      visibleCards + " topic(s) found.";
  }
});
