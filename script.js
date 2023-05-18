let action = document.querySelector(".action");
let comedy = document.querySelector(".comedy");
let romance = document.querySelector(".romance");
let message = document.querySelector(".message");
let movies = [];
let addButton = document.querySelector(".addButton");
let movieList = document.querySelector(".movieList");
let image = document.querySelector("image");
let imageUrls = [
    "https://m.media-amazon.com/images/M/MV5BNzJlM2NmZTItOGQyYS00MmE2LTkwZGUtNDFkNmJmZjRjZjcxXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOGYzYWE3YTAtMjg2Ni00MzRkLWEwYWItOWM1MjI3YzhjYTYyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg"
];

action.onclick = function() {
    
     
        message.innerHTML = "<div>" + "<img src=" + imageUrls[0] + "</div>" + "<div>" + "Shazam" + "</div>";
    };
    comedy.onclick = function() {
    
        message.innerHTML = "<div>" + "<img src=" + imageUrls[1] + "</div>" + "<div>" + "Luck" + "</div>";
    };

   romance.onclick = function()   {
        message.innerHTML = "<div>" + "<img src=" + imageUrls[2] + "</div>" + "<div>" + "Pride and Prejudice" + "</div>";
   };
   

addButton.onclick = function() {
    let movieInput = document.querySelector(".lin").value;
    // Write your code below! 
    movies.push(movieInput);
    console.log(movies);
    movieList.insertAdjacentHTML("beforeend", "<li>" + "<img src =" + movieInput + ">" + "</li>");
    console.log(movies.length);
};