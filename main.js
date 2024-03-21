

//ondrop file
function handleDragOver(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFiles(files);
}

function handleFileInput(event) {
    const files = event.target.files;
    handleFiles(files);

}






//name file+format file
function handleFiles(files) {

    try {
        const errorMss = document.getElementById('errorMssTypeFlat');
        errorMss.remove();
    } catch (e) { }

    //format file
    const allowedTypes = ['text/plain', '', 'application/msword',];
    if (allowedTypes.includes(files[0].type)) {
    } else {
        alert(' פורמט (' + files[0].type + ") אינו מתאים ,אנא בחרו קובץ בפורמט תקין. ");
        // Clear the file input to prevent submitting an invalid file
        fileInput.value = '';
    }

    //name file
    const fileName = files[0].name;
    document.getElementById('file-name').innerText = ` ${fileName} :קובץ נקלט  `;
    checkForValue(files[0]);
}





//input file clice on input id-file-input that on the function handleFileInput
function triggerFileInput() {
    document.getElementById('file-input').click();
}






//read file and save in variable fileContentSearch
function checkForValue(file) {
    const reader = new FileReader();
    reader.onload = function (event) {

        fileContent = event.target.result;
        fileChek.value = fileContent;
        DesignScreenGoesUp();






// Define variables to track if the select element has been created and the option selected by the user
let selectCreated = false;
let selectedOption = null;


// Define the function to check textarea value and execute actions accordingly
function checkTextarea() {
    const fileChekValue = document.getElementById("fileChek").value;

    if (fileChekValue.includes("ENV")) {
        if (fileChekValue.includes("SUPDES")) {
            selectedOption = null;
            selectCreated = false;
            try {
                const errorMss = document.getElementById('errorMssTypeFlat');
                errorMss.remove();
            } catch (e) { }

            supdesFlat();
        }
         else {
            if (!selectCreated) {


                const errorMss = document.createElement('div');
                errorMss.id = 'errorMssTypeFlat';
                document.body.appendChild(errorMss);

                const errMssP = document.createElement('p');
                errMssP.id = 'errorp';
                errMssP.innerHTML = "נראה שהתעודה שנבחרה ללא סוג מסר רצוי לבדיקה , או שהערך של 'סוג תעודה' במסר שגוי";
                errMssP.innerHTML += "<br>" + "אנא בחר את סוג התעודה לבדיקה  ";

                const typeSelect = document.createElement("select");
                typeSelect.id = "errorMssSelect";
                errorMss.appendChild(errMssP);
                errorMss.appendChild(typeSelect);

                const optionType = document.createElement("option");
                const optionSupdes = document.createElement("option");
                const optionOrder = document.createElement("option");
                const entry = document.createElement("option");

                optionType.innerHTML = "סוג תעודה";
                optionSupdes.innerHTML = "משלוח";
                optionOrder.innerHTML = "הזמנה";
                entry.innerHTML = "כניסה";


                optionSupdes.value = "supdes";
                optionOrder.value = "order";
                entry.value = "entry";

                typeSelect.appendChild(optionType);
                typeSelect.appendChild(optionSupdes);
                typeSelect.appendChild(optionOrder);
                typeSelect.appendChild(entry);



                typeSelect.addEventListener("change", function() {
                    selectedOption = this.value;
                    runSelectedFunction(); // Run the function when the select value changes
                    try {
                        const errorMss = document.getElementById('errorMssTypeFlat');
                        errorMss.remove();
                    } catch (e) { }
                });

                selectCreated = true;
            } 
            
            else {
                runSelectedFunction(); // Run the function when the select value changes
            }
        }
    } else {
        // Reset selectCreated flag if the condition is not met
        selectCreated = false;
        // Deletion of the options of choosing from multiple certificates before each test
        // supdesHashavshevt();
    }
}

// Function to run the appropriate action based on the selected option
function runSelectedFunction() {
    if (selectedOption === "supdes") {
        supdesFlat();
    } else if (selectedOption === "order") {
        console.log("order");
    } else if (selectedOption === "entry") {
        console.log("entry");
    }
}

// Invoke the function once
checkTextarea();

// Add event listener for further input changes
document.getElementById("fileChek").addEventListener("input", checkTextarea);






    };
    reader.readAsText(file);
}
















function messageRusltconstantValues(idValue, idValueEror) {

    const constantValues = document.getElementById('constantValues');
    constantValues.style.display = "block"
    const constantValuesP = document.createElement('p');
    constantValuesP.id = idValue;
    constantValues.appendChild(constantValuesP);
    const idValueE = document.getElementById(idValue);



    const erorWindos = document.getElementById('erorWindos');
    const erorWindosDiv = document.createElement('div');
    erorWindosDiv.id = idValueEror;
    erorWindos.appendChild(erorWindosDiv);


    idValueE.setAttribute("onmouseover", "showTooltip(" + "'" + idValue + "'" + "," + "'" + idValueEror + "'" + ")");
    idValueE.setAttribute("onmouseout", "hideTooltip(" + "'" + idValueEror + "'" + ")");

}



function messageRusltconstantValuesMain(idValue, idValueEror) {

    const constantValues = document.getElementById('main');
    constantValues.style.display = "block"
    const constantValuesP = document.createElement('p');
    constantValuesP.id = idValue;
    constantValues.appendChild(constantValuesP);
    const idValueE = document.getElementById(idValue);


    const erorWindos = document.getElementById('erorWindos');
    const erorWindosDiv = document.createElement('div');
    erorWindosDiv.id = idValueEror;
    erorWindos.appendChild(erorWindosDiv);



    idValueE.setAttribute("onmouseover", "showTooltip(" + "'" + idValue + "'" + "," + "'" + idValueEror + "'" + ")");
    idValueE.setAttribute("onmouseout", "hideTooltip(" + "'" + idValueEror + "'" + ")");

}












function messageRusltBarcodes(idValue, idValueEror) {
    const barcodes = document.getElementById('barcodes');
    const constantValues = document.getElementById('barcodesTable');
    barcodes.style.display = "block"

    const constantValuesTr = document.createElement('tr');
    constantValuesTr.id = idValue;

    const constantValuesT = document.createElement('td');
    constantValuesT.id = idValue + "Y";

    const constantValuesA = document.createElement('td');
    constantValuesA.id = idValue + "A";

    const constantValuesM = document.createElement('td');
    constantValuesM.id = idValue + "M";

    const constantValuesY = document.createElement('td');
    constantValuesY.id = idValue + "T";


    constantValues.appendChild(constantValuesTr);


    constantValuesTr.appendChild(constantValuesT);
    constantValuesTr.appendChild(constantValuesM);
    constantValuesTr.appendChild(constantValuesA);
    constantValuesTr.appendChild(constantValuesY);


    const idValueE = document.getElementById(idValue);


    const erorWindos = document.getElementById('erorWindos');
    const erorWindosDiv = document.createElement('div');
    erorWindosDiv.id = idValueEror;
    erorWindos.appendChild(erorWindosDiv);




    const idValueA = document.getElementById(idValue + "A");

    const erorWindosDivA = document.createElement('div');
    erorWindosDivA.id = idValueEror + "A";
    erorWindos.appendChild(erorWindosDivA);





    idValueE.setAttribute("onmouseover", "showTooltip(" + "'" + idValue + "'" + "," + "'" + idValueEror + "'" + ")");
    idValueE.setAttribute("onmouseout", "hideTooltip(" + "'" + idValueEror + "'" + ")");


    idValueA.setAttribute("onmouseover", "showTooltip(" + "'" + idValue + "A" + "'" + "," + "'" + idValueEror + "A" + "'" + ")");
    idValueA.setAttribute("onmouseout", "hideTooltip(" + "'" + idValueEror + "A" + "'" + ")");


}












































function DesignScreenGoesUp() {
    //Change the appearance of the screen after uploading a file for the first time
    const upFile = document.querySelector('.upFile');
    const messageRuslt1 = document.getElementById('messageRuslt1');
    const titelUpFile = document.querySelector('.titelUpFile');
    const titelFile = document.getElementById('titelFile');
    const dropzone = document.getElementById('drop-zone');
    const filename = document.getElementById('file-name');
    const uploadicon = document.getElementById('upload-icon');
    const icons = document.getElementById('icons');
    const iconAndhandleDropP = document.getElementById('iconAndhandleDropP');
    const uploadiconDiv = document.getElementById('upload-iconDiv');
    const fileChek = document.getElementById("fileChek");

    if (fileContent != undefined) {
        fileChek.style.display = 'block';
        messageRuslt1.style.display = 'block';
        upFile.style.position = 'absolute';
        upFile.style.right = '45px';
        upFile.style.top = '20px';
        upFile.style.width = '450px';
        upFile.style.height = '250px';
        upFile.style.border = '1px solid #bdb8b8';
        dropzone.style.width = '85%';
        dropzone.style.height = '50%';
        dropzone.style.top = '58%';
        titelFile.style.display = 'block';
        filename.style.display = 'block';
        uploadicon.style.top = '70%';
        titelUpFile.style.display = 'none';
        uploadicon.style.width = '17%';
        uploadicon.style.height = '16%';
        icons.style.fontSize = '50px';
        icons.style.top = '10px';
        iconAndhandleDropP.style.fontSize = '15px';
        uploadicon.style.width = '100%';
        uploadicon.style.height = '100%';
        uploadicon.style.top = '50%';
        uploadiconDiv.style.width = '17%';
        uploadiconDiv.style.height = '16%';
        uploadiconDiv.style.top = '70%';


    }
}





