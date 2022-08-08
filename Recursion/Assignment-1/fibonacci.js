//  Using iteration, write a function fibs which takes a number and
//  returns an array containing that many numbers from the fibonacci
//  sequence. Using an example input of 8, this method should return
//  the array[0, 1, 1, 2, 3, 5, 8, 13].


const fibs = (n) => {
    const arr = [0, 1];
    if (n < 1) return 'Invalid Number';
    if (n < 2) return [0];
    for (let i = arr.length; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
};

console.log(fibs(8));


//  Now write another method fibsRec which solves the same problem
//  recursively. This can be done in just a couple of lines(or 1 if you’re
//  crazy, but don’t consider either of these lengths a requirement… just
//  get it done).

const fibsRec = (n, arr = [0, 1]) => {
    if (n < 1) return 'Invalid Number';
    if (n < 2) return [0];
    if (arr.length === n) return arr;
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibsRec(n, arr);
}

console.log(fibsRec(8));