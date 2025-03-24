"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code,
  Compass,
  Cpu,
  GraduationCap,
  Users,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { SiteFooter } from "@/components/site-footer";
import { TypingAnimation } from "@/components/typing-animation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
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
                href="#features"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#courses"
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Master Coding Skills for the Future
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Interactive coding lessons, real-world projects, and expert
                    guidance to help you become a professional developer.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/signup">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/pricing">View Plans</Link>
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">500+</span>
                    <span className="text-muted-foreground">Courses</span>
                  </div>
                  <div className="h-4 w-px bg-muted"></div>
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">100K+</span>
                    <span className="text-muted-foreground">Students</span>
                  </div>
                  <div className="h-4 w-px bg-muted"></div>
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">95%</span>
                    <span className="text-muted-foreground">Success Rate</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px]">
                  <TypingAnimation />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to master coding
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our platform provides all the tools and resources you need to
                  become a professional developer.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Compass className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Interactive Learning</h3>
                <p className="text-muted-foreground">
                  Learn by doing with our interactive coding environment and
                  real-time feedback.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Real-World Projects</h3>
                <p className="text-muted-foreground">
                  Build portfolio-worthy projects that demonstrate your skills
                  to potential employers.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Community Support</h3>
                <p className="text-muted-foreground">
                  Connect with fellow learners and mentors to get help when you
                  need it.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Learn coding in 3 simple steps
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our proven learning path takes you from beginner to job-ready
                  developer
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Choose Your Path</h3>
                <p className="text-muted-foreground">
                  Select from our career paths or individual courses based on
                  your goals and interests.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Learn by Doing</h3>
                <p className="text-muted-foreground">
                  Complete interactive lessons, quizzes, and projects that
                  reinforce your learning.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Build Your Portfolio</h3>
                <p className="text-muted-foreground">
                  Create real-world projects that showcase your skills to
                  potential employers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="courses"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Courses
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Learn the most in-demand skills
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our curriculum is designed to help you master the skills that
                  employers are looking for.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="group relative rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="absolute right-4 top-4 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  Popular
                </div>
                <div className="mb-4">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="mb-4 text-muted-foreground">
                  Learn HTML, CSS, JavaScript, React, and more to build modern
                  web applications.
                </p>
                <div className="mt-auto">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/courses/web-development">View Course</Link>
                  </Button>
                </div>
              </div>
              <div className="group relative rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Data Science</h3>
                <p className="mb-4 text-muted-foreground">
                  Master Python, data analysis, machine learning, and
                  visualization techniques.
                </p>
                <div className="mt-auto">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/courses/data-science">View Course</Link>
                  </Button>
                </div>
              </div>
              <div className="group relative rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Mobile Development</h3>
                <p className="mb-4 text-muted-foreground">
                  Build iOS and Android apps with React Native and Flutter
                  frameworks.
                </p>
                <div className="mt-auto">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/courses/mobile-development">View Course</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="/courses">View All Courses</Link>
              </Button>
            </div>
          </div>
        </section>
        <section id="learning-paths" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Learning Paths
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Structured paths to your dream career
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Follow our curated learning paths to become job-ready in your
                  chosen field
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="frontend" className="w-full">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-5">
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                  <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
                  <TabsTrigger value="data">Data Science</TabsTrigger>
                  <TabsTrigger value="mobile">Mobile</TabsTrigger>
                </TabsList>
                <TabsContent value="frontend" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Frontend Developer Path</CardTitle>
                      <CardDescription>
                        Become a professional frontend developer in 6 months
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              HTML, CSS & JavaScript Fundamentals
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Master the core technologies that power the web
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              React & Modern JavaScript
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Learn the most popular frontend library and modern
                              JS concepts
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              Responsive Design & Accessibility
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Create websites that work for everyone on any
                              device
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              Frontend Portfolio Projects
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Build real-world projects to showcase your skills
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/paths/frontend">Start This Path</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="backend" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Backend Developer Path</CardTitle>
                      <CardDescription>
                        Master server-side programming in 6 months
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Node.js & Express</h4>
                            <p className="text-sm text-muted-foreground">
                              Build powerful server-side applications with
                              JavaScript
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Databases & SQL</h4>
                            <p className="text-sm text-muted-foreground">
                              Learn to work with relational and NoSQL databases
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">API Development</h4>
                            <p className="text-sm text-muted-foreground">
                              Design and build RESTful and GraphQL APIs
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              Authentication & Security
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Implement secure user authentication and
                              authorization
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/paths/backend">Start This Path</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="fullstack" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Full Stack Developer Path</CardTitle>
                      <CardDescription>
                        Become a complete developer in 9 months
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              Frontend & Backend Fundamentals
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Master both client and server-side development
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Modern Frameworks</h4>
                            <p className="text-sm text-muted-foreground">
                              Learn React, Node.js, and Next.js for full stack
                              applications
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              Database Design & Implementation
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Work with SQL and NoSQL databases in real
                              applications
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Deployment & DevOps</h4>
                            <p className="text-sm text-muted-foreground">
                              Learn to deploy and maintain full stack
                              applications
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/paths/fullstack">Start This Path</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="data" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Data Science Path</CardTitle>
                      <CardDescription>
                        Become a data scientist in 8 months
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              Python for Data Science
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Master Python and essential libraries for data
                              analysis
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              Data Analysis & Visualization
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Learn to analyze and visualize data with pandas,
                              matplotlib, and seaborn
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Machine Learning</h4>
                            <p className="text-sm text-muted-foreground">
                              Build and deploy machine learning models with
                              scikit-learn and TensorFlow
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              Data Science Portfolio Projects
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Create real-world data science projects to
                              showcase your skills
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/paths/data-science">Start This Path</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="mobile" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Mobile Developer Path</CardTitle>
                      <CardDescription>
                        Build iOS and Android apps in 6 months
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              JavaScript & React Fundamentals
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Master the core technologies needed for React
                              Native
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">React Native</h4>
                            <p className="text-sm text-muted-foreground">
                              Build cross-platform mobile apps with React Native
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              Native Device Features
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Learn to work with camera, location,
                              notifications, and more
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">
                              App Store Deployment
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Learn to publish your apps to the App Store and
                              Google Play
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/paths/mobile">Start This Path</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  What our students say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Hear from our students who have transformed their careers with
                  our courses.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Student"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="text-lg font-bold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">
                      Web Developer at Google
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  I had no coding experience when I started. Now I&apos;m working as
                  a web developer at my dream company. The interactive lessons
                  and project-based learning made all the difference.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Student"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="text-lg font-bold">Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">
                      Software Engineer at Microsoft
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  The curriculum is well-structured and the community support
                  is amazing. I was able to transition from a non-technical role
                  to a software engineer in just 6 months.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Student"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="text-lg font-bold">Emily Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">
                      Freelance Developer
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  As a freelancer, I needed to expand my skill set quickly. The
                  courses here allowed me to learn new technologies and
                  immediately apply them to client projects.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to start your coding journey?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Join thousands of students who have transformed their careers
                with our courses.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Plans</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
