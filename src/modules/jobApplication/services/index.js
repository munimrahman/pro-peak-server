const jobApplicationRepository = require('../repository');

const createJobApplicationService = async (data) => {
    const application = await jobApplicationRepository.createOne(data);
    return application;
};

const updateJobApplicationService = async (data, id) => {
    const updatedJobApplication = await jobApplicationRepository.updateOne(data, id);
    return updatedJobApplication;
};

const getOneJobApplicationService = async (id) => {
    const application = await jobApplicationRepository.getOneById(id);
    return application;
};

const getAllJobApplicationService = async () => {
    const data = await jobApplicationRepository.getAll();
    return data;
};

const deleteOneJobApplicationService = async (id) => {
    const res = await jobApplicationRepository.deleteOne(id);
    return res;
};

const deleteManyJobApplicationService = async (ids) => {
    const res = await jobApplicationRepository.deleteMany(ids);
    return res;
};

module.exports = {
    createJobApplicationService,
    updateJobApplicationService,
    getOneJobApplicationService,
    getAllJobApplicationService,
    deleteOneJobApplicationService,
    deleteManyJobApplicationService,
};
