const { CronJob } = require("cron");

module.exports = {
  emailActiveUsers: () => {
    const job = new CronJob(
      "* * * * * *",
      () => {
        console.log("You will see this message every second");
      },
      null,
      true,
      "America/Los_Angeles"
    );
    job.start();
  },
  job2: () => {},
  job3: () => {},
};
