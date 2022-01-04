require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const cors = require("cors");

// Middleware: used to parse JSON bodies
app.use(express.json());
// app.use(express.urlencoded()); //Parse URL-encoded bodies, parses incoming requests with urlencoded payloads and is based on body-parser.

app.use(cors());
// CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

// Routes
app.get("/", (req, res) => {
	res.send("<h1>Diary API</h1><a href='/api/diaries'>Diaries-API</a>");
});

// middlewares : page not found/ error-handler
// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

const start = async () => {
	try {
		//connectDB
		app.listen(PORT, (req, res) => {
			console.log(`app on ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
