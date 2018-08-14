import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import faker from 'faker';

module('Integration | Component | validated input', function (hooks) {
  setupRenderingTest(hooks);

  test("it renders the block and doesn't render the default input", async function (assert) {
    await render(hbs `{{#validated-input}}template block text{{/validated-input}}`);
    let element = this.$();
    assert.equal(element.text()
      .trim(), "template block text");
  });


  test("it sets focus on the input if auto-focus is set to true", async function (assert) {
    await render(hbs `{{validated-input auto-focus=true}}`);
    return settled()
      .then(() => {
        let element = this.$()
          .find("input:first-child");
        assert.equal(element[0], document.activeElement);
      });
  });


  test("it includes a label when label-text is provided as an attr", async function (assert) {
    let labelText = faker.lorem.word();
    this.set("label-text", labelText);
    await render(hbs `{{validated-input label-text=label-text}}`);
    let element = this.$()
      .find("label");
    assert.equal(element.length, 1);
    assert.equal(element.text()
      .trim(), labelText);
  });

  test("it does not include a label when label-text is not provided", async function (assert) {
    await render(hbs `{{validated-input}}`);
    let element = this.$()
      .find("label");
    assert.equal(element.length, 0);
  });

  test("it has a wrapper class of validated-input-group", async function (assert) {
    await render(hbs `{{validated-input}}`);
    let element = this.$()
      .find("div.validated-input-group");
    assert.equal(element.length, 1);
  });

  test("it can set the class of the input", async function (assert) {
    let className = faker.lorem.word();
    this.set("input-class", className);
    await render(hbs `{{validated-input input-class=input-class}}`);
    let element = this.$()
      .find(`div.validated-input-group input.${className}`);
    assert.equal(element.length, 1);
  });


  test("it renders an input type text by default", async function (assert) {
    await render(hbs `{{validated-input}}`);
    let element = this.$()
      .find("input");
    assert.equal(element.length, 1);
  });


  test("it renders an password input", async function (assert) {
    await render(hbs `{{validated-input type="password"}}`);
    let element = this.$()
      .find("input[type='password']");
    assert.equal(element.length, 1);
  });
});