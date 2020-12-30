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
                class="list"
                @click="handleClick">
            </book-item>
        </div>
    </div>
</template>

<script>
import BookItem from '@/components/bookItem'
import storage from '@/utils/storage'
import api from '@/utils/api'
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
            const params = {
                keyword: this.keyword
            }
            this.listData = []
            api.search(params).then(res => {
                this.listData = res.data
            })
        },
        handleClick(row) {
            const books = JSON.parse(storage.get('myBooks')) || []
            if (!books.map(item => (item.url)).includes(row.url)) {
                books.unshift(row)
                storage.set('myBooks', JSON.stringify(books))
                alert('成功加入书架')
            } else {
                alert('书架已有这本书啦~')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
