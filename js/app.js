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

// Function to swap the items
const swapItems = (from, to) => {
  const itemOne = listItems[from].querySelector('.draggable');
  const itemTow = listItems[to].querySelector('.draggable');
  console.log(itemOne, itemTow);
  // Swap the items
  // From become to
  listItems[from].appendChild(itemTow);
  // To become From
  listItems[to].appendChild(itemOne);
};

// ================== function for each event =================
const dragStart = (ev) => {
  dragStartIndex = +ev.target.closest('li').getAttribute('data-index');
};
const dragEnter = (ev) => {
  ev.target.classList.add('over');
};
const dragLeave = (ev) => {
  ev.target.classList.remove('over');
};

const dragOver = (ev) => {
  ev.preventDefault();
};

const dragDrop = (ev) => {
  // Get the index of the current drop location
  const dragDropIndex = +ev.target.getAttribute('data-index');
  // SWAP the item
  swapItems(dragStartIndex, dragDropIndex);
  // Remove the over
  ev.target.classList.remove('over');
};
// ==================== End ====================================

// Add event Listeners
const addEventListeners = () => {
  // Target all the draggable items
  const draggables = document.querySelectorAll('.draggable');
  const draggableListItems = document.querySelectorAll('.draggable-list li');
  // Add event
  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
  });

  draggableListItems.forEach((item) => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
};
// Generate the list into DOM
const generateList = () => {
  [...highestMountains]
    .map((val) => ({ name: val, sort: Math.random() })) // In order to render the list ramdomly
    .sort((a, b) => a.sort - b.sort)
    .forEach((mountain, index) => {
      // Create an li
      const li = document.createElement('li');
      // Create a custom attribute
      li.setAttribute('data-index', index);
      // Add elements for the listItem
      li.innerHTML = `
    <span class="position">${index + 1}</span>
    <div class="draggable" draggable="true" data-index="${index}" >
      <p data-index="${index}" class="mountain-name">${mountain.name}</p>
      <span data-index="${index}" class="material-symbols-outlined">more_vert</span>
    </div>
    `;
      // Push my item in the listItem
      listItems.push(li);
      // Add it into DOM (draggableList)
      draggableList.appendChild(li);
    });
  // Add event listeners
  addEventListeners();
};

generateList();

console.log(listItems);
