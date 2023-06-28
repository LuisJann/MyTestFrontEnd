<script>
export default {
    name: "AppService",
    data() {
        return {}
    }
}
</script>

<template>
<div class="wrapper py-5">
    <div class="container text-center">
        <div class="row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-2">
            <div class="col d-flex my-5 flex-lg-row flex-md-row flex-sm-column flex-column shipping">
                <div class="me-3">
                    <i class="fa-solid fa-plane-up fs-2 airplane"></i>
                </div>
                <div>
                    <h5 class="text">Free Shipping</h5>
                    <span class="text-secondary">Free Shipping for all US order</span>
                </div>
            </div>

            <div class="col d-flex my-5 flex-lg-row flex-md-row flex-sm-column flex-column support">
                <div class="me-3">
                    <i class="phone fa-solid fa-phone fs-2"></i>
                </div>
                <div>
                    <h5 class="text">Support 24/7</h5>
                    <span class="text-secondary">we support 24 hours a day</span>
                </div>
            </div>

            <div class="col d-flex my-5 flex-lg-row flex-md-row flex-sm-column flex-column return">
                <div class="me-3">
                    <i class="arrow fa-solid fa-arrow-rotate-right fs-2"></i>
                </div>
                <div>
                    <h5 class="text">30 days return</h5>
                    <span class="text-secondary">you have 30 days to return</span>
                </div>
            </div>
            
            <div class="col d-flex my-5 flex-lg-row flex-md-row flex-sm-column flex-column payment">
                <div class="me-3">
                    <i class="fa-solid fa-shield fs-2 shield"></i>
                </div>
                <div>
                    <h5 class="text">Payment 100% Secure</h5>
                    <span class="text-secondary">Payment 100% Secure</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.text{
    font-size: 0.9rem;
    font-weight:bolder;
}

.arrow{
    transition: 1s;
}

.return:hover .arrow{
    transform: rotate(360deg);
}
.shipping{
    position: relative;
}

.airplane{
    transition: .5s;
}

@keyframes fly {
    0%{

        transform: translateY(0);
    }

    50%{
        transform: translateY(-30px);

    }

    100%{
        transform: translateY(0);
    }
}

.shipping:hover .airplane{
    transform-origin: 30px 0px;
    animation: fly .7s linear;
}

.shield{
    transition: .5s;
}

.payment:hover .shield{
    transform: scale(1.3);
}

@keyframes vibration {
    0%{
        transform: rotate(0deg);
    }

    25%{
        transform: rotate(10deg);
    }

    50%{
        transform: rotate(-10deg);
    }

    75%{
        transform: rotate(10deg);
    }

    100%{
        transform: rotate(-10deg);
    }
}

.support:hover .phone{
    animation: vibration 0.3s linear;
    animation-iteration-count: 3;
}

</style>