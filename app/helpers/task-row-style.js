import { helper } from '@ember/component/helper';

	export function taskRowStyle(oddRow){
		return ++oddRow;
	}

export default helper(taskRowStyle);
