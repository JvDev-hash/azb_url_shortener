import { Moment } from 'moment';
import Sequelize, { Model } from 'sequelize';
import database from '../database';

class User extends Model {
    public id!: number;

    public shortened_uri!: string;

    public original_url!: string;

    public expiration_date!: Moment;
}

User.init(
  {
    shortened_uri: Sequelize.STRING,
    original_url: Sequelize.STRING,
    expiration_date: Sequelize.DATE,
  },
  {
    sequelize: database.connection,
    freezeTableName: true,
    tableName: 'tbl_urls',
    createdAt: false,
    updatedAt: false
  }
);

export default User;