<template>
    <div class="side-bar">
        <div
            v-for="(item, index) in listData"
            :key="index"
            :class="{'active': item.path === currentPath}"
            class="list"
            @click="handleRoute(item)">
            <div class="item">
                <div class="item-icon">
                    <i
                        :class="item.icon"
                        class="iconfont"></i>
                </div>
                <div class="item-name">{{ item.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listData: [
                {
                    icon: 'iconshouye2-01',
                    name: '书城',
                    path: '/'
                },
                {
                    icon: 'iconsousuo',
                    name: '搜书',
                    path: '/search'
                },
                {
                    icon: 'iconshujia',
                    name: '书架',
                    path: '/book'
                },
                {
                    icon: 'iconwode',
                    name: '我的',
                    path: '/my'
                },
                {
                    icon: 'iconshezhi',
                    name: '设置',
                    path: '/setting'
                }
            ]
        }
    },
    computed: {
        currentPath() {
            return this.$route.path
        }
    },
    methods: {
        handleRoute(item) {
            this.$router.push(item.path)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../index.scss';
</style>
