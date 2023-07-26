const JobApplication = require('../../../models/JobApplication');

const createOne = async (data) => {
    const res = await JobApplication.create(data);
    return res;
};

const getOneById = async (id) => {
    const res = JobApplication.findById(id);
    return res;
};

const getOneByEmail = async (email) => {
    const res = await JobApplication.findOne({ email });
    return res;
};

const updateOne = async (data, id) => {
    const updatedRes = await JobApplication.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    });
    return updatedRes;
};

const getAll = async () => {
    const res = await JobApplication.find({});
    return { count: res.length, applications: res };
};

const deleteOne = async (id) => {
    const res = JobApplication.findByIdAndDelete(id);
    return res;
};

const deleteMany = async (ids) => {
    console.log(ids);
    const res = JobApplication.deleteMany({ _id: { $in: ids } });
    return res;
};

module.exports = {
    createOne,
    updateOne,
    getOneById,
    getOneByEmail,
    getAll,
    deleteOne,
    deleteMany,
};
