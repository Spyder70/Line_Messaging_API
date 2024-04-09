import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/send-message', (req, res) => {
  const { LINE_ACCESS_TOKEN } = "ED+0kp5dBIX5z2PXGz2cfm3yZP//5WkH7EcIKbxReqWyd6zn2DYwkRzqPWU1U+4FSBE+pTCT5gaHbnWoOuIpgpsyS1TdidOhwwQ3p6/gIvr9QZBgTUYvcPKJBMZedPaIR6p0vcpHjO79GZ2aMrjlCAdB04t89/1O/w1cDnyilFU="; // My Line channel access token

  const options = {
    method: 'POST',
    url: 'https://api.line.me/v2/bot/message/push',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${LINE_ACCESS_TOKEN}`,
    },
    data: {
      to: 'U20b47ef2f18405fd94d13cf5c43152d8', // Varun's Line user id 
      messages: [
        {
          type: 'text',
          text: 'Hello, this is a message from the server!',
        },
      ],
    },
  };

  axios(options)
    .then((response) => {
      res.status(200).json({ message: 'Message sent' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error sending message' });
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});