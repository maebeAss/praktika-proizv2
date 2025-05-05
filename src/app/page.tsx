import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import OrderButton from "./components/orderButton/orderButton";
import slider1 from "../../public/png/slider1.png"
import slider2 from "../../public/png/slider2.png"
import slider3 from "../../public/png/slider3.png"
import slider4 from "../../public/png/slider4.png"
import slider5 from "../../public/png/slider5.png"
import FeatureList from "./components/imgSliderCounter/slider";
import FeatureList3x from "./components/imgSliderTriple/slider3x";

const featuresData2 = [
  {
    id: 1,
    title: "Капитальный ремонт",
    link: "/",
    image: slider3
  },
  {
    id: 2,
    title: "Офисный ремонт",
    link: "/",
    image: slider4
  },
  {
    id: 3,
    title: "Черновой ремонт",
    link: "/",
    image: slider5
  },
  {
    id: 4,
    title: "Черновой ремонт++",
    link: "/",
    image: slider3
  },
  {
    id: 5,
    title: "Черновой ремонт++++++",
    link: "/",
    image: slider4
  },
  {
    id: 6,
    title: "Черновой ремонт+++3^^^^3",
    link: "/",
    image: slider5
  },
]

const featuresData = [
  {
    id: 1,
    title: "Квартира",
    description: `32,3 м2, Дизайнерский ремонт,\nотельная отделка`,
    price: "234.000 ₽",
    image: slider1
  },
  {
    id: 2,
    title: "Квартира",
    description: `127,7 м2, Премиум ремонт,\nдеревянная отделка`,
    price: "1.324.000 ₽",
    image: slider2
  },
  {
    id: 3,
    title: "Квартира 2",
    description: `32,3 м2, Дизайнерский ремонт,\nотельная отделка`,
    price: "234.000 ₽",
    image: slider1
  },
  {
    id: 4,
    title: "Квартира 2",
    description: `127,7 м2, Премиум ремонт,\nдеревянная отделка`,
    price: "1.324.000 ₽",
    image: slider2
  },
];

export default function Home() {

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
      <Image
        src="/png/home-hero-bg.png"
        alt="ABOBA"
        height={1080}
        width={1920}
        quality={100}
        className={styles.heroBg}
        priority
      />
        <Header />
        <h1>Ремонт и <br />отделка в Сочи</h1>
        <hr />
        <div className={styles.punkt}>
          <div className={styles.rombik}></div>
          <p>Отремонтируем ваш дом, <br />квартиру или комнату</p>
        </div>
      </section>
      <section className={styles.advertisement}>
        <h1>Лучшие решения по ремонту и<br />отделке для жителей Сочи!</h1>
        <hr />
        <div className={styles.panel}>
          <FeatureList3x features3x={featuresData2} visibleCount={3} />
          <hr />
        </div>
      </section>
      <section className={styles.advertisement1}>
        <Image
        src="/png/home-advertisement-bg.png"
        alt="ABOBA"
        height={1080}
        width={1920}
        quality={100}
        className={styles.AdverBg}
        priority
        >  
        </Image>
        <h1>Реализуем проект в вашем <br />помещении!</h1>
        <div className={styles.punkt}>
          <div className={styles.rombik}></div>
          <p>Скидка 20% при первом заказе</p>
        </div>
        <div className={styles.buttonArea}>
          <OrderButton />
        </div>
      </section>
      <section className={styles.readySolutions}>
        <h1>Готовые пакеты услуги, в<br />зависимости от количества м²</h1>
        <div className={styles.solutions}>
        <hr />
          <div className={styles.punkt}>
            <p><span>Подробнее</span></p>
            <p className={styles.price}>от 14.000 ₽ за м²</p>
            <h3>Бюджетная отделка и ремонт квартиры</h3>
            <p id={styles.category}>Для квартир</p>
            <div className={styles.rombik}></div>
          </div>
          <hr />
          <div className={styles.punkt}>
            <p><span>Подробнее</span></p>
            <p className={styles.price}>от 16.000 ₽ за м²</p>
            <h3>Уникальный дизайнерский ремонт</h3>
            <p className={styles.category}>Любая недвижимость</p>
            <div className={styles.rombik}></div>
          </div>
          <hr />
          <div className={styles.punkt}>
            <p><span>Подробнее</span></p>
            <p className={styles.price}>от 40.000 ₽ за м²</p>
            <h3>Премиум, лакшери отделка и ремонт</h3>
            <p className={styles.category}>Любая недвижимость</p>
            <div className={styles.rombik}></div>
          </div>
          <hr />
        </div>
      </section>
      <section className={styles.advantages}>
        <h1>Готовые пакеты услуг, в<br />зависимости от количества м²</h1>
        <hr />
        <div className={styles.main}>
          <div className={styles.punkt}>
            <div className={styles.rombik}></div>
            <p>Для квартир</p>
          </div>
          <div className={styles.content}>
            <div className={styles.krugliki}>
              <div className={styles.kruglik}>
                <p>Уникальный<br />дизайн</p>
              </div>
              <div className={styles.kruglik}>
                <p>Лучшие<br />материалы</p>
              </div>
              <div className={styles.kruglik}>
                <p>Быстрое<br />выполнение</p>
              </div>
            </div>
            <div className={styles.subContent}>
              <h3>Ремонтируем квартиры уже более 20 лет.<br />Имеем более 60 сотрудников в штате,<br />людей, которые горят своим делом.</h3>
              <div className={styles.aboutButtonCont}>
                <div className={styles.aboutButton}>
                  <p>О компании</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.slider3}>
        <h1><span>Наши проекты, выполненные<br />за 10 лет работы</span></h1>
        <hr />
        <div className={styles.sliderArea}>
            <FeatureList features={featuresData} visibleCount={2} />
        </div>
      </section>
      <section className={styles.advertisement2}>
        <Image
        src="/png/home-advertisement-2bg.png"
        alt="ABOBA"
        height={1080}
        width={1920}
        quality={100}
        className={styles.Adver2Bg}
        priority
        >  
        </Image>
        <h1>Захочется приглашать гостей<br />каждый день</h1>
        <div className={styles.punkt}>
          <div className={styles.rombik}></div>
          <p>Скидка 20% при первом заказе</p>
        </div>
        <div className={styles.buttonArea}>
        </div>
      </section>
      <Footer />
    </div>
  );
}