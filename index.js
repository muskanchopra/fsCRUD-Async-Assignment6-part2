const fs = require('fs');

// create new file(C)
fs.writeFile('BioData.txt', 'My Name is Muskan Chopra. I am pursuning Graduation from Global INstitute of Technology.', () => {
    console.log('Created..');
});


//update (U)
fs.appendFile('BioData.txt', 'I am working as a intern in Celebal Tech......yahooooo..', () => {
    console.log('Updated data in file sucessfully');
});

// read data(R)
fs.readFile('BioData.txt', 'utf-8' , (e, data) => {
    console.log(data);
});


// delete file(D)
fs.unlink('BioData.txt', () => {
    console.log('Deleted...');
});
