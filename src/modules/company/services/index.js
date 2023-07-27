/* eslint-disable object-curly-newline */
/* eslint-disable radix */
const companyRepository = require('../repository');

const createCompanyService = async (data) => {
    const company = await companyRepository.createOne(data);
    return company;
};

const updateCompanyService = async (data, id) => {
    const updatedCompany = await companyRepository.updateOne(data, id);
    return updatedCompany;
};

const getOneCompanyService = async (id) => {
    const company = await companyRepository.getOneById(id);
    return company;
};
// get all companies
const getAllCompanyService = async (query) => {
    const { industry, companySize, workPlace, searchQuery, page = 1, limit = 5 } = query;
    const queries = { industry, companySize, workPlace };
    // set pagination
    if (page) {
        const skip = (page - 1) * parseInt(limit);
        queries.skip = skip;
        queries.limit = parseInt(limit);
    }

    // set search query
    if (searchQuery) {
        const regex = new RegExp(searchQuery, 'i');
        queries.searchQuery = regex;
    }
    const data = await companyRepository.getAll(queries);
    return data;
};

const deleteOneCompanyService = async (id) => {
    const res = await companyRepository.deleteOne(id);
    return res;
};

const deleteManyCompanyService = async (ids) => {
    const res = await companyRepository.deleteMany(ids);
    return res;
};

module.exports = {
    createCompanyService,
    updateCompanyService,
    getOneCompanyService,
    getAllCompanyService,
    deleteOneCompanyService,
    deleteManyCompanyService,
};
