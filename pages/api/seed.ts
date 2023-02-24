import db from '../../lib/db';
import User from '../../models/User';
import users from '../../@core/data/users';

import products from '../../@core/data/products/products';
import Product from '../../models/Product';

const handler = async (
  req: any,
  res: { send: (arg0: { message: string }) => void }
) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(users);
  await Product.deleteMany();
  await Product.insertMany(products);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;
