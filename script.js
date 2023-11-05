let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let title = document.getElementById('main-title')
  title.textContent = "Get ready for "+ "DOM's"+ " Vengeance!!!";

  // Part 2

  let newBodyColor= document.querySelector("body");
  newBodyColor.style.backgroundColor= ("#999524");



  // Part 3 Select **DOM's Favorite Things** list and remove the last list item.


  let favThings = document.getElementById("favorite-things");
  let lastLi = favThings.lastElementChild;
  favThings.removeChild(lastLi);


  // Part 4 Select all `.special-title` class elements and 
  // change their `font-size` to `2rem`. 
  //Remember you might have to iterate through the list of elements

  let phrases= document.querySelectorAll(".special-title");

  for (let phrase of phrases){
    phrase.style.fontSize = "2rem";
  }


  // Part 5
  //Turns out DOM never raced in **Chicago**. Access the **Past Races** list 
  // and remove **Chicago**.
  let places= document.querySelector("#past-races");

  places.children[3].remove();




  // Part 6
  // Let's add to DOM's **Past Races** list. Create a new `<li>` element, 
  // change the new `<li>` text to the name of a city, 
  // and append it to the **Past Races** list.
  let newPlace = document.createElement("li");
  newPlace.innerHTML = "Miami";
  places.appendChild(newPlace);



  // Part 7
  // Create a new `.blog-post` corresponding to the new city added in 
  //**Part 6**. You will have to create a new `<div>` with class of `.
  //blog-post`, a new `<h2>` with text, and a new `<p>` with some text. 
  //Think about what order you want to create the elements, 
  //and what order you want to append them in.

  let newBlog = document.createElement("div");
  newBlog.classList.add("blog-post");
  newBlog.classList.add("purple");

  let h2 = document.createElement("h1");
  h2.textContent = "Miami";

  let pEl = document.createElement("p");
  pEl.textContent = "Best racing place on Earth";

  newBlog.appendChild(h2);
  newBlog.appendChild(pEl);
  

  let main = document.querySelector(".main");
  main.appendChild(newBlog);




  // Part 8
  // // Query select the `#quote-title` ID element and add a **click** 
  // event handler. That event handler should use the function `randomQuote` 
  // whenever `#quote-title` is clicked.

  let newQuote = document.querySelector("#quote-title");

  newQuote.addEventListener("click" , ()=>{

    randomQuote();

  });



  // Part 9

  // // Select all `.blog-post` class elements. Iterate through the list of `
  // .blog-post` class elements and apply two event handlers to each node. 
  // The first event handler should be listening for `mouseout` events while
  //  the second handler should be listening for `mouseenter` events.


  let arrayLists = document.querySelectorAll(".blog-post");

  for (let array of arrayLists){
    array.addEventListener("mouseenter", () => {
      array.classList.toggle("purple");
      array.classList.toggle("red");
      
    });
    array.addEventListener("mouseout", () => {
      array.classList.toggle("purple");
      array.classList.toggle("red");

    });
    
    
  }

});
