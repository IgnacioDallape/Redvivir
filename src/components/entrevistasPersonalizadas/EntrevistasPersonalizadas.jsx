import React from "react"
import './entrevistasPersonalizadas.css'

const EntrevistasPersonalizadas = () => {
  return (
    <main>
      <article >
        <div className="container pt-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', paddingBottom: '3rem', flexDirection: 'column', alignItems: 'center', flexDirection: "column" }}>

          <div className='text_escucha container' style={{ textAlign: 'justify', paddingRight: '15rem', display: 'flex', alignItems: 'column', bottom: '3rem', padding: '1rem' }} >
            <div style={{ padding: '2rem', paddingRight: '5rem' }}>
              <h3 className='d-flex justify-content-center pt-1'>
                Escucha Activa
              </h3>
              <p style={{ fontFamily: 'Roboto' }}>
                La escucha activa es una habilidad que implica prestar atención plena y respetuosa a lo que el otro está comunicando, 
                tanto verbal como no verbalmente. No se trata solo de oír las palabras, 
                sino de comprender profundamente los sentimientos y las necesidades detrás de ellas. 
                Al ser conscientes de nuestros propios pensamientos y emociones mientras escuchamos, 
                podemos establecer una conexión genuina y apoyar a quienes nos rodean.
                <br/>
                <br/>
                La escucha activa tiene múltiples beneficios para nuestro bienestar emocional y nuestras relaciones:
                <br/>
                <br/>

                <b>Fortalece la empatía</b>: Al escuchar activamente, demostramos a los demás que nos importan sus sentimientos y preocupaciones. 
                Esta actitud empática promueve la confianza y la apertura en las interacciones sociales.
                <br/>

                <b>Mejora la comunicación</b>: Al comprender plenamente lo que el otro intenta transmitir, 
                podemos responder de manera más efectiva y evitar malentendidos. La escucha activa facilita la resolución de conflictos y 
                promueve la colaboración y el trabajo en equipo.
                <br/>

                <b>Fomenta el autoconocimiento</b>: Al estar conscientes de nuestras propias respuestas emocionales mientras escuchamos, 
                podemos aprender más sobre nosotros mismos. La escucha activa nos brinda la oportunidad de explorar nuestros propios prejuicios, 
                creencias y patrones de comunicación.
                <br/></p>
              <h4 className="d-flex justify-content-center pt-5">¿Cómo funciona?</h4>
              <p className="pt-4">
                 Prácticas para desarrollar la Escucha Activa:
                 <br/>
                <br/>
                <b>Estar presente</b>: Dediquemos tiempo y atención exclusiva a la persona que habla. 
                Evitemos distracciones y enfoquémonos en sus palabras y lenguaje no verbal.
                <br/>
                <b>Mantener contacto visual</b>: El contacto visual establece una conexión más profunda y 
                muestra nuestro interés genuino en lo que el otro tiene que decir.
                <br/>
                <b>Hacer preguntas clarificadoras</b>: Para asegurarnos de comprender completamente el mensaje del hablante, 
                hagamos preguntas que permitan aclarar cualquier ambigüedad o confusión.
                <br/>
                <b>Validar emociones</b>: Reconozcamos y validemos las emociones del hablante sin juzgar ni minimizar. 
                Esto les brindará la seguridad de que son escuchados y comprendidos.
                <br/>
                <b>Evitar interrupciones</b>: Dejemos que el hablante termine su expresión antes de responder. 
                Evitemos interrumpir o terminar sus frases por ellos.</p>
            </div>
            <div className='article_activa pt-5'>
              <img src='https://i.ibb.co/k3YZxCx/entrevista-presencial-1.jpg' alt='escucha_activa' style={{ width: '23rem', borderRadius: '10px' }} />
            </div>
          </div>
        </div>
      </article>

      <section className='textBox pb-5'>
        <div className="d-flex flex-column align-items-center pt-5" >
          <form action="" className="p-5" style={{ backgroundColor: 'lightgray', borderRadius: '1rem' }}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" id="name" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Apellido</label>
              <input type="text" name="lastname" id="lastname" className="form-control" />
            </div>

            <div className="form-group">
              <label>Sexo</label>
              <div style={{display:"flex", gap:'10px'}}>

              <div>
                <input type="radio" id="hombre" name="gender" value="hombre" />
                <label htmlFor="hombre">Hombre</label>
              </div>
              <div>
                <input type="radio" id="mujer" name="gender" value="mujer" />
                <label htmlFor="mujer">Mujer</label>
              </div>
              <div>
                <input type="radio" id="nodir" name="gender" value="nodir" />
                <label htmlFor="nodir">Prefiero no decirlo</label>
              </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="celphone">Celular</label>
              <input type="number" name="celphone" id="celphone" className="form-control" />
            </div>

            <div className="form-group pt-3 pb-3">
              <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </section>


      {/* <div class='form_box'>
          <form action="/">
            <h1>Datos para la Consulta</h1>
            <hr />
            <div className="form__box_options">
              <div class='accounttype'>
                <input type='radio' value='None' id='radioOne' name='account' checked />
                <label for='radioOne' class='radio' chec>Entrevista Personalizada</label>
                <input type='radio' value='None' id='radioTwo' name='account' />
                <label for='radioTwo' class='radio'>Consulta</label>
              </div>
              <div className='formulario'>
                <label id='icon' for='name'><i class='icon-user'></i></label>
                <input type='text' name='name' id='name' placeholder='Nombre' maxlength='15' required />
                <label id='icon' for='name'><i class='icon-envelope'></i></label>
                <input type='text' name='name' id='name' placeholder='Correo Electrónico' maxlength='40' required />
              </div>
              <div class='gender'>
                <input type='radio' value='None' id='male' name='gender' />
                <label for='male' class='radio' >Hombre</label>
                <input type='radio' value='None' id='female' name='gender' />
                <label for='female' class='radio'>Mujer</label>
                <input type='radio' value='None' id='noContesta' name='gender' />
                <label for='noContesta' class='radio'>Prefiero no contestar</label>
              </div>
              <div className='form_box_footer'>
                <p>Al enviar su consulta, acepta los <a href=''>términos y condiciones</a>.</p>
                <a href='' class='button'>Enviar Consulta</a>
              </div>
            </div>
          </form>
        </div> */}
    </main>
  )


}

export default EntrevistasPersonalizadas


