<template>
    <div id="home" class="row">
        <div class="col-2">
            <SideNav/>
        </div>
        <div class="col-10"></div>
    </div>
</template>

<script>
    import SideNav from './SideNav'

    export default {
        name: "home",
        components: {
            SideNav
        }
    }
</script>

<style lang="less" scoped>
    #home{
        margin-top: 1rem;
        margin-bottom: 3rem;
    }
</style>