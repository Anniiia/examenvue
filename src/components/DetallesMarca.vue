<template>
  <div>
    <h1>Detalles Marca {{this.$route.params.marca}}</h1>
    <div class="card" style="width: 18rem;" v-for="cubo in cubos" :key="cubo">
        <img :src="cubo.imagen" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{cubo.nombre}}</h5>
            <p class="card-text">{{cubo.precio}} €</p>
            <router-link :to="'/detailscubo/'+cubo.idCubo" class="btn btn-success">Detalles</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service=new ServiceCubos();
export default {
    name:'DetallesSerie',
      data(){
        return{
            cubos:{},
        }
      },
      mounted(){
        var marca=this.$route.params.marca
        service.DetallesMarca(marca).then(result=>{
            this.cubos=result;
        })

      },
      watch:{
        
        '$route.params.id'(nextVal, oldVal){

            if(nextVal!=oldVal){
              console.log('sffsdf');
              service.DetallesMarca(nextVal).then(result=>{
                  this.cubos=result;
              })
            }
        }
      }

}
</script>

<style>

</style>