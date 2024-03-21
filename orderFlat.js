async function orderFlat(){
     //Compare the variable obtained from the file with the value in the input
     fileContent = fileChek.value;
     //split the value to line
     const lines = fileContent.split('\n');
 
 
 
 
 
 
 
     //Ignoring lines with spaces at the end of the file or in the middle of the file
     let nonEmptyLines = [];
     let consecutiveEmptyLines = 0;
     for (let j = 0; j < lines.length; j++) {
         const currentLine = lines[j].trim();
         if (currentLine === "") {
             consecutiveEmptyLines++;
         } else {
             if (consecutiveEmptyLines > 0) {
                 nonEmptyLines.push("");
                 consecutiveEmptyLines = 0;
             }
             nonEmptyLines.push(currentLine);
         }
 
     }
     lines.length = lines.length - (consecutiveEmptyLines);
 
 
 
 
 
 
 
 
     //fixed values in the certificate
     //line 1
     const ENV00101 = "ENV00101";
     const MMORDML = "MMORDML";
     const MMORDMR = "MMORDMR";
     const MMOR01 = "MMOR01";
     //constant values line 2
     const HEAD0101 = "HEAD0101";
     //constant values line 3
     const HEAD0301 = "HEAD0301";
     //constant values line 4
     const HEAD0401 = "HEAD0401";
     //constant values Barcode
     const LINE0101 = "LINE0201";
     //constant values One line before last
     const HEAD9901 = "HEAD9901";
     //constant values last line
     const ENV00201 = "ENV00201";
}