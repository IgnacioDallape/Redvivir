import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Botones from '../botones/Botones'

const Principal = () => {
    return (
        <>
            <h3 className='centrado' style={{ padding: '20px' }}>¿Quiénes somos?</h3>
            <div className=' container' style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                <div>
                    <img src="https://i.ibb.co/jRXsbPT/Imagen-de-Whats-App-2023-06-15-a-las-19-08-14.jpg" alt="" style={{ width: '30rem' }} />
                </div>
                <div style={{ textAlign: 'justify', paddingLeft: '15rem' }} className='principal__parrafo'>
                    <p style={{ fontFamily: 'Roboto' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, possimus dicta. Possimus quis quasi velit veniam beatae perferendis expedita aliquam quo optio ea nostrum dicta neque quibusdam sequi maxime numquam voluptate accusantium error asperiores aspernatur, natus vel eveniet? Dignissimos incidunt error perspiciatis a nihil aut assumenda nesciunt minus. Blanditiis mollitia repellendus quidem ipsa nostrum iusto autem, consequuntur exercitationem et magni ut labore velit architecto rem placeat ad reiciendis eveniet minima deserunt nobis cumque rerum quod totam. Error aperiam, ratione nesciunt ea sequi eius cum rem nobis eaque perspiciatis eum voluptas eos, vero officiis libero quae, asperiores minus laboriosam sit incidunt!</p>
                </div>
            </div>
            <h3 className='centrado' style={{ padding: '20px' }}> Nuestro Objetivo</h3>

            <div className=' container' style={{ display: 'flex', justifyContent: 'center', padding: '1rem', paddingTop: '0rem'}}>
                <div style={{ textAlign: 'justify', paddingRight: '15rem', display:'flex',alignItems:'center', position:'relative', bottom:'3rem'  }} className='principal__parrafo'>
                    <p style={{ fontFamily: 'Roboto' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, possimus dicta. Possimus quis quasi velit veniam beatae perferendis expedita aliquam quo optio ea nostrum dicta neque quibusdam sequi maxime numquam voluptate accusantium error asperiores aspernatur, natus vel eveniet? Dignissimos incidunt error perspiciatis a nihil aut assumenda nesciunt minus. Blanditiis mollitia repellendus quidem ipsa nostrum iusto autem, consequuntur exercitationem et magni ut labore velit architecto rem placeat ad reiciendis eveniet minima deserunt nobis cumque rerum quod totam. Error aperiam, ratione nesciunt ea sequi eius cum rem nobis eaque perspiciatis eum voluptas eos, vero officiis libero quae, asperiores minus laboriosam sit incidunt!</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/0QN97rL/b4c93276125df370682cef2667e47323.jpg" alt="" style={{ width: '30rem' }} />
                </div>

            </div>
            <h3 className='centrado' style={{paddingTop:'2rem'}}>¡Nuestros Servicios!</h3>
            <div className='container' style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '2rem', paddingBottom: '4rem' }}>
                <div>
                    <h5 className='centrado' style={{paddingTop:'2rem'}}>Entrevistas Presenciales</h5>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'2rem', paddingBottom:'2rem'}}>
                        <img src="https://i.ibb.co/bQ2kK86/a2e0c177a3498cef60fbfc859860d238-1.jpg" alt="" style={{ width: '15rem' }} />
                        <br />
                        <p style={{ textAlign: 'justify', paddingTop:'2rem' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus accusantium modi non omnis dicta consectetur autem cum neque voluptatibus. Debitis impedit quibusdam minus, consectetur dicta porro. Reiciendis, excepturi doloremque!</p>
                    </div>
                </div>
                <div>
                    <h5 className='centrado' style={{paddingTop:'2rem'}}>Entrevistas On-line</h5>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'2rem', paddingBottom:'2rem'}}>
                        <img src="https://i.ibb.co/XXyjMqT/60a39d611fbc5cb64ede206012ef3548.jpg" alt="" style={{ width: '15rem' }} />
                        <br />
                        <p style={{ textAlign: 'justify', paddingTop:'2rem' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus accusantium modi non omnis dicta consectetur autem cum neque voluptatibus. Debitis impedit quibusdam minus, consectetur dicta porro. Reiciendis, excepturi doloremque!</p>
                    </div>

                </div>
            </div>
            <div className='container' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '3rem', paddingBottom: '10rem' }}>
                <h4>Integrantes</h4>
                <div style={{ textAlign: 'justify' }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas consectetur neque voluptatum atque, quo culpa delectus magnam tenetur minus perspiciatis beatae maxime odio enim sapiente ratione odit reprehenderit debitis velit nobis aliquid! Rerum iusto accusamus veritatis reprehenderit odit a qui nemo in nobis optio aliquid neque libero voluptas sint illum dolore voluptatem, debitis distinctio asperiores culpa, tenetur error. Quisquam in nulla voluptatum omnis excepturi quaerat molestias qui ipsum magnam similique a perferendis non fugit enim, quia molestiae alias temporibus ipsa, id voluptatem consectetur ab amet minima. Sint, natus blanditiis odit nostrum perspiciatis expedita dignissimos eum nam explicabo debitis dolor fuga.
                </div>
                <img src="https://i.ibb.co/x8YhyPN/7754bfe359ee45721afe69093259ce34.jpg" alt="" style={{ width: '30rem' }} />

            </div>
        </>
    )
}

export default Principal

