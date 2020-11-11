// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// Solution #1 (my first solution);
// function matrix(n) {
//   let spiral = [];
//   const half = Math.ceil(n / 2);
//   // top
//   // Initiating the count
//   let count = 0;
//   // iterating through the number of rows
//   for (let r = 0; r < half; r++) {
//     // iterating through the column, decreasing by two
//     spiral[r] = [];
//     for (let c = 0; c < n - (2 * r); c++) {
//       count++;
//       // location in the array
//       spiral[r][r + c] = count;
//     }
//     count += (n * 3 - 4) - (6 * r);
//   }
//   // Bottom
//   // Starting value
//   count = n * 2 - 2;
//   // iterating through the number of rows
//   for (let r = 0; r < half; r++) {
//     // iterating through the column, decreasing by two
//     spiral[n - 1 - r] = [];
//     for (let c = n - (2 * r); c > 0; c--) {
//       count++;
//       // location in the array
//       spiral[n - 1 - r][r + c - 1] = count;
//     }
//     count += (n * 3 - 8) - (6 * r);
//   }
//   // left
//   // Starting value
//   count = n * 3 - 2;
//   for (let c = 0; c < half; c++) {
//     for (let r = n - (c + 2); r > c; r--) {
//       count++;
//       spiral[r][c] = count;
//     }
//     count += (n * 3 - 8) - (6 * (c));
//   }
//   // right
//   // starting value
//   count = n;
//   for (let c = n - 1; c >= half; c--) {
//     for (let r = (n - c); r < c; r++) {
//       count++;
//       spiral[r][c] = count;
//     }
//     count += (n * 3 - 4) - (6 * (n - c - 1));
//   }

//   return spiral;
// }

// Solution #2 
function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (counter <= n * n) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    // Bottom Row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    // Left Column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;
