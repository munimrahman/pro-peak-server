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
/companies?industry=Finance&companySize=6-15&workPlace=On Site&page=1&limit=2
*/

router.route('/').post(createCompany).get(getAllCompany).delete(deleteManyCompany);
router.route('/:id').get(getOneCompany).put(updateCompany).delete(deleteOneCompany);

module.exports = router;
