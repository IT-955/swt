import request from '@/utils/request';

const BAST_API = process.env.VUE_APP_BASE_API;

export default {
    loginIn(username, password) {
        return request({
            method: 'post',
            url: BAST_API + '/user/login',
            data: {
                username,
                password
            }
        });
    },
    getUserInf(token) {
        return request({
            methods: 'get',
            url: BAST_API + '/user/info/' + token
        })
    },
    logout(token) {
        return request({
            url: BAST_API + '/user/logout',
            method: 'post',
            data: {
                token
            }
        })
    }
}