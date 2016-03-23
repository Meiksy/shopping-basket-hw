var basket = [
  { item: 'headphones',
    amount: 20.00
  },
  { item: 'keyboard',
    amount: 15.00
  }
]

function addItem()
var add()
  basket.push()

function removeItem()
  var remove()
  basket.pop()


function total() {
  var totalSum = 0;
  for (var i=0; i<basket.length; i++) {
    totalSum += basket[i].amount;
  }




// if (totalSum -= 0.05 / totalSum * 100 < 20) {
//     totalSum -= 0.10 / totalSum * 100;
// }


totalSum -= 0.05 / totalSum * 100;

// totalSum -= Math.round(0.05 / totalSum * 100);
  
  if (totalSum > 20) {
    totalSum -= .1 / totalSum * 100;
  }
  // baket amount = 35
  // totalSum = totalSum + 5;     // => 40
  // totalSum = totalSum + 5;     // Both together => 45

  return totalSum;
}
console.log(total());