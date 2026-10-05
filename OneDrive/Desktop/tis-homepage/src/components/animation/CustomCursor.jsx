import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../../hooks/useMousePosition";
import "./CustomCursor.css";

const CustomCursor = () => {
  const { x, y } = useMousePosition();

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (event) => {
      const target = event.target;

      if (
        target.closest("a") ||
        target.closest("button")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    document.addEventListener(
      "mouseover",
      handleMouseOver
    );

    return () => {
      document.removeEventListener(
        "mouseover",
        handleMouseOver
      );
    };
  }, []);

  return (
    <motion.div
      className={`custom-cursor ${
        hovering ? "cursor-hover" : ""
      }`}
      animate={{
        x,
        y,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 0.2,
      }}
    />
  );
};

export default CustomCursor;