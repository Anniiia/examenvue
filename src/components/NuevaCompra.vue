<template>
  <div>
    <h1>Nueva compra</h1>
    <form v-on:submit.prevent="comprar()">        
        <select v-model="opcionseleccionada">
            <option v-for="cubo in cubos" :key="cubo" :value="cubo.idCubo" >{{cubo.nombre}}</option>
        </select>
        <button class="btn btn-success">
            Comprar cubo
        </button>
    </form><br/>
  </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service=new ServiceCubos();
export default {
    name:'NuevaCompra',
    methods:{

    
        comprar(){
            this.id=this.opcionseleccionada;           
            var token=this.$route.params.token
            console.log(this.id, token);
            service.hacerCompra(token,this.id).then(result=>{
               console.log(result);
               console.log('compra hecha');
               this.$router.push('/acciones/'+token);
            })
        },
    },
    mounted(){
        service.getCubos().then(result=>{
            this.cubos=result;
        })
    },
    data(){
        return{
            cubos:{},
            id:'',
            opcionseleccionada:''
        }
    }
}
</script>

<style>

</style>