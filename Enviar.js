let enviar = document.getElementById("enviar");
let parte1 = document.getElementById("parte1");
let parte2 = document.getElementById("parte2");
let parte3 = document.getElementById("parte3");
let siguienteSig=document.getElementById("siguiente");
let puntaje= 0;
let pagina = 0;

let mostrarPuntaje=document.getElementById("mostrarPuntaje");

enviar.addEventListener("click",()=>{
  let preguntasSinResponder=[];  
  for(let i=0;i<10;i++)
  {
    if(validarPreguntaRespondida[i]==0)
          preguntasSinResponder.push(i+1);
    
  }
  
  if(preguntasSinResponder.length<1)
  {
      if(puntaje=>6)mostrarPuntaje.style.background="green";
      if(puntaje<6) mostrarPuntaje.style.background="red";
      mostrarPuntaje.innerHTML="Su puntaje es de " + puntaje + " puntos";
      if(puntaje=>8)swal("Excelente Trabajo", "Tu puntaje fue de " + puntaje , "success");
      if(puntaje=>6)swal("Buen Trabajo", "Tu puntaje fue de " + puntaje , "success");
      if(puntaje<6) swal("Tienes que leer un poco mas acerca de nuestras mascotas", "Tu puntaje fue de " + puntaje , "warning");
  }else
  {
      preguntasSinResponder1=preguntasSinResponder.toString();
      preguntasSinResponder=preguntasSinResponder1.replace(/,/g,"-");
      swal("Las siguientes preguntas se encuentran sin responder: ", " "+ preguntasSinResponder , "warning");
  }
})

let siguiente=document.getElementById("siguiente");
let anterior=document.getElementById("anterior");

siguiente.addEventListener("click",()=>{

if(pagina<=2 && pagina>=0){
  pagina++;
  }
if(pagina==1)
{
  parte1.style.display="none";
  parte2.style.display="block";
  parte3.style.display="none";
  enviar.style.display="none";
  siguiente.style.display="block";
}
if(pagina==2)
{
  parte1.style.display="none";
  parte2.style.display="none";
  parte3.style.display="block";
  enviar.style.display="block"
  siguiente.style.display="none";
}
})
anterior.addEventListener("click",()=>{
    if(pagina<=2 && pagina>0){
    pagina--;
   }
    
  if(pagina==0)
  {
    parte1.style.display="block";
    parte2.style.display="none";
    parte3.style.display="none";
    enviar.style.display="none";
    siguiente.style.display="block";
  }
  if(pagina==1)
  {
    parte1.style.display="block";
    parte2.style.display="block";
    parte3.style.display="none";
    enviar.style.display="none";
    siguiente.style.display="block";
  }
  if(pagina==2)
  {
    parte1.style.display="none";
    parte2.style.display="none";
    parte3.style.display="block";
    enviar.style.display="block";
    siguiente.style.display="none";
  }
})