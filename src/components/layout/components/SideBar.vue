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
        <div
            class="theme"
            @click="handleChangeTheme">
            <i v-if="this.defaultTheme === 'default-theme'" class="iconfont iconrijianmoshi"></i>
            <i v-if="this.defaultTheme === 'dark-theme'" class="iconfont iconyejian"></i>
        </div>
    </div>
</template>

<script>
import storage from '@/utils/storage'
export default {
    data() {
        return {
            defaultTheme: '',
            listData: [
                // {
                //     icon: 'iconshouye2-01',
                //     name: '书城',
                //     path: '/'
                // },
                {
                    icon: 'iconsousuo',
                    name: '搜书',
                    path: '/search'
                },
                {
                    icon: 'iconshujia',
                    name: '书架',
                    path: '/book'
                }
                // {
                //     icon: 'iconwode',
                //     name: '我的',
                //     path: '/my'
                // }
                // {
                //     icon: 'iconshezhi',
                //     name: '设置',
                //     path: '/setting'
                // }
            ]
        }
    },
    computed: {
        currentPath() {
            return this.$route.path
        },
        theme() {
            return storage.get('theme')
        }
    },
    created() {
        this.defaultTheme = this.theme || 'default-theme'
        this.setTheme(this.defaultTheme)
    },
    methods: {
        handleRoute(item) {
            this.$router.push(item.path)
        },
        handleChangeTheme() {
            const theme = this.defaultTheme === 'default-theme' ? 'dark-theme' : 'default-theme'
            this.defaultTheme = theme
            this.setTheme(theme)
            storage.set('theme', theme)
        },
        setTheme(theme) {
            document.querySelector('html').setAttribute('class', theme)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../index.scss';
</style>
