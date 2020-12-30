<template>
    <div class="book-detail">
        <div class="book-detail__name">{{ item.name }}</div>
        <div class="book-detail__content" v-html="item.content"></div>
        <div class="book-detail__menu">
            <div class="next" @click="next">下一章</div>
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
        next() {
            this.$emit('next')
        }
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
