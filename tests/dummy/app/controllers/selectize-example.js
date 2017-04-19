import Ember from "ember";
import BookValidations from "../validations/book";

const {Controller} = Ember;
export default Controller.extend({
  BookValidations,
  authors: Ember.A([{
    name: "John",
    value: "john"
  },
  {
    name: "Paul",
    value: "paul"
  }]),
  actions:{
    foo(){
     alert("gone"); 
    }
  }
  
});
