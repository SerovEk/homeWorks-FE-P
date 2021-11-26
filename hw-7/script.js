function createArr() {
  let inputNumbers = prompt("Enter any numbers(min 3)");
  const arr = inputNumbers.split(" ").map(Number);
  for (let i = 0; i < arr.length; i++) {
    while (isNaN(arr[i]) || arr.length < 3) {
      arr[i] = +prompt("Enter correct values!");
    }
  }
  return arr;
}
//--------------------view------------------------//
function viewResult(arr) {
  alert(`Result is ${arr}`);
  console.log(arr);
}
function divider(arr) {
  if (arr.length > 1) {
    let firstRequest = confirm("Do you wanna to divide your result?");
    if (firstRequest == 1) {
      let secondRequest = prompt(" Type your divider: ");
      arr = arr.join(secondRequest);
      showInfo(arr);
      return arr;
    }
  }
  return arr;
}

//-------------------process----------------------//
function arrOperations(arr) {
  let selectOperator = +prompt(
    "Choose operation: 1 - sort a-b, 2 - sort b-a, 3 - even, 4 -  odd, 5 - sum, 6 - mid, 7 - max, 8 - min"
  );
  switch (selectOperator) {
    case 1:
      let sortA = arr.sort((a, b) => a - b);
      viewResult(sortA);
      arr = divider(arr);
      break;
    case 2:
      let sortB = arr.sort((a, b) => b - a);
      viewResult(sortB);
      arr = divider(arr);
      break;
    case 3:
      let even = arr.filter((i) => i % 2 == 0);
      viewResult(even);
      break;
    case 4:
      let odd = arr.filter((i) => i % 2 !== 0);
      viewResult(odd);
      break;
    case 5:
      let sumResult = arr.reduce((sum, current) => sum + current, 0);
      arr = divider(arr);
      viewResult(sumResult);
      break;
    case 6:
      let midResult = arr.reduce((sum, current) => sum + current, 0);
      midResult = midResult / arr.length;
      arr = divider(arr);
      viewResult(midResult);
      break;
    case 7:
      let max = Math.max.apply(Math, arr);
      arr = divider(arr);
      viewResult(max);
      break;
    case 8:
      let min = Math.min.apply(Math, arr);
      arr = divider(arr);
      viewResult(min);
      break;
  }
  return;
}
function main() {
  let newCircle = 0;
  do {
    let oldCircle = 0;
    const mainArray = createArr();
    do {
      finalResult = arrOperations(mainArray);
      let newOps = confirm("Do you want to make new operations?");
      if (newOps == 1) {
        let chooseCircle = +prompt(`1 - make operations with an old array.
                2 - make operations with a new array.`);

        if (chooseCircle === 1) {
          oldCircle = 0;
        } else if (chooseCircle === 2) {
          oldCircle = 1;
        }
      } else return;
    } while (oldCircle === 0);
  } while (newCircle === 0);
}

main();
