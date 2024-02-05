/**
 * @Author: rui
 * @Description: 获取是否是微信环境
 * @Date: 2024/01/02 18:00:41
 **/
export const isWx = () => {
  const ua = window.navigator.userAgent.toLowerCase();
  return (
    ua.match(/micromessenger/i) &&
    // @ts-ignore
    ua.match(/micromessenger/i)[0] === 'micromessenger'
  );
};
/**
 * @Author roct
 * @Description 是否是iPhone
 * @Date 2024/01/24 10:37:20
 **/
export const isPhone = () => {
  const ua = window.navigator.userAgent;
  return ua.includes('iPhone');
};

/**
 * @Author roct
 * @Description 是否是安卓
 * @Date 2024/01/24 10:37:40
 **/
export const isAndroid = () => {
  const ua = window.navigator.userAgent;
  return ua.includes('Android');
};

/**
 * @Author: rui
 * @Description: 处理微信环境内的tabbr样式
 * @Date: 2024/01/04 14:23:37
 **/
export const isWxAddHeadCss = () => {
  // if (isWx()) { 375px = 100vw  100px =
  const isMobile = isPhone() || isAndroid();
  // 不是手机
  if (!isMobile) {
    const cssStylePC = document.createElement('style');
    cssStylePC.type = 'text/css';
    cssStylePC.textContent = `
          html {
            margin: auto !important;
            width: 375px !important;
            font-size: 100px !important;
          }
          body {
            margin: auto !important;
            transform: translate(0px,0px) !important;
          }
      `;
    document.head.appendChild(cssStylePC);
  } else {
    console.log('is Phone');
  }
  // }
};
