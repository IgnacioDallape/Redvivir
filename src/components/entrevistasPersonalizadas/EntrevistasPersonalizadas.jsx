import React from "react"
import './entrevistasPersonalizadas.css'

const EntrevistasPersonalizadas = () => {
  return (
    <main>
      <article >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'self-start', gap: '2rem', paddingBottom: '3rem', flexDirection: 'column', alignItems: 'center' }}>
          <h3 className='article__escucha ' > Escucha Activa</h3>

          <div style={{ textAlign: 'justify', paddingRight: '15rem', display: 'flex', alignItems: 'column', position: 'inherit', bottom: '3rem' }} className='text_escucha container'>

            <p style={{ fontFamily: 'Roboto' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, possimus dicta. Possimus quis quasi velit veniam beatae perferendis expedita aliquam quo optio ea nostrum dicta neque quibusdam sequi maxime numquam voluptate accusantium error asperiores aspernatur, natus vel eveniet? Dignissimos incidunt error perspiciatis a nihil aut assumenda nesciunt minus. Blanditiis mollitia repellendus quidem ipsa nostrum iusto autem, consequuntur exercitationem et magni ut labore velit architecto rem placeat ad reiciendis eveniet minima deserunt nobis cumque rerum quod totam. Error aperiam, ratione nesciunt ea sequi eius cum rem nobis eaque perspiciatis eum voluptas eos, vero officiis libero quae, asperiores minus laboriosam sit incidunt!</p>
            <div>

              <div className=''>
                <img src='https://i.ibb.co/k3YZxCx/entrevista-presencial-1.jpg' alt='escucha_activa' style={{ width: '25rem', borderRadius: '10px' }} />

              </div>
            </div>
          </div>
        </div>
      </article>
      <hr />

      <section className='textBox' style={{ backgroundColor: 'lightgray' }}>
        <div className='img'>

        </div>
        <div>
          <form action="/">
            <h1>Datos para la Consulta</h1>
            <hr />

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
            <p>Al enviar su consulta, acepta los <a href=''>términos y condiciones</a>.</p>
            <a href='' class='button'>Enviar Consulta</a>

          </form>
        </div>
      </section>
    </main>
  )


}

export default EntrevistasPersonalizadas


