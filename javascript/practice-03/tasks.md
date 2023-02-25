# JS Tasks

- Check if arrays are equal:

  ```typescript
  function isEqual(first: any[], second: any[]): boolean;

  const arr1 = [1, 2, 3];
  const arr2 = ['1', '2', '3'];
  const arr3 = [1, 2, 3];
  const arr4 = [{}, {}, {}];
  const arr5 = [{}, {}, {}];

  isEqual(); // Error
  isEqual('string', {}); // Error
  isEqual(arr1, arr2); // false
  isEqual(arr1, arr3); // true
  isEqual(arr2, arr4); // false
  isEqual(arr4, arr5); // false
  ```

- Find unique array

  ```typescript
  function isUnique(array: any[]): boolean;

  const arr1 = [1, 2, 3, 1];
  const arr2 = ['u', 'n', 'i', 'q'];

  isUnique(); // Error
  isUnique(null); // Error
  isUnique(arr1); // false
  isUnique(arr2); // true
  ```

- Given an array of ASCII codes, take it and return a word from that char codes.

  ```typescript
  function wordGenerator(array: number[]): string;

  const arr1 = [83, 97, 108, 97, 109];
  const arr2 = [72, 101, 108, 108, 111];
  const arr3 = [72, 111, 108, 97];

  wordGenerator(); // Error
  wordGenerator(arr1); // Salam
  wordGenerator(arr2); // Hello
  wordGenerator(arr3); // Hola
  ```

- Implement your version of Uppercase, Lowercase, Capitalize methods of string.

  ```typescript
  function uppercase(word: string): string;
  function lowercase(word: string): string;
  function capitalize(word: string): string;

  const word1 = 'heLLo';

  uppercase(word1); // HELLO
  lowercase(word1); // hello
  capitalize(word1); // Hello
  ```

- Find Union of arrays

  ```typescript
  function union(first: any[], second: any[]): any[];

  const arr1 = [1, 2];
  const arr2 = [2, 3];

  union(arr1, arr2); // [1, 2, 3]
  ```

- Find Intersection of arrays

  ```typescript
  function intersect(first: any[], second: any[]): any[];

  const arr1 = [1, 2];
  const arr2 = [2, 3];

  intersect(arr1, arr2); // [2]
  ```

- Check if data is real object

  ```typescript
  function isPlainObject(data: any): boolean;

  const data1 = [];
  const data2 = {};

  isPlainObject(); // false
  isPlainObject(data1); // false
  isPlainObject(data2); // true
  ```

- Get key-value pairs from object

  ```typescript
  function getPairs(data: { [key: string]: any }): [string, any][];

  const obj1 = {};
  const obj2 = {
    name: 'John',
    surname: 'Doe',
  };

  getPairs(); // Error
  getPairs(obj1); // []
  getPairs(obj2); // [['name', 'John'], ['surname', 'Doe']]
  ```

- Omit given key from object

  ```typescript
  function without(object: { [key: string]: any }, key: string): { [key: string]: any };

  const obj1 = {};
  const obj2 = { a: 1, b: 2 };

  without(obj1, 'b'); // { a: 1 }
  without(obj2, 'b'); // {}
  ```

> Written by [Aykhan Huseyn](https://github.com/aykhanhuseyn).
