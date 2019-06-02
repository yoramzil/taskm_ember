import Component from '@ember/component';

export default Component.extend({
	odd: 0,
	actions:{
		deleteTask(task){
			this.sendAction('deleteTask', task);
		},
		taskComplete(task){
			this.sendAction('taskComplete', task);
		}
	}
});
