import DS from 'ember-data';

export default DS.Model.extend({
  name: Ds.attr(),
  description: Ds.attr(),
  image: Computed('path','extension',function(){
    return path + "." + extension;
  })
});
