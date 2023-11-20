<template>
  <div>
    <h1>Nuevo Registro</h1>
    <form v-on:submit.prevent="nuevoUsuario()">        
        <label>Nombre</label>
        <input type="text" class="form-control" v-model="usuario.nombre"/>
        <label>Email</label>
        <input type="text" class="form-control" v-model="usuario.email"/>
        <label>Constraseña</label>
        <input type="password" class="form-control" v-model="usuario.password"/><br/>   
        <button class="btn btn-success">
            Login
        </button>
    </form><br/>
  </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service=new ServiceCubos();
export default {
    methods:{
        nuevoUsuario(){

            service.nuevoUsuario(this.usuario).then(result=>{
                console.log(result);
                console.log('entrada correcta');
                //this.$router.push('/empleados/'+result.response);
                
            })
        }
    },
    data(){
        return{
            usuario:{
                idUsuario:0,
                nombre:'',
                email:'',
                password:'',
                
            },
            mensaje:''
        }
    },
    mounted(){
        this.usuario.email='';
        this.usuario.password='';
    }

}
</script>

<style>

</style>