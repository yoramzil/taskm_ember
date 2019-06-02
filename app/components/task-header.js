import Component from '@ember/component';

export default Component.extend({

	actions: {
	  	open_tasks_add(event){
	  		$('#input_task').show();
	  	}
	}

});
