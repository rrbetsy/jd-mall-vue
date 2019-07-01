<template>
    <div class="countdown">
        <div class="top-bar">
            <div class="seckill-wrap">
                <div class="tit-img"></div>
                <span class="sk-time">14点场次</span>
                <nut-countdown
                    slot="title"
                    :endTime="end"
                    @on-end="onend"
                />
            </div>
            <a
                href="void(0);"
                class="more_seckill"
            >
                更多秒杀
                <i class="seckill-more-icon"></i>
            </a>
        </div>
        <div class="scroll-wrap">
            <div class="sk-items-wrap">
                <ul class="sk-items">
                    <li
                        class="sk-item"
                        v-for="(item,index) in skItems"
                        :key="index"
                    >
                        <div class="img-wrap">
                            <img
                                :src="item.imgUrl"
                                alt
                            />
                        </div>

                        <p class="price">
                            <i>￥</i>
                            <span>{{item.price}}</span>
                        </p>
                        <p class="origin-price">
                            <i>￥</i>
                            <span>{{item.originPrice}}</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
/* eslint-disable */
export default {
    name: 'Countdown',
    components: {},
    data () {
        return {
            serverTime: Date.now() - 30 * 1000,
            end: Date.now() + 50 * 1000,
            paused: false,
            skItems: [
                {
                    imgUrl:
                        "//img14.360buyimg.com/n1/s150x150_jfs/t1/66703/34/2489/105231/5d0c91a0Ef8dc6e83/ccd4d2ea265f4836.jpg.dpg",
                    price: "129",
                    originPrice: "199"
                },
                {
                    imgUrl:
                        "//img14.360buyimg.com/n1/s150x150_jfs/t1/1517/6/11867/313846/5bd128dfE2737a9b0/37c9d72248e6f2ca.png.webp",
                    price: "129",
                    originPrice: "199"
                },
                {
                    imgUrl:
                        "//img14.360buyimg.com/n1/s150x150_jfs/t1/77918/30/2295/200157/5d0897b1Eb8ba102c/f70ffacd2299f8a3.jpg.dpg",
                    price: "129",
                    originPrice: "199"
                },
                {
                    imgUrl:
                        "//img14.360buyimg.com/n1/s150x150_jfs/t1/77918/30/2295/200157/5d0897b1Eb8ba102c/f70ffacd2299f8a3.jpg.dpg",
                    price: "129",
                    originPrice: "199"
                },
                {
                    imgUrl:
                        "//img14.360buyimg.com/n1/s150x150_jfs/t1/48253/9/3542/20811/5d148f3cEbcfd1c0a/df29329493ed55f0.jpg.dpg",
                    price: "129",
                    originPrice: "199"
                },
                {
                    imgUrl:
                        "//img14.360buyimg.com/n1/s150x150_jfs/t1/66703/34/2489/105231/5d0c91a0Ef8dc6e83/ccd4d2ea265f4836.jpg.dpg",
                    price: "129",
                    originPrice: "199"
                },
                {
                    imgUrl:
                        "//img14.360buyimg.com/n1/s150x150_jfs/t1/48253/9/3542/20811/5d148f3cEbcfd1c0a/df29329493ed55f0.jpg.dpg",
                    price: "129",
                    originPrice: "199"
                },
                {
                    imgUrl:
                        "//img14.360buyimg.com/n1/s150x150_jfs/t1/66703/34/2489/105231/5d0c91a0Ef8dc6e83/ccd4d2ea265f4836.jpg.dpg",
                    price: "129",
                    originPrice: "199"
                }
            ]
        };
    },
    methods: {
        toggle () {
            this.paused = !this.paused;
        },
        onend () {
            console.log("countdown: ended.");
        },
        onpaused (v) {
            console.log("paused: ", v);
        },
        onrestart (v) {
            console.log("restart: ", v);
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.countdown {
    margin: 10px;
    background: #fff;
    .top-bar {
        position: relative;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABYwAAACQBAMAAABZrTKvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUdwTOwQEOcLC+wVFewREfMUFOkNDewQEFoRRvUAAAAIdFJOUwBjfRIrfbNFQmFFfAAAA95JREFUeNrt3M+PEncYB+DdsJu9CsZyXSZdvdJA69UUzJwl2d6ryZ4ljpl/vzPAwOwFjfRFXvM8jfHQ28dP3nm/84Orq6P+eTr4eAUpPfWJAzUGNYYfZTdGjeES/Nar8b/iIKe/ejX+JA5yuu3V+F4c5HTTq/E7cZB+ObYa8wtsFXYK0hq87m63TYVBWte7Gr8QBYn9vWnx74IgtfL108cvYgAAAAAAAOB/crN+9WH8Tg5k9vZxw4NUErt73PksC7IavOpq/GEqDZL683HvpTTIPowfVxPjmJyuDy1eFS/kQUpfDztFUbyRByl3ikOLHx6KwlZBRnf9YVwUnyVCQreH1bgZxsW9REjo/b7F7TAufNhL6hNesWqL7IxHRt1d44ftNJ5IhMQ1Lgo1Jq3++a4lEdLWeFWs1JjsS8W+xZYK8ta4WynUmJS+9s53briR1Ptnw9jjD1K63T/A27iXCAnd9Q94Xg0ip8GzFntRk6RnvNWDEx7ZXfdmsY+YyLpVjHo9FgdJ/XFosQ/8yTuO94/wHPBI687dNn4Bb7ct9lOEpHazHk38MCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPw009lsIAVyG8xaciB/i6eCIHeN58vlwjgmfYvbHouCxGbLDWsFmVvc1rhSY3IvFc1OUdoqSD6N502Ly1KNSV7jZVWZxmSvcdVuFWpM+mlsqSD/btwM5MVUFlyuaePI/x50N9xMYy63xN96Y2LQPf6QFZdq+6j56BsT3cNoSwUX3OKyPF7STdNnWnxi0gOvbEee3+rW0c135n3j08eFCCPTXdbr4XDY9nhw/N/AMD6txfaywHjnZdvi4XBcLY5FrMUnXvRmm9XNPA4bxsOt2p2IONOmxc3mVnlLMKjGZVfjcSXiwBNIuW6uenXlSWjMTtG1uMl4ocZhNd5Ni9qsCIl3ud7XeLyU8E8+gfCjU6JX48oFL2ynqF3yAs2f1XghkOiL3thBOuRi12Y7Gk7av9Q4flqYFSH5Hk547QVPIFE13oesxlE3Kia7PxKOveipcfA0nuymsXdXAmPerm4ueVHTuGuyQREfsxqHLW2TdlI4fZxlNxZyzNK2Hm5LbG2LrvHIJS+Kxx9nnBamcViNd/flR81/tYfRkTFPNsPY44+ww8dke6ei9vZV/BnPw+iQfA9bhZevQreK2qtBoZc7r82fZVp4UTO0xvN6vQvYThEZc1l7bT5yTizr9Xo4HhvGwTHvPmKSRcycmH3HB/6cPo59Uho7J9qAK9+ex8fsA//Y652Az3LZ81sfoT3e/JiKl9vic5aBgAEAAOAs/gMMPUimfCFi9AAAAABJRU5ErkJggg==)
            no-repeat;
        background-size: contain;
        .seckill-wrap {
            display: flex;
            align-items: center;
            .tit-img {
                display: inline-block;
                width: 69px;
                height: 27px;
                margin-top: 8px;
                margin-right: 6px;
                margin-left: 0.45rem;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAAeCAMAAAAsAgFtAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAABEEBAAAAAAAAAAAAAAAAAAAAPArMAAAAAAAAAAAAAAAAAAAAPErMPYzNfEtMfErMPErMPIsMPEsMWUSFAAAAOjBAnMAAAAcdFJOUwBEOb8tifjvCiYWcl/j/tKlT36YixMw37dJXlV6iql8AAADjUlEQVRIx5WX25arIAxAERHxgijW2nbx/995EiCAjnb15GEGRbNzxzKWhXOu2JV0nPfsVmhLjOOoLu6XctIvneOXOrVz1TVNLY1xUXXjnBPFXl0vJ9Osrn4jCufklfPC1vCKuyU6p212tJplMLzNAm/IdGFDPHEpy/tBDG7OzovsmYVbwhN7WEVHwvbsr/rB+Cv0yN1IeG282V2zSquCe30gupwB7xU4OvA1LILHNypjGOdv9th1BE2YrBVuqT9En7n0SspqdyNxVwhhgS+yFLs+9ZHYsgsi5NpEYKPYzwJ+1nd7kQiPmAuiGmtPa/2flcqKN1dS2AnPj5c4W6NCU8/BqDOxa4hE5Dr063VxDHku5Pr/67wXjav5TAy7Jg4FsQb88gOxwYiF9hruiDVWLxF1R2NDztgNHZYVhthEvUA06ii2VA7P2WtiNQyQx3UYcc8SsY4B0WYIq0jEcK0SVQzRh0KGQjmGacTyBHJzqmRfOWOwZozEVbHn26tPUzkRQVsXieIoTUG8DLouNnXviUuacu/p6WNTzrK0XgLxWx7r25GDM9BXoMLIcyTCwGOPadpiHm8Gy3eikle7S0px4Bss58ZpztRrmnZ2S/SN3S0kOCSXMUg6BFI5YeXQOvZjMBvKwGCmGtOzDYDTK5RJFQVDv8R19+P5yO66A48VKw3400LpKu/hND1O53lROaE3E5qIojCmgzU/EPGOiEQ/yRckUrkj0heOwsmlSmK6g6UxHogYrTn3v2sORAx+0L/OYa4KGISYoPfjw57kIk+PJR9NPCB1OpqI2Lk8u2tHoSaiavGg8JYpmuQt1Ax0xT49t/2TG8ceiTb4prL6lEdDOv1Sn/I4F4M2Eg0m4fVi03vbWC4rcSSKYIRIQc1Em3MtU/Ml4uJyhUUizJknNOK+q3Lo6nPlaJ+tJVuciOJgX3UiKpmPr0hkz/3BtsdjY+U4bs7EcCgMOWe5OzTprHJ8c3fMSRkRP1Chn+Mh35Kyfs6T3GtbSZHIRYLGWJrpa35vSEUxJ2Lb+cEGfb8dvk0pqD1OQq2SJz2a3pO5zvTpFJ4JXaWa1TxNPmo/aSJwfx/bnpOpmKGV3F/RJ01BhSaxKn+F1xHUKiLOfR4/kupDhcH22E4TapSyisTiQ5xLOcKPjThe4Mwqf2mECxH/s1oXn/Q9z9Nw2/86eBhp6+1HnP36QTfc/dR5fj5v9j/yD7jPekreIk5zAAAAAElFTkSuQmCC)
                    no-repeat;
                background-size: contain;
            }
            .sk-time {
                font-size: 12px;
                color: #232326;
                font-weight: 700;
                display: inline-block;
                margin-right: 6px;
            }
        }
        span.nut-cd-block {
            width: 18px;
            height: 16px;
            line-height: 17px;
            color: #232326;
            font-size: 12px;
            position: relative;
            margin: 0 1px;
            &::after {
                border-radius: 2px;
                height: 200%;
                content: "";
                width: 200%;
                border: 1px solid #dfdfdf;
                position: absolute;
                top: -1px;
                left: -1px;
                -webkit-transform: scale(0.5);
                transform: scale(0.5);
                -webkit-transform-origin: left top;
                transform-origin: left top;
                z-index: 10;
            }
        }
        .more_seckill {
            position: absolute;
            right: 0;
            top: 0;
            display: inline-block;
            color: #f23030;
            font-size: 10px;
            text-align: right;
            padding-right: 22px;
            line-height: 32.5px;
        }
        .seckill-more-icon {
            display: inline-block;
            width: 11px;
            height: 11px;
            background: url(//wq.360buyimg.com/fd/h5/wxsq_dev/m_jd_index/images/index/arrow_rt.png)
                no-repeat;
            background-size: cover;
            position: absolute;
            right: 8px;
            top: 11px;
        }
    }
    .scroll-wrap{
        overflow: hidden;
    }
    .sk-items-wrap {
        width: 100%;
        font-size: 0;
        height: 120px;
        overflow: hidden;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        padding-left: 5px;
        position: relative;
        .sk-items {
            display: flex;
            position:absolute;
            .sk-item {
                width: 76.3441px;
                text-align: center;
                .img-wrap {
                    padding: 0 5px;
                }
                .price {
                    margin-top: 10px;
                    display: block;
                    color: #e93b3d;
                    line-height: 16px;
                    height: 16px;
                    font-weight: 700;
                    text-align: center;
                    i {
                        font-size: 11px;
                    }
                    span {
                        font-size: 16px;
                    }
                }
                .origin-price {
                    text-decoration: line-through;
                    color: #999;
                    line-height: 12px;
                    margin: 4px 0 11px;
                    text-align: center;
                    padding: 0 2px;
                    display: inline-block;
                    position: relative;
                    i,
                    span {
                        font-size: 12px;
                    }
                }
                img {
                    width: 100%;
                }
            }
        }
    }
}
</style>
