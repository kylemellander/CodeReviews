import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addReview(params) {
      var newReview = this.store.createRecord('review', params);
      debugger;
      newReview.save();
      this.transitionTo('index');
    }
  }
});
