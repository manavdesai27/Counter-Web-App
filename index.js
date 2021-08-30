let counter = document.querySelector(".counter");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let reset = document.querySelector(".reset");
let h2 = document.querySelector("h2");
let savedBtn = document.querySelector(".saved-btn");

let count = 0;

updateCounter();

minus.addEventListener("click", () => {
  count--;
  updateCounter();
  counterColor();
});

plus.addEventListener("click", () => {
  count++;
  updateCounter();
  counterColor();
});

reset.addEventListener("click", () => {
  count = 0;
  updateCounter();
  counterColor();
});

counter.addEventListener("click", () => {
  let fstring = "";

  if (count > 0) {
    fstring += `<span style="color:#4CAF50;">${count} </span> `;
  } else if (count < 0) {
    fstring += `<span style="color:#f44336;">${count} </span> `;
  } else fstring = `${count}`;

  h2.innerHTML = h2.innerHTML + " " + fstring;
  // "(" + count + ") ";
});

counter.addEventListener(
  "mousedown",
  (e) => {
    e.preventDefault();
  },
  false
);

savedBtn.addEventListener("click", () => {
  h2.innerHTML = "Saved counts:";
});

function updateCounter() {
  counter.innerHTML = count;
}

function counterColor() {
  if (count < 0) counter.classList.add("negative");
  else if (count > 0) counter.classList.add("positive");
  else {
    counter.classList.remove("negative");
    counter.classList.remove("positive");
  }
}
