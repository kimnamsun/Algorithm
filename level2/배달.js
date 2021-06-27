let limit = 0;
let distance = [];
let visited = [];
let result = 0;

const solution = (N, road, K) => {
  limit = K;
  visited = Array(N + 1).fill(false);
  distance = Array(N + 1).fill(10001 * N);
  distance[1] = 0;

  let pq = [];
  pq.push(1);

  dijkstra(1, road, pq)
  return distance.filter((item) => { return item <= limit }).length;
}

const dijkstra = (i, road, pq) => {
  while (pq.length) {
    i = pq.splice(findMin(pq), 1).pop();
    if (visited[i]) {
      continue;
    }
    visited[i] = true;

    let found = road.filter(item => { return item[0] === i || item[1] === i });
    found.sort((a, b) => a[2] - b[2]);

    for (let item of found) {
      let src = i;
      let dst = item[0] === i ? item[1] : item[0];

      if (distance[dst] > distance[src] + item[2]) {
        distance[dst] = distance[src] + item[2]
      }
      if (!visited[dst] && pq.indexOf(dst) === -1) {
        pq.push(dst)
      }
    }
  }
}

const findMin = arr => {
  let min = distance[arr[0]];
  let idx = 0;

  for (let i in arr) {
    if (min > distance[arr[i]]) {
      min = distance[arr[i]];
      idx = i;
    }
  }
  return idx;
}