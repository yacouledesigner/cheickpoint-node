const generate = require('generate-password')

const password = generate.generate({
    length:8,
    numbers:true,
    symbols:true,
    uppercase:false
})

console.log(password);