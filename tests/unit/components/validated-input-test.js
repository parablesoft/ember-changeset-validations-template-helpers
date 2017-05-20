import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('validated-input', 'Unit | Component | validated input', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it applies form-group to classNames when isUsingBootstrap is true', function(assert) {
  let component = this.subject();
  component.set("isUsingBootstrap",true);
  this.render();
  assert.equal(this.$().hasClass('form-group'),true);
});


test("it sets auto-focus to false by default", function(assert) {
  let component = this.subject();
  assert.equal(component.get("auto-focus"),false);
});


test('it applies form-control to the input when this is true', function(assert) {
  let component = this.subject();
  component.set("isUsingBootstrap",true);
  this.render();
  assert.equal(this.$().find("input").hasClass('form-control'),true);
});

test("isUsingBootstrap is false, by default",function(assert){
  let component = this.subject();
  assert.equal(component.get("isUsingBootstrap"),false);
});

