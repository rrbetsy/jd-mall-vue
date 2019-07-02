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
            activeIndex: 0,
            positionNavCurr: "top",
            editableTabs: [
                {
                    tabTitle: "衣物",
                    iconUrl:
                        "http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg",
                    content: "<p>衣物内容</p>"
                },
                {
                    tabTitle: "日用品",
                    iconUrl:
                        "http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg",
                    content: "<p>日用品内容</p>"
                },
                {
                    tabTitle: "器材",
                    iconUrl:
                        "http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg",
                    content: "<p>运动器材内容</p>"
                },
                {
                    tabTitle: "电影票",
                    iconUrl:
                        "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
                    content: "<p>电影票内容</p>"
                }
            ],
            disableTabs: [
                {
                    tabTitle: "衣物",
                    disable: false,
                    iconUrl:
                        "http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg",
                    content: "<p>衣物内容</p>"
                },
                {
                    tabTitle: "日用品",
                    iconUrl:
                        "http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg",
                    content: "<p>日用品内容</p>"
                },
                {
                    tabTitle: "运动器材",
                    iconUrl:
                        "http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg",
                    content: "<p>运动器材内容</p>"
                },
                {
                    tabTitle: "电影票",
                    iconUrl:
                        "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
                    content: "<p>电影票内容</p>"
                }
            ]
        };
    },
    methods: {
        tabSwitch: function (index, event) {
            console.log(index + "--" + event.target);
        }, tabClick (index) {
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
