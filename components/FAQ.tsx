"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { faqs } from "@/data";
import { cardStyle } from "@/lib/card-style";

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="py-20">
      <h1 className="heading">
        Quick <span className="text-purple">answers</span>
      </h1>
      <p className="text-white-200 text-center mt-6 max-w-2xl mx-auto">
        A few things people usually ask before we start.
      </p>
      <div className="mt-12 max-w-3xl mx-auto space-y-4">
        {faqs.map((item) => {
          const open = openId === item.id;
          return (
            <div
              key={item.id}
              className="rounded-2xl border border-white/[0.2] overflow-hidden"
              style={cardStyle}
            >
              <button
                type="button"
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpenId(open ? null : item.id)}
                aria-expanded={open}
              >
                <span className="font-semibold">{item.question}</span>
                <span className="text-purple text-xl leading-none min-w-4 text-center">
                  {open ? "–" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-white-200 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
