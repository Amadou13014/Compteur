var NombreClick = 0 ;

function compteur(){
	NombreClick ++;
	document.getElementById("NombreClick").textContent =NombreClick;

}
    document.getElementById("image").addEventListener("click", compteur );


/*var x = 0;

document.getElementById('image').addEventListener('click', () => {
	x += 1;
	document.getElementById('NombreClick').textContent = x;
})*/