let modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-img");
let imgList = document.getElementsByClassName("inner-img");

for (let i = 0; i < imgList.length; i++) {
	console.log(imgList[i]);
}
for (let i = 0; i < imgList.length; i++) {
	let galleryImg = imgList[i];
	galleryImg.addEventListener("click", (event) => {
		modalImg.src = galleryImg.src;
		modal.style.display = "block";
	});

	let closeButton = document.getElementsByClassName("close")[0];
	closeButton.onclick = function () {
		modal.style.display = "none";
	};
}
