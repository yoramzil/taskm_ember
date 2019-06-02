import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('task-row-style', 'helper:task-row-style', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{task-row-style inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});
