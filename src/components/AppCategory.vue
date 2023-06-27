<script>
export default{
    name:"AppCategory",
    data(){
        return{}
    }
}
</script>

<template>
<div class="wrapper bg-light py-5">
    <div class="container d-flex flex-xl-row flex-lg-row  flex-md-row flex-sm-column flex-column justify-content-between">
    
       <div class="card-category position-relative">
        <a href="">
            <img src="../assets/img/lampada.jpg" alt=""> 
            <div class="title text-white position-absolute top-0 start-0 ps-1">
                <h3>lighting collections</h3> 
                <span>Explorer <i class="fa-solid fa-arrow-right"></i></span>
            </div>
        </a>
        </div> 

        <div class="card-category position-relative">
            <a href="">
                <img src="../assets/img/musica.jpg" alt=""> 
                <div class="title text-white position-absolute bottom-0 end-0 pe-1 text-end">
                    <h3>audio decor</h3> 
                    <span>view collections <i class="fa-solid fa-arrow-right"></i></span>
                </div>
            </a>
        </div>

        <div class="card-category position-relative">
            <a href="">
                <img src="../assets/img/nuoviArrivi.jpg" alt=""> 
                <div class="title text-dark position-absolute top-0 start-0 ps-1">
                    <h3>new arrivals</h3> 
                    <span>Shop now <i class="fa-solid fa-arrow-right"></i></span>
                </div>
            </a>
        </div> 
    </div>
</div>    
</template>

<style lang="scss" scoped>
.card-category{
    width: calc(100% / 3 - 10px);
    background-color: black;
    transition: 0.5s;




    .title{

        h3{
            margin-bottom: -5px;
        }
        span{
            font-size: 0.9rem;
        }
    }

    img{
        width: 100%;
    }
}

.card-category:hover{
    transform: scale(1.05);
}

@media only screen and (max-width: 767px) {
        .card-category{
            width: 100%;
            margin:5px 0 5px 0;
        }
    }
</style>