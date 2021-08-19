const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const result = document.getElementById("result");
const button = document.getElementById("button");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");

let percentage = undefined;

function stockHandler() {
  const buyPrice = input1.value;
  const stockQty = input2.value;
  const currentPrice = input3.value;
  const investment = buyPrice * stockQty;
  const amount = currentPrice * stockQty;
  const total = amount - investment;
  percentage = ((currentPrice - buyPrice) / buyPrice) * 100;
  let message = "";
  //   switch (percentage) {
  //     case Number.NEGATIVE_INFINITY < -50:
  //       message = percentage + " 1";
  //       break;
  //     case -50 < 0:
  //       message = percentage + " 2";
  //       break;
  //     case 0:
  //       message = percentage + " 3";
  //       break;
  //     case 1 < 60:
  //       message = percentage + " 4";
  //       break;
  //     case 60 < Number.POSITIVE_INFINITY:
  //       message = percentage + " 5";
  //       break;
  //   }

  if (percentage < -50) {
    img1.classList.add("off");
    img2.classList.remove("off");
    img3.classList.add("off");
    img4.classList.add("off");
    img5.classList.add("off");
    img6.classList.add("off");
    message = "Stay Strong !!";
  } else if (percentage < 0) {
    img1.classList.add("off");
    img2.classList.add("off");
    img3.classList.remove("off");
    img4.classList.add("off");
    img5.classList.add("off");
    img6.classList.add("off");
    message = "Keep Learning, Reseach More";
  } else if (percentage === 0) {
    img1.classList.add("off");
    img2.classList.add("off");
    img3.classList.add("off");
    img4.classList.remove("off");
    img5.classList.add("off");
    img6.classList.add("off");
    message = "Kepp Investing, Reseach More";
  } else if (percentage < 60) {
    img1.classList.add("off");
    img2.classList.add("off");
    img3.classList.add("off");
    img4.classList.add("off");
    img5.classList.remove("off");
    img6.classList.add("off");
    message = "Great Work !! Stay Focus";
  } else {
    img1.classList.add("off");
    img2.classList.add("off");
    img3.classList.add("off");
    img4.classList.add("off");
    img5.classList.add("off");
    img6.classList.remove("off");
    message = "Going To Moon !!!";
  }

  if (buyPrice > 0 && stockQty > 0 && currentPrice > 0) {
    //if all fileds are filled and more than 0 then show result
    result.innerHTML = ` 
    <div id="ans">
        <h2>${message}</h2>
        <ul class="result-ul">
         <li>Investment is : ${investment.toFixed(2)}</li>
            <li>${
              amount >= investment ? "Profit" : "Loss"
            } is : ${total.toFixed(2)}</li>
            <li>Amount : ${amount.toFixed(2)}</li>
             <li> Percentage: ${percentage.toFixed(2)}%</li>
         </ul
    </div>`;
  } else {
    img1.classList.remove("off");
    img2.classList.add("off");
    img3.classList.add("off");
    img4.classList.add("off");
    img5.classList.add("off");
    img6.classList.add("off");
    result.innerHTML = ` <div id="ans"><h2>Please Fill All The Fields with Appropriate Values</h2></div>`;
  }
}

//Events
button.addEventListener("click", stockHandler);
input3.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    stockHandler();
  }
});
input2.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    stockHandler();
  }
});
input1.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    stockHandler();
  }
});
