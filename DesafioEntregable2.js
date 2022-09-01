const fs = require("fs");

/*
const productos = [
    {
    title: "Marina - Ancient Dreams In A Modern Land",
    price: 15.00,
    thumbnail: "https://usshop.marinaofficial.co.uk/dw/image/v2/BHCC_PRD/on/demandware.static/-/Sites-warner-master/default/dwa1a79d93/pdp-img/041321_marina_ptp_productimgs_cassette_green_1.png?sw=550&sh=550&sm=fit",
    id: 1
    },
    {
    title: "Lady Gaga - Chromatica",
    price: 15.00,
    thumbnail: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/618Wut1RpkL._SL1200_.jpg",
    id: 2
    },
    {
    title: "La Roux - Supervision",
    price: 15.00,
    thumbnail: "https://images.roughtrade.com/product/images/files/000/183/513/hero/La_Roux_-_Cassette_-_Lay_Flat.png?1572556913",
    id: 3
    },
    {
    title: "Madonna - Madame X",
    price: 25.00,
    thumbnail: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51YxCdvTQML._SX425_.jpg",
    id: 4
    }
]
*/

class Contenedor {
    async save(producto) {
        try {
            await fs.promises.writeFile(
                "./productos.txt",
                JSON.stringify(producto, null, 2),
                "utf-8"
            );            
        } catch (e) {
            console.log(e);
        }
    }
    async getAll(){
        try {
            const contenido = await fs.promises.readFile("./productos.txt", "utf-8");
            console.log(contenido);
            return JSON.parse(contenido);
        } catch (error) {}
    }

    async saveNew(productoNuevo) {
        const contenido = await this.getAll();
        const indice = contenido.sort((a, b) => b.id - a.id)[0].id;
        productoNuevo.id = indice + 1;
        contenido.push(productoNuevo);
        this.save(contenido);
    }
    async getById(id) {
        const contenido = await this.getAll();
        const productoBuscado = contenido.filter((producto) => producto.id == id);
        console.log(productoBuscado);
    }
    async deleteById(id) {
        try {
            const contenido = await this.getAll();
            const eliminarProducto = contenido.find((producto) => producto.id == id);
            contenido.splice(eliminarProducto, 1)
    }
}

const contenedor = new Contenedor();
//contenedor.save(productos);
//contenedor.getAll();
const productoN = {
    title: "Intérprete - Nuevo",
    price: 30.00,
    thumbnail: "https://bitsofco.de/content/images/2018/12/broken-1.png",
};

//contenedor.saveNew(productoN);
//contenedor.deleteById(4);