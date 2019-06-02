import Component from '@ember/component';

export default Component.extend({
	store: Ember.inject.service('store'),
	actions: {
	  	close_tasks_add(event){
	  		$('#input_task').hide();
	  	},

	  	task_add_approve(event){
	  		let taskValue = this.get('value');
	  		this.sendAction('createTask', taskValue);
	  		this.set('value','');
	  		$('#input_task').hide();
	  	}
	}
});
