import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Unit | Component | validated input', function (hooks) {
  setupRenderingTest(hooks);

  test('it applies form-group to classNames when isUsingBootstrap is true', async function (assert) {

    await this.render(hbs `
      {{#validated-input
        isUsingBootstrap=true
      }}
        test
      {{/validated-input}}
    `);

    assert.equal(this.$('div')
      .hasClass('form-group'), true);
  });


  test("it sets auto-focus to false by default", function (assert) {
    let component = this.owner.factoryFor('component:validated-input')
      .create();
    assert.equal(component.get("auto-focus"), false);
  });


  test('it applies form-control to the input when this is true', async function (assert) {

    await this.render(hbs `
      {{validated-input
        isUsingBootstrap=true
      }}
    `);

    assert.equal(this.$("input")
      .hasClass('form-control'), true);
  });

  test("isUsingBootstrap is false, by default", function (assert) {
    let component = this.owner.factoryFor('component:validated-input')
      .create();
    assert.equal(component.get("isUsingBootstrap"), false);
  });
});