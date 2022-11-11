const http = require('http') // importation du module http pour la creation du serveur
const fs = require('fs') // importation du module fs pour la lecture d'un fichier

// il faut démarrer le serveur

const serveur = http.createServer((req,res)=>{
    res.setHeader('content-type', 'text/html');
    fs.readFile('./index.html', (err, data)=>{
        if (err) {
            console.log(err);
        }else{
            res.write(data)
            res.end()
        }
    })
})

// il faut ecouter le serveur

serveur.listen(3000, 'localhost', ()=>{
    console.log('le serveur est bien écouté');
})