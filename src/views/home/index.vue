<template>
    <div class="home">
        <div class="recommend">
            <!-- <div class="recommend-title">推荐</div> -->
            <div class="recommend-content">
                <book-item
                    v-for="(item, index) in listData"
                    :key="index"
                    :item="item"
                    class="list">
                </book-item>
            </div>
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
            listData: [
                {
                    cover: require('@/assets/images/cover/1.jpg'),
                    name: '美女总裁的特战兵王',
                    author: '今晚又打老虎',
                    type: '都市小说',
                    lastUpdateTime: '2020-12-24',
                    desc: '白天总裁老婆说，谁要是敢随便乱进对方的房间，谁就是狗。 晚上老婆偷偷推开我的房间，然后冲着我叫了三声：“汪汪汪……”'
                },
                {
                    cover: require('@/assets/images/cover/2.jpg'),
                    name: '美女总裁的龙血保镖',
                    author: '古西风',
                    type: '都市小说',
                    lastUpdateTime: '2020-12-24',
                    desc: '白天总裁老婆说，谁要是敢随便乱进对方的房间，谁就是狗。 晚上老婆偷偷推开我的房间，然后冲着我叫了三声：“汪汪汪……”'
                },
                {
                    cover: require('@/assets/images/cover/3.jpg'),
                    name: '美女总裁的贴身兵王',
                    author: '皮皮猪',
                    type: '都市小说',
                    lastUpdateTime: '2020-12-24',
                    desc: '白天总裁老婆说，谁要是敢随便乱进对方的房间，谁就是狗。 晚上老婆偷偷推开我的房间，然后冲着我叫了三声：“汪汪汪……”'
                },
                {
                    cover: require('@/assets/images/cover/4.jpg'),
                    name: '美女总裁的贴身兵王',
                    author: '皮皮猪',
                    type: '都市小说',
                    lastUpdateTime: '2020-12-24',
                    desc: '白天总裁老婆说，谁要是敢随便乱进对方的房间，谁就是狗。 晚上老婆偷偷推开我的房间，然后冲着我叫了三声：“汪汪汪……”'
                },
                {
                    cover: require('@/assets/images/cover/5.jpg'),
                    name: '美女总裁的特战兵王',
                    author: '今晚又打老虎',
                    type: '都市小说',
                    lastUpdateTime: '2020-12-24',
                    desc: '白天总裁老婆说，谁要是敢随便乱进对方的房间，谁就是狗。 晚上老婆偷偷推开我的房间，然后冲着我叫了三声：“汪汪汪……”'
                },
                {
                    cover: require('@/assets/images/cover/6.jpg'),
                    name: '美女总裁的龙血保镖',
                    author: '古西风',
                    type: '都市小说',
                    lastUpdateTime: '2020-12-24',
                    desc: '白天总裁老婆说，谁要是敢随便乱进对方的房间，谁就是狗。 晚上老婆偷偷推开我的房间，然后冲着我叫了三声：“汪汪汪……”'
                },
                {
                    cover: require('@/assets/images/cover/7.jpg'),
                    name: '美女总裁的贴身兵王',
                    author: '皮皮猪',
                    type: '都市小说',
                    lastUpdateTime: '2020-12-24',
                    desc: '白天总裁老婆说，谁要是敢随便乱进对方的房间，谁就是狗。 晚上老婆偷偷推开我的房间，然后冲着我叫了三声：“汪汪汪……”'
                },
                {
                    cover: require('@/assets/images/cover/8.jpg'),
                    name: '美女总裁的贴身兵王',
                    author: '皮皮猪',
                    type: '都市小说',
                    lastUpdateTime: '2020-12-24',
                    desc: '白天总裁老婆说，谁要是敢随便乱进对方的房间，谁就是狗。 晚上老婆偷偷推开我的房间，然后冲着我叫了三声：“汪汪汪……”'
                },
                {
                    cover: require('@/assets/images/cover/9.jpg'),
                    name: '美女总裁的贴身兵王',
                    author: '皮皮猪',
                    type: '都市小说',
                    lastUpdateTime: '2020-12-24',
                    desc: '白天总裁老婆说，谁要是敢随便乱进对方的房间，谁就是狗。 晚上老婆偷偷推开我的房间，然后冲着我叫了三声：“汪汪汪……”'
                },
                {
                    cover: require('@/assets/images/cover/10.jpg'),
                    name: '美女总裁的贴身兵王',
                    author: '皮皮猪',
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
