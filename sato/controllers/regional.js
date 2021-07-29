const { rest } = require('../database/config');

const consultarRegionales = async(req, res) => {
    regionales = await rest.executeQuery('select * from t0200001');
    console.log('hola');
    res.json(
        regionales
    );
};

const consultarRegionalBogota = async(req, res) => {
    regional = await rest.executeQuery('select * from t0200001 where cod_regional=1');

    console.log('hola 333');

    res.json(
        regional
    );
};

module.exports = {
    consultarRegionales,
    consultarRegionalBogota

}