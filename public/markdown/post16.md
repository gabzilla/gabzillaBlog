# I made a slack bot!

<img class = "blogImage" src="images/slackbot.jpg" alt>

<p> After my initial thought of making a slackbot with go and failing quite miserably I was deteremined to just get it done somehow. So I scoured the internet and found a great little <a href="https://www.samdlc.com/a-super-simple-slack-bot-example/" target="_blank">tutorial</a> to make a slackbot with node.js. I still plan on trying to recreate this project in go but I still trying to learn language better and currently some of the concepts are still a little confusing. Regardless I learned something new out of this process. Inside of the tutorial there was a small caveat. The Slack API Token was being stored as a string in this example. Which isn't a great thing to have if you commit your code to a SCM (like git). So in order to build on this example I decided to research how to use a environment variable in node to store this local variable so I did not run the risk of exposing my API key to Github. During my research I found a little package called dotenv which loads variables from a .env file. In my .env file I am able to save my Slack API Token and then by creating a gitignore I am able to tell Github to not commit that particular file.
To utilize this I opened up my index.js and added </p>

> `var token = process.env.API_TOKEN;`  

<p>to reference my token!
While I wasn't able to complete my little goBot project (yet!) I learned a couple of useful things that I am sure will come up again in the future. Feel free to check out my version of echobot on <a href="https://github.com/gabzilla/echobot" target="_blank">github</a> and check out the links below. These are all the things I referenced to build my bot. The next step for my project will be to throw this bot into a docker container and host it on digitalOcean or AWS! </p>

#### References:
<li><a href="https://www.samdlc.com/a-super-simple-slack-bot-example/" target="_blank">Tutorial</a></li>
<li><a href="https://api.slack.com/bot-users" target="_blank">Slack API</a></li>
<li><a href="https://www.npmjs.com/package/dotenv" target="_blank">Dotenv</a></li>
<li><a href="https://git-scm.com/docs/gitignore" target="_blank">Gitignore</a></li>
