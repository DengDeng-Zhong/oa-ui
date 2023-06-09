/**
 * 角色管理相关的API请求函数
 */
import request from '@/utils/request'

const api_name = '/admin/system/sysRole'

export default {
    /**
     * 获取角色分页列表(带搜索)
     * @param {*} page 
     * @param {*} limit 
     * @param {*} serchObj 
     * @returns 
     */
    getPageList(page,limit,serchObj){
        return request({
            url: `${api_name}/${page}/${limit}`,
            method: 'get',
            params: serchObj
        })
    },
    //角色删除
    removeById(id){
        return request({
            url: `${api_name}/reomve/${id}`,
            method: 'delete'
        })
    },
    //角色添加
    saveRole(role){
        return request({
            url: `${api_name}/save`,
            method: 'post',
            data: role
        })
    },
    getById(id) {
        return request({
            url: `${api_name}/get/${id}`,
            method: 'get'
        })
    },
    updateById(role) {
        return request({
            url: `${api_name}/update`,
            method: 'put',
            data: role
        })
    }
}