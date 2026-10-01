"use client";

import { Code2, Layers, Sparkles, Users } from "lucide-react";

import { services } from "@/data";
import { cardStyle } from "@/lib/card-style";
import { Button } from "./ui/MovingBorders";

const icons = [Code2, Layers, Sparkles, Users];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <h1 className="heading">
        How I can <span className="text-purple">help</span>
      </h1>
      <p className="text-white-200 text-center mt-6 max-w-2xl mx-auto">
        A small set of services I actually ship — not a catalogue of everything
        on the internet.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {services.map((service, index) => {
          const Icon = icons[index] ?? Code2;
          return (
            <Button
              key={service.id}
              as="article"
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              containerClassName="md:col-span-1 w-full h-full"
              style={cardStyle}
              className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="p-8 text-left w-full">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-purple text-sm font-medium">
                    0{service.id}
                  </p>
                  <Icon className="h-5 w-5 text-purple" aria-hidden />
                </div>
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="text-white-200 mt-3 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </Button>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
