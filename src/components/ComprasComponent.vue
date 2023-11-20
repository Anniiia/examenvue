<template>
  <div>
    <h1>Compras</h1>
    <ul>
        <li v-for="compra in compras" :key="compra" >ID pedido: {{compra.idPedido}}  Fecha: {{compra.fechaPedido}}</li>
    </ul>
  </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service=new ServiceCubos();
export default {
    name:'ComprasComponent',
    mounted(){
    var token=this.$route.params.token
        service.getCompras(token).then(result=>{
            this.compras=result;

        })
 },
 data(){
    return{
        compras:{}
    }
 }
}

</script>

<style>

</style>