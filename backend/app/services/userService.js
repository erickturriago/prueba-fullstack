import UserDAO from '../dao/userDAO.js';

class UserService {
  static async fetchAllUsers() {
    return await UserDAO.getAllUsers();
  }
}

export default UserService;
