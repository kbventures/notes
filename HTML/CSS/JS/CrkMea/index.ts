// Implement a function sequentialResolution that takes an array of
// promises, "promises", and an array of indices "order". The promises should be
// resolved in the order of the indices in the "order" array.  After each
// promises is resolved push the returned value from the promise to a global array
// "resolvedPromises".

// If promises fails ot resolve, the function should throw an error, and no further promises
// should be resolved. The error messaage should "Error Thrown" (without quotes). The functionshould not
// return anything.

// Each promises / uses a variable promises[i], provided in the input it resolves and returns promises[i]
// if it is not equal to 0. If it is equal to 0, the function rejects and returns an "Error" (without quotes)

// For example if order=[2,1,3], promises = [1,2,1] then the second promise should be resolved first followed
// by the first and third promises. Here, no promise is rejected. Promises are resolved as [2,1,1].

// ## Function Description

// Complete the function sequentialResolution in the editor below.
// The function should resolve promises sequentially and should not return.
// anything. If any promise fails to resolve, the function should throw
// an error, and no further promises should be resolved.

// sequentialresolution has the follow parameters:
// promises[promises[0],...promises[n-1]]; an array of promises
// order[order[0],...order[n-1]]; an array of indices.

// ## Constraints

// 1 <= promises[i] <= 100
// Array order is a permuation of integers 1 to no
// It is guaranteed that either one of no promimses is rejected



let promises = []

async function sequentialResolution(promises: Promise<number | string>[], order: number[]){

}