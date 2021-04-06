const sentence = "hello there from lighthouse labs";

let current = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
     }, current);
  current += 50;
};

setTimeout(() => {
  process.stdout.write('\n');
   }, current);