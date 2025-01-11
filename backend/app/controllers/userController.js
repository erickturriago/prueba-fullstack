import UserService from '../services/userService.js';

const userController = {
  async getAllUsers(req, res) {
    try {
      const users = await UserService.fetchAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener usuarios', error });
    }
  }
};

export default userController;
