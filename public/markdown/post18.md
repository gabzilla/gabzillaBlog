#Creating a Go Application with Docker


<p>Recently I stumbled upon a tutorial that helped walk through developing a Go application with Docker Compose and decided to try it out but hit a few pain points during the process. Mostly it had to do with Docker. It is a technology that I'm not totally familiar with therefore troubleshooting was problematic. I've also just recently started to dive in a little deeper with bash and there was some prior knowledge (Like making a file executable) that I was unaware of but ended up needing to do to make this tutorial work. So I decided to do a rewrite of this tutorial I found in order to account for the pain points I had experienced when trying to complete this project. The big lesson I learned is that even if a tutorial seems like it's a good resource sometimes the author assumes that the skill level of the developer who is using it has a certain amount of prior knowledge and will sometimes leave out steps that may seem obvious to them but not to everyone. I was able to overcome this hurdle by referencing documentation for both go and docker which helped me figure out some of the details that were left out.</p>

# Everything I used
<ul>
<li>Bash</li>
<li>Git</li>
<li>Docker</li>
<li>Go</li>
</ul>

# What I've learned from making a project with docker and go
<p>Documentation is KEY! Tutorial's are a great diving board for ideas and sometimes a good guide but when in doubt refer back to the original docs. </p>

# The purpose of doing this project
The purpose in creating a go project with docker is to (hopefully) create a better workflow and ease the pain of making sure GOPATH is correct. The great thing about this project is that you can use the barebones to get a basic go app up and running in a matter of minutes.

#Benefit of developing a go application in docker:
- Creates an isolated environment, allows for a clean GOPATH, and an easy way to change the version of GO. In addition the initial setup of this project can (and in my case) will be used for other projects! It helps solve the biggest problem I've faced in programming: Configuration.

#About that tutorial...
<p>I have a laundry list of tutorials, talks, and projects that are all currently half done but I'm also in school full time juggling 15 units! So while I have the basic outline of the tutorial done its a ton of work to articulate my thoughts and communicate the step by step process of getting this application set up. I'll be pushing the project to github so feel free to take a gander at my repository! </p>  
