import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  username: DS.attr(),
  uid: DS.attr(),
  type: DS.attr()
});
