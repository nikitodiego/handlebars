

class Contenedor{
    constructor(nombre) {
        this.nombre = nombre
    }
    
    async save(object){
        const fs = require('fs');
        let array = [];
        try{
            const leer = await fs.promises.readFile("./productos.json","utf-8");
            if (leer == ""|| leer =="[]"){
                array.push(object);
                object.id = array.length;
            }else{
                array = JSON.parse(leer);
                const ids = array.map(object => object.id);
                const max = Math.max(...ids);
                array.push(object);
                object.id = max+1;
            }
        }
        catch(err){
            console.log("Error de lectura",err)
        }
        const a = JSON.stringify(array);
        fs.writeFileSync(this.nombre,a);
        return object.id;
    }


    async getById(id){
        const fs = require('fs');
        let array = [];
        try{
            const leer = await fs.promises.readFile("./productos.json","utf-8");
            if (leer == ""){
            console.log("archivo vacío")
            }else{
            array = JSON.parse(leer);
            for (let n of array){
                if (n.id == id){
                    return n;
                }
                }return null;
            }
        }
        catch(err){
            console.log("Error de lectura",err)
        }
    }

    
    async getAll(){
        const fs = require('fs');
        let array = [];
        try{
            const leer = await fs.promises.readFile("./productos.json","utf-8");
            return array = JSON.parse(leer);
        }
        catch(err){
            console.log("Error de lectura",err)
        }
    }

    
    async deleteById(id){
        const fs = require('fs');
        let array = [];
        try{
            const leer = await fs.promises.readFile("./productos.json","utf-8");
            array = JSON.parse(leer);
            let a = 0
            for (let n of array){
                if (n.id == id){
                    array.splice(a,1);
                }else{
                    a+=1;
                }
            }
        }
        catch(err){
            console.log("Error de lectura",err);
        }
        const b = JSON.stringify(array);
        fs.writeFileSync(this.nombre,b);
    } 


    async deleteAll(){
        const fs = require('fs');
        let array = [];
        try{
            const leer = await fs.promises.readFile("./productos.json","utf-8");
            array = JSON.parse(leer);
            array.splice(0);
        }
        catch(err){
            console.log("Error de lectura",err);
        }
        const b = JSON.stringify(array);
        fs.writeFileSync(this.nombre,b);
    }

    async random(){
        const fs = require('fs');
        let array = [];
        try{
            const leer = await fs.promises.readFile("./productos.json","utf-8");
            array = JSON.parse(leer);
            const randomIndex = Math.floor(Math.random() * array.length);
            return array[randomIndex];
        }
        catch(err){
            console.log("Error de lectura",err);
        }

    }

}

module.exports.nombreExportacion = Contenedor;
   