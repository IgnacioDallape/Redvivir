import React from 'react'
import './entrevistasOnLine.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const EntrevistasOnLine = () => {
    return (
        <>
            <div  style={{ paddingBottom:'5rem'}}>
                <h1 className='d-flex justify-content-center' style={{ paddingTop: '3rem' }}> Entrevistas Online </h1>

                <div>
                    <h3 className='d-flex justify-content-center' style={{ paddingTop: '3rem' }}>Objetivo De Las Entrevistas</h3>
                    <div className='container d-flex justify-content-center' style={{ textAlign: 'justify', paddingTop: '3rem' }} >
                        <p>Las entrevistas online representan una valiosa herramienta para brindar apoyo emocional y asesoramiento psicológico 
                            en la era digital. Al proporcionar acceso fácil, privacidad, flexibilidad y superar barreras geográficas y sociales, 
                            estas entrevistas se han convertido en una opción cada vez más popular y efectiva para aquellos que buscan 
                            mejorar su bienestar emocional. A través de plataformas virtuales, las personas pueden recibir el apoyo necesario y 
                            trabajar en su crecimiento personal desde cualquier lugar, adaptando las sesiones a sus horarios y necesidades individuales. 
                            La tecnología ha abierto nuevas puertas para el cuidado de la salud mental, 
                            y las entrevistas online son un claro ejemplo de ello.
                            <br/>
                            <br/>
                            <b>Accesibilidad y comodidad</b>:
                            El objetivo principal de las entrevistas online es proporcionar un espacio seguro y confidencial donde las personas 
                            puedan expresar sus emociones y recibir orientación psicológica. Al eliminar las barreras físicas y geográficas, 
                            las entrevistas online brindan una oportunidad para acceder a profesionales cualificados desde cualquier lugar 
                            con conexión a Internet. Esto resulta especialmente beneficioso para aquellos que viven en áreas remotas 
                            o tienen dificultades para desplazarse debido a limitaciones físicas o compromisos familiares y laborales.
                            <br/>
                            <b>Privacidad y confidencialidad</b>:
                            Las plataformas de entrevistas online están diseñadas para garantizar la privacidad y la confidencialidad de las sesiones. 
                            Las conversaciones son protegidas y encriptadas, lo que asegura que la información compartida se mantenga segura 
                            y se mantenga en el ámbito privado del cliente y el terapeuta. 
                            Esta confidencialidad es esencial para que los individuos se sientan seguros al abrirse 
                            y compartir sus preocupaciones más íntimas.
                            <br/>
                            <b>Flexibilidad y conveniencia</b>:
                            La realización de entrevistas online ofrece una gran flexibilidad y 
                            conveniencia tanto para el cliente como para el profesional. 
                            Los horarios de las sesiones pueden adaptarse a las necesidades individuales, lo que facilita la conciliación 
                            con otras responsabilidades diarias. Además, no se requiere tiempo de viaje, lo que ahorra tiempo y 
                            reduce el estrés asociado con los desplazamientos.
                            <br/>
                            <b>Superando barreras</b>:
                            Las entrevistas online también ayudan a superar barreras adicionales que podrían dificultar el acceso al apoyo emocional.
                             Algunas personas pueden experimentar ansiedad social o sentirse incómodas al compartir sus problemas cara a cara. 
                             La modalidad online proporciona una sensación de anonimato y puede ayudar a reducir la ansiedad 
                             asociada con las interacciones presenciales. Además, las personas que enfrentan barreras lingüísticas 
                             o culturales pueden encontrar profesionales que hablen su idioma o que estén familiarizados con su contexto cultural, 
                             lo que facilita la comprensión y la conexión emocional.</p>
                             <br/>
                    </div>
                    <div >
                        <h3 className='d-flex justify-content-center container' style={{ paddingTop: '3rem' }}> Encargado de las entrevistas </h3>
                        <div className='d-flex justify-content-center container ' style={{ paddingTop: '3rem' }}>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatem ratione nulla cumque officiis. Possimus, asperiores eligendi quos soluta nobis voluptatem repellat aut. Laudantium quisquam voluptas vel recusandae modi ducimus totam, assumenda magni fuga quos aspernatur iure dicta incidunt nemo molestiae at suscipit blanditiis. Suscipit doloremque maiores molestias ipsum pariatur tempora illum blanditiis! Aspernatur veniam reprehenderit labore quod sed cum accusamus quam ex odit fugit deleniti at quibusdam doloremque ipsum atque recusandae iste sapiente hic officia sit rerum sint, nemo tenetur! Deserunt impedit facere maiores neque animi deleniti doloribus tenetur expedita porro, illo placeat nisi corporis! Sapiente dolores quia id?</p>
                        </div>

                    </div>

                    <div className=' d-flex justify-content-center align-items-center' style={{ paddingTop: '3rem' , gap:'15rem'}}>
                        <div>
                            <img src="https://i.ibb.co/2k1hP7N/entrevista-online.jpg" alt="entrevistas Online" style={{ width: '20rem' }} />
                        </div>
                        <div className=" border " style={{ width: '23%' }}>
                            <p className="border">Lunes:</p>
                            <p className="border">Martes:</p>
                            <p className="border">Miércoles:</p>
                            <p className="border">Jueves:</p>
                            <p className="border">Viernes:</p>
                            <p className="border">Sábado:</p>
                            <p className="border">Domingo:</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default EntrevistasOnLine