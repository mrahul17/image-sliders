var imagearray1 = ["images/litsection.jpg","images/busstand.jpg"]// array to store image references
var len1 = imagearray1.length;
var i =0;//increment counter

window.onload = function(){
	setInterval(function(){
	document.getElementById('bench').setAttribute('src',imagearray1[i]);
	i = (i+1)%len1;
	},2500); 

}