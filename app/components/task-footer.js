import Component from '@ember/component';

export default Component.extend({
	done: 0,
	open: 0,
	didRender() {
		this._super(...arguments);
		this.set('done', $('div.check_task_done').length);
		this.set('open', $('div.tasks_check').not('.check_task_done').length);
	}
});
