const searchBar = document.getElementById("search-bar");
const characterBox = document.getElementById("character-box");

searchBar.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchTerm = searchBar.querySelector("input").value;
  getCharacters(searchTerm);
  console.log(searchTerm);
});

function getCharacters(searchTerm) {
  const baseUrl = "https://swapi.dev/api/people/?search=";
  const url = baseUrl + searchTerm;
  console.log(url);
  return axios
    .get(url)
    .then((data) => {
      document.innerHTML = "";
      if (data.results) {
        console.log(data.results);
        for (let i = 0; i < data.results.length; i++) {
          let character = document.createElement("div");
          character.classList.add("character");
          character.innerHTML = `
              <h2>${data.results[i].name}</h2>
              <p>Height: ${data.results[i].height}cm</p>
              <p>Gender: ${data.results[i].gender}</p>
            `;
          characterBox.appendChild(character);
        }
      }
    })
    .catch((error) => console.log(error));
}
