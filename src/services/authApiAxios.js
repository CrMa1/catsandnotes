import axios from 'axios';
const baseUrl = 'https://parroquialaresurreccionhgo.com.mx/api';
const abortController = new AbortController();

//Registra un nuevo usuario
export const Register = async ({ name, email, password }) => {
  const url = `${baseUrl}/registro.php`;
  try {
    const response = await axios.post(url, {
      signal: abortController.signal,
      email: email,
      name: name,
      password: password,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to validate user");
    }
  } catch (error) {
    if (abortController.signal.aborted) {
      console.log("Data fetching cancelled");
    } else {
      console.log(error);
    }
  }
};

//Loggea un usuario existente
export const LoginUser = async ({ email, password }) => {
  const url = `${baseUrl}/login.php`;
  try {
    const response = await axios.post(url, {
      signal: abortController.signal,
      email: email,
      password: password,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to validate user");
    }
  } catch (error) {
    if (abortController.signal.aborted) {
      console.log("Data fetching cancelled");
    } else {
      console.log(error);
    }
  }
};

//Trae las notas del usuario loggeado
export const GetNotes = async ({ id_user }) => {
  const url = `${baseUrl}/notas.php`;
  try {
    const response = await axios.post(url, {
      signal: abortController.signal,
      id_user: id_user,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to validate user");
    }
  } catch (error) {
    if (abortController.signal.aborted) {
      console.log("Data fetching cancelled");
    } else {
      console.log(error);
    }
  }
};

//Crea una nueva nota
export const DoNote = async ({ title, content, id_user }) => {
  const url = `${baseUrl}/insert.php`;
  try {
    const response = await axios.post(url, {
      signal: abortController.signal,
      title: title,
      content: content,
      id_user: id_user,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to validate user");
    }
  } catch (error) {
    if (abortController.signal.aborted) {
      console.log("Data fetching cancelled");
    } else {
      console.log(error);
    }
  }
};

//Cambia la imagen del usuario
export const ChangeImageProfile = async ({ image, id_user }) => {
  const url = `${baseUrl}/updateImage.php`;
  try {
    const response = await axios.post(url, {
      signal: abortController.signal,
      image: image,
      id_user: id_user,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to validate user");
    }
  } catch (error) {
    if (abortController.signal.aborted) {
      console.log("Data fetching cancelled");
    } else {
      console.log(error);
    }
  }
};

//Cambia el nombre del usuario
export const ChangeMyName = async ({ name, id_user }) => {
  const url = `${baseUrl}/updateName.php`;
  try {
    const response = await axios.post(url, {
      signal: abortController.signal,
      name: name,
      id_user: id_user,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to validate user");
    }
  } catch (error) {
    if (abortController.signal.aborted) {
      console.log("Data fetching cancelled");
    } else {
      console.log(error);
    }
  }
};