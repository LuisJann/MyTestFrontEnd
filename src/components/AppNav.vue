<script>
export default {
    name:"AppNav",
    data(){
        return{}
    }
}
</script>

<template>
<nav class="navbar navbar-expand-lg fixed-top bg-black bg-opacity-25 rounded-5 rounded-top-0 ">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="/">Demo</a>
    <button class="navbar-toggler text-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-white active" aria-current="page" href="#shop">shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="#product">product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="#blog">blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white " href="#cta">newsletter</a>
        </li>
      </ul>
      <div class="d-flex" >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-white active icon" aria-current="page" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white icon" href="/MyTestFrontEnd/registration"><i class="fa-regular fa-user"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white icon position-relative" href="#"><i class="fa-regular fa-heart"></i> 
            <span class="position-absolute top-40 start-90 translate-middle badge rounded-pill bg-dark badge"> 0 </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white icon position-relative" href="#"><i class="fa-solid fa-cart-shopping"></i>
            <span class="position-absolute top-40 start-90 translate-middle badge rounded-pill bg-dark badge"> 0 </span>
          </a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>
.icon{
  transition: 0.3s;

  .badge{
    font-size: 0.5rem;
  }
}
.icon:hover{
  transform: scale(1.2);
}
</style>