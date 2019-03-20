<template>
    <div id="footer">
        <hr/>
        <el-row>
            <el-col :span="24">
                <a href="#">知乎</a>
                <span>|</span>
                <a href="#">哔哩哔哩</a>
                <span>|</span>
                <a href="#">淘宝</a>
            </el-col>
        </el-row>
        <el-row>
            <p>Copyright &copy; 2019</p>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    p{
        margin: 0;
    }
    a{
        margin-left: 5px;
        margin-right: 5px;
    }
</style>