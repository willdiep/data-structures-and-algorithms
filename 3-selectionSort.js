/*
  The idea behind selection sort is that you loop through the input array linearly, selecting the first smallest element, and then swap it to the first position. Then you loop through the array again using a linear scan and get the second smallest element, swap it to the second position, and so on and so forth until your array is completely sorted. 

  https://www.youtube.com/watch?v=g-PGLbMth_g&t=62s

  https://humanwhocodes.com/blog/2009/09/08/computer-science-in-javascript-selection-sort/

  https://medium.com/javascript-algorithms/javascript-algorithms-selection-sort-54da919d0513

  O)n^2)
*/

function swap(arr, firstIndex, secondIndex) {
  var temp = arr[firstIndex]
  arr[firstIndex] = arr[secondIndex]
  arr[secondIndex] = temp
}

function selectionSort(arr) {
  let len = arr.length,
    min

  for (let i = 0; i < len; i++) {
    //set minimum to this position
    min = i

    //check the rest of the array to see if anything is smaller
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    //if the minimum isn't in the position, swap it
    if (i != min) {
      swap(arr, i, min)
    }
  }

  return arr
}

console.log(selectionSort([5, 3, 6, 2, 10])) // [2, 3, 5, 6, 10]





/*
  BOOK EXAMPLE
*/
function findSmallestNum(arr) {
  let smallest = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
    }
  }
  return smallest
}

// console.log(findSmallestNum([5, 3, 6, 2, 10])) // 2

function selectionSortPush(arr) {
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    smallest = findSmallestNum(arr)
    // console.log(smallest)
    // return arr.pop(smallest)

    newArr.push(arr.pop(smallest))
  }
  return newArr
}

// console.log(selectionSortPush([5, 3, 6, 2, 10])) // [2, 3, 5, 6, 10]
