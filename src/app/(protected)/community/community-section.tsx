"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MessageSquare,
  Users,
  Heart,
  Star,
  TrendingUp,
  ArrowRight,
  Trophy,
  Flame,
  Plus,
  Crown,
} from "lucide-react";
import Image from "next/image";

// Mock data for the community page
const featuredMembers = [
  {
    name: "Sarah Chen",
    role: "Core Contributor",
    avatar: "/placeholder.svg?height=40&width=40",
    contributions: 342,
  },
  {
    name: "Alex Morgan",
    role: "Community Lead",
    avatar: "/placeholder.svg?height=40&width=40",
    contributions: 289,
  },
  {
    name: "James Wilson",
    role: "Developer",
    avatar: "/placeholder.svg?height=40&width=40",
    contributions: 256,
  },
  {
    name: "Emma Davis",
    role: "Moderator",
    avatar: "/placeholder.svg?height=40&width=40",
    contributions: 198,
  },
];

const discussions = [
  {
    title: "Best practices for API integration",
    author: "Sarah Chen",
    replies: 24,
    likes: 156,
    category: "Technical",
    timeAgo: "2h ago",
  },
  {
    title: "New feature request: Dark mode support",
    author: "Alex Morgan",
    replies: 18,
    likes: 89,
    category: "Feature Request",
    timeAgo: "4h ago",
  },
  {
    title: "Getting started guide feedback",
    author: "James Wilson",
    replies: 32,
    likes: 167,
    category: "Documentation",
    timeAgo: "6h ago",
  },
];

const stats = [
  {
    label: "Active Members",
    value: "10,000+",
    icon: Users,
  },
  {
    label: "Daily Discussions",
    value: "500+",
    icon: MessageSquare,
  },
  {
    label: "Total Contributions",
    value: "25,000+",
    icon: Star,
  },
  {
    label: "Monthly Growth",
    value: "15%",
    icon: TrendingUp,
  },
];

const leaderboard = [
  {
    rank: 1,
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 15420,
    badge: "Diamond",
    streak: 145,
  },
  {
    rank: 2,
    name: "Alex Morgan",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 14280,
    badge: "Platinum",
    streak: 89,
  },
  {
    rank: 3,
    name: "James Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 13150,
    badge: "Gold",
    streak: 67,
  },
  {
    rank: 4,
    name: "Emma Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 12890,
    badge: "Gold",
    streak: 45,
  },
  {
    rank: 5,
    name: "Michael Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    points: 11760,
    badge: "Silver",
    streak: 34,
  },
];

const getBadgeColor = (badge: string) => {
  switch (badge.toLowerCase()) {
    case "diamond":
      return "bg-cyan-500/10 text-cyan-500";
    case "platinum":
      return "bg-violet-500/10 text-violet-500";
    case "gold":
      return "bg-yellow-500/10 text-yellow-500";
    case "silver":
      return "bg-gray-500/10 text-gray-500";
    default:
      return "bg-gray-500/10 text-gray-500";
  }
};

export default function CommunitySection() {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen overflow-hidden dark:bg-gray-900">
      {theme === "dark" && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/5 via-gray-900 to-gray-900" />
        </div>
      )}

      {/* Hero Section with Floating Elements */}
      <section className="relative overflow-hidden py-20">
        <div className="bg-grid-white/10 bg-grid-16 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />

        <div className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8 inline-block rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-400"
            >
              Community
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
            >
              Join Our Growing Community
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto max-w-2xl text-xl text-gray-400"
            >
              Connect with developers, share knowledge, and build amazing things
              together
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex justify-center space-x-4"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-indigo-500 to-purple-500"
              >
                Join the Community
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                Start a Thread
                <Plus className="ml-2 h-4 w-4 transition-transform group-hover:rotate-90" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Pulse Effect */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-50 blur-xl" />
                <div className="relative rounded-2xl border bg-muted p-8 backdrop-blur-sm transition-colors duration-300 group-hover:border-indigo-500/50 dark:border-gray-700 dark:bg-gray-800/50">
                  <div className="relative">
                    <stat.icon className="relative mb-4 h-8 w-8 text-indigo-500" />
                  </div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <span className="mb-8 inline-block rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-400">
              Top Contributors
            </span>
            <h2 className="mt-4 text-3xl font-bold">Community Leaderboard</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-50 blur-xl" />
            <div className="relative rounded-3xl border bg-muted/50 backdrop-blur-sm">
              <div className="space-y-6 p-6">
                {leaderboard.map((user, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between rounded-xl border border-transparent bg-background/50 p-4 backdrop-blur-sm transition-colors hover:border-indigo-500/50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex h-8 w-8 items-center justify-center">
                        {index === 0 ? (
                          <Crown className="h-6 w-6 text-yellow-500" />
                        ) : (
                          <span className="text-xl font-bold text-muted-foreground">
                            #{user.rank}
                          </span>
                        )}
                      </div>
                      <Avatar className="h-10 w-10 border-2 border-indigo-500/20">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{user.name}</div>
                        <Badge
                          variant="secondary"
                          className={`${getBadgeColor(user.badge)}`}
                        >
                          {user.badge}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-8">
                      <div className="flex items-center space-x-2">
                        <Trophy className="h-4 w-4 text-indigo-500" />
                        <span className="font-semibold">
                          {user.points.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Flame className="h-4 w-4 text-orange-500" />
                        <span>{user.streak} days</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Members Section with Hover Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center text-3xl font-bold"
          >
            Featured Members
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-50 blur-xl" />
                <div className="relative rounded-2xl border bg-muted p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-indigo-500/50 dark:border-gray-700 dark:bg-gray-800/50">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 ring-2 ring-indigo-500/20 transition-all duration-300 group-hover:ring-indigo-500/40">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{member.name}</div>
                      <div className="text-sm text-gray-500">{member.role}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium text-indigo-500">
                        {member.contributions}
                      </span>{" "}
                      contributions
                    </div>
                    <Button variant="ghost" size="sm" className="group/button">
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions Section with Thread Creation */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center justify-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center text-3xl font-bold"
            >
              Recent Discussions
            </motion.h2>
            <Button
              variant="outline"
              size="lg"
              className="group flex items-center space-x-2"
              onClick={() => {}}
            >
              <Plus className="h-4 w-4 transition-transform group-hover:rotate-90" />
              <span>Start a New Thread</span>
            </Button>
          </div>
          <div className="space-y-6">
            {discussions.map((discussion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-50 blur-xl" />
                <div className="relative rounded-2xl border bg-muted p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-indigo-500/50 dark:border-gray-700 dark:bg-gray-800/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold transition-colors group-hover:text-indigo-500">
                        {discussion.title}
                      </h3>
                      <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                        <span>by {discussion.author}</span>
                        <span>{discussion.timeAgo}</span>
                        <Badge
                          variant="secondary"
                          className="bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20"
                        >
                          {discussion.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 text-gray-500">
                      <motion.div
                        className="flex cursor-pointer items-center space-x-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>{discussion.replies}</span>
                      </motion.div>
                      <motion.div
                        className="flex cursor-pointer items-center space-x-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Heart className="h-4 w-4" />
                        <span>{discussion.likes}</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Particles Effect */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-90" />
            <div className="bg-grid-white/10 bg-grid-16 absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />
            <div className="relative px-8 py-16 sm:px-16 sm:py-24">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to Join Our Community?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-indigo-100">
                  Get started today and connect with developers from around the
                  world.
                </p>
                <div className="mt-10 flex justify-center gap-x-6">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="group border-white/10 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  >
                    Join Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
