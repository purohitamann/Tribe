import { sign } from "crypto";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Tribe",
  description: "Make Your Tribe, host events and trivia.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
  
    {
      label: "Pricing",
      href: "/pricing",
    },
  
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  demoLinks:[
    {
      label: "Sign Up",
      href: "/sign",
    },
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Host",
      href: "/host",
    },
    {
      label: "Trivia",
      href: "/trivia",
    },
    {
      label: "Payment",
      href: "/payment",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
  
  ]
};
