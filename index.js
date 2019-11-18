var http = require('http'); // Nous avons besoin du module http inclus dans Node.js, disponible avec http
var url = require('url');
var querystring = require('querystring');


var server = http.createServer(function(req, res) // fonction createServer() présente dans le module http
{
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if ('prenom' in params && 'nom' in params) { // si prenom et nom sont passés en argument
        res.write('Hello ' + params['prenom'] + ' ' + params['nom']); // on les affiche
    }
    else { // sinon erreur 404
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write('Erreur 404. Page not found ');
      res.end();  
    }
    res.end();
});
server.listen(8080); // fonction createServer() retourne un objet qui a la fonction listen() (écoute le port 8080)