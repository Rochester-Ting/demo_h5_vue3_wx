<template>
  <div class="home">
    <div class="title">这是一个home首页</div>

  </div>
</template>
<script setup lang="ts">
/**
 * name: index
 * description:
 * author: rui
 * date: 2024/2/2
 */
import { computed, ref } from 'vue';
import { isWx } from '@/config/wxConfig';
import { getLocation } from '@/config/wxFunction';

const location = ref({
  latitude: 0,
  longitude: 0
});
/**
 * @Author: rui
 * @Description: 获取用户的id
 * @Date: 2024/02/02 11:54:19
 **/
const getUserId = computed(() => {
  return localStorage.getItem('userId');
});
/**
 * @Author: rui
 * @Description: 点击选择照片
 * @Date: 2024/02/02 11:54:29
 **/
const toCameraClick = () => {
  if (isWx()) {
    console.log('pick');
  }
};
/**
 * @Author: rui
 * @Description: 点击定位
 * @Date: 2024/02/02 11:54:37
 **/
const toLocationClick = async () => {
  if (isWx()) {
    const res = await getLocation();
    console.log('getLocation', res);
  }
};
</script>
<style scoped lang="scss">
.home {
  width: px2rem(375);
  .title {
    width: 100%;
    height: px2rem(44);
    background: red;
    color: white;
  }
  .tap-button {
    width: px2rem(80);
    height: px2rem(40);
    background: #25a4bb1a;
    text-align: center;
    line-height: px2rem(40);
    position: fixed;
    left: 0;
    top: 0;
  }
}
</style>
