<h1>My first Internship!</h1>
<p>As I wind down to the last days of my internship I wanted to take a moment and look back on 
what I have tried to accomplish. Originally the goal was to create a chrome extension that would allow the user 
to type in a specific url and launch a custom browser into full screen. In concept this seemed pretty easy but in reality I ran into a few
issues. There were a few limitations with the chrome extension involving security concerns that would not allow the functionality 
I wanted. I eventually ended up reevaluating the project and came up with a new solution (that worked!). Instead of a chrome extension
I built a normal webpage which upon deployment could be set as the default home page to the chromebit device that was going to be used. 
This way when the customer plugged in the chromebit it would pop up with an admin screen and allow them to type in the unique address to pull up 
the photo gallery stream on tv during an event. </p>

<p>Here's what the original looked like: </p>
<img class = "blogImage" src="images/orgin.png" alt>
<p>I used a library that already added bootstrap to a chrome extension but functionally it doesn't actually do anything.</p>

<p>For my new iteration I made a very basic HTML page with a very minimal amount of styling and a dash of javascript.</p>
<p>
  First I created my HTML files and linked in my seperate CSS and JavaScript pages.
  <img class = "blogImage" src="images/one.png" alt>
</p>
<p>
  Next I created a place for my image and wrangled it to be centered.
  <img class = "blogImage" src="images/two.png" alt>
</p>
<p>Now comes the meat! Several things are happening here. I am referencing a function I wrote called goTo() which will
direct the user to the url. I also created a imput box that takes in text for typing in the url. I also created a 
submit button with an event listener which will launch a full screen view of the browser once clicked.
<img class = "blogImage" src="images/two.png" alt>
</p>
<p>For my CSS file I did very minimal styling on button and text colors since this admin page is more for functionality not style.
<img class = "blogImage" src="images/six.png" alt>
</p>
<p>For my goTo() funtion I am essentially reading in the form input for the url then launching a new window for it 
  and forcing it to the front focus of the user's screen.</p>
<img class = "blogImage" src="images/four.png" alt>
<p>The next part got a little crazy. I was having trouble with implementing kiosk mode so I used the FullScreen API and 
basically tested for every possible scenario to allow for a request to implement full screen. The downfalls of my approach are pretty obvious 
the code is extremely cluttered and this particular implementation is not supported across different browsers but since 
this page will only be ran on chromebits it wasn't a major limitation.
  <img class = "blogImage" src="images/four.png" alt>
</p>

<p>Here is the final product:</p>
<img class = "blogImage" src="images/finalproduct.png" alt>
<p>  I learned how to reevaluate ideas and revamp them quickly in order to get a project done. 
Overall I had a great experience with my first internship I loved getting a first hand look at what its like to break out into the real 
world of programming. I know I have a long ways to go but I am excited to keep learning and trying new things. This summer I have the opportunity 
to attend DockerCon thanks to Girls Develop It! Until then I will continue to keep updating this blog as I move one to explore new things and start new projects 
including getting my raspberry pi summer project started!</p>


