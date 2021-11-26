let fiboIndex = +prompt("enter index");
function fibo(fiboIndex) {
  return fiboIndex <= 1 ? fiboIndex : fibo(fiboIndex - 1) + fibo(fiboIndex - 2);
}
console.log(fibo(fiboIndex));
