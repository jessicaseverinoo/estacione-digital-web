import { instance } from "../services/api";

class AuthService {
  login(cpfCnpj: string, password: string) {
    const URL_LOGIN = "/login";
    let payload = {
      cpfCnpj: cpfCnpj,
      senha: password,
    };
    return instance.post(URL_LOGIN, payload).then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();
