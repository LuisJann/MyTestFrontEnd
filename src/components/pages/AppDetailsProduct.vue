<script>
import AppNav from "../AppNav.vue"

export default {
    name: "AppDetailsProduct",
    data() {
        return {}
    },
    components:{
        AppNav
    }
}
</script>

<template>
    <div class="wrapper container">
        <div class="d-flex row mt-5 ">
            <div class="col-1 d-flex flex-column side-img-container">
                <img class="mb-1 side-img active" src="../../assets/img/products/outfit1.jpg" alt="">
                <img class="mb-1 side-img" src="../../assets/img/products/outfit2.jpg" alt="">
                <img class="side-img" src="../../assets/img/products/outfit3.jpg" alt="">
            </div>
            <div class="col-5">
                <img src="../../assets/img/products/outfit1.jpg" alt="">
            </div>
            <div class="col-5 d-flex flex-column">
                <div class="title">
                    <h5>Lorem, ipsum.</h5>
                </div>
                <div class="d-flex flex-lg-row flex-md-row justify-content-between align-items-center flex-column ">
                    <span class="fs-2 text-body-tertiary">$15.00</span>
                    <span class=""> 
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <span class="">(4 reviews)</span>
                    </span>
                </div>
                <div>
                    <span class="text-body-tertiary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta perspiciatis illum ab consequatur voluptatibus similique eius quis asperiores autem nihil!</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img{
    width: 100%;
}
.side-img{
    cursor: pointer;
    transition: .3s;
    opacity: 50%;
}

.side-img:hover{
    opacity: 100%;
}

.side-img-container{
    height: 50px;
}

.active{
    opacity: 100% !important; 
}
</style>