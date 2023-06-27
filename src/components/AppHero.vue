<script>
export default{
    name:"AppHero",
    data(){
        return{}
    }
}
</script>

<template>
<div class="wrapper bg-primary py-5 banner position-relative">
    <div class="container text-center w-50 text-white position-absolute top-50 start-50 translate-middle">
        <h2 class="fs-1">interior decorations</h2>
        <div class="d-flex justify-content-center">
            <hr>
        </div>
        <span class="mt-2 fst-italic">looking furniture for your living room</span>
        <br>
        <div class="btn btn-dark mt-2">shop now <i class="fa-solid fa-arrow-right"></i></div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.banner{
    background-image: url('../assets/img/banner2.jpg');
    background-position: center;
    background-size:cover;
    height: 500px;

    hr{
        width: 100px;
        border-top: 2px solid white;
        opacity: 100;
    }
}
</style>