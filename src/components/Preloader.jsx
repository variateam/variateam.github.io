import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const progressRef = useRef(null);

  useGSAP(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;

        if (next >= 100) {
          clearInterval(interval);

          const tl = gsap.timeline({ defaults: { ease: "power4.in", duration: 1 } });

          tl.to([leftRef.current, rightRef.current], {
            xPercent: (i) => (i === 0 ? -145 : 145),
            skewX: 40,
          }, 0)
          .to(progressRef.current, {
            yPercent: 300,
          }, 0);
        }

        return next;
      });
    }, 12);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        ref={leftRef}
        className="fixed top-0 left-0 w-[50dvw] h-[100dvh] flex flex-col items-end justify-center pr-5 z-50 bg-black overflow-hidden"
      />
      <div
        ref={rightRef}
        className="fixed top-0 right-0 w-[50dvw] h-[100dvh] flex flex-col items-start justify-center bg-black z-50 pl-5 overflow-hidden"
      />
      <h1 
        ref={progressRef}
        className="z-50 absolute bottom-5 right-5 leading-[80%] tracking-tighter font-semibold text-[clamp(24px,9vw,164px)] text-[#ffb8c4]"
      >
         {progress}
      </h1>
    </>
  );
}
