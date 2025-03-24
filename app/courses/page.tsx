"use client"

import Link from "next/link"
import { useState } from "react"
import { Code, Search, BookOpen, Code2, Globe, Laptop, Server, Database, Smartphone, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Courses", icon: BookOpen },
    { id: "languages", name: "Programming Languages", icon: Code2 },
    { id: "web", name: "Web Development", icon: Globe },
    { id: "frontend", name: "Frontend", icon: Laptop },
    { id: "backend", name: "Backend", icon: Server },
    { id: "database", name: "Databases", icon: Database },
    { id: "mobile", name: "Mobile Development", icon: Smartphone },
    { id: "ai", name: "AI & Machine Learning", icon: Cpu },
  ]

  const courses = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      description: "Learn the core concepts of JavaScript programming",
      category: "languages",
      level: "Beginner",
      duration: "6 weeks",
      lessons: 24,
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 2,
      title: "Python for Data Science",
      description: "Master Python for data analysis and visualization",
      category: "languages",
      level: "Intermediate",
      duration: "8 weeks",
      lessons: 32,
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 3,
      title: "React.js Masterclass",
      description: "Build modern web applications with React",
      category: "frontend",
      level: "Intermediate",
      duration: "10 weeks",
      lessons: 40,
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 4,
      title: "Node.js Backend Development",
      description: "Create scalable backend services with Node.js",
      category: "backend",
      level: "Intermediate",
      duration: "8 weeks",
      lessons: 30,
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 5,
      title: "SQL Database Design",
      description: "Learn to design and optimize SQL databases",
      category: "database",
      level: "Intermediate",
      duration: "6 weeks",
      lessons: 24,
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 6,
      title: "React Native Mobile Apps",
      description: "Build cross-platform mobile apps with React Native",
      category: "mobile",
      level: "Advanced",
      duration: "12 weeks",
      lessons: 48,
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 7,
      title: "Machine Learning Fundamentals",
      description: "Introduction to machine learning algorithms and applications",
      category: "ai",
      level: "Advanced",
      duration: "10 weeks",
      lessons: 40,
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 8,
      title: "HTML & CSS Basics",
      description: "Learn the building blocks of web development",
      category: "web",
      level: "Beginner",
      duration: "4 weeks",
      lessons: 16,
      image: "/placeholder.svg?height=150&width=250",
    },
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || course.category === activeCategory
    return matchesSearch && matchesCategory
  })

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
                  <Link href="/courses/web-development" className="block rounded-md px-4 py-2 text-sm hover:bg-muted">
                    Web Development
                  </Link>
                  <Link href="/courses/data-science" className="block rounded-md px-4 py-2 text-sm hover:bg-muted">
                    Data Science
                  </Link>
                  <Link
                    href="/courses/mobile-development"
                    className="block rounded-md px-4 py-2 text-sm hover:bg-muted"
                  >
                    Mobile Development
                  </Link>
                  <Link href="/courses/machine-learning" className="block rounded-md px-4 py-2 text-sm hover:bg-muted">
                    Machine Learning
                  </Link>
                  <Link href="/courses/devops" className="block rounded-md px-4 py-2 text-sm hover:bg-muted">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Courses</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Discover a wide range of courses designed to help you master the skills you need for your career.
                </p>
              </div>
              <div className="w-full max-w-md">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search courses..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12">
          <div className="container">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] lg:gap-10">
              <aside className="w-full">
                <div className="sticky top-24 rounded-lg border bg-card p-4">
                  <h3 className="mb-4 text-lg font-semibold">Categories</h3>
                  <nav className="space-y-1">
                    {categories.map((category) => {
                      const Icon = category.icon
                      return (
                        <button
                          key={category.id}
                          className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium ${
                            activeCategory === category.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                          }`}
                          onClick={() => setActiveCategory(category.id)}
                        >
                          <Icon className="mr-2 h-4 w-4" />
                          {category.name}
                        </button>
                      )
                    })}
                  </nav>
                  <div className="mt-6">
                    <h3 className="mb-4 text-lg font-semibold">Skill Level</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="beginner" className="h-4 w-4 rounded border-gray-300" />
                        <label htmlFor="beginner" className="ml-2 text-sm">
                          Beginner
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="intermediate" className="h-4 w-4 rounded border-gray-300" />
                        <label htmlFor="intermediate" className="ml-2 text-sm">
                          Intermediate
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="advanced" className="h-4 w-4 rounded border-gray-300" />
                        <label htmlFor="advanced" className="ml-2 text-sm">
                          Advanced
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="mb-4 text-lg font-semibold">Duration</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="short" className="h-4 w-4 rounded border-gray-300" />
                        <label htmlFor="short" className="ml-2 text-sm">
                          Less than 6 weeks
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="medium" className="h-4 w-4 rounded border-gray-300" />
                        <label htmlFor="medium" className="ml-2 text-sm">
                          6-10 weeks
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="long" className="h-4 w-4 rounded border-gray-300" />
                        <label htmlFor="long" className="ml-2 text-sm">
                          More than 10 weeks
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              <div>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="mb-6 w-full justify-start">
                    <TabsTrigger value="all">All Courses</TabsTrigger>
                    <TabsTrigger value="popular">Most Popular</TabsTrigger>
                    <TabsTrigger value="new">Newest</TabsTrigger>
                    <TabsTrigger value="beginner">For Beginners</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-0">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                          <Card key={course.id} className="overflow-hidden">
                            <div className="aspect-video w-full overflow-hidden">
                              <img
                                src={course.image || "/placeholder.svg"}
                                alt={course.title}
                                className="h-full w-full object-cover transition-all hover:scale-105"
                              />
                            </div>
                            <CardHeader>
                              <div className="flex items-center justify-between">
                                <div className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                                  {course.level}
                                </div>
                                <div className="text-sm text-muted-foreground">{course.duration}</div>
                              </div>
                              <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                              <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <BookOpen className="mr-1 h-4 w-4" />
                                {course.lessons} lessons
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button className="w-full" asChild>
                                <Link href={`/courses/${course.id}`}>View Course</Link>
                              </Button>
                            </CardFooter>
                          </Card>
                        ))
                      ) : (
                        <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                          <div className="rounded-full bg-muted p-6">
                            <Search className="h-10 w-10 text-muted-foreground" />
                          </div>
                          <h3 className="mt-4 text-xl font-semibold">No courses found</h3>
                          <p className="mt-2 text-muted-foreground">Try adjusting your search or filter criteria</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  <TabsContent value="popular" className="mt-0">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {/* Popular courses would be shown here */}
                      <Card className="overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src="/placeholder.svg?height=150&width=250"
                            alt="JavaScript Fundamentals"
                            className="h-full w-full object-cover transition-all hover:scale-105"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                              Beginner
                            </div>
                            <div className="text-sm text-muted-foreground">6 weeks</div>
                          </div>
                          <CardTitle className="line-clamp-1">JavaScript Fundamentals</CardTitle>
                          <CardDescription className="line-clamp-2">
                            Learn the core concepts of JavaScript programming
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <BookOpen className="mr-1 h-4 w-4" />
                            24 lessons
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" asChild>
                            <Link href="/courses/1">View Course</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                      {/* More popular courses */}
                    </div>
                  </TabsContent>
                  <TabsContent value="new" className="mt-0">
                    {/* New courses content */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <Card className="overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src="/placeholder.svg?height=150&width=250"
                            alt="Machine Learning Fundamentals"
                            className="h-full w-full object-cover transition-all hover:scale-105"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                              Advanced
                            </div>
                            <div className="text-sm text-muted-foreground">10 weeks</div>
                          </div>
                          <CardTitle className="line-clamp-1">Machine Learning Fundamentals</CardTitle>
                          <CardDescription className="line-clamp-2">
                            Introduction to machine learning algorithms and applications
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <BookOpen className="mr-1 h-4 w-4" />
                            40 lessons
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" asChild>
                            <Link href="/courses/7">View Course</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                      {/* More new courses */}
                    </div>
                  </TabsContent>
                  <TabsContent value="beginner" className="mt-0">
                    {/* Beginner courses content */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <Card className="overflow-hidden">
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src="/placeholder.svg?height=150&width=250"
                            alt="HTML & CSS Basics"
                            className="h-full w-full object-cover transition-all hover:scale-105"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                              Beginner
                            </div>
                            <div className="text-sm text-muted-foreground">4 weeks</div>
                          </div>
                          <CardTitle className="line-clamp-1">HTML & CSS Basics</CardTitle>
                          <CardDescription className="line-clamp-2">
                            Learn the building blocks of web development
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <BookOpen className="mr-1 h-4 w-4" />
                            16 lessons
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" asChild>
                            <Link href="/courses/8">View Course</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                      {/* More beginner courses */}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

