<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Stock Trader</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <router-link to="/portfolio" activeClass="active" tag="li"> <a href="" class="nav-link">Portfolio</a> </router-link>
        <router-link to="/stocks" activeClass="active" tag="li"> <a href="" class="nav-link">Stocks</a></router-link>
      
    </ul>
    <strong class="navbar-text float-md-right">Funds: {{ funds }}</strong>
    <ul class="navbar-nav float-md-right">
        
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Save & Load
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </li>
        
    </ul>
 

  </div>
</nav> 
</template>

<script>
export default {
    computed:{
        funds(){
            return this.$store.getters.funds;
        }
    }
}
</script>

<style>
    
</style>
