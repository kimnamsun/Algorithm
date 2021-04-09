function getMaxArea(height) {
  const answer = [];
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      answer.push(
        height[(height[i] < height[j] ? i : j)]
        *
        (j - i)
      )
    }
  }
  return Math.max(...answer);
}