import Mock from 'mockjs'

Mock.mock('https://www.qmtech.com/getBannerList',{
  "list|5-15": [
    {
      'id|+1': 1,
      'title': '@ctitle',
      'status|1': true
    }
  ]
})