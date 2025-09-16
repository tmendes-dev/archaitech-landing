"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function FadeIn(props: {children: React.ReactNode; delay?: number}) {
  const reduce = useReducedMotion();
  const { children, delay = 0 } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
