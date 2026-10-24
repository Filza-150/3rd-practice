let user = +prompt("Enter any number to find it's table");

for (let i = 1; i <= 10; i++) {
  if (user > 0) {
    console.log(`${user} X ${i} = ${user * i}`);
  } else {
    console.log("Give me a greater number");
    break;
  }
}
