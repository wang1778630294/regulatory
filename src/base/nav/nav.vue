<template>
    <div id="cus-nav">
        <el-row class="tac">
            <el-col class="col" :span="24">
                <el-menu
                    style="height: 100%;"
                    default-active="2"
                    class="el-menu-vertical-demo"
                    :default-active="active"
                    @open="handleOpen"
                    @close="handleClose">

                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">位置信息</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="heatmap" @click="reouterTo('/heatmap')">热力图</el-menu-item>
                            <el-menu-item index="trackquery" @click="reouterTo('/trackquery')">轨迹查询</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>


                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                active:''
            }
        },
        methods:{
            handleOpen:function () {

            },
            handleClose:function () {

            },
            reouterTo: function (pth) {
                this.$router.push({path:pth});
            },
            activeEle:function () {
                let localurl = (window.location.href).split('/');
                if(localurl[localurl.length-1]){
                    this.active = localurl[localurl.length-1];
                }else {
                    this.active = 'monitor';
                }

            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#cus-nav
    height 100%
    .tac
        height 100%
        .col
            height 100%
</style>

