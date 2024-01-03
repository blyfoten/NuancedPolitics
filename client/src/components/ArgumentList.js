import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const ArgumentList = ({ arguments }) => {
  const [socket, setSocket] = useState(null);
  
  useEffect(() => {
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);
    newSocket.on('vote', (data) => {
      setArguments(prevArguments => prevArguments.map(arg => {
        if (arg._id === data.id) {
          return { ...arg, votes: data.votes };
        } else {
          return arg;
        }
      }));
    });

    return () => newSocket.close();
  }, [setArguments]);

  const handleVote = async (argumentId) => {
    try {
      await axios.post(`http://localhost:3000/api/arguments/vote/${argumentId}`);
    } catch (error) {
      console.error('Error sending vote:', error);
    }
  };

  return (
    <div>
      {arguments.map((arg) => (
        <div key={arg.id}>
          <p>{arg.content}</p>
          <button onClick={() => handleVote(arg.id)}>Vote</button>
        </div>
      ))}
    </div>
  );
};

export default ArgumentList;
