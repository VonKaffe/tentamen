let elem = document.createElement("img");
elem.setAttribute("height", "200");
elem.setAttribute("width", "200");
elem.setAttribute("alt", "pad");
document.getElementById("image1").appendChild(elem);


let elem2 = document.createElement("img");

elem2.setAttribute("width", "200");
elem2.setAttribute("alt", "tgb2");
document.getElementById("image2").appendChild(elem2);



let elem3 = document.createElement("img");
elem3.setAttribute("width", "200");
elem3.setAttribute("alt", "tgb1");
document.getElementById("image3").appendChild(elem3);


let products = [
    {

        name: "friberg mousepad",
        price: 450,
        description: "Mouse pad by famous friberg",
        image: 'pad.jpg'
    },
    {

        name: "Keyboard",
        price: 350,
        description: "White keyboard used by famous esport players",
        image: 'tgb2.jpg'
    },
    {

        name: "RGB keyboard ",
        price: 900,
        description: "RGB keyboard",
        image: 'tgb1.jpg'
    }
];

document.getElementById("name1").innerHTML = products[0].name;
document.getElementById("price1").innerHTML = products[0].price + ":-";
document.getElementById("description1").innerHTML = products[0].description;
elem.src=products[0].image;


document.getElementById("name2").innerHTML = products[1].name;
document.getElementById("price2").innerHTML = products[1].price + ":-";
document.getElementById("description2").innerHTML = products[1].description;
elem2.src=products[1].image;

document.getElementById("name3").innerHTML = products[2].name;
document.getElementById("price3").innerHTML = products[2].price + ":-";
document.getElementById("description3").innerHTML = products[2].description;
elem3.src=products[2].image;





