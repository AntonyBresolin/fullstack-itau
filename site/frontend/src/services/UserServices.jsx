import { NetworkRequest } from "./NetworkRequest";

export default class UserServices {
  static async createUser(data) {
    const response = await fetch('http://localhost:8080/api/v1/user', {
      alias: NetworkRequest.createUserData,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response;
  }

  static async getUsers() {
    const response = await fetch('http://localhost:8080/api/v1/user/all', {
      alias: NetworkRequest.getAllUserData,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  }
}