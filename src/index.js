module.exports = function solveEquation(equation) {
  // your implementation

  // ax2 + bx + с = 0
  // d = b2 - 4ас
  // if d>0 x1,2 = -b +- sqrt d / 2a
  // if d=0 x = -b / 2a
  // if d<0 x = NaN

  // function solveEquation(equation) {

  let arr = equation.split(' ');
  let a = arr[0];
  let b = (arr[3] + arr[4]);
  let c = (arr[7] + arr[8]);

  d = b * b - 4 * a * c;
  // console.log("d", d);

  var solutions = [];
  solutions.push(Math.round((-b + Math.sqrt(d)) / (2 * a)));
  solutions.push(Math.round((-b - Math.sqrt(d)) / (2 * a)));
  // console.log(solutions);

  return solutions.sort((a, b) => a - b);
}

// solveEquation('2 * x^2 - 10 * x + 12');
