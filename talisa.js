var image_array = [
   "images/wave1.jpg", 
   "images/wave2.jpg", 
   "images/wave3.jpg",
   "images/wave4.jpg",
   "images/wave5.jpg",
   "images/wave6.jpg",
   "images/wave7.jpg",
];

var index=0
function gif() {
	var image=document.getElementById("slider");
	index++;
	if(index>=image_array.length){
		index=0
	}
	image.src= image_array[index];
}

setInterval(gif, 200);