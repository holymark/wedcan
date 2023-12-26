const express = require('express');
const mongoose = require('mongoose');
const WebSocket = require('ws');
require("dotenv").config()
const cors = require('cors');

const app = express();
app.use(cors())
const port = process.env.PORT || 3000;

const mongoURI = process.env.MONGO__URL;
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  seatNumber: { type: String, required: true },
  scanned: { type: Boolean, default: false }
},{timestamps:true});

const Data = mongoose.model('Data', dataSchema);

app.use(express.json());

console.log(mongoURI)
mongoose.connect(mongoURI, mongooseOptions);

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('WebSocket connection opened');

  ws.send('WebSocket connection opened');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

app.get('/api/data', async (req, res) => {
  try {
    const responseData = await Data.find();
    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/data', async (req, res) => {
  const postData = req.body;

  if (!postData.name || !postData.seatNumber) {
    res.status(400).json({ error: 'Invalid data. Name and seatNumber are required.' });
    return;
  }

  try {
    const newData = new Data(postData);

    await newData.save();

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(newData));
      }
    });

    res.json({ message: 'Data added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.delete('/api/data/:id', async (req, res) => {
  const itemId = req.params.id;

  try {
    const deletedItem = await Data.findByIdAndDelete(itemId);

    if (!deletedItem) {
      res.status(404).json({ error: 'Item not found' });
      return;
    }

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ deletedItem, action: 'delete' }));
      }
    });

    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
});