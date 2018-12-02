import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    ajax: service(),
    model(params){
      let requestUrl = 'https://gateway.marvel.com:443/v1/public/characters/'
      + params.id_personaje + '?apikey=f4a596e044cf369fd239105a7df836e9';
      return this.get('ajax').request(requestUrl);
    }
});
