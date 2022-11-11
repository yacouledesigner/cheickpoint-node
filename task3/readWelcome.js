// lecture de fichier

const fs = require('fs');

fs.readFile('./welcome.txt', (error,data) => {
    if (error) {
        console.log('Vous avez une erreur');
    }
    console.log(data.toString());
})