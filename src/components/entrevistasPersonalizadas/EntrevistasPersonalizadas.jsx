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
              <p style={{ fontFamily: 'Roboto' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, possimus dicta. Possimus quis quasi velit veniam beatae perferendis expedita aliquam quo optio ea nostrum dicta neque quibusdam sequi maxime numquam voluptate accusantium error asperiores aspernatur, natus vel eveniet? Dignissimos incidunt error perspiciatis a nihil aut assumenda nesciunt minus. Blanditiis mollitia repellendus quidem ipsa nostrum iusto autem, consequuntur exercitationem et magni ut labore velit architecto rem placeat ad reiciendis eveniet minima deserunt nobis cumque rerum quod totam. Error aperiam, ratione nesciunt ea sequi eius cum rem nobis eaque perspiciatis eum voluptas eos, vero officiis    libero quae, asperiores minus laboriosam sit incidunt!</p>
              <h4 className="d-flex justify-content-center pt-5">¿Cómo funciona?</h4>
              <p className="pt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, alias! Id esse delectus dolorem a optio ipsum sunt eveniet recusandae consequatur praesentium voluptatibus facilis fuga explicabo, vero doloribus sequi nulla iste dolorum illum deleniti? Consequatur animi, ratione hic, sapiente sunt ipsam veritatis beatae assumenda iste, aperiam dicta harum. Quas incidunt illo impedit in ducimus. Quibusdam nulla suscipit magnam enim earum corrupti ratione, odit minima voluptatem, aliquid sint vitae libero reiciendis totam rerum alias voluptas dignissimos. Nobis fuga rem sunt fugit ipsa, nisi qui omnis? Deleniti molestiae aspernatur maiores iusto perferendis sequi non blanditiis tempore similique repudiandae. Iusto, magni esse. Maxime pariatur in aliquid. Ea, fuga sapiente vero ipsa alias quia reprehenderit eveniet, voluptatem aspernatur quibusdam odio omnis, consequatur ipsam iste!
              </p>
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


