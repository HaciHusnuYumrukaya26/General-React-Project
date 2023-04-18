import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
const ScrollBar = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    console.log(winScroll);
    console.log(height);

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });

  return (
    <div>
      <div className={styles.progressMainWrapper}>
        <div
          className={styles.progressMainStyle}
          style={{ width: `${scrollTop}%` }}
        >

         <span style={{color:"white"}}>{Math.round(scrollTop) }%</span> 
        </div>
      </div>
      <h1 className={styles.scrollTitle}>Lorem</h1>
      <p className={styles.scrollPar}>
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
        oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
        beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl
        boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden
        elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus
        PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık
        yazılımları ile popüler olmuştur. Lorem Ipsum, dizgi ve baskı
        endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen
        bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
        galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
        metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
        kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
        1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının
        yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
        sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
        oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
        beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl
        boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden
        elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus
        PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık
        yazılımları ile popüler olmuştur. Lorem Ipsum, dizgi ve baskı
        endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen
        bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
        galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
        metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
        kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
        1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının
        yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
        sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
        oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
        beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl
        boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden
        elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus
        PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık
        yazılımları ile popüler olmuştur. Lorem Ipsum, dizgi ve baskı
        endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen
        bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
        galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
        metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
        kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
        1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının
        yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
        sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
        oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
        beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl
        boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden
        elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus
        PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık
        yazılımları ile popüler olmuştur. Lorem Ipsum, dizgi ve baskı
        endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen
        bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
        galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
        metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
        kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
        1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının
        yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
        sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
        oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
        beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl
        boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden
        elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus
        PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık
        yazılımları ile popüler olmuştur. Lorem Ipsum, dizgi ve baskı
        endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen
        bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
        galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
        metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
        kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
        1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının
        yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
        sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
        oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
        beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl
        boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden
        elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus
        PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık
        yazılımları ile popüler olmuştur. Lorem Ipsum, dizgi ve baskı
        endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen
        bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
        galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
        metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
        kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
        1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının
        yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
        sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
        oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
        beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl
        boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden
        elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus
        PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık
        yazılımları ile popüler olmuştur. Lorem Ipsum, dizgi ve baskı
        endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen
        bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
        galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
        metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
        kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
        1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının
        yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
        sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
        oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
        beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl
        boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden
        elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus
        PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık
        yazılımları ile popüler olmuştur. Lorem Ipsum, dizgi ve baskı
        endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen
        bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
        galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
        metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
        kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
        1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının
        yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
        sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
        oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
        beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl
        boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden
        elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus
        PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık
        yazılımları ile popüler olmuştur. Lorem Ipsum, dizgi ve baskı
        endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen
        bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı
        galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
        metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
        kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
        1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının
        yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
        sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
        Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı
        oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
        beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl
        boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden
        elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
        içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus
        PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık
        yazılımları ile popüler olmuştur.
      </p>
    </div>
  );
};

export default ScrollBar;
