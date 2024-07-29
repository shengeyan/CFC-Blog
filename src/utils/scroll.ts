import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import nprogress from 'nprogress';
import store from "@/stores";
import useScrollStore from "@/stores/modules/scroll.ts";
const scrollStore = useScrollStore(store);

/**
 * @description 获取百分比滚动数值
 */
export const useScrollPercentage = () => {
  const scrollPercentage = ref(0);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollNumber = Math.round(scrollTop / (scrollHeight - clientHeight) * 100) / 100;
    const percentNumber = scrollNumber * 100;
    scrollPercentage.value = percentNumber;
    if(scrollNumber == 1) {
      nprogress.set(0.999);
    } else {
      nprogress.set(scrollNumber);
    }
  };
  watch(
    () => scrollPercentage.value,
    () => {
      if (scrollPercentage.value) {
        scrollStore.scrollPercentage = scrollPercentage;
      } else {
        scrollPercentage.value = 0;
      }
    }
  );

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
};
