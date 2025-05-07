import styles from "./page.module.css";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import Punktt from "@/app/components/punkt/punkt";
import Image from "next/image";
import FeatureList3x from "@/app/components/imgSliderTriple/slider3x";
import slider1 from "../../../../public/png/about-slider1.png"
import slider2 from "../../../../public/png/about-slider2.png"
import slider3 from "../../../../public/png/about-slider3.png"

const featuresData = [
    {
        id: 1,
        title: "Капитальный ремонт",
        link: "",
        image: slider1
      },
      {
        id: 2,
        title: "Офисный ремонт",
        link: "",
        image: slider2
      },
      {
        id: 3,
        title: "Черновой ремонт",
        link: "",
        image: slider3
      },
      {
        id: 4,
        title: "Черновой ремонт++",
        link: "",
        image: slider1
      },
      {
        id: 5,
        title: "Черновой ремонт++++++",
        link: "",
        image: slider2
      },
      {
        id: 6,
        title: "Черновой ремонт+++3^^^^3",
        link: "",
        image: slider3
      },
]

const punkt1 = [
    {
      description: "Для квартир"
    }
]

const punkt2 = [
    {
      description: "Шоурил"
    }
]
  
export default function AboutUs() {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <Header></Header>
            </div>
            <section className={styles.hero}>
            <h1>О компании</h1>
            <hr />
            <div className={styles.main}>
                <Punktt featurePunkt={punkt1}/>
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
                    <h3><span>Первым делом осуществляется выравниванием стен, а также потолка и полов. Затем выполняется полный демонтаж полового покрытия, а также перегородок и стенок.</span></h3>
                    </div>
                </div>
            </div>
            </section>
            <section className={styles.video}>
                <Image
                src="./png/about-video.png"
                alt="video"
                height={1080}
                width={1920}
                quality={100}
                priority
                className={styles.image}
                ></Image>
                <div className={styles.playButton}>
                    <Image
                    src="./svg/play.svg"
                    alt="play"
                    priority
                    width={11.6}
                    height={15.13}
                    className={styles.ico}
                    >
                    </Image>
                </div>
                <h1>Как происходит работа<br />изнутри?</h1>
                <div className={styles.puk}>
                    <Punktt featurePunkt={punkt2} />
                </div>
            </section>
            <section className={styles.advertisement}>
                <h1>Лучшие решения по ремонту и<br />отделке для жителей Сочи!</h1>
                <hr />
                <div className={styles.panel}>
                <FeatureList3x features3x={featuresData} visibleCount={3} />
                <hr />
                </div>
            </section>
            <Footer></Footer>
        </div>
    ) 
}