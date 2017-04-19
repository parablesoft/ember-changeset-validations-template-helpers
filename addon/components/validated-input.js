import Ember from 'ember';
import layout from '../templates/components/validated-input';
import config from "ember-get-config";

const {Component,computed} = Ember;
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
    if(config["validations-template-helpers"] === undefined || config["validations-template-helpers"]["is-using-bootstrap"] === undefined){
      return false;
    }
    let setting = config["validations-template-helpers"]["is-using-bootstrap"];
    return setting;
  }),

});
