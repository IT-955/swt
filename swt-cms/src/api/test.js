import request from '@/utils/request';
const BASE_URL = '';
request({
    url: BASE_URL,
    method: "post"
}).then(response => {
    console.log(response.data);
}).catch(error => {
    console.log(error);
});