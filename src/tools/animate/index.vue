<template>
    <div class="item"
    :style="{
        width: `${imgWidth}px`,
        height: `${imgHeight}px`,
        opacity,
        transform: `translate(${startX}px, ${startY}px) scale(${sx}, ${sy})`,
    }"
    >
        <img :src="src" alt="">
    </div>
</template>
<style lang="less" scoped>
.item{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    transition: all 1s;
    transform-origin: 0% 0%;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
}
</style>
