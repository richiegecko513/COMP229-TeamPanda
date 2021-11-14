import express, { static } from 'express';
import { join } from 'path';

const app = express();

// Serve only the static files form the dist directory
// eslint-disable-next-line no-undef
app.use(static(__dirname + '/dist/<name-of-app>'));

app.get('/*', function(req,res) {
    
// eslint-disable-next-line no-undef
res.sendFile(join(__dirname+'/dist/<name-of-app>/index.html'));
});

// Start the app by listening on the default Heroku port
// eslint-disable-next-line no-undef
app.listen(process.env.PORT || 8080);