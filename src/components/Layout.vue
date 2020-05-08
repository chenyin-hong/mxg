<template>
    <div>
       <Appheader></Appheader>
       <Appleft></Appleft>
       <Appmain></Appmain >

    </div>
</template>

<script>
import Appheader from "./Appheader"
import Appleft from "./Appleft"
import Appmain from "./Appmain"

export default {
    components:{
        Appheader,Appleft,Appmain 
    }
}
</script>

<style scoped>
    .layoutheader{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background: #2d3a4b;;
        line-height: 50px;
    }
    .layoutleft{
        position: absolute;
        top: 50px;
        left: 0;
        bottom: 0;
        width: 300px;
        background: turquoise;
    }
    .layoutmain{
        position: absolute;
        left: 300px;
        top: 50px;
        right: 0;
        bottom: 0;
        padding: 10px;
    }
</style>