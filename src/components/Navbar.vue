<template>
    <header>
        <div class="navbar">
            <div class="logo"><a href="#">LUM_BLOG</a></div>
        </div>
        <div class="menu">
            <a href="/accueil">Accueil</a>
            <a href="/apropos">A Propos</a>
            <a href="/blog">Articles</a>
        </div>
    </header>
</template>
<script lang="ts" setup>
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a{
    text-decoration: none;
}
header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.3rem;
    padding: 1rem 3rem;
    background: #35363A;
 }
 .logo a{
    color:#fff;
    font-weight: 800;
    border-right: 4px solid #FDF061;
 }
 .menu{
    display: flex;
    gap: 2rem;
 }
 .menu a{
    color: #fff;
 }
.menu a:hover{
    border-bottom: 2px solid #FDF061;
}
</style>