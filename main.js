const array = [
    {
        cell1: "Optika",
        cell2: "XI. század",
        cell3: "Alhazen"
    },
    {
        cell1: "Asztronómia",
        cell2: "Reneszánsz",
        cell3: "Kepler",
        cell4: "Galilei"
    },
    {
        cell1: "Kvantumfizika",
        cell2: "XIX-XX. század",
        cell3: "Max Planck",
        cell4: "Albert Einstein"
    },
    {
        cell1: "Modern fizika",
        cell2: "XX-XXI. század",
        cell3: "Richard Feynman",
        cell4: "Stephen Hawking"
    }
];

const table = document.createElement('table');
table.id="tableID";
document.body.appendChild(table);

const tbody = document.createElement('tbody'); 
tbody.id="tbodyID";
table.appendChild(tbody);

// createHeader(); 
// renderTable(array);
// generateForm();

const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const thisForm = e.currentTarget; 
    const errorElements = thisForm.querySelectorAll('.error'); 
    for (const i of errorElements) { 
        i.innerHTML = ""; 
    }
    let valid = true; 
    const cell1HtmlElement = document.getElementById('fizika');
    const cell2HtmlElement = document.getElementById('ido');
    const cell3HtmlElement = document.getElementById('tudos1');
    const cell4HtmlElement = document.getElementById('tudos2');

    const cell1Value = cell1HtmlElement.value;
    const cell2Value = cell2HtmlElement.value;
    const cell3Value = cell3HtmlElement.value;
    const cell4Value = cell4HtmlElement.value === '' ? undefined : cell4HtmlElement.value; 
    if(!validateFormInputFields(cell1HtmlElement, "Kötelező megadni a területet!")){
        valid = false;
    };
    
    if(!validateFormInputFields(cell2HtmlElement, "Kötelező megadni az időszakot!")){ 
        valid = false;
    };
    if(!validateFormInputFields(cell3HtmlElement, "Kötelező megadni az első tudóst!")){ 
        valid = false;
    };
    if(!validateFormInputFieldsExtra(cell4HtmlElement,cell3HtmlElement, "Kötelező megadni az első tudóst is!")){ 
        valid = false;
    };
    
    if(valid){
        const newElement = {
            cell1: cell1Value,
            cell2: cell2Value,
            cell3: cell3Value,
            cell4: cell4Value,
          };
        array.push(newElement);
    
        tbody.innerHTML = '';
        renderTable(array); 
    
        thisForm.reset();
    }
});
