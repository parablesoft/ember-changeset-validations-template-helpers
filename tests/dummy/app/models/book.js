import DS from "ember-data";

const {attr,Model} = DS;

export default Model.extend({
  title: attr("string"),
  author: attr("string"),
  notes: attr('string'),
});
