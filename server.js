
const port = process.env.PORT || 3000;
const app = require("./src/app");



app.listen(port, ()=>{
    console.log(`Servidor escutando na porta ${port}`);
})