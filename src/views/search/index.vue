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
            api.search(params).then(res => {
                this.listData = res.data
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
