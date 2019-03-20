<template>
    <div>
        <el-row>
            <el-col :span="4"><div class="logo">Mall</div></el-col>
            <el-col :span="20"></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Header-Simple"
    }
</script>

<style scoped>
    .logo{
        font-size: 30px;
        font-weight: bold;
        color: red;
    }
</style>