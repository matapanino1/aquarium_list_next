import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const { name, email, body } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !body ||
      body.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage = {
      name,
      email,
      body,
    };

    let client;

    try {
      client = await MongoClient.connect(
        'mongodb+srv://matapanino1:GTup8XtuzcM1iq3J@cluster0.j4uixlo.mongodb.net/my-app?retryWrites=true&w=majority        '
      );
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();
    
    res
      .status(201)
      .json({ message: 'Successfully stored message!', message: newMessage });
  }
}