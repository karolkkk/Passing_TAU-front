<template>
    <div id="add-blog">
        <h2>Add a New Concert</h2>
        <form v-if="!submitted">
            <label>Concert Artist:</label>
            <input type="text" v-model.lazy="concert.artist" required />
            <label>Concert Location:</label>
            <input type="text" v-model.lazy="concert.location" required />
            <label>Concert Event Date:</label>
            <input type="text" v-model.lazy="concert.event_date" required />
            
            
            <button v-on:click.prevent="post">Add Concert</button>
        </form>
        <div v-if="submitted">
            <h3>Thanks for adding a concert</h3>
     

        </div>
        
    </div>
</template>

<script>
// Imports
export default {
    data () {
        return {
            concert: {
                artist: '',
                location: '',
                event_date: ''
                 
            },
          
        }
    },
    methods: {
        post: function(){
            this.$http.post('http://localhost:8080/concert', {
                artist: this.concert.artist,
                event_date: this.concert.event_date,
                location: this.concert.location,
                
            }).then(function(data){
                console.log(data);
                this.submitted = true;
            });
        }
    }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}

h3{
    margin-top: 10px;
}

</style>