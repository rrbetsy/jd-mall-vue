<template>
    <div
        v-if="active"
        :class="['category-list']"
    >
        <div
            v-for="subItemLists in keywordList"
            :key="subItemLists.keyword"
        >
            <div class="lv2-title">
                {{subItemLists.keyword}}
            </div>
            <ul class="sub-item-list">
                <li
                    class="sub-item"
                    v-for="(subItem,subItemIndex) in subItemLists.level2words"
                    :key="`sub-item${subItemIndex}`"
                >
                    <div class="item-wrap">
                        <transition name='fade'>
                            <img
                                v-if="active"
                                :src="subItem.imageUrl"
                            >
                        </transition>
                        <span>{{subItem.keyword}}</span>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: 'CategoryList',
    props: {
        keywordList: {
            type: Array
            // default: []
        },
        active: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.category-list {
    // display: none;
    .lv2-title {
        padding: 15px 0 15px 15px;
        font-weight: 700;
    }
    .sub-item-list {
        display: flex;
        flex-wrap: wrap;
        .sub-item {
            width: 32.8%;
            overflow: hidden;
            .item-wrap {
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
            }
            img {
                width: 70px;
                height: 70px;
                animation: imgShow 0.3s ease-in-out;
                // opacity: 1;
            }
            span {
                color: #333;
                height: 35px;
                margin-top: 5px;
                -webkit-box-pack: start;
                font-size: 12px;
                color: #686868;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>
