const express = require("express");
const path = require("path");
const open = require("open");
const fs = require("fs");
const bodyParser = require("body-parser");

const port = 4000;
const app = express();
const clientRoot = "../../Platform_cl/";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get("*", function(req, res) {
	res.sendFile(path.join( __dirname, clientRoot, "src/index.html"));
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		//open(`http://localhost:${port}`);
	}
});
