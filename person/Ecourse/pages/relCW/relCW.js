// pages/relCW/relCW.js

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  formSubmit: function (e) {
    if (e.detail.value.sTitle.length == 0 || e.detail.value.sLink.length == 0) {
      wx.showToast({
        title: '请检查必填项',
        icon: 'loading',
        duration: 800
      })
    }
    else {
      wx.request({
        url: 'http://localhost:8080/courseware/release',
        data: {
          sTitle: e.detail.value.sTitle,
          sLink: e.detail.value.sLink,
          sPassword: e.detail.value.sPassword,
          sNote: e.detail.value.sNote
        },
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },

        success: function (res) {
          console.log('success')
        },
        fail: function (res) {
          console.log('failed')
        },
      })
      wx.navigateTo({
        url: '../teaCW/teaCW'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})