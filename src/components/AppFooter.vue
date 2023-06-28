<script>
export default {
    name: "AppFooter",
    data() {
        return {}
    }
}
</script>

<template>
<div class="wrapper bg-light py-5">
    <div class="container">
        <div class="row row-cols-lg-5 row-cols-md-5 row-cols-sm-1 row-cols-1">
            <div class="col">
                <h2 class="fw-bolder">My Test Template</h2>
                <div class="address d-flex my-3 text-secondary">
                    <span class="me-1"><i class="fa-solid fa-location-dot"></i></span>
                    <span> 184 Main RD E, St Albans VIC 3021, Australia</span>
                </div>
                <div class="mail d-flex my-3 text-secondary">
                    <span class="me-1"><i class="fa-solid fa-envelope"></i></span>
                    <span> contact@company.com</span>
                </div>
                <div class="phone d-flex my-3 text-secondary">
                    <span class="me-1"><i class="fa-solid fa-phone"></i></span>
                    <span> +001 2233 456</span>
                </div>
                <div class="social d-flex my-3 text-secondary">
                    <span class="pe-2"><i class="fa-brands fa-facebook-f"></i></span>
                    <span class="pe-2"><i class="fa-brands fa-twitter"></i></span>
                    <span class="pe-2"><i class="fa-solid fa-envelope"></i></span>
                    <span class="pe-2"><i class="fa-brands fa-telegram"></i></span>
                </div>
            </div>

            <div class="col">
                <ul class="list">
                    <h4>Categories</h4>
                    <li class="item ">Men</li>
                    <li class="item ">Women</li>
                    <li class="item ">Accessories</li>
                    <li class="item ">Shoes</li>
                    <li class="item ">Denim</li>
                    <li class="item ">Dress</li>
                </ul>
            </div>

            <div class="col">
                    <ul class="list">
                        <h4>Information</h4>
                        <li class="item">About Us</li>
                        <li class="item">Contact Us</li>
                        <li class="item">Term & Conditions</li>
                        <li class="item">Return & Exchanges</li>
                        <li class="item">Shipping & Delivery</li>
                        <li class="item">Privacy Policy</li>
                    </ul>
                </div>

                <div class="col">
                    <ul class="list">
                        <h4>Useful links</h4>
                        <li class="item">Store Location</li>
                        <li class="item">My Account</li>
                        <li class="item">Latest News</li>
                        <li class="item">Portfolio</li>
                        <li class="item">Size Guide</li>
                        <li class="item">FAQs</li>
                    </ul>
                </div>

                <div class="col">
                    <h4>Instagram</h4>
                    <div class="row  row-cols-2">
                        <div class="col mb-2">
                            <img src="../assets/img/footer/footer1.jpg" alt="">
                        </div>
                        <div class="col mb-2">
                            <img src="../assets/img/footer/footer2.jpg" alt="">
                        </div>
                        <div class="col mb-2">
                            <img src="../assets/img/footer/footer3.jpg" alt="">
                        </div>
                        <div class="col mb-2">
                            <img src="../assets/img/footer/footer4.jpg" alt="">
                        </div>
                        <div class="col mb-2">
                            <img src="../assets/img/footer/footer5.jpg" alt="">
                        </div>
                        <div class="col mb-2">
                            <img src="../assets/img/footer/footer6.jpg" alt="">
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
    .address,.mail,.phone{
        font-size: .8rem;
    }

    .list{
        list-style-type: none;

        .item{
            color: lightgrey;
            padding: .3rem;
            cursor: pointer;
            transition: .3s;
        }
    }

    .item:hover{
        color: black;
    }

    img{
        width: 100%;
    }

</style>