const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');


// 대문자 변수 (문자변수)
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"


//홈페이지에 맨 처음에 왔을 때 (모두 hiddend인 상태)
// 로컬에 이름 값이 저장되어있는지 확인한다.

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(saveUsername);
}

// 맨 처음으로 로그인 한 경우
function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
} 

// 이름 입력하고 난 이후의 함수
function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

