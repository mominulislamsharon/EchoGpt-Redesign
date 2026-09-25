"use client";

import { motion } from "framer-motion";
import { ArrowDown, Globe } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import ChatPreview from "./chat-prieview";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center"
      >
        <div className="h-80 w-xl rounded-full bg-primary/25 blur-3xl" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-24">
        <motion.h1
          initial="hidden"
          animate="show"
          custom={0.1}
          variants={fadeUp}
          className="max-w-3xl font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          Every AI model.
          <br />
          <span className="text-primary">One place to chat.</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={0.2}
          variants={fadeUp}
          className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          Chat with 40+ AI models, compare their answers side by side, and take
          EchoGPT with you anywhere you browse.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: [0, 5, 0] }}
          transition={{
            opacity: { duration: 0.4, delay: 0.25 },
            y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
          }}
          aria-hidden
          className="mt-7 text-primary"
        >
          <ArrowDown className="size-12" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.3}
          variants={fadeUp}
          className="mt-4 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/app"
            className={buttonVariants({
              size: "lg",
              className: "rounded-full",
            })}
          >
            Try the web app
          </Link>
          <Link
            href="/extension"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className:
                "rounded-full border-primary/25 bg-primary/5 text-primary shadow-sm shadow-primary/10 hover:border-primary/40 hover:bg-primary/10 hover:text-primary",
            })}
          >
            <Globe className="size-4 " aria-hidden />
            Add to Chrome
          </Link>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="show"
          custom={0.4}
          variants={fadeUp}
          className="mt-4 text-xs text-muted-foreground"
        >
          No credit card required · Free plan available
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.5}
          variants={fadeUp}
          className="mt-14 w-full max-w-2xl"
        >
          <ChatPreview />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
