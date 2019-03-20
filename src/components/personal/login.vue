<template>
    <div id="login" class="row">
        <div class="card">
            <div class="card-header">
                用户登陆
            </div>
            <div class="card-body">
                <form>
                    <div class="alert alert-danger" role="alert">
                    错误：XXXXXXX！
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="logInfo.username" placeholder="用户名">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" v-model="logInfo.password" placeholder="密码">
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-danger form-control" @click="submitData">登陆</button>
                    </div>
                    <div class="form-group login-footer float-right">
                        <a href="#">忘记密码</a><router-link to="signUp">免费注册</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                logInfo:{
                    username:'',
                    password:''
                }
            };
        },
        methods:{
            submitData(){
                window.console.log(this.logInfo);
            }
        }
    }
</script>

<style lang="less" scoped>
    #login{
        background-color: red;
        .card{
            margin: 10rem 38% 10rem 38%;
            width: 24%;
            .card-header{
                font-weight: bold;
                font-size: large;
            }
            .card-body{
                text-align: left;
                .login-footer{
                    font-size: 0.5rem;
                    margin-bottom: 0;
                    a{
                        margin-left: 1rem;
                    }
                }
            }
        }
    }
</style>