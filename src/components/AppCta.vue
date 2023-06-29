<script>
export default{
    name:"AppCta",
    data(){
        return{}
    }
}
</script>

<template>
<div id="cta" class="wrapper bg-light py-5">
    <div class="container">
        <div class="text-center w-50 mx-auto mb-5 mt-5">
            <h2 class="fs-3">subscribe our newsletter</h2>
            <div class="d-flex justify-content-center">
                <hr>
            </div>
            <span class="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, dignissimos!</span>
            <br>
        </div>

        <div class="input-group mb-3 w-50 mx-auto">
            <input type="text" class="form-control" placeholder="Your email address" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-dark" type="button" id="button-addon2">Subscribe <i class="fa-solid fa-arrow-right arrow"></i></button>
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

    .arrow{
        font-size: 0.9rem;
    }
</style>