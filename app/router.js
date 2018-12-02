import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('search');
  this.route('search-results');
  this.route('personaje', {path:'/personaje/:id_personaje'})
});

export default Router;
