(function () {
	'use strict';
	angular
		.module('BookStore')
		.controller('AboutController', AboutController);
	
	function AboutController() {
		var vm = this;
		vm.title = 'About US';
		console.log(vm.title);
		


	}
})();
