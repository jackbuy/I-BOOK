<template>
    <div class="book-item">
        <div class="book-item__img">
            <img :src="item.cover" alt="">
        </div>
        <div class="book-item__name">{{ item.name }}</div>
        <div class="book-item__author">{{ item.author }}</div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
