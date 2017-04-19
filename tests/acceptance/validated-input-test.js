import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | validated input');


test("shows no validation messages by default",function(assert){
  visit('/');
  andThen(function(){
    assert.equal(find(".error-message").length,0);
  });
});
test('shows validation message for author after blurring it', function(assert) {
  visit('/');
  triggerEvent('input:first', 'blur')
  andThen(function() {
    let errorMessage = find("input:first").siblings(".error-message");
    assert.equal(errorMessage.length,1);
  });
});
