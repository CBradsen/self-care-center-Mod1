var whichMessage = document.querySelector("#get-message-button");
var placeMessage = document.querySelector(".display-text");
var displayImage = document.querySelector("#display-image");
var displayBottomBox = document.querySelector(".display-bottom-box");
var affirmation = document.querySelector("#affirmation");
var mantra = document.querySelector("#mantra");
var mainPage = document.querySelector(".main-page");
var loginPage = document.querySelector(".login-page");
var loginButton = document.querySelector("#login-submit-button");
var greetUser = document.querySelector(".welcome-user");
var userName = document.querySelector("#user-name");

function getRandomIndexNumber(array) {
  return [Math.floor(Math.random() * array.length)]; 
}

loginButton.addEventListener("click", openMainPage);
whichMessage.addEventListener("click", pickDisplayMessage);

function openMainPage(event) {
  event.preventDefault();
  loginPage.classList.add("hidden");
  mainPage.classList.remove("hidden");
  displayBottomBox.classList.remove("hidden");
  placeMessage.classList.remove("hidden");
  greetUser.innerText = `Welcome, ${userName.value}!`;

}

function pickDisplayMessage(event) {
  event.preventDefault();
  displayImage.classList.add("hidden");
  placeMessage.classList.remove("hidden");
  if (affirmation.checked) {
    placeMessage.innerText = `${affirmations[getRandomIndexNumber(affirmations)]}`;
  } else if (mantra.checked) {
    placeMessage.innerText = `${mantras[getRandomIndexNumber(mantras)]}`;
  }
}

var mantras = [
    "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
    "Don't let yesterday take up too much of today.",
    "Every day is a second chance.",
    "Tell the truth and love everyone.",
    "I am free from sadness.",
    "I am enough.",
    "In the beginning it is you, in the middle it is you and in the end it is you.",
    "I love myself.",
    "I am present now.",
    "Inhale the future, exhale the past.",
    "This too shall pass.",
    "Yesterday is not today.",
    "The only constant is change.",
    "Onward and upward.",
    "I am the sky, the rest is weather."
  ]

  var affirmations = [
    "I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",
    "I am in the process of becoming the best version of myself.",
    "I have the freedom & power to create the life I desire.",
    "I choose to be kind to myself and love myself unconditionally.",
    "My possibilities are endless.",
    "I am worthy of my dreams.",
    "I am enough.",
    "I deserve to be healthy and feel good.",
    "I am full of energy and vitality and my mind is calm and peaceful.",
    "Every day I am getting healthier and stronger.",
    "I honor my body by trusting the signals that it sends me.",
    "I manifest perfect health by making smart choices."
    ]