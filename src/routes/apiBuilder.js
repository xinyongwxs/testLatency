import axios from 'axios';

export const callTestApi = () => {
    const apiUrl = "http://ec2-54-255-215-252.ap-southeast-1.compute.amazonaws.com/api/v1.0/ordersInfo/echo";
    return axios.get(apiUrl);
};