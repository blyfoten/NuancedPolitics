const cron = require('cron');
const Argument = require('../models/Argument.js');
const { summarizeArguments } = require('../utils/summarizer.js');

const updateArgumentSummaries = async () => {
  let argumentsToSummarize;
  try {
    argumentsToSummarize = await Argument.find({}).where('summary').exists(false);
  } catch (error) {
    console.error('Error fetching arguments:', error);
    return;
  }

  if (argumentsToSummarize.length > 0) {
    let summary;
    try {
      summary = await summarizeArguments(argumentsToSummarize);
    } catch (error) {
      console.error('Error summarizing arguments:', error);
      return;
    }
    try {
      await Argument.updateMany({ _id: { $in: argumentsToSummarize.map(arg => arg._id) } }, { $set: { summary } });
    } catch (error) {
      console.error('Error updating argument summaries:', error);
    }
  }
};

const job = new cron.CronJob('0 * * * * *', updateArgumentSummaries, null, true, 'America/Los_Angeles');
job.start();

module.exports = job;
