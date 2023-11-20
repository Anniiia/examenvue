<template>
  <div>
    <h1>Acciones usuario logueado</h1>
    <div v-if="token!=''">
        <router-link   :to="'/perfil/'+this.token" class="btn btn-success">Perfil</router-link>
        <router-link   :to="'/compras/'+this.token" class="btn btn-info">Ver Compras</router-link>
        <router-link   :to="'/nuevacompra/'+this.token" class="btn btn-dark">Nueva  Compra</router-link>
    </div>
    

</div>
</template>

<script>
export default {
    name:'AccionesComponent',
    methods:{
        perfil(){
            this.$router.push('/acciones/'+this.token);
        }
    },
    data(){
        return{
            token:''
        }
    },
    mounted(){
        this.token=this.$route.params.token;
    }
}
</script>

<style>

</style>