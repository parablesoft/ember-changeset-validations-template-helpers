
# ember-changeset-validations-template-helpers

`ember-changeset-validations-template-helpers` is a template helper that is a companion to [`ember-changeset-validations`](https://github.com/DockYard/ember-changeset-validations). It functions in both inline and block modes, allowing you to simply use an add-on, or wrap another input. It's meant to strictly show validation messages that are produced by `ember-changeset-validations`.

## Installation

* `ember install ember-changeset-validations-template-helpers`

## Usage


### Basic Usage



#### ember-changeset

Setup your `ember-changeset` with validation using the `with` helper. For example:


```hbs
{{! application/template.hbs}}
{{#with (changeset book BookValidations) as |changeset|}}
....
{{/with}}
```

```js
//application/controller.js

import Ember from 'ember';
import BookValidations from '../validations/book';


const { Controller, computed: {alias} } = Ember;

export default Controller.extend({
  BookValidations,
  authors: alias("model.authors"),
});
```

####Simple input replacement

For a simple replacement for `{{input}}`


In the context of the `ember-changeset` usage above:

```hbs
{{validated-input propertyName="author" changeset=changeset label-text="Author"}}<br/>
```


####Advanced Usage

In the context of the `ember-changeset` usage above:


#####Use with [`ember-cli-selectize`](https://github.com/miguelcobain/ember-cli-selectize)


```hbs
{{#validated-input 
propertyName="author" changeset=changeset label-text="Author" as |blurred|}}

{{ember-selectize
    content=authors
    on-blur=blurred
    optionValuePath="content.value"
    optionLabelPath="content.name"
    value=changeset.author
    placeholder="Select an author" }}
{{/validated-input}}

```