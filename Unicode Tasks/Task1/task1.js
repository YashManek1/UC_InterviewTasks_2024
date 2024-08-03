let input = document.querySelector("input");
let btn = document.querySelector("button");
let output1 = document.querySelector("#output1");
let output2 = document.querySelector("#output2");

btn.addEventListener("click", () => {
  let str = input.value;
  let distinctCount = 0;
  let count = [];

  for (let i = 0; i < str.length; i++) {
    count[i] = 0;
    appears = false;
    if (str[i] != " ") {
      for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) {
          count[i]++;
        }
      }
      for (let k = 0; k < i; k++) {
        if (str[i] === str[k]) {
          appears = true;
          break;
        }
      }
      if (!appears) {
        distinctCount++;
      }
    }
  }
  output1.innerText = distinctCount;
  for (i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      output2.innerText = output2.innerText + `${str[i]}:${count[i]}` + ",";
    }
  }
});
