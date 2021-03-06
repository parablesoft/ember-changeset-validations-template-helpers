import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import faker from 'faker';

moduleForComponent('validated-input', 'Integration | Component | validated input', {
  integration: true
});

test("it renders the block and doesn't render the default input",function(assert){
  this.render(hbs`{{#validated-input}}template block text{{/validated-input}}`);
  let element = this.$();
  assert.equal(element.text().trim(),"template block text");
});


test("it sets focus on the input if auto-focus is set to true",function(assert){
  this.render(hbs`{{validated-input auto-focus=true}}`);
  return wait()
    .then(() => {
      let element = this.$().find("input:first");
      assert.equal(element[0],document.activeElement);
    });
});


test("it includes a label when label-text is provided as an attr",function(assert){
  let labelText = faker.lorem.word();
  this.set("label-text",labelText);
  this.render(hbs`{{validated-input label-text=label-text}}`);
  let element = this.$().find("label");
  assert.equal(element.length,1);
  assert.equal(element.text().trim(),labelText);
});

test("it does not include a label when label-text is not provided",function(assert){
  this.render(hbs`{{validated-input}}`);
  let element = this.$().find("label");
  assert.equal(element.length,0);
});

test("it has a wrapper class of validated-input-group",function(assert){
  this.render(hbs`{{validated-input}}`);
  let element = this.$().find("div.validated-input-group");
  assert.equal(element.length,1);
});

test("it can set the class of the input",function(assert){
  let className =faker.lorem.word();
  this.set("input-class",className);
  this.render(hbs`{{validated-input input-class=input-class}}`);
  let element = this.$().find(`div.validated-input-group input.${className}`);
  assert.equal(element.length,1);
});


test("it renders an input type text by default",function(assert){
  this.render(hbs`{{validated-input}}`);
  let element = this.$().find("input");
  assert.equal(element.length,1);
});


test("it renders an password input",function(assert){
  this.render(hbs`{{validated-input type="password"}}`);
  let element = this.$().find("input[type='password']");
  assert.equal(element.length,1);
});


