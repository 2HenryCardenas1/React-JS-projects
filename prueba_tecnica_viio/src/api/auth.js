import axios from "axios";

const ERROR_PROBLEMA_SOLICITUD = "Error en la solicitud: Ocurrió un problema";

const loginFetch = async ({ username, password }) => {
  try {
    const response = await axios.post("https://dummyjson.com/auth/login", {
      username: username,
      password: password,
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      return error.response.data;
    } else {
      throw new Error(ERROR_PROBLEMA_SOLICITUD);
    }
  }
};

const registerFetch = async ({ firstName, lastName, username, password }) => {
  try {
    const response = await axios.post("https://dummyjson.com/users/add", {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      return error.response.data;
    } else {
      throw new Error(ERROR_PROBLEMA_SOLICITUD + error.message);
    }
  }
};

export { loginFetch, registerFetch };
