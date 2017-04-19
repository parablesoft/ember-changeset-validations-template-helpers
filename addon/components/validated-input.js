import Ember from 'ember';
import layout from '../templates/components/validated-input';
import config from "ember-get-config";

const {set,Component,computed} = Ember;
export default Component.extend({
  layout,
  classNames: ["validated-input-group"],
  classNameBindings: ["isUsingBootstrap:form-group"],
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
      this.get('changeset').validate();
      set(this,"isBlurred",true);
    }
  }

});
