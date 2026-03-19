const harvestNow = [
  "Salat 🥬",
  "Zucchini 🥒",
  "Gurken 🥒"
];

const beds = [
  {
    name: "Beet 1",
    plants: ["Tomaten 🍅", "Basilikum 🌿"]
  },
  {
    name: "Beet 2",
    plants: ["Zucchini 🥒", "Gurken 🥒"]
  },
  {
    name: "Beet 3",
    plants: ["Salat 🥬", "Peperoni 🌶️", "Bohnen"]
  },
  {
    name: "Beet 4",
    plants: ["Mais 🌽", "Melonen 🍈", "Sonnenblumen 🌻", "Zwiebeln 🧅"]
  }
];

// HARVEST LIST
const harvestList = document.getElementById("harvest-list");
harvestNow.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  harvestList.appendChild(li);
});

// BEDS
const bedsContainer = document.getElementById("beds-container");

beds.forEach(bed => {
  const div = document.createElement("div");
  div.className = "bed";

  const title = document.createElement("h3");
  title.textContent = bed.name;

  const list = document.createElement("ul");

  bed.plants.forEach(plant => {
    const li = document.createElement("li");
    li.textContent = plant;
    list.appendChild(li);
  });

  div.appendChild(title);
  div.appendChild(list);
  bedsContainer.appendChild(div);
});
