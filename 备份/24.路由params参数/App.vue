<template>
    <h2 class="title">vue的路由</h2>
    <div class="navigate">
        <RouterLink :to="{ name: 'zhuye' }" active-class="active"
            >首页</RouterLink
        >
        <RouterLink :to="{ path: '/new' }" active-class="active"
            >新闻</RouterLink
        >
        <RouterLink to="/about" active-class="active">关于</RouterLink>
    </div>
    <h2></h2>
    <div class="content">
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts" setup>
import { RouterView, RouterLink } from "vue-router";
</script>
<style scoped>
.title {
    text-align: center;
}
.navigate {
    text-align: center;
    display: flex;
    justify-content: space-evenly;
}
.navigate a {
    min-width: 100px;
    min-height: 40px;
    line-height: 40px;
    background: #9c9a95;
    color: black;
    border-radius: 5px;
}
.navigate .active {
    background: #e3be46;
    color: green;
}
.content {
    text-align: center;
    border: 1px solid #c0c0c0;
    border-radius: 10px;
    margin-top: 10px;
    height: 400px;
}
</style>
