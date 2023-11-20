<template>
  <div>
    <h1>Detalles Cubo</h1>
    <div class="card" style="width: 18rem;">
        <h2 class="card-title">{{cubo.nombre}}</h2>
        <img :src="cubo.imagen" style="width:150px; height: 150px;" class="card-img-top"/>
        <h3>{{cubo.modelo}}</h3>
        <p>{{cubo.marca}}</p>
        <p>Color: {{cubo.color}}</p>
        <p>Precio: {{cubo.precio}} €</p>
    </div>
    <div>
        <h3>Comentarios :</h3>
        <div v-if="comentarios!=null" style="width: 50%;">
            <ul v-for="comentario in comentarios" :key="comentario">
                <li>{{comentario.fechaComentario}}    {{comentario.comentario}}</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service=new ServiceCubos();
export default {
    name:'DetalleCubo',
    data(){
        return{
            cubo:{},
            comentarios:{}
        }
      },
      mounted(){
        var id=this.$route.params.id
        service.DetallesCuboComentarios(id).then(result=>{
            this.comentarios=result;
        })
        service.DetallesCubo(id).then(result=>{
            this.cubo=result;
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