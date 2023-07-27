const express = require('express');
const {
    createCompany,
    updateCompany,
    getOneCompany,
    getAllCompany,
    deleteOneCompany,
    deleteManyCompany,
} = require('../modules/company/controllers/company.controller');

const router = express.Router();

/*

*/

router.get('/', (req, res) => {
    res.json('Quiz Route');
});

// router.route('/').post(createCompany).get(getAllCompany).delete(deleteManyCompany);
// router.route('/:id').get(getOneCompany).put(updateCompany).delete(deleteOneCompany);

module.exports = router;
