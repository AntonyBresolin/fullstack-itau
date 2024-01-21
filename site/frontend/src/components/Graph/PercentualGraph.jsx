import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const PercentualGraph = ({ initialProgress, name, value }) => {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const duration = 1500;

  useEffect(() => {
    let animationFrameId;

    const animate = (timestamp) => {
      if (!animationFrameId) animationFrameId = timestamp;
      const runtime = timestamp - animationFrameId;
      let relativeProgress = runtime / duration;
      relativeProgress = Math.sin(relativeProgress * Math.PI / 2);
      const currentProgress = Math.min(relativeProgress * initialProgress, initialProgress);

      setProgress(currentProgress);

      if (runtime < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    if (inView) {
      requestAnimationFrame(animate);
    } else {
      setProgress(100);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [inView, initialProgress]);

  const radius = 70;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <>
      <div ref={ref}>
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          {/* Circulo de fundo */}
          <circle
            stroke="white" // Cor da parte não preenchida
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          {/* Circulo de preenchimento */}
          <circle
            stroke="#404a58"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".4em"
            fill='#404a58'
            fontWeight={500}
            className=" text-xl"
            transform={`rotate(90 ${radius} ${radius})`}
          >
            {`${value}`}
          </text>
        </svg>
        <p className='text-center text-[#404a58] font-bold uppercase text-xs'>{name}</p>
      </div>
    </>
  );
};

export default PercentualGraph;
