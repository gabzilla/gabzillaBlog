import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
    return "/markdown/"+param.blog_id+".md"; 
  }
});
