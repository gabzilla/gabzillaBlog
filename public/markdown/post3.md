<h1>Fibonacci Two Ways</h1>
  <p>For one of my assignments at school we had to write code utilizing a <em>for loop </em> to print the first twelve Fibonacci numbers. As a fun little exercise for myself I've decided to also solve this equation in Javascript (also with a for loop) since I am learning that as well.</p>






 <h2> Here's the equation for 		  Fibonacci F(k): </h2>

  <blockquote>k > 2 : F(k-1) + F(k-2)
  k <= 2 : 1 </blockquote>


  <h3>The first 12 Fibonacci numbers are:</h3>

<blockquote>  1 1 2 3 5 8 13 21 34 55 89 144 </blockquote>

  ___


  <h3>In Java:</h3>
<sub><sup>note that this only a fragment </sup></sub>

  `int num = 0;`
  `int num2 = 1;`
  `int loop;`
  `int fibonacci;`

  `System.out.print(num2);`

  `for (loop = 1; loop <= 12; loop ++)`

  `{`
  `fibonacci = num + num2;`
  `num = num2;`
  `num2 = fibonacci;`

  `System.out.print(" " + fibonacci);`

  `}`


  ----

  <h3>Now in Javascript: </h3>

  `var fib = [0, 1];`
  `for(var i=fib.length; i<=12; i++) {`
  `fib[i] = fib[i-2] + fib[i-1];`
  `}`
  `console.log(fib);`



