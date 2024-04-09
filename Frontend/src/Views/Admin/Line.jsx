import React, { useState } from 'react';
import axios from 'axios';

const LineMessage = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/send-message',
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div>
      <button onClick={handleSendMessage}>Send Message</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LineMessage;