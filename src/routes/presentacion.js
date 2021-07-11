const router = require('express').Router();

router.route('/').get((req, res)=>{
    
    
    res.json({ nombre: 'Dennison', apellido: 'Torres', numero_identificaicon: '1151446063' }); 
});

module.exports = router;