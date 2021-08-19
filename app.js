const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const result = document.getElementById("result");
const button = document.getElementById("button");

function stockHandler() {
  const buyPrice = input1.value;
  const stockQty = input2.value;
  const currentPrice = input3.value;
  const investment = buyPrice * stockQty;
  const amount = currentPrice * stockQty;
  const total = amount - investment;
  const percentage = ((currentPrice - buyPrice) / buyPrice) * 100;
  let message = "";

  if (buyPrice > 0 && stockQty > 0 && currentPrice > 0) {
    console.log(buyPrice);
    //if all fileds are filled and more than 0 then show result
    result.innerHTML = `<hr class="hr-tag" />
      <h2>${message}</h2>
    <ul class="result-ul">
    <li>Total Investment is : ${investment.toFixed(2)}</li>
    <li>Total ${amount >= investment ? "Profit" : "Loss"} is : ${total.toFixed(
      2
    )}</li>
    <li>Total Amount : ${amount.toFixed(2)}</li>
    <li>Total ${
      amount >= investment ? "Gain" : "Lose"
    } in % : ${percentage.toFixed(2)}%</li>
    </ul>
  `;
  } else {
    result.innerHTML = `<h2>Please Fill All The Fields with Appropriate Values</h2>`;
  }
}

//Events
button.addEventListener("click", stockHandler);
