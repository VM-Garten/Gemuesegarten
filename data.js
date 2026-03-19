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

// VISUAL MAP
const gardenMap = document.getElementById("garden-map");

beds.forEach(bed => {
  const bedDiv = document.createElement("div");
  bedDiv.className = "bed-visual";

  const title = document.createElement("h4");
  title.textContent = bed.name;

  bedDiv.appendChild(title);

  bed.plants.forEach(plant => {
    const plantDiv = document.createElement("div");
    plantDiv.className = "plant";
    plantDiv.textContent = plant;

    // Highlight wenn erntereif
    if (harvestNow.some(h => plant.includes(h.split(" ")[0]))) {
      plantDiv.style.background = "#d9ead3";
      plantDiv.style.fontWeight = "bold";
    }

    bedDiv.appendChild(plantDiv);
  });

  gardenMap.appendChild(bedDiv);
});
