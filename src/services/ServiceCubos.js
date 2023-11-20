import Global from "@/Global";
import axios from "axios";

export default class ServiceCubos{
    
    getMarcas(){
        return new Promise(function(resolve){
            var request='api/cubos/marcas';
            var marcas={};
            var url=Global.urlApiCubos+request;
            axios.get(url).then(response=>{
                marcas=response.data;
                resolve(marcas);
            })
        
        })

    }
    getCubos(){
        return new Promise(function(resolve){
            var request='api/cubos';
            var cubos={};
            var url=Global.urlApiCubos+request;
            axios.get(url).then(response=>{
                cubos=response.data;
                resolve(cubos);
            })
        
        })

    }

    DetallesMarca(marca){
        return new Promise (function(resolve){
            var request='/api/cubos/cubosmarca/'+marca;
            var url=Global.urlApiCubos+request;
            var cubos={};
            axios.get(url).then(response=>{
                cubos=response.data;
                resolve(cubos);

            })
        })

    }

    DetallesCuboComentarios(id){
        return new Promise (function(resolve){
            var request='/api/comentarioscubo/getcomentarioscubo/'+id;
            var url=Global.urlApiCubos+request;
            var comentarios={};
            axios.get(url).then(response=>{
                comentarios=response.data;
                resolve(comentarios);

            })
        })

    }
    DetallesCubo(id){
        return new Promise (function(resolve){
            var request='/api/cubos/'+id;
            var url=Global.urlApiCubos+request;
            var cubos={};
            axios.get(url).then(response=>{
                cubos=response.data;
                resolve(cubos);

            })
        })

    }

    compruebaUsuario(usuario){
        return new Promise(function(resolve){
            var request='api/manage/login';
            var url=Global.urlApiCubos+request;
            axios.post(url,usuario).then(response=>{
                resolve(response.data);

            })
        })
        
    }

    nuevoUsuario(usuario){
        return new Promise(function(resolve){
            var request='api/manage/registrousuario';
            var url=Global.urlApiCubos+request;
            axios.post(url,usuario).then(response=>{
                resolve(response);

            })
        })
        
    }
    getPerfil(token){
        return new Promise(function(resolve){
            var request='api/manage/PerfilUsuario';
            var url=Global.urlApiCubos+request;
            var datos={};
            var headers={
                headers:{'authorization': 'bearer '+token}
            }
            axios.get(url,headers).then(response=>{
                datos=response.data;
                resolve(datos);
            })
        })


    }
    getCompras(token){
        return new Promise(function(resolve){
            var request='api/compra/comprasusuario';
            var url=Global.urlApiCubos+request;
            var datos={};
            var headers={
                headers:{'authorization': 'bearer '+token}
            }
            axios.get(url,headers).then(response=>{
                datos=response.data;
                resolve(datos);
            })
        })


    }

    hacerCompra(token,id){
        return new Promise(function(resolve){
            var request='api/compra/insertarpedido/'+id;
            var url=Global.urlApiCubos+request;
            var headers={
                headers:{'authorization': 'bearer '+token}
            }
            axios.post(url,null,headers).then(response=>{
                resolve(response);

            })
        })
        
    }







    

}
