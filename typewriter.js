const sentence = "hello there from lighthouse labs";
let time = 100;
for (const char of sentence) {
 setTimeout(() => {
   process.stdout.write(char);
 }, time);
 time += 100;// <= 1s delay to make it noticeable. Can dial it down later.
}
