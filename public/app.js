
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const result = document.getElementById("result");

searchButton.addEventListener("click", searchStore);

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchStore();
  }
});

function searchStore() {
  const query = searchInput.value.trim();

  if (!query) {
    result.textContent = "Please enter Store Name, DS Code or DS ID.";
    return;
  }

  result.textContent =
    "Connecting to Firebase... Please wait for the next setup step.";
}
