const noScrollLinks = document.querySelectorAll('.btn');

noScrollLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
  });
});


// boton 41


const btn_41 = document.querySelector('.btn-41');
const btn_41_span_boton = document.querySelector('.btn-41-span-boton');
const btn_41_span_pantalla = document.querySelector('.btn-41-span-pantalla');
const btn_41_span_letras = document.querySelector('.btn-41-span-letras');
const btn_41_span_interfe1 = document.querySelector('.btn-41-span-interfe1');
const btn_41_span_interfe2 = document.querySelector('.btn-41-span-interfe2');

btn_41.addEventListener('click', ()=>{
    if(!btn_41_span_boton.classList.contains('btn-41-span-encendido')){
        btn_41_span_boton.classList.add('btn-41-span-encendido');
        btn_41_span_boton.classList.remove('btn-41-span-apagado');
        btn_41_span_pantalla.classList.add('btn-41-span-pantalla-encendida');
        btn_41_span_letras.classList.add('btn-41-span-letras-encendido');
        btn_41_span_interfe1.style.animationName = 'btn-41-interferencia';
        btn_41_span_interfe2.style.animationName = 'btn-41-interferencia';
        
    }else if(btn_41_span_boton.classList.contains('btn-41-span-encendido')){
        btn_41_span_boton.classList.remove('btn-41-span-encendido');
        btn_41_span_boton.classList.add('btn-41-span-apagado');
        btn_41_span_pantalla.classList.remove('btn-41-span-pantalla-encendida');
        btn_41_span_letras.classList.remove('btn-41-span-letras-encendido');
        btn_41_span_interfe1.style.animationName = 'none';
        btn_41_span_interfe2.style.animationName = 'none';
    
    }
});





// boton 43

const btn_43 = document.querySelector('.btn-43');
const btn_43_spans = document.querySelectorAll('.btn-43-spans');
const btn_43_imagen_span = document.querySelectorAll('.btn-43-imagen-span');


btn_43.addEventListener('click', ()=>{
    if(!btn_43.classList.contains('btn-43-activado')){
        btn_43.classList.add('btn-43-activado');
        btn_43.classList.remove('btn-43-desactivado');
        
        
        btn_43_imagen_span.forEach((btn_43_imagen_span) =>{
            btn_43_imagen_span.classList.add('btn-43-imagen-span-activado');
        });
        
        btn_43_spans.forEach((btn_43_spans, num) => {
        btn_43_spans.classList.remove('btn-43-spans-desactivado');
        btn_43_spans.classList.add(`btn-43-span${num + 1}-activado`);
        });

        
    }else if(btn_43.classList.contains('btn-43-activado')){
        btn_43.classList.remove('btn-43-activado');
        btn_43.classList.add('btn-43-desactivado');

        btn_43_imagen_span.forEach((btn_43_imagen_span) =>{
            btn_43_imagen_span.classList.remove('btn-43-imagen-span-activado');
        });

        btn_43_spans.forEach((btn_43_spans, num) => {
        btn_43_spans.classList.add('btn-43-spans-desactivado');
        btn_43_spans.classList.remove(`btn-43-span${num + 1}-activado`);
        
        });

    }
});


btn_43_spans.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
    });
  });





// boton 46


const btn_46 = document.querySelector('.btn-46');
const btn_46_span1 = document.querySelector('.btn-46-span1');
const btn_46_span5 = document.querySelector('.btn-46-span5');
const btn_46_spans = document.querySelectorAll('.btn-46-spans');
const btn_46_spans_deco = document.querySelectorAll('.btn-46-spans-deco');
const btn_46_decoracion = document.querySelectorAll('.btn-46-decoracion');
const btn_46_decoracion_validar = document.querySelectorAll('.btn-46-decoracion-validar');


btn_46.addEventListener('click', () => {
    const allActivated = Array.from(btn_46_spans).every((span) =>
      span.classList.contains('btn-46-spans-activado')
    );
  
    if (!allActivated) {
      btn_46_spans.forEach((span) => {
        span.classList.add('btn-46-spans-activado');
      });

      btn_46_span1.classList.add('btn-46-span1-activado');
      btn_46_span5.classList.add('btn-46-span5-activado');

      btn_46_spans_deco.forEach((span_deco) => {
        span_deco.classList.add('btn-46-spans-deco-desactivado');
    });

      btn_46_decoracion_validar.forEach((btn_deco) => {
        btn_deco.classList.remove('btn-46-decoracion-desactivado');
        btn_deco.classList.add('btn-46-decoracion');
      });



    } else if(allActivated) {
      btn_46_spans.forEach((span) => {
        span.classList.remove('btn-46-spans-activado');
      });
      
      btn_46_span1.classList.remove('btn-46-span1-activado');
      btn_46_span5.classList.remove('btn-46-span5-activado');

      btn_46_spans_deco.forEach((span_deco) => {
        span_deco.classList.remove('btn-46-spans-deco-desactivado');
        });

      btn_46_decoracion_validar.forEach((btn_deco) => {
        btn_deco.classList.remove('btn-46-decoracion');
        btn_deco.classList.add('btn-46-decoracion-desactivado');
        
      });
      
      
    }
});


btn_46_spans.forEach((btn) => {
    
    btn_46_spans.forEach((btn) => {
        btn.addEventListener('mouseover', () => {
          if (!btn.classList.contains('btn-46-spans-activado')) {
            btn.style.transform = 'scale(1.1)';
          }
        });
      
        btn.addEventListener('mouseleave', () => {
          btn.style.transform = 'scale(1)';
        });
      });
      
    
});



// boton 47



const btn_47 = document.querySelector('.btn-47');
const btn_47_span1 = document.querySelector('.btn-47-span1');
const btn_47_texto1 = document.querySelector('.btn-47-texto1');
const btn_47_span2 = document.querySelector('.btn-47-span2');
const btn_47_span3 = document.querySelector('.btn-47-span3');
const btn_47_decoracion = document.querySelectorAll('.btn-47-decoracion');


btn_47.addEventListener('click', ()=>{
    if(!btn_47_span1.classList.contains('btn-47-span1-activado') &&
       !btn_47_span2.classList.contains('btn-47-span2-activado') &&
       !btn_47_span3.classList.contains('btn-47-span3-activado')){
        
        
        btn_47_span1.classList.add('btn-47-span1-activado');
        btn_47_texto1.style.visibility = 'hidden';
        
        setTimeout(()=>{
            btn_47_span1.style.zIndex = '1';
        },1000);


        btn_47.style.pointerEvents = 'none';
            
        setTimeout(()=>{
            btn_47.style.pointerEvents = 'all';
        },1000);

        setTimeout(()=>{
            btn_47_decoracion.forEach((btn_47_deco)=>{
                btn_47_deco.style.zIndex = '0'
            })
        },250);
        
        


    }else if(btn_47_span1.classList.contains('btn-47-span1-activado') &&
            !btn_47_span2.classList.contains('btn-47-span2-activado') &&
            !btn_47_span3.classList.contains('btn-47-span3-activado')){
        
        btn_47_span2.classList.add('btn-47-span2-activado');
        
        setTimeout(()=>{
            btn_47_span2.style.zIndex = '2';
            
        },1000);

        setTimeout(()=>{
            btn_47.style.pointerEvents = 'all';
        },1000);

    }else if(btn_47_span2.classList.contains('btn-47-span2-activado') && 
             btn_47_span1.classList.contains('btn-47-span1-activado') &&
             !btn_47_span3.classList.contains('btn-47-span3-activado')){
        
        btn_47_span3.classList.add('btn-47-span3-activado');
        
        setTimeout(()=>{
            btn_47_span3.style.zIndex = '3';
            
        },1000);

    }else if(btn_47_span1.classList.contains('btn-47-span1-activado') && 
             btn_47_span2.classList.contains('btn-47-span2-activado') &&
             btn_47_span3.classList.contains('btn-47-span3-activado')){

            setTimeout(()=>{
                btn_47_span1.classList.remove('btn-47-span1-activado');
                btn_47_span1.style.zIndex = '4';
            },2500);

            setTimeout(()=>{
                btn_47_texto1.style.visibility = 'visible';
            },2900);
            
            setTimeout(()=>{
                btn_47_span2.classList.remove('btn-47-span2-activado');
                btn_47_span2.style.zIndex = '3';
                btn_47_span1.style.zIndex = '4';
                btn_47_texto1.style.visibility = 'hidden';
            },1500);
            
            setTimeout(()=>{
                btn_47_span3.classList.remove('btn-47-span3-activado');
                btn_47_span3.style.zIndex = '2';
            },500);

            btn_47.style.pointerEvents = 'none';
            
            setTimeout(()=>{
                btn_47.style.pointerEvents = 'all';
            },3000);



            setTimeout(()=>{
                btn_47_decoracion.forEach((btn_47_deco)=>{
                    btn_47_deco.style.zIndex = '5'
                })
            },2900);
        }


});