import { denodb } from "../../debs.ts";

const { Model, DataTypes } = denodb;

class User extends Model {
  static table = "user";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hash: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
  };

  static defaults = {
    status: 0,
  };
}

export default User;
