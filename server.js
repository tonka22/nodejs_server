const http = require('http');
const fs = require('fs').promises;
const host="localhost";
const port=8000;

const requestListener = function (req, res) {
	fs.readFile(__dirname + "/page.html")
	.then(contents => {
		res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
	});
};

const myserver = http.createServer(requestListener);
myserver.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});