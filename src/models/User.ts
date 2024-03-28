import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';
import database from '../database';

class User extends Model {
    public id!: number;

    public key!: string;

    public appName!: string;

    public hashKey!: string;
}

User.init(
  {
    key: Sequelize.STRING,
    appName: Sequelize.STRING,
    hashKey: Sequelize.STRING,
  },
  {
    sequelize: database.connection,
    freezeTableName: true,
    tableName: 'tbl_users',
    createdAt: false,
    updatedAt: false
  }
);

export default User;