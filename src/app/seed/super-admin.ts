import { userModel } from '../modules/users/users.model';

const superAdmin = {
  name: 'Super Admin',
  email: 'supar@admin.com',
  password: 'superadmin@',
  phone: '01885236058',
  address: 'Uttara, Dhaka',
  role: 'super-admin',
  image: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
};

export const seedSuperAdmin = async () => {
  const isExitSuperAdmin = await userModel.find({ role: 'super-admin' });

  if (!isExitSuperAdmin) {
    await userModel.create(superAdmin);
  }
};
