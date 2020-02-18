var Mingr = ["mozarella", "tomatoes", "basil"];
var Hingr = ["pineapple", "ham", "cheese"];
var Gingr = ["tomatoes", "cheese", "ham", "viking axe"];
var Qingr = ["cheese 1", "cheese 2", "cheese 3", "cheese 4"];
var Mimg = "img/margarita.jpg";
var Himg = "img/hawaii.jpg";
var Gimg = "img/grandmaslice.jpg";
var Qimg = "img/quattro.png";
//constructing the pizza objects
function PizzaConstructor(name, price, ingredients, img, rating) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
    this.img = img;
    this.rating = rating;
}
var Margarita = new PizzaConstructor("Margarita", 7.80, Mingr, Mimg, 10);
var Hawaii = new PizzaConstructor("Hawaii", 8.50, Hingr, Himg, 11);
var GrandmaSlice = new PizzaConstructor("GrandmaSlice", 8.70, Gingr, Gimg, 9);
var QuattroFormaggi = new PizzaConstructor("QuattroFormaggi", 9.10, Qingr, Qimg, 7);
console.log(Margarita, Hawaii, GrandmaSlice, QuattroFormaggi);
//pushing them into arrays
var PizzasArray = [Margarita, Hawaii, GrandmaSlice, QuattroFormaggi];
//showing them on the page
for (var _i = 0, PizzasArray_1 = PizzasArray; _i < PizzasArray_1.length; _i++) {
    var i = PizzasArray_1[_i];
    $("#javapizzas").append("\n\t\t<div class=\"col-5 d-flex bg-dark p-3 text-center mb-3\">\n\t\t\t<img width=\"200\" src=\"" + i.img + "\" alt=\"pizzaimg\">\n\t\t\t<div>\n\t\t\t\t<p>" + i.name + "</p>\n\t\t\t\t<p>" + i.price + "</p>\n\t\t\t\t<p class=\"pl-3\">" + i.ingredients + "</p>\n\t\t\t\t<span class=\"pl-2\">Rating: <button type=\"\"><i class=\"fa fa-thumbs-up\"></i></button><input class=\"likeNum\" value=\"" + i.rating + "\"><button type=\"\"><i class=\"fa fa-thumbs-down\"></i></button></span>\n\t\t\t</div>\n\t\t</div>\n\t");
    $('#javapizzas > div:nth-child(even)').addClass("offset-lg-2 offset-md-2");
}
//ratings+like/dislike
//ccomment form
//data type for each value and arr
