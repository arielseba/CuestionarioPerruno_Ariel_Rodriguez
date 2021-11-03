let botonConfirmar1=document.getElementById("botonConfirmar1");
let pregunta1=document.getElementById("pregunta1");
let botonConfirmar2=document.getElementById("botonConfirmar2");
let pregunta2=document.getElementById("pregunta2");
let validarPreguntaRespondida=[10];

for(let i=0;i<10;i++)   
validarPreguntaRespondida[i]=0;

botonConfirmar1.addEventListener("click",()=>{
    if(pregunta1.value==0)
        swal("Atencion", "No seleccionaste ninguna opcion", "warning");
    
    if(pregunta1.value==1)
    {
        botonConfirmar1.style.background="red";
        botonConfirmar1.disabled;
        pregunta1.disabled="disabled";
        botonConfirmar1.value="Respuesta Incorrecta";
        validarPreguntaRespondida[0]=1;
    }
    if(pregunta1.value==2)
    {
        botonConfirmar1.style.background="red";
        botonConfirmar1.disabled;
        pregunta1.disabled="disabled";
        botonConfirmar1.value="Respuesta Incorrecta"
        validarPreguntaRespondida[0]=1;
    }
    if(pregunta1.value==3)
    {
        botonConfirmar1.style.background="#73AD21";
        botonConfirmar1.value="Respuesta Correcta"
        pregunta1.disabled="disabled";
        botonConfirmar1.disabled;
        puntaje++;
        validarPreguntaRespondida[0]=1;
    }
})

botonConfirmar2.addEventListener("click",()=>{
    
    if(pregunta2.value=="")
            swal("Atencion", "No seleccionaste ninguna opcion", "warning");
    
    if(!pregunta2.value=="")
    {
        if(pregunta2.value=="1994-07-22")
        {
            botonConfirmar2.style.background="#73AD21";
            botonConfirmar2.value="Respuesta Correcta";
            pregunta2.disabled=true;
            puntaje++;
            validarPreguntaRespondida[1]=1;
        }
        else
        {
            botonConfirmar2.style.background="red";
            botonConfirmar2.value="Respuesta Incorrecta";
            pregunta2.disabled=true;
            validarPreguntaRespondida[1]=1;
        }
    }
})

   let p3a=document.getElementById("p3a");
   let p3b=document.getElementById("p3b");
   let p3c=document.getElementById("p3c");
   
   p3a.addEventListener("click",()=>{
       p3a.style.background="red";
       p3a.disabled=true;
       p3b.disabled=true;
       p3c.disabled=true;
       validarPreguntaRespondida[2]=1;
   })
   p3b.addEventListener("click",()=>{
    p3b.style.background="#73AD21";
    p3a.disabled=true;
    p3b.disabled=true;
    p3c.disabled=true;
    puntaje++;
    validarPreguntaRespondida[2]=1;
   })
   p3c.addEventListener("click",()=>{
    p3c.style.background="red";
    p3a.disabled=true;
    p3b.disabled=true;
    p3c.disabled=true;
    validarPreguntaRespondida[2]=1;
   })
   
let p4a=document.getElementById("p4a");
let p4b=document.getElementById("p4b");

p4a.addEventListener("click",()=>{
    p4a.style.background="red";
    p4a.disabled=true;
    p4b.disabled=true;
    validarPreguntaRespondida[3]=1;
})
p4b.addEventListener("click",()=>{
    p4b.style.background="#73AD21";
    p4a.disabled=true;
    p4b.disabled=true;
    puntaje++;
    validarPreguntaRespondida[3]=1;
   })

let p5a=document.getElementById("p5a");
let p5b=document.getElementById("p5b");
let p5c=document.getElementById("p5c");

p5a.addEventListener("click",()=>{
    p5a.style.background="#73AD21";
    p5a.disabled=true;
    p5b.disabled=true;
    p5c.disabled=true;
    puntaje++;
    validarPreguntaRespondida[4]=1;
})
p5b.addEventListener("click",()=>{
    p5b.style.background="red";
    p5a.disabled=true;
    p5b.disabled=true;
    p5c.disabled=true;
    validarPreguntaRespondida[4]=1;
})
p5c.addEventListener("click",()=>{
    p5c.style.background="red";
    p5a.disabled=true;
    p5b.disabled=true;
    p5c.disabled=true;
    validarPreguntaRespondida[4]=1;
})

let p6a=document.getElementById("p6a");
let p6b=document.getElementById("p6b");

p6a.addEventListener("click",()=>{
    p6a.style.background="#73AD21";
    p6a.disabled=true;
    p6b.disabled=true;
    puntaje++;
    validarPreguntaRespondida[5]=1;
  })
p6b.addEventListener("click",()=>{
    p6b.style.background="red";
    p6a.disabled=true;
    p6b.disabled=true;
    validarPreguntaRespondida[5]=1;
   })

let p7a=document.getElementById("p7a");
let p7b=document.getElementById("p7b");
let p7c=document.getElementById("p7c");
let p7d=document.getElementById("p7d");
let p7e=document.getElementById("p7e");
let p7f=document.getElementById("p7f");
let botonConfirmar3=document.getElementById("botonConfirmar3");

botonConfirmar3.addEventListener("click",()=>{
  validarPreguntaRespondida[6]=1;
  if(p7a.checked && p7e.checked && p7f.checked &&  p7b.checked==false && p7c.checked==false && p7d.checked==false)
  {
      botonConfirmar3.value="Respuesta Correcta";
      botonConfirmar3.style.background="#73AD21";
      puntaje++;
      p7a.disabled=true;
      p7b.disabled=true;
      p7c.disabled=true;
      p7d.disabled=true;
      p7e.disabled=true;
      p7f.disabled=true;
      botonConfirmar3.disabled=true;
  }
  else
  {
      botonConfirmar3.value="Respuesta Incorrecta";
      botonConfirmar3.style.background="red";
      p7a.disabled=true;
      p7b.disabled=true;
      p7c.disabled=true;
      p7d.disabled=true;
      p7e.disabled=true;
      p7f.disabled=true;
      botonConfirmar3.disabled=true;
    }
})

let p8a=document.getElementById("p8a");
let p8b=document.getElementById("p8b");
  
p8a.addEventListener("click",()=>{
    p8a.style.background="#73AD21";
    p8a.disabled=true;
    p8b.disabled=true;
    puntaje++;
    validarPreguntaRespondida[7]=1;
  })
   p8b.addEventListener("click",()=>{
    p8b.style.background="red";
    p8a.disabled=true;
    p8b.disabled=true;
    validarPreguntaRespondida[7]=1;
   })

let p9a=document.getElementById("p9a");
let p9b=document.getElementById("p9b");
let p9c=document.getElementById("p9c");
         
p9a.addEventListener("click",()=>{
    p9a.style.background="#73AD21";
    p9a.disabled=true;
    p9b.disabled=true;
    p9c.disabled=true;
    puntaje++;
    validarPreguntaRespondida[8]=1;
})
p9b.addEventListener("click",()=>{
    p9b.style.background="red";
    p9a.disabled=true;
    p9b.disabled=true;
    p9c.disabled=true;
    validarPreguntaRespondida[8]=1;
})
p9c.addEventListener("click",()=>{
    p9c.style.background="red";
    p9a.disabled=true;
    p9b.disabled=true;
    p9c.disabled=true;
    validarPreguntaRespondida[8]=1;
})

let p10a=document.getElementById("p10a");
let p10b=document.getElementById("p10b");
  
p10a.addEventListener("click",()=>{
    p10a.style.background="red";
    p10a.disabled=true;
    p10b.disabled=true;
    validarPreguntaRespondida[9]=1;
    })
p10b.addEventListener("click",()=>{
   p10b.style.background="#73AD21";
   p10a.disabled=true;
   p10b.disabled=true;
   puntaje++;
   validarPreguntaRespondida[9]=1;
   })
    
    



