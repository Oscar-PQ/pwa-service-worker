if(navigator.serviceWorker){
    navigator.serviceWorker.register("/sw.js");
}
if(window){
    caches.open('espacio-1');
    caches.has("espacio-1").then(console.log);    
}
caches.open('Practica')
.then(cache=>{
  cache.add('img/main2.jpg'); //Subir main2
cache.addAll([ // Subir Index y SW
    '/index.html',
    '/sw.js'
]).then(()=>{
    cache.delete("img/main2.jpg"); // Eliminar main2
    cache.put("/sw.js", new Response("Oscar Yael Paz Quiñonez")); //Mostrar nombre
}); 
cache.match("/index.html")
.then(respuesta=>{
    respuesta.text().then(console.log);
})
cache.match("/sw.js")
    .then(respuesta => {
        respuesta.text().then(console.log); // Mostrar SW
    });

caches.keys().then(console.log); // Espacio Cache
}) 