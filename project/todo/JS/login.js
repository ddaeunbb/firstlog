const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingContainer = document.querySelector(".greeting-container");
const toDoContainer = document.querySelector(".todo-container");
const quoteContainer = document.querySelector(".quote-container");
const weatherContainer = document.querySelector(".weather-container");

const HIDDEN_CLASSNAME = "hidden";
const OPACITY_CLASSNAME = "opacity";
const USERNAME_KEY = "username";

loginForm.addEventListener("submit", loginFormSubmit);

function loginFormSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  showGreeting(userName);
}

function showGreeting(username) {
  greeting.innerText = `Hello, ${username}`;
  greetingContainer.classList.remove(HIDDEN_CLASSNAME);
  toDoContainer.classList.remove(HIDDEN_CLASSNAME);
  quoteContainer.classList.remove(OPACITY_CLASSNAME);
  weatherContainer.classList.remove(OPACITY_CLASSNAME);
}

const savedUserName = localStorage.getItem("username");

if (savedUserName) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  showGreeting(savedUserName);
}
