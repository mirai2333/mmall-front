<template>
    <div class="container-fluid">
        <HeaderComplex/>
        <search/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
    import HeaderComplex from './common/Header-complex'
    import Footer from './common/Footer'
    import Search from './common/Search'

    export default {
        name: 'HelloWorld',
        components: {
            HeaderComplex,
            Footer,
            Search
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        line-height: 60px;
        border-bottom: 1px solid #ddd;
        background-color: #fff;
    }
</style>
