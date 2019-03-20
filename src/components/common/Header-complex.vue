<template>
    <div id="header" class="row">
        <div class="col-1">
            <div class="row">
                <div class="col"><router-link to="/foo">登陆</router-link></div>
                <div class="col"><a href="#">注册</a></div>
            </div>
        </div>
        <div class="col-3 offset-8">
            <div class="row">
                <div class="col"><i class="el-icon-goods"></i>&nbsp;购物车(0)</div>
                <div class="col">我的订单</div>
                <div class="col">我的Mall</div>
                <div class="col">关于Mall</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header-complex"
    }
</script>

<style scoped>
    #header{
        height: 4rem;
        line-height: 4rem;
        background-color: lightcyan;
    }
</style>