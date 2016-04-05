<h1>My first Google Chrome Extension</h1>
 <p>Week one of my internship is complete and was the complete opposite of what I had expected. Due to some unexpected circumstances the developers didn't have a moment to spare so I spent my time there figuring out how to utilize google to research on how I could possibly create a chrome extension that would grab a specific URL and display it to fullscreen automatically. </p>

 <h3> So what is a Google Chrome Extension? </h3>
 <P> It is essentially a small software program that is used to increase functionality in the chrome browser. It mostly uses HTML, CSS, and Javascript and has very minimal user interface. To start out I decided to reference http://www.developer.chrome.com/extensions and create a "Hello World".
  I scanned their documentation and immediately ran into another unfamiliar term. To start building an extension you have to create a manifest.json file. JSON stands for Javascript Object Notation and is essentially a simple syntax for structuring data which is used to transmit data between a server and a web application (http://www.json.org/). It basically just tells Chrome about the application and how to run it. </p>

  <h3> Step 1: Start with a manifest.json file </h3>
  <p> The setup for these extensions are pretty straight forward the complicated part for me will be setting up and understanding the Javascript involved. For this week however I decided to only concern myself with getting a functioning "Hello World" up and going. </p>

  <p> Now that I had puzzled my way through what a manifest.json file entails I snagged the sample code provided and made sure to note that the "manifest version" MUST be version 2. </p>

  <h3> Step 2: Create a background script </h3>
  <p>The next step was to create a small script for the extension. For this tutorial the script provided will open a window thats set to a specific width and height. However this background script can be used for a variety of things such as "...additional listeners, windows, post messages, and launch data, all of which are used by the event page to manage the app". So hopefully in this background script later on I'll be able to create something to launch my URL. </p>

  <h3> Step 3: Add some HTML! </h3>
  <p>This was the easy part just create and save a little window.html file to show my hello world. </p>

  <h3> Step 4: Add some icons </h3>
  <p> Sounds easy right? This caused me a small little pain point because I failed to save my image under the proper folder. It was a silly mistake but a frustrating one. Once the icon referenced the right path everything was good to go. </p>

 <h3> Step 5: Time to launch! </h3>
  <p> The moment of truth! Once everything was created I headed over to chrome://extensions made sure I had Developer Mode checked off, clicked the "Load unpacked extension button", and made sure my folders path was correct. I opened a new tab and success! </p>


  <p>My icon of choice...a cat in a doughnut:
  <img src="images/Donut_Pusheen_small.png" alt>
   </p>

  <em> This week I was mostly left to my own devices but now after going through Google's getting started tutorial I have started the process of going through their documentation to start puzzling together what I might possibly need to make a more custom chrome extension. Next week I will have the opportunity to talk more with my developers about what specifically this extension should do but until then I will continue to work through a few more examples to better understand the different components of Chrome Platform API's and keep learning Javascript fundamentals. </em>