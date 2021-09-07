import Vue from 'vue';
import tem from './index.vue';

const Animate = Vue.extend(tem);
export default function ({
  startX,
  startY,
  imgWidth,
  imgHeight,
  endX,
  endY,
  src,
}) {
  const app = new Animate({
    el: document.createElement('div'),
    data() {
      return {
        startX,
        startY,
        imgWidth,
        imgHeight,
        endX,
        endY,
        src,
        sx: 1,
        sy: 1,
        exist: true,
        opacity: 1,
      };
    },
  });
  document.body.appendChild(app.$el);
  // 为了触发动画
  setTimeout(() => {
    app.startX = endX;
    app.startY = endY;
    app.opacity = 0;
    app.sx = 0.1;
    app.sy = 0.1;
  }, 0);
  setTimeout(() => {
    app.exist = false;
  }, 1100);
}
