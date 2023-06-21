import React from 'react'
import './entrevistasOnLine.css'

const EntrevistasOnLine = () => {
    return (
        <>
            <div>
                <h1 className='d-flex justify-content-center' style={{ paddingTop: '3rem' }}> Entrevistas Online </h1>

                <div>
                    <h3 className='d-flex justify-content-center' style={{ paddingTop: '3rem' }}>Objetivo De Las Entrevistas</h3>
                    <div className='container d-flex justify-content-center' style={{ textAlign: 'justify', paddingTop: '3rem' }} >
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusantium vel tempore, aperiam vero totam amet. Ratione nostrum natus, dolore fuga consectetur quas odit itaque esse error officiis amet sunt id consequuntur placeat dolorum minima possimus dicta ex harum blanditiis quod. Nulla, iste, ea error eius veniam, in nesciunt suscipit fugiat debitis quas ipsam quia ex. Accusantium quos, odio excepturi ea aspernatur officia est modi, dicta eos expedita assumenda fugit ut mollitia dolorum eum, deserunt suscipit! Hic debitis doloribus quas ad iste delectus inventore deleniti, recusandae, natus ea maxime placeat velit cupiditate asperiores vel est dolores totam vero nulla aspernatur?</p>

                    </div>
                    <div >
                        <h3 className='d-flex justify-content-center container' style={{ paddingTop: '3rem' }}> Encargado de las entrevistas </h3>
                        <div className='d-flex justify-content-center container ' style={{ paddingTop: '3rem' }}>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatem ratione nulla cumque officiis. Possimus, asperiores eligendi quos soluta nobis voluptatem repellat aut. Laudantium quisquam voluptas vel recusandae modi ducimus totam, assumenda magni fuga quos aspernatur iure dicta incidunt nemo molestiae at suscipit blanditiis. Suscipit doloremque maiores molestias ipsum pariatur tempora illum blanditiis! Aspernatur veniam reprehenderit labore quod sed cum accusamus quam ex odit fugit deleniti at quibusdam doloremque ipsum atque recusandae iste sapiente hic officia sit rerum sint, nemo tenetur! Deserunt impedit facere maiores neque animi deleniti doloribus tenetur expedita porro, illo placeat nisi corporis! Sapiente dolores quia id?</p>
                        </div>

                    </div>

                    <div className='container d-flex'   style={{ paddingTop: '3rem' }}>
                        <div >
                                <img src="https://i.ibb.co/2k1hP7N/entrevista-online.jpg" alt="entrevistas Online" style={{ width: '20rem' }} />

                            {/* <div class=" container border " style={{ width: '23%' }}>
                                <div >
                                    <p class="border">Lunes:</p>
                                    <p class="border">Martes:</p>
                                    <p class="border">Miercoles:</p>
                                    <p class="border">Jueves:</p>
                                    <p class="border">Viernes:</p>
                                    <p class="border">Sabado:</p>
                                    <p class="border">Domingo:</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default EntrevistasOnLine