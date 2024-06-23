<template>
    <div class="about">
        <div class="news">
            <ul>
                <li v-for="item in newsList" :key="item.id">
                    <!-- 第二种写法 -->
                    <button @click="showNewsDetail(item)">查看新闻</button>
                    <router-link
                        :to="{
                            name: 'xiangqing',
                            query: {
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
<script setup lang="ts" name="New">
import { reactive } from "vue";
import { RouterView, RouterLink, useRouter } from "vue-router";
const newsList = reactive([
    { id: "zhangkx01", title: "北京" },
    { id: "zhangkx02", title: "杭州" },
    { id: "zhangkx03", title: "美国" },
]);
const router = useRouter();

interface NewsInter {
    id: string;
    title: string;
}
const showNewsDetail = (item: NewsInter) => {
    router.replace({
        name: "xiangqing",
        query: {
            id: item.id,
            title: item.title,
        },
    });
};
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
