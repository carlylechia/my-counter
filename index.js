// get handles and define
const countNumber = document.querySelector(".count-number");
const btnContainer = document.querySelector(".btn-container");
let sqNum = document.querySelector(".sq-btn-container");

// increase function
const increase = () => {
  +countNumber.innerHTML++;
  decideColor(+countNumber.innerHTML);
};

// decrease function
const decrease = () => {
  +countNumber.innerHTML--;
  decideColor(+countNumber.innerHTML);
};

// reset function
const reset = () => {
  countNumber.innerHTML = 0;
  decideColor(+countNumber.innerHTML);
};

//  square function

const square = () => {
  console.log(countNumber.innerHTML);
  countNumber.innerHTML = (+countNumber.innerHTML) ** 2;
  decideColor(+countNumber.innerHTML)
};  

// assign different colors
function decideColor(num) {
  if (num > 0) {
    countNumber.style.color = "green";
  } else if (num < 0) {
    countNumber.style.color = "red";
  } else if (num === 0) {
    countNumber.style.color = "black";
  }
}

// handle operations
function count(e) {
  let id = e.target.id;
  switch (id) {
    case "btn-dec":
      decrease();
      break;
    case "btn-inc":
      increase();
      break;
    case "btn-reset":
      reset();
      break;
    case "btn-sq":
      square();
      break;
  }
}

// listen for a click
btnContainer.addEventListener("click", count);
sqNum.addEventListener("click", count);