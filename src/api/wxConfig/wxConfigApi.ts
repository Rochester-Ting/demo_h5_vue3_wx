import serve from '@/http/request';
/**
 * @Author: rui
 * @Description: 获取微信JSSDK配置
 * @Date: 2024/01/03 16:06:00
 * @RequestParam  corpId, agentId,  url
 **/
export function getJSSDKConfig(params: any) {
  console.log('process.env.VUE_APP_BASE_WX_BASEURL', params);
  return serve.get(
    `${process.env.VUE_APP_BASE_WX_BASEURL}shroot-work-wechat/feign/workWechat/personal/jsSdkConfig`,
    { params }
  );
}
/**
 * @Author: rui
 * @Description: 获取agentConfig的配置
 * @Date: 2024/01/04 14:06:31
 **/
export function getJSSDKAgentConfig(params: any) {
  return serve.get(
    `${process.env.VUE_APP_BASE_WX_BASEURL}shroot-work-wechat/feign/workWechat/personal/agentConfig`,
    { params }
  );
}
