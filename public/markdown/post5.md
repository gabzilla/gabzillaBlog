<h1>Git Happens..</h1>
<p>To be honest thought I was super clever coming up with this blog post title until my dreams were instantly crushed while listening to the Ruby Rogues podcast. One of the panelist had spoke about a conference talk she given called Git happens. Regardless of this disappointing discovery this week I had the opportunity to learn about GitHub flow and why it's so important. </p>

  <p>First of all there is a difference between Git and GitHub which I was aware of but had never looked into it. Git is a type of VCS or version control system. What makes Git unique is how they store information. A lot of VCS's store information as a list of file changes while Git looks as data as snapshots. Kind of like a collection of polaroid pictures every time there is a change ("commit") to your project. It then links these snapshots together kind of like a photo gallery of gradual changes.


  Here's a little <a href="https://try.github.io/levels/1/challenges/1">tutorial</a> that goes over the basics




  </p>


  <p>GitHub is a Git Repository Hositng Service but it also has its own features such as access control, wikis, basic managment tools, and octocats! The major appeal with GitHub has to do with "forking" - this means you can copy a project from someone and modify it under your own account. Here's the cool part: if you make some awesome changes that you want to share with the creator you can send a "pull-request". The creator can than with a click of a button merge your idea (or "repo") with the original repo.</p>

 <p> This process is called Github flow which is a "branch-based workflow" that helps when teams or projects deploy changes regularly. One of the developers attempted to draw out the process and it ended up looking like a bunch of squiggly lines going nowhere so here's a graph to help clarify.</p>

<p>
<img class = "blogImage" src="images/gitFlow.png" alt>
</p>

  <h3>The first rule of Github Flow is:</h3>

  <blockquote>"There's only one rule: anything in the master branch is always deployable"</blockquote>

  <p>Which means its extra important to create another branch to work off of for features or fixes. This one is typically called the developer branch.</p>

  <p>Once you've created another branch you're free to try out new things without the worry of affected the master. Each change that happens you add a "commit" to create a traceable history of what has been changed and why. This helps out later on when trying to identify and fix bugs.</p>

 <p> If everything looks good the next step would be to open a "pull request". Anyone can see a pull request and it is a great way to receive feedback about the work you've done.</p>

  <p>Once the pull request has been reviewed and the branch passes any tests it can be "deployed" to the master which would merge it with that code base.</p>

  <p>Its a little intimidating at first (at least for me it was) but a great way to get more acquainted with how it all works is to make a Github page! Its a page that can be used for a blog that's hosted directly from your GitHub repository. To get started I utilized [Github pages](https://pages.github.com)
  and this [awesome guide](http://jmcglone.com/guides/github-pages/) by Johnathan Mccglone </p>



