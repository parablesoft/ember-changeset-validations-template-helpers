import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import faker from 'faker';

moduleForComponent('validated-input', 'Integration | Component | validated input', {
  integration: true
});

// test('it renders', function(assert) {

//   // Set any properties with this.set('myProperty', 'value');
//   // Handle any actions with this.on('myAction', function(val) { ... });

//   this.render(hbs`{{validated-input}}`);

//   assert.equal(this.$().text().trim(), '');

//   // Template block usage:
//   this.render(hbs`
// 	      {{#validated-input}}
// 	      template block text
// 	      {{/validated-input}}
// 	      `);

// 	      assert.equal(this.$().text().trim(), 'template block text');
// });

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


// test("it includes an input",function(assert){
//   let element = this.$().find("element");
//   assert.equal(element.length,1);
// });
