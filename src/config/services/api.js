import axios from 'axios';
import jwtDecode from 'jwt-decode';

const URL_BACKEND = 'http://localhost:5000';

const putAccessToken = (accessToken) => localStorage.setItem('accessToken', accessToken);
const deleteAccessToken = () => localStorage.removeItem('accessToken');
const getAccessToken = () => localStorage.getItem('accessToken');

const createAxiosJWT = () => {
  const axiosJWT = axios.create();
  const accessToken = getAccessToken();
  const currentDate = new Date().getTime();
  axiosJWT.interceptors.request.use(async (config) => {
    if (jwtDecode(accessToken).exp * 1000 < currentDate) {
      const response = await axios.get(`${URL_BACKEND}/api/auth/token`);
      putAccessToken(response.data.data.accessToken);
      const modifiedConfig = { ...config };
      modifiedConfig.headers.Authorization = `Bearer ${response.data.data.accessToken}`;
      return modifiedConfig;
    }
    return config;
  });

  return axiosJWT;
};

const POSTjwt = (path, data) => {
  const axiosJWT = createAxiosJWT();

  return new Promise((resolve, reject) => {
    axiosJWT
      .post(`${URL_BACKEND}${path}`, { ...data }, { headers: { Authorization: `Bearer ${getAccessToken()}` } })
      .then((result) => resolve(result.data))
      .catch(reject);
  });
};

// const DELETEjwt = (path, data) => {
//   const axiosJWT = createAxiosJWT();

//   return new Promise((resolve, reject) => {
//     axiosJWT
//       .delete(`${URL_BACKEND}${path}`, { ...data },
// { headers: { Authorization: `Bearer ${getAccessToken()}` } })
//       .then((result) => resolve(result.data))
//       .catch(reject);
//   });
// };

const GETjwt = (path) => {
  const axiosJWT = createAxiosJWT();

  return new Promise((resolve, reject) => {
    axiosJWT
      .get(`${URL_BACKEND}${path}`, { headers: { Authorization: `Bearer ${getAccessToken()}` } })
      .then((result) => resolve(result.data))
      .catch(reject);
  });
};

const sendQuestion = (question) => new Promise((resolve, reject) => {
  POSTjwt('/api/recomendation/question', question)
    .then((response) => {
      const { status, message, data } = response;

      if (status !== 'success') {
        throw new Error(message);
      }
      resolve(data);
    })
    .catch((error) => {
      reject(error.response);
    });
});

const getAnswer = (idQuestion) => new Promise((resolve, reject) => {
  GETjwt(`/api/recomendation/answer/${idQuestion}`)
    .then((response) => {
      const { status, message, data } = response;

      if (status !== 'success') {
        throw new Error(message);
      }
      resolve(data);
    })
    .catch((error) => {
      reject(error.response);
    });
});

// ? Tidak pakai JWT
const POST = (path, data) => (
  new Promise((resolve, reject) => {
    axios
      .post(
        `${URL_BACKEND}${path}`,
        { ...data },
        // {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        //   },
        // },
      )
      .then((result) => resolve(result.data))
      .catch((err) => reject(err));
  }));

const GET = (path) => (
  new Promise((resolve, reject) => {
    axios
      .get(`${URL_BACKEND}${path}`)
      // .get(`${URL_BACKEND}${path}`, {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      //   },
      // })
      .then((result) => resolve(result.data))
      .catch((err) => reject(err));
  }));

const DELETE = (path) => (
  new Promise((resolve, reject) => {
    axios
      .delete(`${URL_BACKEND}${path}`)
      // .get(`${URL_BACKEND}${path}`, {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      //   },
      // })
      .then((result) => resolve(result.data))
      .catch((err) => reject(err));
  }));

const searchUniversity = (university) => new Promise((resolve, reject) => {
  GET(`/api/university/search/university?univ=${university}`)
    .then((response) => {
      const { status, message, data } = response;

      if (status !== 'success') {
        throw new Error(message);
      }
      resolve(data);
    })
    .catch((error) => {
      // console.log(error.response.status);
      // console.log(error.response.data);
      // console.log(error.response.data.message);
      reject(new Error(error.response.data.message));
    });
});

const getAuthToken = () => new Promise((resolve, reject) => {
  GET('/api/auth/token')
    .then((response) => {
      const { status, message, data } = response;

      if (status !== 'success') {
        throw new Error(message);
      }
      resolve(data);
    })
    .catch((error) => {
      reject(new Error(error.response));
    });
});

const logout = () => new Promise((resolve, reject) => {
  DELETE('/api/auth/logout')
    .then((response) => {
      const { status, message } = response;

      if (status !== 'success') {
        throw new Error(message);
      }
      resolve(message);
    })
    .catch((error) => {
      reject(new Error(error.response));
    });
});

// const getTokenJWT = (university) => new Promise((resolve, reject) => {
//   GET(`/api/university/search/university?univ=${university}`)
//     .then((response) => {
//       const { status, message, data } = response;

//       if (status !== 'success') {
//         throw new Error(message);
//       }
//       resolve(data);

//     })
//     .catch((error) => {
//       console.log(error.response.status);
//       console.log(error.response.data);
//       console.log(error.response.data.message);
//       reject(new Error(error.response.data.message));
//     });
// });

const login = (userdata) => new Promise((resolve, reject) => {
  POST('/api/auth/login', userdata)
    .then((response) => {
      const { status, message, data } = response;

      if (status !== 'success') {
        throw new Error(message);
      }
      resolve(data.accessToken);
    })
    .catch((error) => {
      reject(error.response.data.errors);
    });
});

// const Register = async (data) => {
//   const response = await POST('/register', data);

//   const { status, message } = response;

//   if (status !== 'success') {
//     throw new Error(message);
//   }

//   const { token } = response;

//   return token;
// };
// const sendComment = async (data, id) => {
//   const response = await POST(`/threads/${id}/comments`, data);

//   const { status, message } = response;

//   if (status !== 'success') {
//     throw new Error(message);
//   }

//   const { comment } = response.data;

//   return comment;
// };

// const sendNewThreadomment = async (data) => {
//   const response = await POST('/threads', data);

//   const { status, message } = response;

//   if (status !== 'success') {
//     throw new Error(message);
//   }

//   const { thread } = response.data;

//   return thread;
// };

// const getOwnProfile = async () => {
//   const response = await GET('/users/me');

//   const { status, message } = response;

//   if (status !== 'success') {
//     throw new Error(message);
//   }

//   const { user } = response.data;

//   return user;
// };

// const getAllThreads = async () => {
//   const response = await GET('/threads');

//   const { status, message } = response;

//   if (status !== 'success') {
//     throw new Error(message);
//   }

//   const { threads } = response.data;

//   return threads;
// };

// const getAllUsers = async () => {
//   const response = await GET('/users');

//   const { status, message } = response;

//   if (status !== 'success') {
//     throw new Error(message);
//   }

//   const { users } = response.data;

//   return users;
// };

// const getDetailThread = async (id) => {
//   const response = await GET(`/threads/${id}`);

//   const { status, message } = response;

//   if (status !== 'success') {
//     throw new Error(message);
//   }

//   const { detailThread } = response.data;
//   return detailThread;
// };
// const getAllLeaderboards = async () => {
//   const response = await GET('/leaderboards');

//   const { status, message } = response;

//   if (status !== 'success') {
//     throw new Error(message);
//   }

//   const { leaderboards } = response.data;
//   return leaderboards;
// };

// const sendUpVotes = async (id) => {
//   const response = await POST(`/threads/${id}/up-vote`);

//   const { status, message } = response;

//   if (status !== 'success') {
//     throw new Error(message);
//   }

//   const { vote } = response.data;

//   return vote;
// };

// const sendNeutralized = async (id) => {
//   const response = await POST(`/threads/${id}/neutral-vote`);

//   const { status, message } = response;

//   if (status !== 'success') {
//     throw new Error(message);
//   }

//   const { vote } = response.data;

//   return vote;
// };

// const putAccessToken = (token) => localStorage.setItem('accessToken', token);

// const deleteAccessToken = () => localStorage.removeItem('accessToken');

// const getAccessToken = () => localStorage.getItem('accessToken');

// const getUser = (accessToken) => {
//   const user = jwtDecode(accessToken);
//   return user;
// };

export default {
  searchUniversity,
  login,
  putAccessToken,
  deleteAccessToken,
  getAccessToken,
  sendQuestion,
  getAuthToken,
  logout,
  getAnswer,
};
