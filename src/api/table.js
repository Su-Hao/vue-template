import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/banner/list',
    method: 'get',
    params
  })
}
