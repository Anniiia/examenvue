<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link to="/" class="nav-link active" aria-current="page"
                    >Cubos</router-link
                  >
                </li>
                <!-- <li class="nav-item">
                  <router-link to="/create" class="nav-link">Nuevo Personaje</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/update" class="nav-link"
                    >Modificar Personaje</router-link
                  >
                </li> -->
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >Marcas
                    
                  </a>
                  <ul class="dropdown-menu">
                    <li v-for="marca in marcas" :key="marca">
                        <router-link class="dropdown-item" :to="'/details/'+marca">{{marca}}</router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <router-link to="/login" class="nav-link">Login</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/nuevo" class="nav-link">Nuevo Registro</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
  const service=new ServiceCubos();
export default {
    name:'MenuComponent',
      data(){
        return{
            marcas:{},
        }
      },
      mounted(){
        service.getMarcas().then(result=>{
            this.marcas=result;
        })

      }
  
}
</script>

<style>

</style>