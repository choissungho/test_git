const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!')) //



app.use(express.static('public'))
app.use(express.static('sunghoimg'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/external', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/external.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/beomjin', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_utilities2', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_utilities2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_2', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_try_utilities.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_grid', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_grid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_typography', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_typography.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_typography2', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_typography2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_table1', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/table1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_table2', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/table2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_image', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_image.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sungho', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/sungho.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/01Utilities(1)', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/01Utilities1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/02Utilities(2)', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/02Utilities2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/03Grid', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/03Grid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/04Typography(1)', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/04Typography1.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/05Typography(2)', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/05Typography2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/06Table1', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/06Table1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/06Table2responsive', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/06Table2responsive.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/07image', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/07image.html'));
    //__dirname : It will resolve to your project folder.
});



app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
