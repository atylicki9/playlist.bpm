import axios from 'axios';
import { API_USERINFO_ENDPOINT } from '../common/constants';


export async function getUserInfo(): Promise<any> {
    axios.post(API_USERINFO_ENDPOINT, {
        token: localStorage.getItem("access_token")
      })
      .then((response) => {
        console.log(response.data.userInfo);
        return response.data.userInfo.id;
      }, (error) => {
        console.log(error);
      });
    }