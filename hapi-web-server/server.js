const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
 
const init = async () => {
    const server = Hapi.server({
        port: 9999,
        host: 'localhost',
    });
 
    server.route(routes);
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();


// curl -X GET http://localhost:9999
// // output: Homepage
// curl -X GET http://localhost:9999/about
// // output: About page
// curl -X GET http://localhost:9999/test
// // output: Halaman tidak ditemukan
// curl -X POST http://localhost:9999
// // output: Halaman tidak dapat diakses dengan method tersebut


// curl -X GET http://localhost:9999/hello/taopik
// // output: Hello, dicoding!
// curl -X GET http://localhost:9999/hello
// // output: Hello, stranger!