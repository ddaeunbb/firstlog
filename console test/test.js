// const input = Number(require('fs').readFileSync(0).toString().trim());

let input = 5;
let answer = "";

for (let i = 0; i < input; i++) {
  for (let j = 0; j <= i; j++) {
    answer += "*";
  }
  console.log(answer);
  answer = "";
}
