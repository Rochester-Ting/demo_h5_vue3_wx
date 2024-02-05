import * as ww from '@wecom/jssdk';
/**
 * @Author: rui
 * @Description: 微信登录
 * @Date: 2024/01/02 17:48:54
 **/
export const wxLogin = () => {
  let rUri = window.location.href;
  rUri = encodeURIComponent(rUri);
  // 页面出错以后, 重定向到错误页面
  let errorUri =
    window.location.origin + window.location.pathname + '#/' + 'wxLoginError';
  errorUri = encodeURIComponent(errorUri);
  const baseURL = process.env.VUE_APP_BASE_WX_BASEURL;
  const appId = process.env.VUE_APP_BASE_WX_APPID;
  const agentId = process.env.VUE_APP_BASE_WX_AGENTID;
  let url =
    baseURL +
    'shroot-work-wechat/feign/workWechat/personal/getUserInfoRedirect?redirectUri=' +
    rUri +
    '&errorUri=' +
    errorUri +
    '&corpId=' +
    appId +
    '&agentId=' +
    agentId;
  url = encodeURIComponent(url);
  location.href =
    'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
    appId +
    '&redirect_uri=' +
    url +
    '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';
};

/**
 * @Author: rui
 * @Description: 获取定位信息
 * @Date: 2024/01/03 14:25:50
 * @Return
 **/
export const getLocation = () => {
  return new Promise((resolve, reject) => {
    ww.getLocation({
      // @ts-ignore
      type: 'wgs84',
      success: (res) => {
        resolve(res);
      },
      fail: (error: any) => {
        const err = new Error(error.errMsg);
        reject(err);
      }
    });
  });
};

/**
 * @Author: rui
 * @Description: 打开相机
 * @Date: 2024/01/03 18:14:28
 **/
export const openCamera = () => {
  return new Promise((resolve, reject) => {
    ww.chooseImage({
      count: 1,
      // @ts-ignore
      sizeType: ['original', 'compressed'],
      // @ts-ignore
      sourceType: ['camera', 'album'],
      // @ts-ignore
      defaultCameraMode: 'front',
      isSaveToAlbum: true,
      success: async (response: any) => {
        resolve(response);
      },
      fail: (error: any) => {
        const err = new Error(error.errMsg);
        reject(err);
      }
    });
  });
};
