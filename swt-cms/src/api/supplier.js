import request from '../utils/request'
const BAST_API = process.env.VUE_APP_BASE_API;
export default {
    getList() {
        return request({
            url: BAST_API + '/supplier/list',
            method: 'get'
        })
    },
    search(page, size, searchMap) {
        return request({
            url: BAST_API + `/supplier/list/search/${page}/${size}`,
            method: 'get',
            data: searchMap
        })
    },
    add(pojo) {
        return request({
            url: BAST_API + '/supplier/add',
            method: 'post',
            data: pojo
        })
    },
    getById(id) {
        return request({
            url: BAST_API + `/supplier/update/${id}`, // 反单引号 ``
            method: 'get'
        })
    },
    update(pojo) {
        return request({
            url: BAST_API + `/supplier/update/${pojo.id}`, // 反单引号 ``
            method: 'put', // put 方式提交
            data: pojo
        })
    },
    deleteById(id) {
        return request({
            url: BAST_API + `supplier/del/${id}`,  // 反单引号 ``
            method: 'delete', // delete 方式提交
        })
    }




}