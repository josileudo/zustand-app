import axios from "axios";

export const api = axios.create({
  baseURL: "https://9e2f7231-27ec-4d89-bc59-fae80e9840ff.mock.pstmn.io",
  params: {
    api_key: "d12dasd1231dsdasd3123",
  },
});
