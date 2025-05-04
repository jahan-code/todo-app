const mongoose = require('mongoose');
// const { MONGO_DB, MONGO_HOST, MONGO_USER, MONGO_PASSWORD } =
//   require('../configs').mongoConfig;

module.exports.connectMongoDB = async () => {
  try {
    await mongoose.connect(
      // `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`,
      `mongodb+srv://baderraheel5:6lxEMfvoV3zI3uML@cluster0.uffjk.mongodb.net/todo-app`

      // {
      //   useUnifiedTopology: true,
      //   useNewUrlParser: true,
      // },
    );
    console.log('Connection established with MongoDB.');
    return;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
};
