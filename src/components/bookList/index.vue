<template>
    <div class="book-list" @click="click">
        <div class="book-list__name">{{ item.name }}</div>
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
