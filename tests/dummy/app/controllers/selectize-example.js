import { A } from '@ember/array';
import Controller from '@ember/controller';
import BookValidations from "../validations/book";

export default Controller.extend({
  BookValidations,
  authors: A([{
      name: "John",
      value: "john"
    },
    {
      name: "Paul",
      value: "paul"
    }
  ]),

  actions: {
    foo() {
      alert("gone");
    }
  }

});