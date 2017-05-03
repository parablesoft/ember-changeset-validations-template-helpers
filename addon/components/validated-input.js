import Ember from 'ember';
import layout from '../templates/components/validated-input';
import config from "ember-get-config";

const {set,Component,computed} = Ember;
const {and} = computed;

export default Component.extend({
  layout,
  classNames: ["validated-input-group"],
  classNameBindings: ["isUsingBootstrap:form-group","isInvalid:validated-input-group-error"],
  isInvalid: and("isValidationFailing","isBlurred"),
  isValidationFailing: computed("changeset.error",function(){
    if(this.get("changeset.error") === undefined){
      return false;
    }
    return Object.keys(this.get("changeset.error")).includes(this.get("propertyName"))
  }),
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
