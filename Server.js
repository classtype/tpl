/*────────────────────────────────────────────────────────────────────────────────────────────────*/

const express = require('express');
const app = express();

/*────────────────────────────────────────────────────────────────────────────────────────────────*/

app.listen(process.env.PORT, function() {
    console.log(`listening on http://${process.env.IP}:${process.env.PORT}`);
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', $.__path('views'));

app.get('/', (req, res) => {
    return res.render('index', {
        name: 'Вася',
        age: 18
    });
});

/*────────────────────────────────────────────────────────────────────────────────────────────────*/