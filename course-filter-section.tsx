"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, X, Calendar, MapPin, BookOpen, Users, Star, ChevronDown, Sparkles } from "lucide-react"
import CalendarView from "./calendar-view"

const categories = [
  { id: "leadership", name: "Leadership & Management", count: 45, color: "bg-purple-100 text-purple-800" },
  { id: "communication", name: "Communication Skills", count: 32, color: "bg-blue-100 text-blue-800" },
  { id: "sales", name: "Sales & Marketing", count: 28, color: "bg-green-100 text-green-800" },
  { id: "finance", name: "Finance & Accounting", count: 24, color: "bg-orange-100 text-orange-800" },
  { id: "hr", name: "Human Resources", count: 19, color: "bg-pink-100 text-pink-800" },
  { id: "project", name: "Project Management", count: 35, color: "bg-indigo-100 text-indigo-800" },
  { id: "it", name: "IT & Technology", count: 22, color: "bg-cyan-100 text-cyan-800" },
  { id: "personal", name: "Personal Development", count: 41, color: "bg-emerald-100 text-emerald-800" },
]

const venues = [
  { id: "london", name: "London, UK", flag: "🇬🇧", upcoming: 12 },
  { id: "dubai", name: "Dubai, UAE", flag: "🇦🇪", upcoming: 8 },
  { id: "singapore", name: "Singapore", flag: "🇸🇬", upcoming: 15 },
  { id: "newyork", name: "New York, USA", flag: "🇺🇸", upcoming: 10 },
  { id: "sydney", name: "Sydney, Australia", flag: "🇦🇺", upcoming: 6 },
  { id: "toronto", name: "Toronto, Canada", flag: "🇨🇦", upcoming: 9 },
  { id: "virtual", name: "Virtual Training", flag: "🌐", upcoming: 25 },
]

const months = [
  { id: "jan", name: "January 2024", courses: 18 },
  { id: "feb", name: "February 2024", courses: 22 },
  { id: "mar", name: "March 2024", courses: 25 },
  { id: "apr", name: "April 2024", courses: 20 },
  { id: "may", name: "May 2024", courses: 28 },
  { id: "jun", name: "June 2024", courses: 24 },
]

const popularSearches = [
  "Leadership Excellence",
  "Public Speaking",
  "Project Management",
  "Digital Marketing",
  "Financial Analysis",
  "Team Building",
]

export default function CourseFilterSection() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedVenue, setSelectedVenue] = useState("")
  const [selectedMonth, setSelectedMonth] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [showCalendar, setShowCalendar] = useState(false)

  const handleSearch = () => {
    const filters = []
    if (selectedCategory) filters.push(`Category: ${categories.find((c) => c.id === selectedCategory)?.name}`)
    if (selectedVenue) filters.push(`Venue: ${venues.find((v) => v.id === selectedVenue)?.name}`)
    if (selectedMonth) filters.push(`Month: ${months.find((m) => m.id === selectedMonth)?.name}`)
    if (searchQuery) filters.push(`Search: ${searchQuery}`)

    setActiveFilters(filters)
  }

  const handleReset = () => {
    setSelectedCategory("")
    setSelectedVenue("")
    setSelectedMonth("")
    setSearchQuery("")
    setActiveFilters([])
  }

  const removeFilter = (filterToRemove: string) => {
    setActiveFilters((prev) => prev.filter((filter) => filter !== filterToRemove))

    // Reset corresponding state based on filter type
    if (filterToRemove.startsWith("Category:")) setSelectedCategory("")
    if (filterToRemove.startsWith("Venue:")) setSelectedVenue("")
    if (filterToRemove.startsWith("Month:")) setSelectedMonth("")
    if (filterToRemove.startsWith("Search:")) setSearchQuery("")
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-purple-600 mr-2" />
            <Badge variant="outline" className="border-purple-200 text-purple-700 bg-purple-50">
              Find Your Perfect Course
            </Badge>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Discover World-Class Training</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Search through our comprehensive catalog of professional development courses, delivered by expert trainers
            in premium venues worldwide.
          </p>
        </div>

        {/* Main Filter Card */}
        <Card className="max-w-6xl mx-auto shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-900">246</div>
                <div className="text-sm text-purple-700">Total Courses</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-900">36+</div>
                <div className="text-sm text-blue-700">Global Cities</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-900">100+</div>
                <div className="text-sm text-green-700">Expert Trainers</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                <Star className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">4.9</div>
                <div className="text-sm text-orange-700">Average Rating</div>
              </div>
            </div>

            {/* Main Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search for courses, skills, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-purple-500 rounded-xl bg-white/50 backdrop-blur-sm"
              />
            </div>

            {/* Filter Controls */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Category
                </label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-purple-500 rounded-xl bg-white/50">
                    <SelectValue placeholder="Choose Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        <div className="flex items-center justify-between w-full">
                          <span>{category.name}</span>
                          <Badge className={`ml-2 ${category.color}`}>{category.count}</Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Venue
                </label>
                <Select value={selectedVenue} onValueChange={setSelectedVenue}>
                  <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-purple-500 rounded-xl bg-white/50">
                    <SelectValue placeholder="Choose Venue" />
                  </SelectTrigger>
                  <SelectContent>
                    {venues.map((venue) => (
                      <SelectItem key={venue.id} value={venue.id}>
                        <div className="flex items-center justify-between w-full">
                          <span className="flex items-center">
                            <span className="mr-2">{venue.flag}</span>
                            {venue.name}
                          </span>
                          <Badge variant="secondary" className="ml-2">
                            {venue.upcoming} upcoming
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Month
                </label>
                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-purple-500 rounded-xl bg-white/50">
                    <SelectValue placeholder="Choose Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month) => (
                      <SelectItem key={month.id} value={month.id}>
                        <div className="flex items-center justify-between w-full">
                          <span>{month.name}</span>
                          <Badge variant="outline" className="ml-2">
                            {month.courses} courses
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex gap-3">
                <Button
                  onClick={handleSearch}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search Courses
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 rounded-xl font-semibold"
                >
                  <X className="w-5 h-5 mr-2" />
                  Reset
                </Button>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() => setShowCalendar(!showCalendar)}
                  variant="outline"
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 border-purple-200"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {showCalendar ? "Hide Calendar" : "View Calendar"}
                </Button>

                <Button
                  variant="ghost"
                  onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Advanced Filters
                  <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isAdvancedOpen ? "rotate-180" : ""}`} />
                </Button>
              </div>
            </div>

            {/* Advanced Filters */}
            {isAdvancedOpen && (
              <div className="mt-6 p-6 bg-gray-50 rounded-xl border-2 border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Search Options</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Duration</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Course Duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1day">1 Day</SelectItem>
                        <SelectItem value="2days">2 Days</SelectItem>
                        <SelectItem value="3days">3 Days</SelectItem>
                        <SelectItem value="week">1 Week</SelectItem>
                        <SelectItem value="custom">Custom Duration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Price Range</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Price Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under1000">Under $1,000</SelectItem>
                        <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                        <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                        <SelectItem value="over5000">Over $5,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="max-w-6xl mx-auto mt-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Active Filters:</span>
              {activeFilters.map((filter, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-purple-100 text-purple-800 hover:bg-purple-200 cursor-pointer"
                  onClick={() => removeFilter(filter)}
                >
                  {filter}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Popular Searches */}
        <div className="max-w-6xl mx-auto mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Popular Searches</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {popularSearches.map((search, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setSearchQuery(search)}
                className="rounded-full border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300"
              >
                {search}
              </Button>
            ))}
          </div>
        </div>
      </div>
      {/* Conditional Calendar Section */}
      {showCalendar && (
        <div className="transition-all duration-500 ease-in-out">
          <CalendarView />
        </div>
      )}
    </section>
  )
}
