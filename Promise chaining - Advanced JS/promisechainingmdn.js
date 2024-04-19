Promise.resolve("foo")
  .then(function p1(string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        string += "bar";
        resolve(string);
      }, 1000);
    });
  })

  .then(function p2(string) {
    setTimeout(() => {
      string += "baz";
      console.log(string);
    }, 5000);
    return string;
  })

  .then(function p3(string) {
    console.log(
      "This is the 2nd level of code executed for the string being returned from last .then function"
    );
    console.log(string);
  });
