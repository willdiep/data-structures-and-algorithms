/*
  Compare each array item to its neighbor in order to “bubble” the smallest value to the top (front) of the array.

  The idea behind bubble sort is that every pair of adjacent values is compared, and then the two values swap positions if the first value is greater than the second. This way during each pass through the array, the largest value “bubbles up” to the top, and after each pass the elements furthest to the right are in the correct order.

  https://www.youtube.com/watch?v=xli_FI7CuzA  

  https://medium.com/javascript-algorithms/javascript-algorithms-bubble-sort-3d27f285c3b2

  https://humanwhocodes.com/blog/2009/05/26/computer-science-in-javascript-bubble-sort/

  O(n^2)
*/

function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

