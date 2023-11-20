<template>
  <div>
    <div style="width: 50%; margin: 0 auto;">
    <h1>LOGIN</h1>
    <form v-on:submit.prevent="login()">        
        <label>Email</label>
        <input type="text" class="form-control" v-model="usuario.email"/>
        <label>Constraseña</label>
        <input type="password" class="form-control" v-model="usuario.password"/><br/>   
        <button class="btn btn-success">
            Login
        </button>
    </form><br/>
    </div>
  </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service=new ServiceCubos();
export default {
    methods:{
        login(){

            service.compruebaUsuario(this.usuario).then(result=>{
                console.log(result.response);
                this.$router.push('/acciones/'+result.response);
                
            })
            //console.log(this.usuario.userName);
        }
    },
    data(){
        return{
            usuario:{
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