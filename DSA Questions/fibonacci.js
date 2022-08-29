// print the n term of fibonacci series
// n term in fibonacci series in (n-2) term + (n-1) term where n > 2

function fibonacci(n) {
  if (n < 1) {
    return null;
  }
  if (n == 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciUptoN(n) {
  const series = [];
  if (n < 1) return null;
  series.push(0);
  if (n === 1) return series;
  series.push(1);
  if (n === 2) return series;

  for (let i = 3; i <= n; i++) {
    let num = series[i - 2] + series[i - 3];
    series.push(num);
  }
  return series;
}

console.log(fibonacci(10));

console.log(fibonacciUptoN(10));
