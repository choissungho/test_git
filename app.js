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

router.get('/jo_typography1', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_typography1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_typography2', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_typography2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/grid1', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/grid1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/grid2', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/grid2.html'));
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

router.get('/jo_button', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_button.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_collapse', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_collapse.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_carousel', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_carousel.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_dropdowns', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_dropdowns.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/jo_navbar', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin/jo_navbar.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sungho', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/sungho.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_01Utilities1', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_01Utilities1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_02Utilities2', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_02Utilities2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_03Grid', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_03Grid.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_04Typography1', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_04Typography1.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/0717_05Typography2', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_05Typography2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_06Table1', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_06Table1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_06Table2 responsive', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_06Table2 responsive.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_07image', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_07image.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_08Buttons', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_08Buttons.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_09Collapse', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_09Collapse.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0717_09Collapse2', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0717_09Collapse2.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0718_01Dropdowns1', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0718_01Dropdowns1.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/0718_Navber1', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho/0718_Navber1.html'));
    //__dirname : It will resolve to your project folder.
});



app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
