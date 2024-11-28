"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Course Creator",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content:
      "This platform has revolutionized how I create Udemy courses. The AI-generated practice tests are spot-on and save me hours of work.",
  },
  {
    name: "Michael Chen",
    role: "Tech Instructor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content:
      "The quality of AI-generated content is impressive. My students love the practice tests, and my course ratings have improved significantly.",
  },
  {
    name: "Emily Rodriguez",
    role: "Education Consultant",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content:
      "A game-changer for online education. The platform's AI understands complex topics and creates engaging content that actually helps students learn.",
  },
  {
    name: "David Kim",
    role: "Programming Instructor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content:
      "The AI course generator has transformed my teaching workflow. It creates perfect practice questions that challenge students at just the right level.",
  },
  {
    name: "Lisa Thompson",
    role: "Digital Marketing Expert",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content:
      "I was skeptical about AI-generated content, but this platform exceeded my expectations. The quality and relevance are outstanding.",
  },
];

const doubledTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const isAnimating = useRef(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let animationTimeout: NodeJS.Timeout;

    const startAnimation = async () => {
      if (!scrollRef.current || isAnimating.current) return;

      const scrollWidth = scrollRef.current.scrollWidth / 2;
      const animationDuration = 30;

      const animate = async () => {
        isAnimating.current = true;

        try {
          await controls.start({
            x: -scrollWidth,
            transition: {
              duration: animationDuration,
              ease: "linear",
            },
          });

          if (isMounted) {
            controls.set({ x: 0 });
            isAnimating.current = false;
            animationTimeout = setTimeout(animate, 0);
          }
        } catch (error) {
          console.log("an error occured", error);
          isAnimating.current = false;
        }
      };

      animate();
    };

    startAnimation();

    return () => {
      clearTimeout(animationTimeout);
      isAnimating.current = false;
    };
  }, [controls, isMounted]);

  const handleMouseEnter = () => {
    if (isMounted) {
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (isMounted && scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth / 2;
      controls.start({
        x: -scrollWidth,
        transition: {
          duration: 30,
          ease: "linear",
        },
      });
    }
  };

  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen overflow-hidden py-20 dark:bg-gray-900">
      {theme === "dark" && (
        <div className="bg-gradient-radial absolute inset-0 from-indigo-500/20 via-gray-900 to-gray-900" />
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-block rounded-full px-4 py-1 text-sm dark:bg-gray-800 dark:text-gray-300"
          >
            Wall of love
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-5xl font-bold dark:text-white md:text-7xl"
          >
            Loved by educators
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-16 max-w-2xl text-xl text-gray-300"
          >
            Here&apos;s what course creators are saying about our platform
          </motion.p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          <div
            className="overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              ref={scrollRef}
              animate={controls}
              className="flex gap-6 pb-8"
            >
              {doubledTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="w-[400px] flex-shrink-0 cursor-pointer rounded-xl border bg-muted p-8 backdrop-blur-sm transition-all hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 dark:border-gray-700 dark:bg-gray-800/50"
                >
                  <div className="mb-4 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-current text-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="mb-6">&ldquo;{testimonial.content}&ldquo;</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="mr-4 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
