import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	namespace: 'api',
	host: 'http://tasks',
	headers: {
		// 'X-Token-Auth': 'b809vCwvtawRbsG0BmP1tWgnlXQypSKf',
		// 'X-CSRF-Token': 'b809vCwvtawRbsG0BmP1tWgnlXQypSKf'
	}
});

