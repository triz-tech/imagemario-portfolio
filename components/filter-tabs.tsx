"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { SectionReveal } from "./animations"

interface FilterTabsProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function FilterTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: FilterTabsProps) {
  return (
    <SectionReveal>
      <div className="flex flex-wrap gap-2 md:gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "px-4 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-300 border",
              activeCategory === category
                ? "border-primary text-primary bg-primary/5"
                : "border-border text-muted-foreground hover:border-muted-foreground/40 hover:text-primary"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </SectionReveal>
  )
}

interface FilterableGalleryProps {
  categories: string[]
  children: (activeCategory: string) => React.ReactNode
}

export function FilterableGallery({
  categories,
  children,
}: FilterableGalleryProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  return (
    <div>
      <div className="px-6 md:px-12 mb-12">
        <FilterTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
      <div className="px-6 md:px-12">{children(activeCategory)}</div>
    </div>
  )
}
// ui improvements