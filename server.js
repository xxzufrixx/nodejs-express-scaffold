const path = require('path');
const express = require('express');

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

app.get('*', (req, res)=> {
    res.sendfile(HTML_FILE)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}...`);
    console.log('press CTRL+C to quit.');
});
