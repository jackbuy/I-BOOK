<template>
    <div class="book-item" @click="click">
        <div class="book-item__type">{{ item.type }}</div>
        <div class="book-item__img">
            <img :src="item.cover" alt="">
        </div>
        <div>
            <div class="book-item__name">{{ item.name }}</div>
            <div class="book-item__author">{{ item.author }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        click() {
            this.$emit('click', this.item)
        }
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
