import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import image1 from "../../assets/generales.png";
import image2 from "../../assets/copan200.png";
import image3 from "../../assets/galeno200.png";
import image4 from "../../assets/lps200.png";
import image5 from "../../assets/mercantil.png";
import image6 from "../../assets/triunfo200.png";
import image7 from "../../assets/sancor200.png";
import image8 from "../../assets/ATM200.png";
import image9 from "../../assets/nacion200.png";
import image10 from "../../assets/viajes.png";
import image11 from "../../assets/assistcard.png";
import image12 from "../../assets/axa.png";
import image13 from "../../assets/cardinal.png";
import image14 from "../../assets/coris2.png";
import image15 from "../../assets/euro.png";
import image16 from "../../assets/europe.png";
import image17 from "../../assets/go.png";
import image18 from "../../assets/intermac.png";
import image19 from "../../assets/latin.png";
import image20 from "../../assets/pax2.png";
import image21 from "../../assets/safe.png";
import image22 from "../../assets/terrawind.png";
import image23 from "../../assets/universal.png";
import image24 from "../../assets/assist-365.png"

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15, image16, image17, image18, image19, 
  image20, image21, image22, image23, image24
];

export default function InfiniteCarousel() {
  const carouselRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setScrollWidth(carouselRef.current.scrollWidth);
    }
  }, []);

  return (
    <div className="overflow-hidden w-full relative mb-4">
      <motion.div
        ref={carouselRef}
        className="flex gap-4"
        animate={{ x: [0, -scrollWidth / 2] }}
        transition={{ ease: "linear", duration: images.length * 2, repeat: Infinity }}
      >
        {[...images, ...images].map((src, index) => (
          <img key={index} src={src} className="w-64 h-40 object-cover" alt="carousel" />
        ))}
      </motion.div>
      
    </div>
  );
}
