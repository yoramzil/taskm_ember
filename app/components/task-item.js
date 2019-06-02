import Component from '@ember/component';

export default Component.extend({

	actions: {
	  	task_complete(task){
	  		this.sendAction('taskComplete', task);
	  	},
	  	task_delete(task){
	  		this.sendAction('deleteTask', task);
	  	},
	}
});
