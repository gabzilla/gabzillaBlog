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
