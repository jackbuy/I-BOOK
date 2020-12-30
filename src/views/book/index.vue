<template>
    <div class="book">
        <template v-if="isBook">
            <book-item
                v-for="(item, index) in listData"
                :key="index"
                :item="item"
                class="list"
                @click="handleList">
            </book-item>
        </template>
        <template v-if="isBookList">
            <book-list
                v-for="(item, index) in bookList"
                :key="index"
                :item="item"
                @click="handleDetail">
            </book-list>
        </template>
        <template v-if="isBookDetail">
            <book-detail
                :item="bookDetail"
                @next="handleNext">
            </book-detail>
        </template>
    </div>
</template>

<script>
import BookItem from '@/components/bookItem'
import BookList from '@/components/bookList'
import BookDetail from '@/components/bookDetail'
import storage from '@/utils/storage'
import api from '@/utils/api'
export default {
    components: {
        BookItem,
        BookList,
        BookDetail
    },
    data() {
        return {
            listData: [],
            bookList: [],
            bookDetail: {},
            nextUrl: '',
            isBook: true,
            isBookList: false,
            isBookDetail: false
        }
    },
    computed: {
        myBooks() {
            return JSON.parse(storage.get('myBooks') || '[]')
        }
    },
    created() {
        this.listData = this.myBooks
    },
    methods: {
        handleList(row) {
            const { url } = row
            api.getBookList({ url }).then(res => {
                this.isBook = false
                this.isBookList = true
                this.bookList = res.data
            })
        },
        handleDetail(row) {
            const { url } = row
            this.nextUrl = this.getNextUrl(url)
            this.isBook = false
            this.isBookList = false
            this.isBookDetail = true
            api.getBookDetail({ url }).then(res => {
                this.bookDetail = res.data
                this.scrollToTop()
            })
        },
        handleNext() {
            this.handleDetail({ url: this.nextUrl })
        },
        getNextUrl(url) {
            const nextIndex = this.bookList.map(item => (item.url)).indexOf(url) + 1
            return this.bookList[nextIndex].url
        },
        scrollToTop() {
            document.querySelector('.warpper__main__content').scrollTo(0, 0)
        }
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
