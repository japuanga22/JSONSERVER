const jsonServer = require("json-server");
const servidor = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

servidor.use(middlewares);
servidor.use(router);
const port = process.env.PORT || 3000;

servidor.listen(port, () => {
  console.log(`JSON Server está funcionando na porta ${port}`);
});
