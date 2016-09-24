(function () {
	'use strict';
	angular
		.module('BookStore')
		.controller('BookController', BookController);
	BookController.$inject = ['DataService','$scope'];
	function BookController(DataService,$scope) {
		var vm = this;
		vm.title = 'Bookstore Home';
		console.log(vm.title);
		vm.image_path = "app/images/";
		vm.activeBook = [];
		vm.changeActiveBook = changeActiveBook;

		function changeActiveBook(index) {
			// the active book object
            vm.activeBook = index;
		}
		vm.cartItemCount = 0;
		vm.total = 0;
		vm.cartItem = false;
		vm.cart = [];
		vm.addCart = function (index) {
			vm.cartItem = true;
			vm.cartTitle ='This item is in your cart.';
			vm.total += index.price;
			vm.cartItemCount++;
			
				vm.cart.push(angular.extend( index));
			
			
			
		}
		vm.cartBook = [];
		vm.buyBook = function(index){
			vm.bookName = index.title;
			vm.cartBook.push(index);
		}
		$scope.$watch(function () {
			return vm.cartItemCount
		}, function (newVal, oldVal) {
			
		});
	
		vm.book_details = DataService.booksData;

		//	vm.reviewForm =[];
		vm.submitForm = function (index) {
			// the active book object
			
            vm.activeBook.push(vm.reviews);

		}



	}
})();
