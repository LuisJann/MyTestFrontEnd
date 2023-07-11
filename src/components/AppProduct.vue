<script>
export default{
    name:"AppProduct",
    data(){
        return{}
    }
}
</script>

<template>
    <div id="product" class="wrapper bg-light py-5">
        <div class="container position-relative pb-5">
            <div class="text-center w-50 mx-auto mb-5">
                <h2 class="fs-3">best selling products</h2>
                <div class="d-flex justify-content-center">
                    <hr>
                </div>
                <span class="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, dignissimos!</span>
                <br>
            </div>
            <div class="row row-cols-lg-5 row-cols-md-3 row-cols-sm-1 row-cols-1">
                <div class="col">
                    <div class="bg-white shadow rounded product position-relative">
                        <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger badge fs-5"> -33% </span>
                        <a href="/MyTestFrontEnd/product">
                        <img src="../assets/img/products/poltrona.png" alt="">
                        </a>
                    </div>
                    <div class="text-center d-flex flex-column">
                        <span class="fw-semibold">Lorem Ipsum</span>
                        <div>
                            <span class="text-body-tertiary text-decoration-line-through">150.00 €</span>
                            <span class="text-danger">100.00€</span>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="bg-white shadow rounded product">
                        <a href="">
                        <img src="../assets/img/products/poltrona.png" alt="">
                        </a>
                    </div>
                    <div class="text-center d-flex flex-column">
                        <span class="fw-semibold">Lorem Ipsum</span>
                        <div>
                            <span class="text-body-tertiary">150.00 €</span>
                        </div>
                    </div>
                </div>
                
                <div class="col">
                    <div class="bg-white shadow rounded product">
                        <a href="">
                        <img src="../assets/img/products/poltrona.png" alt="">
                        </a>
                    </div>
                    <div class="text-center d-flex flex-column">
                        <span class="fw-semibold">Lorem Ipsum</span>
                        <div>
                            <span class="text-body-tertiary">150.00 €</span>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="bg-white shadow rounded product">
                        <a href="">
                        <img src="../assets/img/products/poltrona.png" alt="">
                        </a>
                    </div>
                    <div class="text-center d-flex flex-column">
                        <span class="fw-semibold">Lorem Ipsum</span>
                        <div>
                            <span class="text-body-tertiary">150.00 €</span>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="bg-white shadow rounded product">
                        <a href="">
                        <img src="../assets/img/products/poltrona.png" alt="">
                        </a>
                    </div>
                    <div class="text-center d-flex flex-column">
                        <span class="fw-semibold">Lorem Ipsum</span>
                        <div>
                            <span class="text-body-tertiary">150.00 €</span>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="bg-white shadow rounded product">
                        <a href="">
                        <img src="../assets/img/products/poltrona.png" alt="">
                        </a>
                    </div>
                    <div class="text-center d-flex flex-column">
                        <span class="fw-semibold">Lorem Ipsum</span>
                        <div>
                            <span class="text-body-tertiary">150.00 €</span>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="bg-white shadow rounded product">
                        <a href="">
                        <img src="../assets/img/products/poltrona.png" alt="">
                        </a>
                    </div>
                    <div class="text-center d-flex flex-column">
                        <span class="fw-semibold">Lorem Ipsum</span>
                        <div>
                            <span class="text-body-tertiary">150.00 €</span>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="bg-white shadow rounded product">
                        <a href="">
                        <img src="../assets/img/products/poltrona.png" alt="">
                        </a>
                    </div>
                    <div class="text-center d-flex flex-column">
                        <span class="fw-semibold">Lorem Ipsum</span>
                        <div>
                            <span class="text-body-tertiary">150.00 €</span>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="bg-white shadow rounded product">
                        <a href="">
                        <img src="../assets/img/products/poltrona.png" alt="">
                        </a>
                    </div>
                    <div class="text-center d-flex flex-column">
                        <span class="fw-semibold">Lorem Ipsum</span>
                        <div>
                            <span class="text-body-tertiary">150.00 €</span>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="bg-white shadow rounded product">
                        <a href="">
                        <img src="../assets/img/products/poltrona.png" alt="">
                        </a>
                    </div>
                    <div class="text-center d-flex flex-column">
                        <span class="fw-semibold">Lorem Ipsum</span>
                        <div>
                            <span class="text-body-tertiary">150.00 €</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn btn-dark mt-2 position-absolute bottom-0 start-50 translate-middle-x">
                <div class="mx-auto p-1">
                   <span> Load More</span> <i class="fa-solid fa-arrow-down"></i>
                </div>
                </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.product{
    transition: 0.5s;
    
    img{
        width: 100%;
        padding: 15px;
    }
}

hr{
        width: 100px;
        border-top: 2px solid black;
        opacity: 100;
    }

.product:hover{
       transform: scale(1.03);
    }

</style>