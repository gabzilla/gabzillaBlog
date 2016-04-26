<h1>Getting Started with Ember CLI</h1>
<p> In honor of EmberConf 2016 I decided to take a closer look at the basics of Ember.js! As a "newbie" to the programming world I have found that in learning a new language repetition is the key but as I slowly move away to bridge the gap from learning to real world application it has become abundantly clear that in order to maintain productivity it is essential to not keep reinventing the wheel. This is where frameworks come in and since I had the opportunity this week to work on a personal project I decided to rebuild my blog using Ember. </p>

  <p>Ember is an opinionated framework that focuses on not wasting time on trivial choices and on being built for productivity. It was originally forked from a project called SproutCore 2.0 which is one of the original javascript MVC libraries, it also drew inspiration from the language Ruby and its most popular framework Ruby on Rails which boasts philosophies such as- convention over configuration and KISS (keep it simple stupid). The idea of borrowing concepts from other libraries is nothing new, they took what they believed to be the strongest core concepts and set out to create an ambitious javascript framework that could handle anything with ease. </p>

 <p> Getting started is pretty easy - the learning curve for me is still dissecting the syntax and understanding their methodologies. To kick off the week I thought it would be fun to make a quick tutorial on getting started. Part two will be my version of a "todo widget" where I will break down elements of a simple ember application. </p>

 <p> The essential part of starting a new ember app begins with Ember CLI which stands for Ember Command Line Interface. It is a tool that creates a conventional project structure and is meant to promote a productive development environment by offering features such as template compilation, dependency management, testing tools, and live browser reloading.</p>

 <blockquote> Getting up and running is pretty easy but it's helpful to install Ember CLI </blockquote>

 <p> To get started first we need node.js and npm! In order to install these check out node.js's website if you don't already have npm up and running on your machine </p>

  <p>For Mac OS X users using Homebrew install by simply running </p>

  ```$brew install node```

 <p>Then check to see if npm is there:</p>

 ``` $npm - v```

  <p>After that installing Ember CLI is easy : </p>

 ``` $npm install -g ember-cli```

 <p> Or if you're intrested in a specific version (for example: 2.2.0-beta.6):</p>

 ``` $npm install -g ember-cli@2.2.0-beta.6```

 <p> OK! Finally time to double check to make sure the ember command is ready for us. </p>

 ``` $ember -v```

 ``` version: 2.2.0-beta.6```

 ``` node: 0.12.4```

 ``` npm: 2.14.10```

 ``` os: darwin x64```

 <h4> Now you're ready to start a project! </h4>

 <p> Simply use the command:</p>

  `$ember new project-example`

 <p> Then let Ember CLI serve our app: </p>

  ```$cd project-example```

 ``` $ember serve```

 <p> After running this command open up your browser to localhost:4200 and you should see the startup page!

  This is the basic start to a new Ember project! Ready to build an example?! Next post we will be creating a simple to-do widget </p>