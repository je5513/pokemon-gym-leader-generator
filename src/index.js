function displayGymLeader(response) {
  new Typewriter("#gym-leader", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateGymLeader(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "8dcoa24b0fb7aa495436f440dt9ca24e";
  let prompt = `Generate a Pokémon gym leader based on ${instructionsInput.value} and include 4 pokémon that match with the gym leader's type`;
  let context =
    "You are a Pokémon master and have defeated all the gym leaders in all of the Pokémon games. You are knowledgeable on type match ups and know what each type are strong, weak and super effective against. Your mission is to generate the perfect gym leader including the perfect party of 4 Pokémon that would match the gym leader's type. Please give the gym leader a name and a fun, brief description on their personality. Please seperate the gym leader's name, personality, and pokémon with <br />";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let gymLeaderElement = document.querySelector("#gym-leader");
  gymLeaderElement.classList.remove("hidden");
  gymLeaderElement.innerHTML = `Generating a ${instructionsInput.value} type gym leader`;

  axios.get(apiUrl).then(displayGymLeader);
}

let gymLeaderFormElement = document.querySelector("#gym-leader-generator-form");
gymLeaderFormElement.addEventListener("submit", generateGymLeader);
