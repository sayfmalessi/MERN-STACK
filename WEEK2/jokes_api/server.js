const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./config/mongoose.config")

const AllMyJokeRoutes = require("./routes/jokes.routes");
AllMyJokeRoutes(app);

app.listen( port, () => console.log(`Listening on port: ${port}`) );