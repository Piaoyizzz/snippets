function foo() {
  console.log(foo1);
  function foo1() {
    console.log(1);
  }
  var foo1 = 3;
  function foo1() {
    console.log(2);
  }
}
foo();
