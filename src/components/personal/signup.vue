<template>
    <div id="signUp" class="row">
        <div class="card">
            <div class="card-header">
                用户注册
            </div>
            <div class="card-body">
                <form>
                    <div v-if="errors.length" class="alert alert-danger" role="alert">
                        <p v-for="error in errors" :key="error">{{ error }}</p>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="signUp.username" placeholder="请输入用户名">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" v-model="signUp.password" placeholder="请输入密码">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" v-model="signUp.passwordConfirm" placeholder="请再次输入密码">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="signUp.phone" placeholder="请输入手机号">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="signUp.email" placeholder="请输入邮箱">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="signUp.question" placeholder="请输入密码提示问题">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="signUp.answer" placeholder="请输入密码提示问题答案">
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-danger form-control" @click="submitData">立即注册</button>
                    </div>
                    <div class="form-group login-footer float-right">
                        <router-link to="login">已有账号？去登陆！</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "signUp",
        data(){
            return {
                errors:[],
                signUp:{
                    username:'',
                    password:'',
                    passwordConfirm:'',
                    phone:'',
                    email:'',
                    question:'',
                    answer:'',
                }
            };
        },
        methods:{
            submitData(){
                this.errors=[];
                if (!this.signUp.username || !this.signUp.password || !this.signUp.passwordConfirm) {
                    this.errors.push("缺少信息!");
                    return;
                }
                if (this.signUp.password !== this.signUp.passwordConfirm) {
                    this.errors.push("两次密码不匹配");
                    return;
                }
                this.$http.post(`/api/user/register`,this.signUp).then(response=>{
                    let res = response.body;
                    if (res.status === 1){
                        this.errors.push(res.msg);
                    }else {
                        this.$router.push('/user/home');
                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    #signUp{
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
                .alert > p{
                    margin-bottom: 0;
                }
            }
        }
    }
</style>