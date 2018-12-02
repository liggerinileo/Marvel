import Route from '@ember/routing/route';

export default Route.extend({

  model(){
    return  {
                name : 'Eduardo Pereyra Yraola',
                info : 'Creador de la pagina'
            };
  }
});
