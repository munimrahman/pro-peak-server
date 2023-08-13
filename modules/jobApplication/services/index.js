/* eslint-disable radix */
/* eslint-disable object-curly-newline */
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
// get all job applications
const getAllJobApplicationService = async (query) => {
    const { jobPostId, candidateId, page = 1, limit = 5 } = query;
    const queries = { jobPostId, candidateId };
    // set pagination
    if (page) {
        const skip = (page - 1) * parseInt(limit);
        queries.skip = skip;
        queries.limit = parseInt(limit);
    }
    const data = await jobApplicationRepository.getAll(queries);
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
