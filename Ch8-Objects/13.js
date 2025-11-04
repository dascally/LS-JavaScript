function foo(bar) {
  console.log(bar());
}

foo(() => 'Welcome');
foo(() => 3.1415);
foo(() => [1, 2, 3]);
