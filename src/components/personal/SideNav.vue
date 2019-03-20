<template>
    <div>
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-menu-item index="1">
                <span slot="title">个人中心</span>
            </el-menu-item>
            <el-menu-item index="2">
                <span slot="title">我的订单</span>
            </el-menu-item>
            <el-menu-item index="3">
                <span slot="title">修改密码</span>
            </el-menu-item>
            <el-menu-item index="4">
                <span slot="title">关于MALL</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "SideNav"
    }
</script>

<style scoped>

</style>