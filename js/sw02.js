self.addEventListener('fetch',evento=>{
    const respuestaOffline=new Response ("Este sitio requiere conexión a internet");
    const respuesta = fetch(evento.request)
    .catch(()=> respuestaOffline);
    evento.respondWith(respuesta);
});
/*
self.addEventListener('fetch',evento=>{
    if(evento.request.url.includes('.jpg')){
        let img=fetch('img/main2.jpg')
    evento.respondWith(img);
    }else{
    evento.respondWith(fetch(evento.request));
    }
});

self.addEventListener('fetch',evento=>{
    if(evento.request.url.includes('style.css')){
        let img=fetch('css/styles2.css')
    evento.respondWith(estilos);
    }else{
    evento.respondWith(fetch(evento.request));
    }
});

self.addEventListener('fetch',evento=>{
    evento.respondWith(fetch(evento.request));
    fetch(evento.request)
    .then(respuesta=>{
        console.log(respuesta)
        return respuesta;
    })
});
*/
/* self.addEventListener('instal',evento=>{
    console.log("SW: Instalando Service Worker");
    self.skipWaiting();
    const instalacion=new Promise((resolve, reject)=>{
    })
    setTimeout(() => {
        console.log("SW: Instalación terminada")
    }, 5000);
});
evento.waitUntil(instalacion);
self.addEventListener('active', evento=>{
    console.log('SW: Activado y listo para controlar la app')
}) */

    self.addEventListener('install', evento=>{
    console.log("sw: instalando Service Worker");
    const instalacion=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("sw:instalacion terminada")
        self.skipWaiting();//para actualizacion automatica del  service worker
        resolve();
    },5000)
    })
    evento.waitUntil(instalacion);//para que la activacion espere hasta que se haga la instalacion
})

self.addEventListener('activate', evento =>{
    console.log("sw: Activado y listo para controlar la app")
})