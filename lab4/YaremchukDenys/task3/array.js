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
    array.push(Math.floor(Math.random() * 500));
  }
  return array;
}

function swap_in_array(index1, index2, array) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function max_even_min_even_indeces(array) {
  let max_even_index = 0;
  let min_even_indeces_index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && array[max_even_index] < array[i]) {
      max_even_index = i;
    }
    if (i % 2 === 0 && array[min_even_indeces_index] > array[i]) {
      min_even_indeces_index = i;
    }
  }
  swap_in_array(max_even_index, min_even_indeces_index, array);
}

function sort_array(array) {
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

function task1() {
  let num = ask_array_length();
  console.log(num);

  let array = create_array(num);
  console.log("Input array: ", array);

  max_even_min_even_indeces(array);
  console.log("Output array: ", array);

  sort_array(array);
  console.log("Sorted array: ", array);
}

task1();
