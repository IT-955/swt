import request from "@/utils/request";
const BAST_API = process.env.VUE_APP_BASE_API;
export default {
    // 获取列表
    search(page, size, searchMap) {
        return request({
            url: BAST_API + `/goods/list/search/${page}/${size}`,
            method: 'get',
            data: searchMap
        })
    },
    getById(id) {
        return request({
            url: BAST_API + `/goods/${id}`, // 反单引号 ``
            method: 'get'
        })
    },
    // 更新
    update(pojo) {
        return request({
            url: BAST_API + `/goods/${pojo.id}`, // 反单引号 ``
            method: 'put', // put 方式提交
            data: pojo
        })
    },
    deleteById(id) {
        return request({
            url: BAST_API + `/goods/${id}`,  // 反单引号 ``
            method: 'delete', // delete 方式提交
        })
    }
}