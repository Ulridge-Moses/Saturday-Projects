const pets = [
  {
    name: "Fluffy",
    age: 5,
    type: "Dog",
    food: "Bones",
    image: "Assets/Images/dog.jpg",
    sound: "Assets/Sound/german-shepherd-barking-302356.mp3"
  },
  {
    name: "Whiskers",
    age: 3,
    type: "Cat",
    food: "Fish",
    image: "Assets/Images/cat.jpg",
    sound: "Assets/Sound/kitten-sound-2-354217.mp3"
  },
  {
    name: "Chirpy",
    age: 1,
    type: "Parrot",
    food: "Seeds",
    image: "Assets/Images/budgie.jpg",
    sound: "Assets/Sound/budgie-screams-42568.mp3"
  }
  
];

// Sort pets from oldest to youngest
pets.sort((a, b) => b.age - a.age);

const timeline = document.getElementById("timeline");

pets.forEach(pet => {
  const card = document.createElement("div");
  card.className = "card";

  const inner = document.createElement("div");
  inner.className = "card-inner";

  const front = document.createElement("div");
  front.className = "card-front";
  front.innerHTML = `
    <img src="${pet.image}" alt="${pet.name}">
    <h3>${pet.name}</h3>
    <p>Age: ${pet.age}</p>
    <button>Hear Me!</button>
  `;

  const back = document.createElement("div");
  back.className = "card-back";
  back.innerHTML = `
    <h3>${pet.name}</h3>
    <p>Type: ${pet.type}</p>
    <p>Age: ${pet.age}</p>
    <p>Favorite Food: ${pet.food}</p>
  `;

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);
  timeline.appendChild(card);

  // Add flip on click (except button)
  card.addEventListener("click", (e) => {
    if (e.target.tagName !== 'BUTTON') {
      card.classList.toggle("flipped");
    }
  });

  // Play sound when "Hear Me!" button is clicked
  const button = front.querySelector("button");
  const audio = new Audio(pet.sound);
  button.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent card flip
    audio.play();
  });
});
