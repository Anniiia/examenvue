import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from './components/HomeComponent.vue'
import DetallesMarca from './components/DetallesMarca.vue';
import DetalleCubo from './components/DetalleCubo.vue';
import LoginComponent from './components/LoginComponent.vue';
import NuevoRegistro from './components/NuevoRegistro.vue';
import AccionesComponent from './components/AccionesComponent.vue'
import PerfilComponent from './components/PerfilComponent.vue';
import comprasComponent from './components/ComprasComponent.vue'
import NuevaCompra from './components/NuevaCompra.vue'


const myRoutes=[
    {
        path:'/', component: HomeComponent
    },
    {
        path:'/details/:marca', component: DetallesMarca
    },
    {
        path:'/detailscubo/:id', component: DetalleCubo
    },
    {
        path:'/login', component: LoginComponent
    },
    {
        path:'/nuevo', component: NuevoRegistro
    },
    {
        path:'/acciones/:token', component: AccionesComponent
    },
    {
        path:'/perfil/:token', component: PerfilComponent
    },
    {
        path:'/compras/:token', component: comprasComponent
    },
    {
        path:'/nuevacompra/:token', component: NuevaCompra
    },
    // {
    //     path:'/create', component: CreatePersonaje
    // },
    // {
    //     path:'/update', component: UpdatePersonaje
    // },
   
]

const router=createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;
