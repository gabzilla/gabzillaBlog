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
        title: "Getting Started with Ember-CLI",
        description: "this is a blog post",
        date: "March 30, 2016",
        slug: "test"
      }),
      Blog.create({
        title: "Blog TWO",
        description: "this is another blog post",
        date: "April 1, 2015",
        slug: "test2"
      })
    ];

  }

});
