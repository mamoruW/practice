(function() {
	'use strict';

	document.addEventListener('DOMContentLoaded',function(){
		// two way data binding (to UI)
		var vm = new Vue({
			el: '#app',
			data: {
				// name: 'mamoru'
				todos: [
					'task 1',
					'task 2',
					'task 3'
				]
			}
		});
	});

})();