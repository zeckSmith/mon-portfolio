

let dayNow = Date.now()

const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-Fr", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: 'numeric',
        minute: "numeric",
        second: "numeric"
    })
    return newDate;
}

dateFormater()
// console.log(dateFormater(dayNow));
// This example takes 2 seconds to run
const start = Date.now();

console.log(start);
console.log('starting timer...');
// Expected output: "starting timer..."

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  // Expected output: "seconds elapsed = 2"
}, 2000);
