function sliderAdjusted(e){
    // ADJUSTING THE BACKGROUND COLOR
    var alpha = e.value;
	var canvas = document.getElementById("art-canvas");
	canvas.style = "background-color: hsl(0,0%," + alpha + "%);";
}
function ragGenerate(e){
    // THIS FUNCTION DRAWS TO THE CANVAS
    var username = document.getElementById('rag-username').value;
    e.style.display = 'none';
    document.getElementById('rag-username').style.display = 'none';
    document.getElementById('save-button').style.display = 'block';
    document.getElementById('reset-button').style.display = 'block';

    const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	stroke_color = "rgb(" + red +"," + green + "," + blue + ")"; 

    // GETTING ALL THE REQUIRED COORDINATES
	coordinates();
	var canvas = document.getElementById("art-canvas");
	var ctx = canvas.getContext("2d");
    ctx.beginPath();
	ctx.clearRect(0, 0, canvas.width-10, canvas.height-10);
	ctx.lineWidth = 2;
	ctx.strokeStyle = stroke_color;
	ctx.fillStyle = stroke_color;
	ctx.moveTo(a[0],b[0]);
    for (let i = 0; i <= 9; i++){
        ctx.lineTo(a[i]*5.7,b[i]*5.7);
    }
	ctx.lineTo(a[0],b[0]);
	ctx.font = "15px Comic Sans MS";
	ctx.textAlign = "center";
	ctx.fillText(username, canvas.width/2, 345);
	ctx.stroke();
	a = [];
	b = [];
}
function generator(){
    // THIS FUNCTION GENERATES RANDOM 20 NUMBERS
	var numbers = [];
	for (let i = 0; i < 20; i++){
		numbers[i] = Math.floor(Math.random() * 51);
	}
	return numbers;
}
function coordinates(){
    // THIS FUNCTION ASSIGNS THE SHUFFELED NUMBERS TO A AND B COORDINATES
	a = [];
	b = [];
	const i = shuffled_numbers_output();
	a[0] = i[0]; b[0] = i[1];
    for (let j = 1; j <= 15; j++){
        a[j] = i[j*2]; b[j] = i[(j*2)+1];
    }
}
function shuffler(array) {
    // THIS FUNCTION SHUFFLES THE GENERATED 20 NUMBERS
	const shuffled_values = array.sort(() => Math.random() - 0.5);
	return shuffled_values;
}
function generated_numbers_output(){
    // THIS FUNCTION GATHERS THE GENERATED NUMBER
	let generated_numbers = generator();
	return generated_numbers;
}
function shuffled_numbers_output(){
    //THIS FUNCTIONS IS THE CONNECTION BETWEEN THE SHUFFLER, GATHERER AND THE GENERATOR
	const shuffled_value_holder = shuffler(generated_numbers_output());
	return shuffled_value_holder;
}
function ragReset(e){
    var canvas = document.getElementById("art-canvas");
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    e.style.display = 'none';
    document.getElementById('save-button').style.display = 'none';
    document.getElementById('rag-username').style.display = 'block';
    document.getElementById('generate-button').style.display = 'block';
}
function ragSave(){
	var canvas = document.getElementById("art-canvas");
	let canvasUrl = canvas.toDataURL("image/png", 0.5);
	const createEl = document.createElement('a');
	createEl.href = canvasUrl;
	createEl.download = "yours-unique-art";
	createEl.click();
	createEl.remove();
}