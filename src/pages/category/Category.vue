<template>
    <div class="category">
        <CategorySearchbar></CategorySearchbar>
        <div class="content-wrap">
            <div class="left">
                <ul>
                    <li
                        :class="['item',index ===activeIndex?'active':'']"
                        v-for="(categoryItem,index) in categoryDatas"
                        :key="categoryItem.areaName"
                        @click="tabClick(index)"
                    >{{categoryItem.areaName}}</li>
                </ul>
            </div>
            <div class="right">
                <CategoryList
                    :active="dataIndex ===activeIndex"
                    v-for="(categoryData,dataIndex) in categoryDatas"
                    :key="`dt${dataIndex}`"
                    :keywordList="categoryData.level1words"
                ></CategoryList>
            </div>
        </div>
    </div>

</template>

<script>
import './index.less'
import data from './data/data'
import CategorySearchbar from './CategorySearchbar'
import CategoryList from './CategoryList'
export default {
    name: 'Category',
    components: {
        CategorySearchbar,
        CategoryList
    },
    mounted: function () {
        // console.log(data.keywordAreas)
    },
    data () {
        return {
            categoryDatas: data.keywordAreas,
            activeIndex: 0
        }
    },
    methods: {
       tabClick (index) {
            this.activeIndex = index
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.category {
    .content-wrap {
        display: flex;
        overflow: hidden;
        height: 100vh;
        padding-top: 44px;
        box-sizing: border-box;
        .left {
            width: 85px;
            position: relative;
            overflow: hidden;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            ul {
                li {
                    height: 46px;
                    line-height: 46px;
                    text-align: center;
                    color: #333;
                    font-size: 14px;
                    &.active {
                        background: #fff;
                        color: #e93b3d;
                    }
                }
            }
            &::-webkit-scrollbar {
                display: none;
            }
        }
        .right {
            flex: 1;
            background: #fff;
            overflow-y: scroll;
        }
    }
}
</style>
