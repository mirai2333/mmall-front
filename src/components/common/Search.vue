<template>
    <div class="row">
        <div class="col-1 offset-2"><span class="logo">MALL</span></div>
        <div class="col-7">
            <div class="form-inline">
                <input style="width: 90%" v-model="search" class="form-control search-box" placeholder="请输入商品名称">
                <button style="width: 9%;margin-left: 1%" type="button" class="btn btn-danger" @click="onSubmit">搜索</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                input10: '',
                search:''
            }
        },
        methods: {
            onSubmit() {
                window.console.log("click");
            }
        }
    }
</script>

<style lang="less" scoped>
    @font-face {
        font-family: 'Hanalei Fill';
        src: url("../../assets/font/HanaleiFill-Regular.ttf");
    }

    .row {
        height: 4rem;
        line-height: 4rem;
        .form-inline{
            height: 100%;
            line-height: 100%;
        }
        .logo {
            font-size: 2rem;
            font-weight: bold;
            color: red;
            font-family: 'Hanalei Fill', cursive;
        }
        .search-box{
            border: 2px solid red;
        }

    }

</style>