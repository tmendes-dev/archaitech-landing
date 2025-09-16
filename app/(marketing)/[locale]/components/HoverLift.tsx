"use client";
import { motion } from "framer-motion";
export default function HoverLift({children}:{children: React.ReactNode}) {
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 30 }}>
      {children}
    </motion.div>
  );
}
