<template>
    <el-container id="home">
        <el-header class="clear-pad">
            <cus-header></cus-header>
        </el-header>
        <el-container class="clear-pad">
            <el-aside class="clear-pad">
                <cus-nav></cus-nav>
            </el-aside>
            <el-main class="clear-pad">
                <router-view/>
            </el-main>
        </el-container>
        <el-footer class="clear-pad">

        </el-footer>
    </el-container>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#home
    width 100%
    height 100%
    .clear-pad
        padding 0
</style>

