/* LESSON 3 - Programming Tasks */

/* Profile Object  */

const myProfile = {
    name: "Emanuel Muñoz Torigino",
    photo:"images/profile_picture.jpg", 
    photoName: "Profile picture",    
    favoriteFoods: ["Beefsteak", "Chicken", "Icecream", "Rice" ,"Banana", "Pizza"],
    hobbies: ["Soccer", "Voleyball", "Watch movies", "Listen to music", "Play piano"],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Pergamino, BA" ,
        lenght: "23 years",
    },
);



/* DOM Manipulation - Output */

/* Name */

document.getElementById("name").innerHTML = myProfile.name;

/* Photo with attributes */

document.getElementById("photo").src = myProfile.photo;

document.getElementById("photo").alt = myProfile.photoName;


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let list = document.createElement("li");
    list.innerHTML = food;
    document.getElementById("favorite-foods").appendChild(list);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobbie => {
    let list = document.createElement("li");
    list.innerHTML = hobbie;
    document.getElementById("hobbies").appendChild(list);
});

/* Places Lived DataList */


myProfile.placesLived.forEach(element => {
    let dt = document.createElement("dt");
    dt.textContent = element.place;

    let dd = document.createElement("dd");
    dd.textContent = element.lenght;
    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);

});