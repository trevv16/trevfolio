export const initializeMongo = (mongoose, dbUser, dbPW, dbName) => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPW}@dev-rv8ag.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    }
  );

  const db = mongoose.connection;
  // eslint-disable-next-line no-console
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    // we're connected!
  });
};
