const app = require("./config/server");

const port = process.env.PORT || 4008;

app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`);
})