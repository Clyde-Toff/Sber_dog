import './style.css'

const Promo = () => {
   return <>
   <div className='promo__container'>
        <div className="promo__content">
            <div className="promo__text">
                <div className="promo__text_up">Набегай! Разбирай! Любимую собаку угощай!</div>
                <div className="promo__text_down">ммм.. вкуснятина</div>
            </div>
            <div className="promo__img"></div>
        </div>
   </div>
   <div className="promo__container_two">
    <div className="promo__content_one">
        <div className="promo__text">Импортный корм со скидкой</div>
        <div className="promo__img_one"></div>
    </div>
    <div className="promo__content_two">
        <div className="promo__img_two"></div>
        <div className="promo__text">Рекомендуем</div>
    </div>
   </div>
   </>
}

export default Promo;