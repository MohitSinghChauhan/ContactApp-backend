const express = require('express');
const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
	res.status(200).json({"msg":"working fine"});
});

app.listen(PORT, () => {
	console.log('Server running on port ' + PORT);
});
