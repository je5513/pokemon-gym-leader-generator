function generateGymLeader(event) {
  event.preventDefault();

  new Typewriter("#gym-leader", {
    strings: "gotta catch 'em all",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let gymLeaderFormElement = document.querySelector("#gym-leader-generator-form");
gymLeaderFormElement.addEventListener("submit", generateGymLeader);
