/*
Input : arr[] = {1, 3, 5, 7, 8, 9}
        x = 5
Output : Element found!

Input : arr[] = {1, 3, 5, 7, 8, 9}
        x = 6
Output : Element not found!
*/


/*
Iterative Approach : In this iterative approach instead of recursion, we will use a while loop and the loop will run until it hits the base condition i.e start becomes greater than end.

Time Complexity: O(logN).
*/

let iterativeFunction = function (arr, x) { 
   
  let start=0, end=arr.length-1; 
        
  // Iterate while start not meets end 
  while (start<=end){ 

      // Find the mid index 
      let mid=Math.floor((start + end)/2); 
 
      // If element is present at mid, return True 
      if (arr[mid]===x) return true; 

      // Else look in left or right half accordingly 
      else if (arr[mid] < x)  
           start = mid + 1; 
      else
           end = mid - 1; 
  } 
 
  return false; 
}








/*
Recursive Approach :

BASE CONDITION: If starting index is greater than ending index return false.
Compute the middle index.
Compare the middle element with number x. If equal return true.
If greater, call the same function with ending index = middle-1 and repeat step 1.
If smaller, call the same function with starting index = middle+1 and repeat step 1.

Time Complexity: O(logN).
*/

let recursiveFunction = function (arr, x, start, end) { 
       
  // Base Condition 
  if (start > end) return false; 
 
  // Find the middle index 
  let mid=Math.floor((start + end)/2); 
 
  // Compare mid with given key x 
  if (arr[mid]===x) return true; 
        
  // If element at mid is greater than x, 
  // search in the left half of mid 
  if(arr[mid] > x)  
      return recursiveFunction(arr, x, start, mid-1); 
  else

      // If element at mid is smaller than x, 
      // search in the right half of mid 
      return recursiveFunction(arr, x, mid+1, end); 
} 
 