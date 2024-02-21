
<script>
    import {tweened} from "svelte/motion";
    import {cubicOut, backIn} from "svelte/easing";
  

    export let lv_day = 0;
    export let lv_month;
    export let lv_year; 
  
    const dValue = tweened(lv_day,{    
      duration: 1500,
      delay: 0,
      easing: cubicOut
    });

    

    const yValue = tweened(lv_year,{    
      duration: 1500,
      delay: 0,
      easing: cubicOut
      
    });

  
  
    const updValue = function(){
      dValue.set(lv_day);
     
      yValue.set(lv_year);
     
    }
  
    $: lv_day, updValue();  
   
    $: lv_year, updValue(); 
    
  
  
  </script>
  
  <div class="lv_contP">

    <div class="lv_contPiece"><p> <span>{Math.round($dValue)}</span></p></div>
    
    <div class="lv_contPiece"><p><span>{lv_month}</span></p></div>
    
    <div class="lv_contPiece"><p><span>{Math.round($yValue)}</span></p></div>
  </div>

  <style>

    .lv_contPiece{
      display: inline-block;
      background-color: #000;
      padding: 7px;
      border: 1px solid grey;
      box-shadow: 3px 3px 5px 3px black;
      

    }

    .lv_contPiece p{
      display: inline-block;
      background-color: #fff;
      
    }

    .lv_contPiece p span{
      display: inline-block;
      font-size: 2.5rem;
      color: #000;
      margin-top: -3px;
      margin-bottom: -3px;
      
      
    }

    
    

  </style>