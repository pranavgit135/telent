"use client"
import HeroSection from "../hero-section"
import CourseFilterSection from "../course-filter-section"
import CourseCategoriesSection from "../course-categories-section"
import TestimonialsSection from "../testimonials-section"
import CTASection from "../cta-section"

export default function Page() {
  return (
    <div>
      <HeroSection />
      <CourseFilterSection />
      <CourseCategoriesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
