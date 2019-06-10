<template>
    <div >
        <h1>Login</h1>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <button  type="submit" >Sign in</button>  
    </div>
</template>

<script>
export default {
  name: 'Signin',
  data () {
    return {
      msg: 'Welcome to DRINKING PROJECT'
    }
  }
}
</script>

<style >
   button{
     background-color: #e7e7e7;
   }
</style>