<template>
<div id="show-concerts">
 <h1>All of our concerts</h1>
     <input type="text" v-model="search" placeholder="search" />  
  <div  v-for="concert in filteredConcerts" class="single-concert" >
            <h2>{{ concert.artist  }}</h2>
            <h2>{{ concert.event_date }}</h2>
            <article>{{ concert.location }}</article>
            <input :value="concert.id" id="concertId" type="hidden">
  </div>
   <v-layout row justify-center>
  <v-btn name=delete
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      delete
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Wanna delete?</v-card-title>

        <v-card-text name=usure>
         U sure?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            don't
          </v-btn>

          <v-btn name=yes
            color="green darken-1"
            flat="flat"
            @click.prevent="MYdelete"
          >
            Yaaaaas
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>  
  </div>
  
  
</template>
  
    


<script>
export default {
  data(){
      return{
        dialog: false,
        concerts: [],
        search:"",
    
      }
  },
  methods: {
       greet: function (event) {
           this.$http.get("http://localhost:8080/concerts").then(function(data){
         
         this.concert=data.body;
  })
       },
    MYdelete: function(){
     var concertId = document.getElementById("concertId").value
           this.$http.delete("http://localhost:8080/concerts/"+ concertId);
       }
      
    },
  
  
  created() {
      this.$http.get("http://localhost:8080/concerts").then(function(data){
         
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


</style>