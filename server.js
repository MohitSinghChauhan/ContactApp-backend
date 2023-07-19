const express = require('express');
const app = express();

const PORT = 5000;

app.use("/api/contacts", require('./routes/contactRoutes'))

app.listen(PORT, () => {
	console.log('Server running on port ' + PORT);
});
