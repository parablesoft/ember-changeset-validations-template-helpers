import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | validated input');


test("shows no validation messages by default",function(assert){
  visit('/standard');
  andThen(function(){
    assert.equal(find(".error-message").length,0);
  });
});

test('shows validation message for author after blurring it', function(assert) {
  visit('/standard');
  triggerEvent('input:first', 'blur')
  andThen(function() {
    let errorMessage = find("input:first").siblings(".error-message");
    let errorContainer = find(".validated-input-group-error")
    assert.equal(errorMessage.length,1);
    assert.equal(errorContainer.length,1);

  });
});

test("allows another component/addon to be passed in instead of default input",function(assert){
  visit("/selectize_example");
  triggerEvent('input:first', 'blur')
  
  andThen(function() {
    let errorMessage = find("input:first").siblings(".error-message");
    assert.equal(errorMessage.length,1);
  });
  
});
