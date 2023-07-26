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

const getAllCompanyService = async () => {
    const data = await companyRepository.getAll();
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
