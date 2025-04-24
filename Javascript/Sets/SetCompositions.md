## JavaScript Set Composition Examples

```js
const A = new Set([1, 2, 3]);
const B = new Set([2, 3, 4]);

// 1. Difference (A ∖ B): elements in A but not in B
const difference = new Set([...A].filter(x => !B.has(x))); // Set {1}

// 2. Intersection (A ∩ B): elements common to both A and B
const intersection = new Set([...A].filter(x => B.has(x))); // Set {2, 3}

// 3. Symmetric Difference: elements in A or B but not both
const symmetricDifference = new Set([
  ...[...A].filter(x => !B.has(x)),
  ...[...B].filter(x => !A.has(x)),
]); // Set {1, 4}

// 4. Union (A ∪ B): all elements in A or B
const union = new Set([...A, ...B]); // Set {1, 2, 3, 4}

// 5. isDisjointFrom: true if A and B have no elements in common
const isDisjoint = [...A].every(x => !B.has(x)); // false

// 6. isSubsetOf: true if all elements of A are in B
const isSubset = [...A].every(x => B.has(x)); // false

// 7. isSupersetOf: true if all elements of B are in A
const isSuperset = [...B].every(x => A.has(x)); // false
