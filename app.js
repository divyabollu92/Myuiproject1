(function (){
var app = angular.module('store', [ ]);

app.controller('StoreController', function()
{
	this.products = gems;
});

var gems = [
{
	name : 'Dodecahedron',
	price: 2.95,
	description:'...',
	canPurchase : true ,
	soldOut : true ,
},
{ 
	name :"kohinoor" ,
	price :200 ,
	description: 'it is a diamond' ,
	canPurchase : true ,
	soldOut :false ,
}];
})();