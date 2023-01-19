// Target the elements that we need
const draggableList = document.querySelector('#draggable-list');

// Table for the check
const highestMountains = [
  'Mount Everest',
  'K2',
  'Kangchenjunga',
  'Lhotse',
  'Makalu',
  'Cho Oyu',
  'Dhaulagiri I',
  'Manaslu',
  'Nanga Parbat',
  'Annapurna I',
];

// Our list items pure HTML elements. Like a reference
const listItems = [];
// Where the drag starts
let dragStartIndex;

// Generate the list into DOM
const generateList = () => {
  [...highestMountains]
    .map((val) => ({ name: val, sort: Math.random() })) // In order to render the list ramdomly
    .sort((a, b) => a.sort - b.sort)
    .forEach((mountain, index) => {
      console.log(mountain.name);
      // Create an li
      const li = document.createElement('li');
      // Create a custom attribute
      li.setAttribute('data-index', index);
      // Add elements for the listItem
      li.innerHTML = `
    <span class="position">${index + 1}</span>
    <div class="draggable" draggable="true" >
      <p class="mountain-name">${mountain.name}</p>
      <span class="material-symbols-outlined">more_vert</span>
    </div>
    `;
      // Push my item in the listItem
      listItems.push(li);
      // Add it into DOM (draggableList)
      draggableList.appendChild(li);
    });
};

generateList();

console.log(listItems);
