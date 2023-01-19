// Target the elements that we need
const draggableList = document.querySelector('#draggable-list');

// Table for the check
const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page',
];

// Our list items pure HTML elements
const listItems = [];
// Where the drag starts
let dragStartIndex;

// Generate the list into DOM
const generateList = () => {
  [...richestPeople].map((people, index) => {
    // Create an li
    const li = document.createElement('li');
    // Create a custom attribute
    li.setAttribute('data-index', index);
    // Add elements for the listItem
    li.innerHTML = `
    <span class="position">${index + 1}</span>
    <div class="draggable" draggable="true" >
      <p class="people-name">${people}</p>
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
