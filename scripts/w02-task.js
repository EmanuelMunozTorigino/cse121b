/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Emanuel Muñoz Torigino";
const currentYear = new Date().getFullYear();
const profilePicture = "images/profile_picture.jpg";


/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");

const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);

imageElement.setAttribute("alt", `Profile image of Emanuel Muñoz Torigino`);


/* Step 5 - Array */

food_list = ["Beefsteak", "Chicken", "Icecream", "Rice" ,"Banana", "Pizza" ];

//foodElement.innerHTML = food_list

foodElement.textContent = food_list

let newFood = "Pasta"

food_list.push(newFood)

foodElement.innerHTML += `<br>${food_list}`

food_list.shift()

foodElement.innerHTML += `<br>${food_list}`

food_list.pop()

foodElement.innerHTML += `<br>${food_list}`
