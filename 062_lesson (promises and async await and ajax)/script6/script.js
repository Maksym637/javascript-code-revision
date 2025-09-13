/**
 * With async/await, we can't use the catch method because we are not able
 * to attach it anywhere. Instead, we should use something called a try-catch statement.
 */

try {
  let y = 1;
  const x = 2;
  x = 10;
} catch (error) {
  console.log(error.message);
}
