import { motion, useMotionValue, useSpring } from "framer-motion";

function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  function handleMouseMove(e) {
    mouseX.set(e.clientX - 200);
    mouseY.set(e.clientY - 200);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="fixed inset-0 pointer-events-none z-0"
    >
      <motion.div
        style={{
          x,
          y,
        }}
        className="absolute h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]"
      />
    </div>
  );
}

export default CursorGlow;