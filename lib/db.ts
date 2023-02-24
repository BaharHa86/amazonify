import mongoose from 'mongoose';

const connection = {
  isConnected: 0,
};

async function connect() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('use previous connection');
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(
    'mongodb+srv://Baharha:JiLZkZFfC1nn9nwJ@cluster0.xnfu7n5.mongodb.net/amazonify?retryWrites=true&w=majority'
  );
  console.log('new connection');
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = 0;
    } else {
      console.log('not disconnected');
    }
  }
}
function convertDocToObj(doc: {
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  slug: string;
  category: string;
  images: { _id: any; slug: string; url: string; sizes: number[] }[];
  description: string;
  price: number;
}) {
  doc._id = doc._id.toString();
  // doc.images = doc.images.map(image => image._id = image._id.toString())
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocToObj };
export default db;
