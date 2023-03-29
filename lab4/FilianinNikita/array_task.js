function ask_array_length() {
  let num;
  while (isNaN(num) || num % 1 !== 0) {
    num = +prompt("Введіть довжину масиву:");
    if (isNaN(num) || num % 1 !== 0) {
      alert("Введіть цілочисельне число!!!");
    }
  }
  return num;
}

function create_array(length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 1000));
  }
  return array;
}

function sum_between_max_and_min(array) {
  let max_index = 0;
  let min_index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[max_index] < array[i]) {
      max_index = i;
    } else if (array[min_index] > array[i]) {
      min_index = i;
    }
  }

  console.log("Max element: ", array[max_index]);
  console.log("Min element: ", array[min_index]);

  let first_index = max_index > min_index ? min_index : max_index;
  let second_index = first_index == max_index ? min_index : max_index;
  let sum = 0;

  for (let i = first_index + 1; i < second_index; i++) {
    sum += array[i];
  }

  return sum;
}

function quick_sort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot_index = Math.floor(array.length / 2);
  let pivot = array[pivot_index];

  let left = [];
  let right = [];
  for (let i = 0; i < array.length; i++) {
    if (i === pivot_index) {
      continue;
    }
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quick_sort(left).concat(pivot, quick_sort(right));
}

function task1() {
  let num = ask_array_length();

  let array = create_array(num);
  console.log("Input array: ", array);

  let sum = sum_between_max_and_min(array);
  console.log("Sum between min and max elem: ", sum);

  let sorted = quick_sort(array);
  console.log("Sorted array: ", sorted);
}

task1();