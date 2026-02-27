import { useNavigate } from "react-router";
import { useEffect } from "react";
import { motion } from "motion/react";
import { Layers, ArrowRight } from "lucide-react";
import { useProjects } from "../context/ProjectContext";

export function SplashScreen() {
  const navigate = useNavigate();
  const { projects } = useProjects();

  // Smart redirect: if projects exist, go straight to dashboard
  useEffect(() => {
    if (projects.length > 0) {
      navigate("/dashboard", { replace: true });
    }
  }, [projects.length, navigate]);

  // If redirecting, show nothing
  if (projects.length > 0) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center gap-8"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div
            className="w-20 h-20 rounded-[20px] flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #2962FF 0%, #448AFF 100%)",
              boxShadow: "0 8px 32px rgba(41, 98, 255, 0.25)",
            }}
          >
            <Layers className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
          <motion.div
            className="absolute inset-0 rounded-[20px] border-2 border-[#2962FF]"
            initial={{ scale: 1, opacity: 0.4 }}
            animate={{ scale: 1.4, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.div>

        {/* Title */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[36px] text-[#1C1B1F] tracking-[-0.02em]"
            style={{ fontWeight: 700 }}
          >
            UI Testing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-[16px] text-[#79747E] mt-2 max-w-[320px]"
            style={{ fontWeight: 400 }}
          >
            Precision visual validation for your products
          </motion.p>
        </div>

        {/* Start button — goes to project creation */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/new-project")}
          className="flex items-center gap-2.5 px-8 py-3.5 rounded-[16px] text-white text-[15px] transition-shadow cursor-pointer"
          style={{
            fontWeight: 600,
            background: "linear-gradient(135deg, #2962FF 0%, #448AFF 100%)",
            boxShadow: "0 4px 16px rgba(41, 98, 255, 0.3)",
          }}
        >
          Get Started
          <ArrowRight className="w-4.5 h-4.5" strokeWidth={2.5} />
        </motion.button>

        {/* Feature hints */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center gap-6 mt-4"
        >
          {[
            "Pixel-level accuracy",
            "Multi-device testing",
            "Hierarchical tolerance",
          ].map((label) => (
            <div key={label} className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2962FF]/40" />
              <span className="text-[12px] text-[#79747E]" style={{ fontWeight: 400 }}>
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
