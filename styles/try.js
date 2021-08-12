let main_URL = "https://guarded-lowlands-69569.herokuapp.com/get-Point_of_Sales/"

// Function to fetch a list of pokemon
function getPokemonList(url) {
  fetch(url)
    // Convert data from JSON
    .then((response) => response.json())
    //Stuff to do with data
    .then((data) => {
      // Console log to make sure I am getting the data
      document.write(data);
      // Get the list of pokemon from the results
      let pokemon = data.results;
      // Get element from HTML to write buttons in
      let container = document.querySelector(".pokemon-list-container");
      // Clear the container
      container.innerHTML = "";
      // Loop over pokemon list and create an HTML button for each one. Add the button to the container
      pokemon.forEach((btn) => {
        container.innerHTML += `<button onclick="getPokemonInfo('${btn.url}')">${btn.name}</button>`;
      });
      // Add a next pokemon button
      container.innerHTML += `<br><br><button onclick="getPokemonList('${data.next}')">Next</button>`;
      container.innerHTML += `<br><br><button onclick="getPokemonList('${data.previous}')">Previous</button>`;
    });

}

getPokemonList(base_URL);

// Function to get information about a specific pokemin
function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Make sure data comes throufg
      console.log(data);
      document.querySelector(".poke-details").innerHTML = ``;
      // Write data to pokemon information container
      document.querySelector(".pokemon-info").innerHTML = `
    <img src="${data.sprites.other.dream_world.front_default} ">
    `;

    document.querySelector(".poke-details").innerHTML += `<br><span > ${"Name: " + data.name + ""} </span>`; 
    document.querySelector(".poke-details").innerHTML += `<br><span > ${"Weight: " + data.weight + "kg" + ""} </span>`;
    document.querySelector(".poke-details").innerHTML += `<br><span> ${"Height: " + data.height + "Meters" + ""} </span>`;
    document.querySelector(".poke-details").innerHTML += `<br><span> ${
      "Type: " + data.types[0].type.name
    } </span>`;
    
    
    });
    
}