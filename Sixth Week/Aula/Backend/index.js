const express = require(`express`);

const app = express();

/* app = {
    use: ,
    listen: ()=>{},
    route: ,
}*/

app.listen(3333, () => {
  console.log("Servidor Online");
});
