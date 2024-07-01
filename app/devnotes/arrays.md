# Arrays

## Adding & Removing Elements

- **push()**: Adds one or more elements to the end of an array and returns the new length of the array.

  ```ts
  const arr = [10, 20, 30];
  arr.push(40); // arr is now [10, 20, 30, 40]

  // returns 4 (new length)
  ```

- **pop()**: Removes the last element from an array and returns that element.

  ```ts
  const arr = [1, 2, 3];
  const lastElement = arr.pop(); // lastElement is 3, arr is now [1, 2]

  // returns 3 (popped element)
  ```

- **shift()**: Removes the first element from an array and returns that element.

  ```ts
  const arr = [1, 2, 3];
  const firstElement = arr.shift(); // firstElement is 1, arr is now [2, 3]

  // returns 1 (shifted element)
  ```

- **unshift()**: Adds one or more elements to the beginning of an array and returns the new length of the array.

  ```ts
  const arr = [1, 2, 3];
  arr.unshift(0); // arr is now [0, 1, 2, 3]

  // returns 4 (new length)
  ```

- **splice()**: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

  ```ts
  const arr = [1, 2, 3, 4];
  arr.splice(1, 2, "a", "b"); // arr is now [1, 'a', 'b', 4]

  // returns [2, 3] (removed elements)
  ```

## Sorting

- **sort()**: Sorts the elements of an array in place and returns the array.

  ```ts
  const arr = [3, 1, 4, 2];
  arr.sort((a, b) => a - b); // arr is now [1, 2, 3, 4]
  ```

- **reverse()**: Reverses the order of the elements of an array in place and returns the array.

  ```ts
  const arr = [1, 2, 3, 4];
  arr.reverse(); // arr is now [4, 3, 2, 1]
  ```

## Making New Arrays

- **slice()**: Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

  ```ts
  const arr = [1, 2, 3, 4];
  const newArr = arr.slice(1, 3); // newArr is [2, 3], arr is still [1, 2, 3, 4]
  ```

- **concat()**: Merges two or more arrays. This method does not change the existing arrays but instead returns a new array.

  ```ts
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const newArr = arr1.concat(arr2); // newArr is [1, 2, 3, 4]
  ```

- **map()**: Creates a new array with the results of calling a provided function on every element in the calling array.

  ```ts
  const arr = [1, 2, 3];
  const newArr = arr.map((x) => x * 2); // newArr is [2, 4, 6]

  // returns [2, 4, 6] (new array)
  ```

- **filter()**: Creates a new array with all elements that pass the test implemented by the provided function.

  ```ts
  const arr = [1, 2, 3, 4];
  const newArr = arr.filter((x) => x > 2); // newArr is [3, 4]
  ```

- **flat()**: Flattens an array of arrays into a new array.

  ```ts
  const arr = [
    [1, 2],
    [3, 4],
  ];
  const newArr = arr.flat(); // newArr is [1, 2, 3, 4]
  ```

- **flatMap()**: Maps each element of the array and flattens the result.

  ```ts
  const arr = [1, 2, 3];
  const newArr = arr.flatMap((x) => [x * 2]); // newArr is [2, 4, 6]
  ```

## Doing Something With Every Element

- **forEach()**: Executes a provided function once for each array element.

  ```ts
  const arr = [1, 2, 3];
  arr.forEach((element) => console.log(element)); // logs 1, 2, 3

  // returns undefined (no return value)

  // more clearer option is usually:
  for (const element of arr) {
    console.log(element);
  }
  ```

- **reduce()**: Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

  ```ts
  const arr = [1, 2, 3, 4];
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  ); // sum is 10
  ```

## Checking Something With Every Element

- **every()**: Tests whether all elements in the array pass the test implemented by the provided function.

  ```ts
  const arr = [1, 2, 3, 4];
  const allElementsArePositive = arr.every((x) => x > 0); // allElementsArePositive is true
  ```

- **some()**: Tests whether at least one element in the array passes the test implemented by the provided function.

  ```ts
  const arr = [1, 2, 3, 4];
  const atLeastOneElementIsPositive = arr.some((x) => x > 0); // atLeastOneElementIsPositive is true
  ```

## Searching Within Arrays

- **find()**: Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.

  ```ts
  const arr = [1, 2, 3, 4];
  const found = arr.find((x) => x > 2); // found is 3
  ```

- **findIndex()**: Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.

  ```ts
  const arr = [1, 2, 3, 4];
  const index = arr.findIndex((x) => x > 2); // index is 2
  ```

- **includes()**: Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

  ```ts
  const arr = [1, 2, 3, 4];
  const hasTwo = arr.includes(2); // hasTwo is true
  ```

- **indexOf()**: Returns the first index at which a given element can be found in the array, or -1 if it is not present.

  ```ts
  const arr = [1, 2, 3, 4];
  const index = arr.indexOf(3); // index is 2
  ```

## Join into a string

- **join()**: Joins all elements of an array into a string and returns this string.
  ```ts
  const arr = [1, 2, 3, 4];
  const str = arr.join("-"); // str is '1-2-3-4'
  ```

These methods provide powerful ways to manipulate and interact with arrays, making it easier to handle data in JavaScript.

Not listed becuase I don't think I need them:

```ts
let arr = [1, 2, 3, 4];
arr.fill(0, 1, 3); // arr is now [1, 0, 0, 4]

let arr = [1, 2, 3, 4];
arr.copyWithin(0, 2, 4); // arr is now [3, 4, 2, 3]

let arr = [1, 2, 3, 4];
const lastIndex = arr.lastIndexOf(2); // lastIndex is 1

const str = "hello";
const arrayFromString = Array.from(str); // arrayFromString is ['h', 'e', 'l', 'l', 'o']

const blah = (1, 2, 3);
const arrayFromTuple = Array.from(blah); // arrayFromTuple is [1, 2, 3]
```

Also...

.toLocaleString()
.toString()
.isArray()
.keys() -> returns index numbers as an array
.values() -> returns the values of the array as an iterator object
.entries() -> returns the [index, value] pairs as an array
