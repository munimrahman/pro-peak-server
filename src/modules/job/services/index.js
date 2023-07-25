const jobPostRepository = require('../repository');

const createJobPostService = async (data) => {
    const job = await jobPostRepository.createOne(data);
    return job;
};

const updateJobPostService = async (data, id) => {
    const updatedJobPost = await jobPostRepository.updateOne(data, id);
    return updatedJobPost;
};

const getOneJobPostService = async (id) => {
    const job = await jobPostRepository.getOneById(id);
    return job;
};

const getAllJobPostService = async () => {
    const data = await jobPostRepository.getAll();
    return data;
};

const deleteOneJobPostService = async (id) => {
    const res = await jobPostRepository.deleteOne(id);
    return res;
};

const deleteManyJobPostService = async (ids) => {
    const res = await jobPostRepository.deleteMany(ids);
    return res;
};

module.exports = {
    createJobPostService,
    updateJobPostService,
    getOneJobPostService,
    getAllJobPostService,
    deleteOneJobPostService,
    deleteManyJobPostService,
};
