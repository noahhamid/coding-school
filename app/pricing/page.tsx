"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { SiteFooter } from "@/components/site-footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="inline-block font-bold">CodeMasters</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <div className="relative group">
                <button className="flex items-center text-lg font-medium transition-colors hover:text-primary">
                  Catalog
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div className="absolute left-0 top-full z-10 mt-2 hidden w-56 rounded-md border bg-background p-2 shadow-md group-hover:block">
                  <Link
                    href="/courses/web-development"
                    className="block rounded-md px-4 py-2 text-sm hover:bg-muted"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/courses/data-science"
                    className="block rounded-md px-4 py-2 text-sm hover:bg-muted"
                  >
                    Data Science
                  </Link>
                  <Link
                    href="/courses/mobile-development"
                    className="block rounded-md px-4 py-2 text-sm hover:bg-muted"
                  >
                    Mobile Development
                  </Link>
                  <Link
                    href="/courses/machine-learning"
                    className="block rounded-md px-4 py-2 text-sm hover:bg-muted"
                  >
                    Machine Learning
                  </Link>
                  <Link
                    href="/courses/devops"
                    className="block rounded-md px-4 py-2 text-sm hover:bg-muted"
                  >
                    DevOps
                  </Link>
                </div>
              </div>
              <Link
                href="/#features"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="/courses"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                Courses
              </Link>
              <Link
                href="/pricing"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                Pricing
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <ThemeToggle />
              <Button variant="outline" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple, transparent pricing
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Choose the plan that&apos;s right for you and start your
                  coding journey today.
                </p>
              </div>
              <div className="flex flex-col gap-4 md:flex-row">
                <Button variant="outline">Monthly Billing</Button>
                <Button>Annual Billing (Save 20%)</Button>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Basic</h3>
                  <p className="text-muted-foreground">
                    For individuals just getting started
                  </p>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Access to all basic courses</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Interactive coding environment</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Community forum access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Basic project portfolio</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/signup?plan=basic">Get Started</Link>
                </Button>
              </div>
              <div className="relative rounded-lg border border-primary bg-background p-6 shadow-sm">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">
                    For serious learners and professionals
                  </p>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Access to all courses</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Advanced coding challenges</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>1-on-1 mentoring sessions (2/month)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Professional project portfolio</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Career guidance and resume review</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/signup?plan=pro">Get Started</Link>
                </Button>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">
                    For teams and organizations
                  </p>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Everything in Pro plan</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom learning paths</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom course development</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact-sales">Contact Sales</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto max-w-3xl rounded-lg border bg-muted p-8">
              <h3 className="mb-4 text-xl font-bold">
                Frequently Asked Questions
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Can I switch plans later?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can upgrade or downgrade your plan at any time.
                    Changes will be reflected in your next billing cycle.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is there a free trial?</AccordionTrigger>
                  <AccordionContent>
                    We offer a 7-day free trial for all plans. No credit card
                    required to start.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                  <AccordionContent>
                    We offer a 30-day money-back guarantee if you&apos;re not
                    satisfied with our service.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards, PayPal, and bank transfers
                    for Enterprise plans.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Still have questions?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Our team is here to help. Contact us for more information
                  about our plans and services.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/faq">View FAQ</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
