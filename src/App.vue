<template>
    <div id="app" :class="theme">
        <router-view></router-view>
    </div>
</template>

<script>
import storage from '@/utils/storage'
export default {
    data() {
        return {
            theme: 'default-theme'
        }
    },
    computed: {
        themeData() {
            return storage.get('theme')
        }
    },
    watch: {
        themeData: {
            handler(n, o) {
                console.log(n)
                this.theme = n
            },
            immediate: true
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/reset.scss';
</style>

<style>
@import '//at.alicdn.com/t/font_2290964_nqtwinffg9l.css';
</style>
