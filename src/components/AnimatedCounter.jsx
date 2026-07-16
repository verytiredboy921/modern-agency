import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function AnimatedCounter({
  end = 0,
  suffix = "",
  decimals = 0,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {inView && (
        <CountUp
          end={end}
          duration={2}
          decimals={decimals}
          suffix={suffix}
        />
      )}
    </div>
  );
}

export default AnimatedCounter;