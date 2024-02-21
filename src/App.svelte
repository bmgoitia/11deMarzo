
<script>

  /* style:transform={`translate3d(0, ${lv_scrollY * -0.3}px, 0)`} 
  style:transform={`scale(${lv_scrollY * -0.3})`}
  */

  /* import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte' */


  import trenII from './assets/img/trenII.png';
  import explo from './assets/img/explo.png';
  import prueba from './assets/video/prueba.mp4';

  import { onMount } from 'svelte';

  import Fecha from './lib/Fecha.svelte';
  import Guitar from './lib/Guitar.svelte';
  import Son from './lib/Son.svelte';


  const lv_hoy = new Date();

  let lv_day = lv_hoy.getDate();
  let lv_month = lv_hoy.toLocaleString('es-ES', { month: 'short' });
  let lv_year = lv_hoy.getFullYear();

  


  onMount(interSec);

  function interSec(){

    let lv_Contador = document.querySelector('.lv_Contador');

    let lv_Counter = document.querySelector('.lv_cont_fecha');
    

    const options = {
      root: null,
      rootMargin: '0px 0px -30% 0px',
      threshold: 0.2
    };

    

    function ioCallback(entries, observer){
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //console.log('está entrando ' + entry)

          if(entry.target.id === "lv_Counter"){
            console.log("entra el counter por 1a vez");
            lv_day= 11;
            lv_month = "MAR";
            lv_year = 2004;
            

          }else if(entry.target.id === "io_sect1"){
            lv_Counter.classList.add('lv_peq');
            lv_Contador.classList.add('lv_upTop');
            console.log("2º cambio del counter");
            lv_day= 30;
            lv_month = "AGO";
            lv_year = 2001;

            entry.target.querySelector('.lv_Highlight').classList.add('prova');

            

          } else if(entry.target.id === "io_sect2"){
            console.log("3er cambio del counter")
            lv_day= 5;
            lv_month = "SEPT";
            lv_year = 2002;

          } else if(entry.target.id === "io_sect3"){
            console.log("4º cambio del counter")
            lv_day= 29;
            lv_month = "DIC";
            lv_year = 2003;

          }
          
        }
      });
    }

    const observer = new IntersectionObserver(ioCallback, options);

    const obsElements = document.querySelectorAll('.io_bird');

    obsElements.forEach((el) => {observer.observe(el)})


  }
  


let lv_scrollY = 0;



/* $: console.log(1.00 - lv_scrollY * 0.001); */
$: scale_value = 1.00 - lv_scrollY * 0.0050;
 


 </script>


<svelte:window bind:scrollY={lv_scrollY} />


<main>

  <div class="lv_mainContainer">

    <div id="lv_preHeader"></div>

    <div id="lv_Header">
     
      <div class="lv_Obertura">
        <div class="lv_obWrapper">

          <div class="lv_obLayer lv_obLayer1 capaTren">
            <img src={trenII} alt="tren 11-M">
          </div>
          <div class="lv_obLayer lv_obLayer2 capaExpl">
            <div class="lv_explWrapper" style:transform={`scale(${scale_value < 0 ? 0 : scale_value})`}>
              <!-- <img src="./src/assets/img/boom_300.png" alt="explosión 11M"> -->
            </div>
            
          </div>
           

        </div>
          
        
      </div>



      <div class="lv_titBlock" style:transform={`translate3d(0, ${lv_scrollY * -0.3}px, 0)`} >
        <div class="lv_Titular lv_tit">
          <h1>11-M: las señales que España no vio</h1>
        </div>
        <div class="lv_Subti lv_tit">
          <h3>Cómo se gestó el atentado más mortífero de Europa</h3>
        </div>
        <div class="lv_Author lv_tit">
          <p class="lv_auth">Por Ignacio Orovio, Clara Penín, Laura Aragó y Begoña M. Goitia</p>
        </div>
        <div class="lv_titExtra lv_tit">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="25" height="25"><path stroke="#B8B8B8" d="M12,23c-.4,0-.777-.156-1.061-.439L.112,11.733l.707-.707,10.827,10.827c.189,.189,.518,.189,.707,0l10.827-10.827,.707,.707-10.827,10.827c-.283,.283-.66,.439-1.061,.439Zm.471-9.229L23.888,2.354l-.707-.707L12,12.827,.819,1.646,.112,2.354,11.53,13.771c.129,.129,.299,.193,.469,.193s.341-.064,.472-.194Z"/></svg>

          </span>
        </div>
      </div>

    </div>

    <!-- END of header -->

    <div id="lv_Content">

      <div class="lv_Contador">
        <div class="lv_migCont">

          <div class="lv_cont_fecha">
            <Fecha lv_day={lv_day} lv_month={lv_month} {lv_year}/>
            
          </div>

        </div>
      </div>

      <div id="lv_Counter" class="io_bird lv_fakeCounter"></div>



      <div class="lv_inVideo">
        <div class="lv_videoWrapper">
          <video loop muted autoplay>
            <source src={prueba} type="video/mp4">
          </video>
        </div>
        <!-- svelte-ignore a11y-media-has-caption -->
        
      </div>

      

      <div class="lv_Text_block">
        <div class="lv_Text">
          <p class="lv_Par">El once de marzo de 2011 a las siete y 38 minutos de la mañana explotaban dos bombas en la estación del Pozo. Fue el último aviso que recibieron los servicios de emergencia. A los pocos minutos, las vías del tren eran un hormiguero. Centenares de vecinos de vecinos de Puente de Vallecas se convirtieron en las manos que le faltaban a los equipos de rescate. Las imágenes llenaron los telediarios. Un señor empujaba a toda prisa un carro de la compra repleto de botellines de agua. Otros salían de sus casas cargados con mantas y sábanas. Grupos de vecinos, algunos todavía en pijama y otros vestidos con traje y corbata, trasladaban a los heridos con camillas improvisadas con mantas.</p>
  
          <p class="lv_Par">Ese día 191 personas perdieron la vida en las vías del tren. El peor atentado terrorista en la historia de Europa.</p>
  
          <p id="io_sect1" class="lv_Par io_bird"> Este marzo se cumplen 20 años de aquel jueves negro. El 11-M fue una masacre dirigida y diseñada por Al Qaeda, que menos de tres años antes había cometido los atentados de Estados Unidos. Entre ambos atentados hay conexiones que van más allá del número: <span class="lv_Highlight">en España hubo reuniones clave previas al 11-S</span> y en España hubo siempre un vivero de radicales dispuestos a actuar. Desde 2001, numerosas señales y circunstancias señalaban a España como objetivo del terror.</p>
        </div>
  
        <Guitar />
<!--         <section id="lv_Sep1" class="lv_Separ lv_Separ1"> </section>
 -->

        <div class="lv_Text">
          <p class="lv_Par">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p>

          <p class="lv_Par">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p>
  
          <p id="io_sect2" class="lv_Par io_bird"> SEGUNDO CAMBIO Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p>
  
          <p class="lv_Par">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p>
        </div>
  
  


        <div class="lv_Text">
          <p class="lv_Par">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p>
  
          <p class="lv_Par">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p>

          <p class="lv_Par">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p>
  
          <p id="io_sect3" class="lv_Par io_bird"> TERCER CAMBIO Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p>

          <p class="lv_Par">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p>

          <p class="lv_Par">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p>
        </div>
  
  
        <Son />
        

        <div class="lv_Text">
          <p class="lv_Par">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p>
  
          <p class="lv_Par">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p>

          <p class="lv_Par">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde reprehenderit sunt beatae explicabo sint omnis veniam error est ducimus cum, magni cumque veritatis! Porro in temporibus impedit distinctio nemo repellendus tempore minus velit delectus repellat quas neque exercitationem, sit amet rerum praesentium.</p>
  
         
        </div>

      </div>

      

    </div>

    <!-- END of content -->

    <div id="lv_Footer"></div>


  </div>
  
  
</main>

<style>

  /* PROVISIONAL / TESTING */

 

  /* GENERAL */
  .lv_mainContainer{
      background-color: var(--lv_bckgGrey);
      color: white;
    }



  /* HEADER */

  /* Apertura  */
  
    .lv_Obertura{
      /* width: 100vw; */
      height: 50vh;
      position: relative;  /* referencia de todas las capas son posicionamiento absoluto */
      background-color: #fff;
      background-image: url(./assets/img/fonndd.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      
    }

    .lv_obWrapper{
      height: 100%;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
    }

    .lv_obLayer{
      
    }

    .lv_obLayer1{
      width:100%;
      overflow-x: hidden;
    
    }

    
    .lv_obLayer1 img{
      height: 200px;
      width: auto;
      
    }

    

    .lv_obLayer2{
      position: absolute;
      width: 100%;
      height: 100%;
      /* overflow:hidden; */
     
    }

    .lv_explWrapper{
      margin: 0 auto;
      width: 100%;
      height: 100%;
      max-width: 600px;
      background-image: url('./assets/img/explo.png');
      background-repeat: no-repeat;
      background-position: center;
      /* background-size: 100% auto; */
      background-size: 85%;

    }

    /* .lv_obLayer2 img{
      width: 100vw;
      max-width: 700px;
      height: auto;
    } */
  


  /* Zona titulares */

  .lv_titBlock{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 40px 12px;
    text-align: center;
    background-color: rgba(49, 54, 58, 0.5);
  }

  .lv_Titular h1{
    font-family: 'TiemposHeadlineAppMedium';
    font-size: 2.2rem;
    margin: 0 5%;
  }

  

  .lv_Subti h3{
    margin-top: 30px;
    margin-bottom: 20px;
    font-family: 'TiemposHeadlineAppMedium';
    font-size: 1.5rem;
    color: var(--lv_lightGrey);

  }

  .lv_Author p{
    font-family: "Roboto", sans-serif;
    font-weight: 200;
    color: var(--lv_lightGrey);
    font-size: 0.9rem;
  }

  .lv_titExtra{
    margin-top: 30px;

  }


  /* CONTENT */


  /* COUNTER */

  .lv_Contador{
    
    position:sticky;
    top:0px;
    z-index:2;
    
  }

  .lv_cont_fecha{
    text-align: center;
    text-transform: uppercase;
    font-family: 'Solari', serif;
    font-size: 2.3rem; 
    background-color: rgba(49, 54, 58, 0.85);
                       
  }

  

/* 
  @keyframes lv_size {
        0% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
           
        }
        100% {
            transform: scale(0.7);
            -webkit-transform: scale(0.7);
            
        }
    }

    @keyframes lv_moveTop {
        0% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(-15px);
        }
    }
    

  :global(.lv_cont_fecha.lv_peq){
    animation: lv_size 2s forwards;
       
  }

  :global(.lv_Contador.lv_upTop){
    animation: lv_moveTop 2s forwards;

  }

   */



  /* VIDEO */

  .lv_inVideo{ 
    margin-top: 80px;

  }

  .lv_videoWrapper{
    width: 100%;
    height: 100%;
    text-align: center;

  }

  .lv_videoWrapper video{
    width: 100%;
    max-width: 650px;;
    height: 100%;

  }


  /* TEXT */

  .lv_Text_block{
    margin-top: 40px;
    
  }

  .lv_Text{
    margin: 0 auto;

  }


  .lv_Par{
    margin: 0 auto;
    max-width: 650px;
    padding: 20px;
    font-family: 'TiemposTextRegular';
    font-size: 18px;
    line-height: 27px;
    letter-spacing: .1px;
    font-weight: 300;
    text-align: left;
  }


  /* Efecto highlight */

  :global(.prova){
    background-color: transparent;
    background-image: linear-gradient(rgb(236, 13, 243), rgb(236, 13, 243));
    background-repeat: no-repeat;
    background-size: 0% 100%;
    animation: expandBackground 3s cubic-bezier(0.25, 1, 0.5, 1) 0s forwards;
}

  @keyframes expandBackground {
      to {
          background-size: 100% 100%;
      }
  }


  /* Separadores */

  /* .lv_Separ{
    height: 50vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }

  .lv_Separ1{
    background-image: url("./assets/img/bus.png");
    
  }

  .lv_Separ2{
    background-image: url("./assets/img/macdo.png");
  }

  .lv_Separ3{
    background-image: url("./assets/img/bosque.jpeg");
  }
 */

  /* MEDIA QUERIES  */

  @media (min-width: 600px) {

    .lv_Obertura{
      /* width: 100vw; */
      height: 60vh;    
      
    }

    .lv_explWrapper{
      /* background-size: 100% auto; */
      background-size: 90%;
      
    }
  
  }

  @media (min-width: 950px) {
    .lv_Titular h1{
    font-size: 3rem;
  }
  
  }

  @media (min-width: 1280px) {
    .lv_obLayer1 img{
      height: 250px;
      width: 100%;
      
    }
  
  }

  




  
 
</style>
