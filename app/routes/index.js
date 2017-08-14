import Ember from 'ember';

var questions = [{
  id: 1,
  title: "How do I clone a git project?",
  author: "Test Author A",
  notes: "I have a project on Github, I want it on my remote device"
}, {
  id: 2,
  title: "How does Ember work?",
  author: "Test Author B",
  notes: "Sorry I can't be more specific"
}];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  }
});
