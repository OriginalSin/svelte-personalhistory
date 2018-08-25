import App from './App.html';

const app = new App({
	target: document.getElementById('test'),
	// methods: {
		setCheckedItems: (checked) => {
			console.log('checked ____ onstate', checked);
		// }
	},

	data: {
		// checked: {},
		// sortType: 'desc',
		sortKey: 'gmx_id',
		pagesize: 5
	}
});

export default app;