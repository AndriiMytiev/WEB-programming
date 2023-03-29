const ask_array_length = () => {
  let num;
  while (isNaN(num) || num % 1 !== 0) {
    num = +prompt("Введіть довжину масиву:");
    if (isNaN(num) || num % 1 !== 0) {
      alert("Введіть цілочисельне число!!!");
    }
  }
  return num;
}

const create_array = (length) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 500));
  }
  return array;
}

const sum = (array) => {
  let result = 0;
  for (let i = 0; i < array.length; i += 2) {
    result += array[i];
  }
  return result;
}

const findMinMax = (arr) => {
  let min = arr[0], max = arr[0];
  let minIndex = 0, maxIndex = 0;

  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }

    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return {
    min: min,
    minIndex: minIndex,
    max: max,
    maxIndex: maxIndex
  };
}

const sort_array = (array) => {
  for (let i = 1; i < array.length; i++) {
    let elem_i = array[i];
    let j = i - 1;
    while(elem_i < array[j] && j >= 0){
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = elem_i;
  }
}

const task1 = () => {
  let num = ask_array_length();
  console.log(num);

  let array = create_array(num);
  console.log("Input array: ", array);

  const result = findMinMax(array);
  console.log("Max value: ", result.max, "; max index: ", result.maxIndex);
  console.log("Min value: ", result.min, "; min index: ", result.minIndex);

  const result2 = sum(array);
  console.log("Sum of numbers with even indices: ", result2)

  console.log("Output array: ", array);

  sort_array(array);
  console.log("Sorted array: ", array);
}

task1();
