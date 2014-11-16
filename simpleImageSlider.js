imagearray1 = [] //array to store references of the different images
var i =0;// update counter

window.onload = function(){
	setTimeout(function(){
	document.getElementById('bench').setAttribute('src',imagearray1[i]); //copy paste this line for any numner of sliders within sampage, change the id and imagearray in each

	},2000); //set your time
}