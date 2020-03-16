import Axios from "axios";
// const link = 'localhost:3000/api/v1/auth/';
const accesstoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNWIyNDBhOGM1YjcyNjdhYmYwNGMxMSIsImlhdCI6MTU4MzQyNDgxMH0.Y_rmOA88W7aJXEioScWylJ2CbQdFnt0ah-v4ivJHRI8";
export default Axios.create({
  baseURL: 'http://localhost:3000/api/v1/auth',
  headers: {
    Authorization: 'Bearer ' + accesstoken,
  }
});
