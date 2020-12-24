<template>
    <div class="warpper">
        <div class="warpper__header"></div>
        <div class="warpper__main">
            <div class="warpper__main__side">
                <side-bar></side-bar>
            </div>
            <div class="warpper__main__content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
export default {
    components: {
        SideBar
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
