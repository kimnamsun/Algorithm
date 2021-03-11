process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(' ');
  const a = Number(n[0]), b = Number(n[1]);
  let star = '';
  
  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
});

//방법2
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(' ');
  const a = Number(n[0]), b = Number(n[1]);
  const star = ('*'.repeat(a) + '\n').repeat(b);
  console.log(star);
});