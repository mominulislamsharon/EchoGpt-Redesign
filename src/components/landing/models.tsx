"use client";

import MODELS from "@/data/models";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay },
  }),
};

const Models = () => {
  return (
    <div id="models" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            AI Models
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            40+ models, one subscription
          </h2>
          <p className="mt-4 text-muted-foreground">
            No more juggling separate accounts and tabs. Pick the right model
            for the job, right inside EchoGPT.
          </p>
        </motion.div>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {MODELS.map((model, i) => (
            <motion.div
              key={model.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0.06 * (i + 1)}
              variants={fadeUp}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <span
                aria-hidden
                className={`flex size-9 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white ${model.color}`}
              >
                {model.name.charAt(0)}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{model.name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {model.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.5}
          variants={fadeUp}
          className="mt-8 text-center"
        >
          <span className="inline-flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
            <span className="font-bold">+40 more models</span>
            <span className="text-foreground/75">
              including GLM, Kimi, MiniMax, and Inkling
            </span>
          </span>
        </motion.p>
      </div>
    </div>
  );
};

export default Models;
