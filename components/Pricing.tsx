"use client";

import {
  ArrowUpRight,
  Check,
  Handshake,
  LayoutTemplate,
  PanelsTopLeft,
} from "lucide-react";

import { pricingPlans } from "@/data";
import { cardStyle } from "@/lib/card-style";
import { Button } from "./ui/MovingBorders";

const planIcons = [LayoutTemplate, PanelsTopLeft, Handshake];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-purple">
        Flexible ways to work together
      </p>
      <h1 className="heading">
        Starting <span className="text-purple">points</span>
      </h1>
      <p className="text-white-200 text-center mt-6 max-w-2xl mx-auto">
        Clear starting points for focused work. Final quotes depend on scope and
        complexity; if you have a budget in mind, we can shape the work around
        it.
      </p>
      <div className="grid lg:grid-cols-3 gap-6 mt-12 items-stretch">
        {pricingPlans.map((plan) => (
          <Button
            key={plan.id}
            as="article"
            duration={18000}
            borderRadius="1.75rem"
            containerClassName="md:col-span-1 w-full h-full"
            style={cardStyle}
            className={`flex-1 text-white border-slate-800 ${
              plan.featured
                ? "shadow-[0_0_32px_rgba(203,172,249,0.18)] bg-[linear-gradient(145deg,rgba(26,22,48,0.98),rgba(7,9,27,0.98))]"
                : "bg-[linear-gradient(145deg,rgba(16,20,39,0.98),rgba(5,8,23,0.98))]"
            }`}
          >
            <div className="flex h-full min-h-[34rem] w-full flex-col p-7 text-left sm:p-8">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-purple">
                    {plan.engagement}
                  </p>
                  <h2 className="text-2xl font-bold">{plan.name}</h2>
                  <p className="mt-1 text-sm text-white-200">{plan.note}</p>
                </div>
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-purple">
                  {(() => {
                    const Icon = planIcons[plan.id - 1];
                    return (
                      <Icon aria-hidden="true" size={21} strokeWidth={1.7} />
                    );
                  })()}
                </div>
              </div>

              <p className="min-h-[3.5rem] text-sm leading-6 text-white-200">
                {plan.description}
              </p>

              <div className="mt-6 border-y border-white/10 py-5">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white-200/70">
                  Starting investment
                </p>
                <p className="text-3xl font-bold tracking-normal text-white">
                  {plan.price}
                </p>
              </div>

              <p className="mb-4 mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-white-200/70">
                What this can include
              </p>
              <ul className="mb-8 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm leading-5 text-white-200"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-purple"
                      size={16}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/#contact"
                className="group flex items-center justify-between border-t border-white/10 pt-5 text-sm font-semibold text-white transition-colors hover:text-purple"
              >
                <span>{plan.cta}</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  size={18}
                />
              </a>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
