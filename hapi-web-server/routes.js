const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            const { lang } = request.query;
     
            if(lang === 'id') {
                return `Hai, ${name}!`;
            }
            return `Hello, ${name}!`;
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];
 
module.exports = routes;


// curl -X GET http://localhost:9999/hello/taopik
// // output: Hello, taopik!
// curl -X GET http://localhost:9999/hello
// // output: Hello, stranger!


// curl -X GET http://localhost:9999/hello/taopik?lang=id
// // output: Hai, taopik!
// curl -X GET http://localhost:9999/hello/taopik
// // output: Hello, taopik!