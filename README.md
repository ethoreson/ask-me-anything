# askmeanything

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Installation

* `git clone <repository-url>` this repository
* `cd askmeanything`
* `npm install`

## Planning

1. Configuration/dependencies:
* Bower - manages front-end plugins.
* Vendor - directory where front-end dependencies not managed by Bower are.
* Bootstrap - Adds stylings
* Everything listed in bower.json - preloaded when app runs
* HTML - Instrumental in webpage setup

2. Specs
  * Build question model
  * Save question component
  * Update question component
  * Save data with Firebase
  * Build answer model
  * Build one-to-many relationship between question and answers
  * Save answer component
  * Refactor

3. Integration
  * index.hbs - Contains <ul> of questions & author. Option to add or edit question.
  * quesiton.hbs - Lists question's title, author and notes, then available answer and option to add answer.
  * Answer tile: answer author and answer explanation
  * new answer: Form for new answer
  * new question: Form for new question
  * update question: Change an existing question

4. UI
  * Bootstrap

5. Polish
  * Refactor index, no longer includes all answers. Update and notes now listed on individual question's page.
  * Update README


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
