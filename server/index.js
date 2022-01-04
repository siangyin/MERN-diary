require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3030;
const cors = require("cors");
const diariesRouter = require("./routes/diariesRoutes");

// Middleware: used to parse JSON bodies
app.use(express.json());
// app.use(express.urlencoded()); //Parse URL-encoded bodies, parses incoming requests with urlencoded payloads and is based on body-parser.

app.use(cors());
// CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

// Routes
app.get("/", (req, res) => {
	res.send("<h1>Diary API</h1><a href='/diaries-api'>Diaries-API</a>");
});

app.use("/diaries-api", diariesRouter);
// middlewares : page not found/ error-handler
// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () =>
			console.log(`Server on port: http://localhost:${PORT}`)
		)
	)
	.catch((error) => console.log(error.message));
