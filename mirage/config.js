export default function() {
    this.namespace = '/mapi';

    this.get('/mtasks', function() {
        return { data: [ 
            { id: 1, type: 'task', attributes: { task: 'משימה א.', done: 0 } },
            { id: 2, type: 'task', attributes: { task: 'משימה ב.', done: 0 } },
            { id: 3, type: 'task', attributes: { task: 'משימה ג.', done: 0 } },
            { id: 4, type: 'task', attributes: { task: 'משימה ד', done: 0 } },
            { id: 5, type: 'task', attributes: { task: 'משימה  ו.', done: 0 } },
            { id: 6, type: 'task', attributes: { task: 'משימה  ז', done: 0 } },
        ] };
    });
}


