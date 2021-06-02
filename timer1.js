const input = process.argv.slice(2).filter(alarm => !isNaN(alarm)).filter(alarm => alarm >= 0);

input.forEach((alarm) => {
  setTimeout(() => {
  process.stdout.write('.');
}, alarm * 1000);
});