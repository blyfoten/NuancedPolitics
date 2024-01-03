const axios = require('axios');

const OPENAI_API_URL = "https://api.openai.com/v1/engines/davinci-codex/completions";

const summarizeArguments = async (arguments) => {
  const prompts = arguments.map(arg => arg.content).join('\n\n');
  const prompt = `Please summarize the following arguments:\n\n${prompts}`;

  try {
    const response = await axios.post(
      OPENAI_API_URL, 
      { prompt, max_tokens: 250 },
      { headers: { 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` } }
    );
  
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating summary with OpenAI:', error);
    throw error;
  }
};

module.exports = {
  summarizeArguments
};
