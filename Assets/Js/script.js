// === PET DATA ===
// This array holds information about each pet
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

// === SORT PETS FROM OLDEST TO YOUNGEST ===
pets.sort((a, b) => b.age - a.age);

// === GET THE TIMELINE CONTAINER ===
const timeline = document.getElementById("timeline");

// === CREATE A CARD FOR EACH PET ===
pets.forEach(pet => {
  // Create the main card div
  const card = document.createElement("div");
  card.className = "card";

  // Inner container to hold front and back sides
  const inner = document.createElement("div");
  inner.className = "card-inner";

  // Create the front of the card with image and name
  const front = document.createElement("div");
  front.className = "card-front";
  front.innerHTML = `
    <img src="${pet.image}" alt="${pet.name}">
    <h3>${pet.name}</h3>
    <p>Age: ${pet.age}</p>
    <button>Hear Me!</button> <!-- Button to play pet sound -->
  `;

  // Create the back of the card with details
  const back = document.createElement("div");
  back.className = "card-back";
  back.innerHTML = `
    <h3>${pet.name}</h3>
    <p>Type: ${pet.type}</p>
    <p>Age: ${pet.age}</p>
    <p>Favorite Food: ${pet.food}</p>
  `;

  // Add both sides to the inner container
  inner.appendChild(front);
  inner.appendChild(back);

  // Add inner container to the card
  card.appendChild(inner);

  // Add the card to the timeline on the page
  timeline.appendChild(card);

  // === MAKE THE CARD FLIP WHEN CLICKED ===
  card.addEventListener("click", (e) => {
    // Don't flip if the button was clicked
    if (e.target.tagName !== 'BUTTON') {
      card.classList.toggle("flipped");
    }
  });

  // === PLAY PET SOUND WHEN BUTTON IS CLICKED ===
  const button = front.querySelector("button");
  const audio = new Audio(pet.sound);

  button.addEventListener("click", (e) => {
    e.stopPropagation(); // Stop card from flipping
    audio.play(); // Play the pet's sound
  });
});
