let Mingr = ["mozarella", "tomatoes", "basil"];
let Hingr = ["pineapple", "ham", "cheese"];
let Gingr = ["tomatoes", "cheese", "ham", "viking axe"];
let Qingr = ["cheese 1", "cheese 2", "cheese 3", "cheese 4"];

let Mimg = "img/margarita.jpg";
let Himg = "img/hawaii.jpg";
let Gimg = "img/grandmaslice.jpg";
let Qimg = "img/quattro.png";

//constructing the pizza objects
function PizzaConstructor (name, price, ingredients, img, rating) {
	this.name = name;
	this.price = price;
	this.ingredients = ingredients;
	this.img = img;
	this.rating = rating;
}

let Margarita = new PizzaConstructor("Margarita", 7.80, Mingr, Mimg, 10);
let Hawaii = new PizzaConstructor ("Hawaii", 8.50, Hingr, Himg, 11);
let GrandmaSlice = new PizzaConstructor("GrandmaSlice", 8.70, Gingr, Gimg, 9);
let QuattroFormaggi = new PizzaConstructor("QuattroFormaggi", 9.10, Qingr, Qimg, 7);

console.log(Margarita, Hawaii, GrandmaSlice, QuattroFormaggi);
//pushing them into arrays
var PizzasArray = [Margarita, Hawaii, GrandmaSlice, QuattroFormaggi];
//showing them on the page

for (var i of PizzasArray) {

	$("#javapizzas").append(`
		<div class="col-5 d-flex bg-dark p-3 text-center mb-3">
			<img width="200" src="${i.img}" alt="pizzaimg">
			<div>
				<p>${i.name}</p>
				<p>${i.price}</p>
				<p class="pl-3">${i.ingredients}</p>
				<span class="pl-2">Rating: <button type=""><i class="fa fa-thumbs-up"></i></button><input class="likeNum" value="${i.rating}"><button type=""><i class="fa fa-thumbs-down"></i></button></span>
			</div>
		</div>
	`);

	$('#javapizzas > div:nth-child(even)').addClass("offset-lg-2 offset-md-2");
}

//ratings+like/dislike
//ccomment form
//data type for each value and arr
