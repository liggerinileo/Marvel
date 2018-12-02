import Route from '@ember/routing/route';
import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return ['Creada el 5 de noviembre','Clase Ember','Info innecesaria'];
  }
});
