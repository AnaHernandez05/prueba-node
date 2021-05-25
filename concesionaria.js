let autos = require('./autos');
let concesionaria = {
   autos: autos,
   buscarAuto: function(patenteB){
    let autoB = autos.filter(function(autos){
        auto = autos.patente;
        return auto==patenteB;});
        return autoB;
},
venderAuto: function (patenteA){
    vender = this.buscarAuto(patenteA);
    vender[0].vendido = true;
    return vender;
    },
autosParaLaVenta: function(){
    let vendidos = this.autos.filter(function(autos){
    vendido = autos.vendido;
    return vendido==false;});
    return vendidos;
  },
  autosNuevos: function(){
    let venta = this.autosParaLaVenta();
    let nuevo = venta.filter(function(venta){
        km = venta.km;
        return km<=100;});
        return nuevo;
},   
listaDeVentas: function (){
    let ven = this.autos.filter(function(autos){
        vendido = autos.vendido;
        return vendido==true;});
        let list = [];
        for(let i=0; i<ven.length;i++){
            if(ven[i].vendido == true){
                list.push(ven[i].precio);
            }
        }
        return list
},
    totalDeVentas:function(){
        let total = this.listaDeVentas();
        if(total.length >0){
        var suma = total.reduce(function(acum, num){
            return acum + num;
           });       
           return suma;
    }else{
        return 0;
    }
}
};
//console.log(concesionaria.venderAuto('JJK116'));
//console.log(concesionaria.autosParaLaVenta());
//console.log(concesionaria.autosNuevos());
//console.log(concesionaria.listaDeVentas());
console.log(concesionaria.totalDeVentas());