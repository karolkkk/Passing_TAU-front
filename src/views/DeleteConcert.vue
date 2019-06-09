<template>
<div id="show-concerts">
 <h1>All of our concerts</h1>
     <input type="text" v-model="search" placeholder="search" />  
  <div  v-for="concert in filteredConcerts" class="single-concert" >
            <h2>{{ concert.artist | to-uppercase  }}</h2>
            <h2>{{ concert.event_date }}</h2>
            <article>{{ concert.location }}</article>
           <button v-on:click="">remove</button>  
</div>
  
    
</div>
</template>
<script>
export default {
  data(){
      return{
      concerts: [],
       search:"",
    
      }
  },
  methods: {
  },
  created() {
      this.$http.get("http://localhost:8080/concerts/" ).then(function(data){
         
         this.concerts=data.body.slice(0.10);
  })
  },
   computed:{
      filteredConcerts:function(){
          return this.concerts.filter((concert)=>{
           var concertLocationMatch = concert.location.toLowerCase().match(this.search);
            var concertArtistMatch = concert.artist.toLowerCase().match(this.search);
            if (concertLocationMatch || concertArtistMatch) {
                return true;
            }else {
                return false;
            }
          });
      }
   }
  
}
</script>
<style>
#show-concerts{
    max-width: 800px;
    margin: 0 auto;
}
.single-concert{
    padding: 20px;
    margin: 20px;
    box-sizing: border-box;
    background:#eee;
}
button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 20px;
  margin: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

</style>