<template>
    <div class="search">
        <div class="search-box">
            <input
                v-model="keyword"
                type="text"
                placeholder="搜书名"
                @keyup.enter="handleSearch($event)">
        </div>
        <div class="search-item">
            <book-item
                v-for="(item, index) in listData"
                :key="index"
                :item="item"
                class="list">
            </book-item>
        </div>
    </div>
</template>

<script>
import BookItem from '@/components/bookItem'
export default {
    components: {
        BookItem
    },
    data() {
        return {
            keyword: '',
            listData: []
        }
    },
    methods: {
        handleSearch() {
            console.log(this.keyword)
            this.listData = [
                {
                    cover: require('@/assets/images/cover/1.jpg'),
                    name: '美女总裁的特战兵王',
                    author: '今晚又打老虎',
                    type: '都市小说',
                    lastUpdateTime: '2020-12-24',
                    desc: '白天总裁老婆说，谁要是敢随便乱进对方的房间，谁就是狗。 晚上老婆偷偷推开我的房间，然后冲着我叫了三声：“汪汪汪……”'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
