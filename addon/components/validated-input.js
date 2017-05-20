import Ember from 'ember';
import layout from '../templates/components/validated-input';
import config from "ember-get-config";

const {get,set,Component,computed} = Ember;
const {and} = computed;

export default Component.extend({
  layout,
  classNames: ["validated-input-group"],
  classNameBindings: ["isUsingBootstrap:form-group","isInvalid:validated-input-group-error"],
  "auto-focus": false,
  "property-name": Ember.computed.alias("propertyName"),
  isInvalid: and("isValidationFailing","isBlurred"),
  isValidationFailing: computed("changeset.error",function(){
    let changesetError = this.get("changeset.error");
    let propertyName = this.get("property-name");
    
    if(changesetError === undefined) {
      return false;
    }

    let errorKeys = Object.keys(changesetError);

    if(errorKeys === undefined){
      return false;
    }
    return errorKeys.indexOf(propertyName) != -1;
  }),
  didInsertElement(){
    this._super(...arguments);
    let autoFocus = get(this,"auto-focus");
    if(autoFocus){
      Ember.run.scheduleOnce('afterRender', this, '_autofocus');
    }
  },
  _autofocus(){
    this.$("input:first").focus();
  },
  "input-classes": computed("isUsingBootstrap","input-class",function(){
    let properties = this.getProperties("isUsingBootstrap","input-class");
    let result = [];
    result.push(properties["input-class"]);
    if(properties.isUsingBootstrap){
      result.push("form-control");
    }
    return result.join(" ");
  }),
  isUsingBootstrap: computed(function(){
    let settings = config["validations-template-helpers"];
    if(settings === undefined || settings["is-using-bootstrap"] === undefined){
      return false;
    }
    let setting = config["validations-template-helpers"]["is-using-bootstrap"];
    return setting;
  }),
  actions:{
    blurred(){
      this.get('changeset').validate().then(()=>{
	set(this,"isBlurred",true);
      });
    }
  }

});
