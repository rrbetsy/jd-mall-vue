<template>
    <!-- eslint-disable  -->
    <div class="countdown">
        <nut-countdown
            slot="title"
            :endTime="end"
            @on-end="onend"
        />
        <span slot="title">
            <nut-price
                :price="10010.01"
                :needSymbol="true"
                :thousands="false"
            />
        </span>
    </div>
</template>
<script>
/* eslint-disable */

export default {
    name: "Countdown",
    components: {},
    data () {
        return {
            serverTime: Date.now() - 30 * 1000,
            end: Date.now() + 50 * 1000,
            paused: false
        };
    },
    methods: {
        toggle () {
            this.paused = !this.paused;
        },
        onend () {
            console.log('countdown: ended.');
        },
        onpaused (v) {
            console.log('paused: ', v);
        },
        onrestart (v) {
            console.log('restart: ', v);
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
