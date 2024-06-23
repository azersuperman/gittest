<template>
    <div class="about">
        <div class="news">
            <ul>
                <li v-for="item in newsList" :key="item.id">
                    <!-- 第一种写法 -->
                    <!-- <router-link :to="`/new/detail/${item.id}/${item.title}`">{{
                        item.title
                    }}</router-link> -->

                    <!-- 第二种写法 -->
                    <router-link
                        :to="{
                            name: 'xiangqing',
                            params: {
                                id: item.id,
                                title: item.title,
                            },
                        }"
                        >{{ item.title }}</router-link
                    >
                </li>
            </ul>
        </div>
        <div class="show">
            <RouterView></RouterView>
        </div>
    </div>
</template>
<script setup>
import { reactive } from "vue";
import { RouterView, RouterLink } from "vue-router";
const newsList = reactive([
    { id: "zhangkx01", title: "北京" },
    { id: "zhangkx02", title: "杭州" },
    { id: "zhangkx03", title: "美国" },
]);
</script>
<style scoped>
.about {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    height: 100%;
}
.about .news {
    flex: none;
    margin: 30px 30px;
}
.about .news li {
    margin-bottom: 10px;
}
.about .news li::marker {
    color: green;
}
.show {
    width: 100%;

    border: 1px solid black;
    border-radius: 5px;
}
</style>
