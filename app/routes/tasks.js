import Route from '@ember/routing/route';

export default Route.extend({
		model() {
			let total = null;
			let completed = null;
			let open = null;

			// this.get('store').query('task', {
			//   filter: {
			//     done: 1
			//   }
			// }).then(function(recs) {
			//   completed = recs;
			// }).then(
			// 	this.get('store').query('task', {
			// 	  filter: {
			// 	    done: 0
			// 	  }
			// })).then(function(recs) {
			//   open = recs;
			// }).then(
			// 	total = this.store.findAll('task')
			// ).then(
			// 	return {
			// 		total: total,
			// 		completed: completed,
			// 		open: open
			// 	}
			// );

			total = this.store.findAll('task');

			return {
				total: total,
				completed: completed,
				open: open
			};
		},
		actions: {
	    	deleteTask(task){
				task.destroyRecord();
				setTimeout(()=>{
					location.reload();
				},1000);
		    },
		    createTask(taskvalue){
		    	let newtask = this.store.createRecord('task', {
				  task: taskvalue,
				  done: false
				});
				newtask.save();
				setTimeout(()=>{
					location.reload();
				},1000);
		    },
		    taskComplete(task){
				this.store.findRecord('task', task.get('id')).then(function(task) {
				  	let stat = task.get('done');
				  	task.set('done', !stat);
				  	task.save();
				  	setTimeout(()=>{
						location.reload();
					},1000);
				});
		    }
	  }
});

