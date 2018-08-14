import { blur, visit, click } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | validated input', function (hooks) {
  setupApplicationTest(hooks);


  test("shows no validation messages by default", async function (assert) {
    await visit('/standard');
    assert.dom(".error-message")
      .doesNotExist();
  });

  test('shows validation message for author after blurring it', async function (assert) {
    await visit('/standard');
    await blur('input');
    assert.dom('.error-message')
      .hasText('Author can\'t be blank')
  });

  test("allows another component/addon to be passed in instead of default input", async function (assert) {
    await visit("/selectize_example");
    assert.dom('.selectize-input input')
      .exists()
    await click('.selectize-input input')
    await blur('.selectize-input input')
    assert.dom('.error-message')
      .hasText('Author can\'t be blank')
  });
});