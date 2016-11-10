import Ember from 'ember';


  var Blog = Ember.Object.extend({
    title: null,
    description: null,
    date: null,
    author: "Gabby Jameson"

    // extending the var blog from an ember object values that change are null because when we export the model we will hardcode and return values normally these would be pulled from a db?
  });
export default Ember.Route.extend({

    model() {
      return [

        Blog.create({
          title: "Resources",
          description: "A list of all my favorite resources",
          date: "16 May 2016",
          slug: "post13"
        }),
        Blog.create({
          title: "Building a Go application with Docker-Compose",
          description: "Go with Docker-Compose",
          date: "6 November 2016",
          slug: "post18"
        }),
        Blog.create({
          title: "Slackbot",
          description: "Building a Slackbot with Node.js",
          date: "13 July 2016",
          slug: "post16"
        }),
        Blog.create({
          title: "Internship 2016",
          description: "An overview of my internship in 2016",
          date: "12 May 2016",
          slug: "InternshipAcademy2016"
        }),
        Blog.create({
          title: "Interview Q & A",
          description: "My responses to my mock interview",
          date: "17 May 2016",
          slug: "post14"
        }),
        Blog.create({
          title: "Problem Solving",
          description: "My problem solving techniques for noobs",
          date: "05 May 2016",
          slug: "post11"
        }),
        Blog.create({
          title: "Mock Interview",
          description: "My  mock interview sitdown with a real                  life developer",
          date: "26 April 2016",
          slug: "post10"
        }),
        Blog.create({
          title: "EmberConf 2016",
          description: "My first Ember comference",
          date: "19 April 2016",
          slug: "EmberConf2016"
        }),
        Blog.create({
          title: "Responsive Web Design (RWD)",
          description: "A brief overview of responsive web design",
          date: "26 April 2016",
          slug: "post8"
        }),
        Blog.create({
          title: "Getting Started with Ember-CLI",
          description: "Getting Started with Ember-CLI",
          date: "30 March 2016",
          slug: "post7"
        }),
        Blog.create({
          title: "Google Design",
          description: "A brief overview of google design",
          date: "11 March 2016",
          slug: "post6"
        }),
        Blog.create({
          title: "Git Happens..",
          description: "Learning about Git and Github",
          date: "10 March 2016",
          slug: "post5"
        }),
        Blog.create({
          title: "Project RoadBlock",
          description: "Hitting a snag with fullScreen and Chrome extensions",
          date: "01 March 2016",
          slug: "post4"
        }),
        Blog.create({
          title: "Fibonacci Two Ways",
          description: "Solving fibonacci with java and javascript",
          date: "26 February 2016",
          slug: "post3"
        }),
        Blog.create({
          title: "From tutorials to real life",
          description: "Transition from tutorials to real life",
          date: "25 February 2016",
          slug: "post2"
        }),
        Blog.create({
          title: "My First Google Chrome Extension",
          description: "Tutorial of Chrome Extension",
          date: "23 February 2016",
          slug: "post1"
        })
      ];

    }


});
