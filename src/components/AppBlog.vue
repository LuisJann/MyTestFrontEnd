<script>
export default{
    name:"AppBlog",
    data(){
        return{}
    }
}
</script>

<template>
<div id="blog" class="wrapper pb-5">
    <div class="container">
        <div class="text-center w-50 mx-auto mb-5 mt-5">
                <h2 class="fs-3">latest blog posts</h2>
                <div class="d-flex justify-content-center">
                    <hr>
                </div>
                <span class="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, dignissimos!</span>
                <br>
            </div>
            <div class="row row-cols-lg-3 row-cols-md-3 row-cols-1">
                <div class="col mt-3 blogPost">
                    <div class="bg-white">
                                <a href="">
                                <img src="../assets/img/blog/turntable.jpg" alt="">
                                </a>
                    </div>
                        <div class="d-flex flex-column">
                            <span class="text-body-tertiary">By admin on february 21, 2020</span>
                            <span class="fw-semibold py-3">The Kozmophone is a Holographic, Bluetooth Turntable</span>
                            <span class="text-body-tertiary">Imagine a Turntable with a portable and detachable phonograph-style horn speaker and miniature</span>
                        </div>
                </div>

                <div class="col mt-3 blogPost">
                    <div class="bg-white">
                                <a href="">
                                <img src="../assets/img/blog/wifiCharger.jpg" alt="">
                                </a>
                    </div>
                        <div class="d-flex flex-column">
                            <span class="text-body-tertiary">By admin on february 21, 2020</span>
                            <span class="fw-semibold py-3">The Kozmophone is a Holographic, Bluetooth Turntable</span>
                            <span class="text-body-tertiary">Imagine a Turntable with a portable and detachable phonograph-style horn speaker and miniature</span>
                        </div>
                </div>

                <div class="col mt-3 blogPost">
                    <div class="bg-white ">
                                <a href="">
                                <img src="../assets/img/blog/vasis.jpg" alt="">
                                </a>
                    </div>
                        <div class="d-flex flex-column">
                            <span class="text-body-tertiary">By admin on february 21, 2020</span>
                            <span class="fw-semibold py-3">The Kozmophone is a Holographic, Bluetooth Turntable</span>
                            <span class="text-body-tertiary">Imagine a Turntable with a portable and detachable phonograph-style horn speaker and miniature</span>
                        </div>
                </div>
            </div>
    </div>

</div>
</template>

<style lang="scss" scoped>
hr{
        width: 100px;
        border-top: 2px solid black;
        opacity: 100;
    }

    img{
        width: 100%;
    }


    .blogPost{
        transition: 0.5s;
    }

    .blogPost:hover{
        transform: scale(1.1);
    }
</style>