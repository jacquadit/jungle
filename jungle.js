//jungle.html
const canvas = document.getElementById("monCanvas");
const ctx = canvas.getContext('2d');



const jungle = new Image(50,50);
jungle.src ="images/jungle.png";

jungle.onload = function() {
	ctx.drawImage(jungle, 0,0,3600,800);
}

//const voiture = new Image (100,100);
//voiture.src ="images/car.png";

//voiture.onload = function() {
//	ctx.drawImage(voiture, 10,0,50,100);
//}



