function validateFormInputFields(inputElement, errormessage){
    let validation = true; 
    if(inputElement.value === ""){ 
        const parentElement = inputElement.parentElement; 
        const error = parentElement.querySelector('.error'); 
        error.innerHTML = errormessage; 
        validation = false;
    }
    return validation;  
}

function createHeader(){
    const headerObj = {
        cell1: "Fizika területe",
        cell2: "Időszak",  
        cell3: "Képviselők"    
    };
    
    const tableID=document.getElementById("tableID")

    const thead = document.createElement('thead');
    tableID.appendChild(thead); 

    const headerRow = document.createElement('tr');
    thead.appendChild(headerRow);

    for(const i in headerObj){ 
        const headerCell = document.createElement('th'); 
        headerCell.innerHTML = headerObj[i]; 
        headerRow.appendChild(headerCell); 

        if(i==="cell3"){
            headerCell.colSpan = "2"
        }
    }
}


function renderTable(array){

    for (const i in array) {

        const row1 = document.createElement('tr');

        const tbodyID=document.getElementById("tbodyID");
        tbodyID.appendChild(row1);
    
        const cell1 = document.createElement('td');
        cell1.innerHTML = array[i].cell1;
        row1.appendChild(cell1);

        const cell2 = document.createElement('td');
        cell2.innerHTML = array[i].cell2;
        row1.appendChild(cell2); 
    
        const cell3 = document.createElement('td');
        cell3.innerHTML = array[i].cell3;
        row1.appendChild(cell3); 
        cell3.colSpan = "2";

        if(array[i].cell4!==undefined){
            cell3.colSpan = "1"
            const cell4 = document.createElement('td'); 
            cell4.innerHTML = array[i].cell4; 
            row1.appendChild(cell4);
        }


    }
  
}