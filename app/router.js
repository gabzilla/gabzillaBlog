import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blogs', function() {
    this.route('blog', { path: '/:blog_slug' });
  });

});

export default Router;
