import { useState } from "react";
import Slideshow from "./Slideshow";
import Image from "next/image";

const imagePath = "https://wbdxiyoavhnrljziixqc.supabase.co/storage/v1/object/public/images//";
const slideImages = [
  "hsr_himeko.png",
  "hsr_guinaifen.png",
  "hsr_jingliu.png",
  "hsr_kafka.png",
  "hsr_luocha.png",
  "hsr_topaz.png",
  "hsr_welt.png",
];

const ExampleSlideshow = () => {
  const [index, setIndex] = useState<number>(0);

  function nextSlide() {
    if (index + 1 > slideImages.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function prevSlide() {
    if (index - 1 < 0) {
      setIndex(slideImages.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <article className="w-60 relative flex flex-col items-center gap-2 p-2 bg-neutral-800 mx-auto rounded-lg mt-4">
      <section className="relative flex">
        <Slideshow index={index} setIndex={setIndex} autoplay slideDuration={20}>
          {slideImages.map((img, i) => (
            <Image key={img+i+"exampleslider1"} src={imagePath + img} alt="Alternative text" height={99999} width={99999} />
          ))}
        </Slideshow>
        {/* Example of the buttons being inside the container using position relative/absolute */}
        <div className="flex justify-between items-center gap-1 w-full h-full absolute bg-gradient-to-r from-[rgba(0,0,0,0.2)] via-transparent to-[rgba(0,0,0,0.2)]">
          <button onClick={() => prevSlide()} className="py-2 px-3 bg-[rgba(0,0,0,0.6)] text-white rounded-md">
            {"<"}
          </button>
          <button onClick={() => nextSlide()} className="py-2 px-3 bg-[rgba(0,0,0,0.6)] text-white rounded-md">
            {">"}
          </button>
        </div>
        {/* Example END */}
      </section>
      {/* Example small index buttons */}
      <section className="flex gap-2">
        {slideImages.map((_, i) => (
          <button
            className={`bg-blue-400 rounded-full w-3 h-3 transition-colors duration-300 ${
              i === index ? "bg-blue-600" : ""
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </section>
      {/* Example END */}
    </article>
  );
};

export default ExampleSlideshow;
