<template>
    <div class="category">
        <CategorySearchbar></CategorySearchbar>
        <nut-tab
            @tab-switch="tabSwitch"
            positionNav="left"
        >
            <nut-tab-panel
                v-for="category in categoryData"
                :key="category.areaName"
                :tabTitle="category.areaName"
                v-html="category.content"
            ></nut-tab-panel>
        </nut-tab>
    </div>
</template>

<script>
import './index.less'
import data from './data/data'
import CategorySearchbar from './CategorySearchbar'
export default {
    name: 'Category',
    components: {
        CategorySearchbar
    },
    mounted: function () {
        console.log(data.keywordAreas)
    },
    data () {
        return {
            categoryData: data.keywordAreas,
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
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.category {
    padding-top: 44px;
}
</style>
