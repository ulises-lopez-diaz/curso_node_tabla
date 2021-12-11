const fs = require("fs");
const colors = require('colors');



const crearArchivo = async(base = 5, listar, hasta = 10) => {
    

    // return new Promise((resolve,reject) => {
    //     console.log("===================");
    //     console.log(`   Tabla del: ${base}`);
    //     console.log("===================");

    //     let salida = '';

    //     for(let i=1; i<=10; i++){
    //         salida += (`${base} x ${i} = ${base * i}\n`);
    //     }
    //     console.log(salida);


    //     fs.writeFileSync(`tabla-${base}.txt`, salida);

    //     resolve(`tabla-${base}.txt creado`);
    // });

    try{

        if(listar){
            console.log("===================".green);
            console.log(`   Tabla del: ${colors.blue(base)}`.green);
            console.log("===================".green);
        }

        let salida = '';
        let consola = '';

        for(let i=1; i<=hasta; i++){
            salida += (`${base} ${'x'} ${i} ${'='} ${base * i}\n`);
            consola += (`${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`);
        }
        
        if(listar){
            console.log(consola);
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return(`tabla-${base}.txt creado`);
    } catch(error){
        throw error;
    }
    
}


module.exports = {
    crearArchivo: crearArchivo,
}