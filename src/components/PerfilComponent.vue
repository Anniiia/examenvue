<template>
  <div>
    <h1>Perfil</h1>
    <div v-if="usuario!=null">
        <h2>{{usuario.nombre}}</h2>
        <h3>{{usuario.email}}</h3>
    </div>
  </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service=new ServiceCubos();
export default {
 name:'PerfilComponent',
 mounted(){
    var token=this.$route.params.token
        service.getPerfil(token).then(result=>{
            this.usuario=result;

        })
 },
 data(){
    return{
        usuario:{}
    }
 }
}
</script>

<style>

</style>