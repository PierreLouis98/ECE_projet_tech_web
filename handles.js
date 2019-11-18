export function serverHandle(req, res) {
  // Retrieve and print the current path
  const path = url.parse(req.url).pathname;
  console.log(path);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(content);
  res.end();
}

  // Je ne sais pas pourquoi ça ne marche pas 
  // je ne sais pas ce que je dois faire avec le fichier json 