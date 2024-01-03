import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopicList = ({ scope }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get(`/api/topics/${scope}`);
        setTopics(response.data);
      } catch (error) {
        console.error('Error fetching topics:', error);
        // Optionally, handle errors in UI, like displaying a message to the user
      }
    };
    fetchTopics();
  }, [scope]);

  return (
    <div>
      <h2>Topics ({scope})</h2>
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
