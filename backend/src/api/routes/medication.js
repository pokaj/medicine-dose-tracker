const express = require('express');
const router = express.Router();
const {add_medication, delete_medication, edit_medication, get_medication} = require('../controllers/medication');
const {check_auth} = require('../middleware/checkauth');

router.post('/', check_auth, add_medication);
router.get('/', check_auth, get_medication);
router.post('/delete', check_auth, delete_medication);
router.put('/', check_auth, edit_medication);


module.exports = router;