const complexNumberMultiply = (a, b) => {
  const splitA = a.slice(0, -1).split('+');
  const splitB = b.slice(0, -1).split('+');
  const a0 = splitA[0];
  const a1 = splitA[1];
  const b0 = splitB[0];
  const b1 = splitB[1];
  return `${(a0 * b0) - (a1 * b1)}+${(a0 * b1) + (a1 * b0)}i`;
}