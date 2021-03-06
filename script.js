const poems = [
  {
    author: "Cece",
    poem: "Roses are red \n Violets are blue \n Sunflowers are yellow \n I bet you were expecting something romantic but no -- these are just gardening facts.",
    image: "sunflower.jpeg",
  },
  {
    author: "Anvit",
    poem: "Roses are red \n Pizza sauce is too \n I ordered a large \n None of it is for you ",
    image: "pizza.jpeg",
  },
  {
    author: "Ernie",
    poem: "Roses are red \n Violets are blue \n Jerry Seinfeld is considering \n Making Bee Movie 2",
    image: "bee.jpeg",
  },
  {
    author: "Andrei",
    poem: "Roses are red \n Github is hard \n Please end my suffering \n I wanna drink beers in my yard",
    image: "yard-party.jpg",
  },
  {
    author: "Michael",
    poem: "Roses are red \n Violets are blue \n This is a photo \n Of stars that I found on wikepedia",
    image: "night-sky.jpeg",
  },
  {
    author: "Katie",
    poem: "Worker bees can leave. \n Even drones can fly away \n The Queen is their slave",
    image: "tyler.jpg",
  },
  // YOUR CODE HERE: Add an object containing two key value pairs: author and poem. Set the author property as equal to a string with your first name. Set the poem property as equal to a short "roses are red" poem. Use the new line character as in the example when you would like a line break.
  {
    author: "Anonymous",
    poem: "Bowl - A Haiku by Anon Moist good afternoon \n A large, silly bowl \n bounces watching the chicken",
    image: "Grilled-chicken-burrito-bowls-10.jpg",
  }
];

let displayPoems = (array) => {
  let html = "";
  let poemDiv = document.getElementById("poems");

  poemArray = array.forEach((poem) => {
    html += `
    <div class="poem">
        <img class="poem__image" src="./assets/${poem.image}"/>
        <div class="poem__author">
            Author: ${poem.author}
        </div>
        <div class="poem__content">
            ${poem.poem}
        </div>
    </div>
    `;
  });

  poemDiv.innerHTML = html;
};

displayPoems(poems);
