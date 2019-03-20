import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import PersonalLogin from './components/personal/login';
import PersonalSignUp from './components/personal/signup';
import PersonalHome from './components/personal/home';

export default new Router({
    routes: [
        {path: '/', name: 'root', redirect: '/user/login'},
        {path: '/user/login', name: 'PersonalLogin', component: PersonalLogin},
        {path: '/user/signUp', name: 'PersonalSignUp', component: PersonalSignUp},
        {path: '/user/home', name: 'PersonalHome', component: PersonalHome}
    ]
});