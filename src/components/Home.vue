<template>
   <div>
       <h1>Trade or View your Portfolio</h1>
       <h6>You may Save And Your Data</h6>
       <h6>Click on 'End Day' to begin a new Day!</h6>
       <hr>
       <p>Your Funds:{{ funds}}</p>
   </div>
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
