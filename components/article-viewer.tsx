"use client"

import { useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight } from "lucide-react"

interface ArticleViewerProps {
  article: any
}

export default function ArticleViewer({ article }: ArticleViewerProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  const renderInfobox = () => {
    if (!article.infobox) return null

    return (
      <div className="float-right ml-6 mb-6 w-72 border rounded-md overflow-hidden bg-gray-50">
        <div className="bg-gray-200 p-2 font-bold text-center">{article.infobox.title}</div>
        <div className="p-4">
          {Object.entries(article.infobox.fields).map(([key, value]: [string, any]) => (
            <div key={key} className="mb-2">
              <div className="text-sm font-semibold">{key}</div>
              <div>{value}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderSection = (section: any, level = 1, parentId = "") => {
    const sectionId = parentId ? `${parentId}-${section.id}` : section.id
    const isExpanded = expandedSections[sectionId] !== false // Default to expanded

    // Determine heading level (h2, h3, etc.)
    const HeadingTag = `h${level + 1}` as keyof JSX.IntrinsicElements

    return (
      <div key={sectionId} className="mb-4">
        {section.title && (
          <Collapsible open={isExpanded} onOpenChange={() => toggleSection(sectionId)}>
            <div className="flex items-center">
              <CollapsibleTrigger asChild>
                <button className="mr-1 p-1 hover:bg-gray-100 rounded">
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
              </CollapsibleTrigger>
              <HeadingTag className={`font-bold ${level === 1 ? "text-xl" : level === 2 ? "text-lg" : "text-base"}`}>
                {section.title}
              </HeadingTag>
            </div>

            <CollapsibleContent>
              <div className="mt-2 pl-6">
                {section.content && (
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: section.content }} />
                )}

                {section.subsections &&
                  section.subsections.map((subsection: any) => renderSection(subsection, level + 1, sectionId))}

                {section.list && (
                  <ul className="list-disc pl-5 mt-2">
                    {section.list.map((item: string, index: number) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                )}
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}
      </div>
    )
  }

  return (
    <div className="wiki-article">
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>

      {renderInfobox()}

      {article.introduction && (
        <div className="mb-6 prose max-w-none" dangerouslySetInnerHTML={{ __html: article.introduction }} />
      )}

      {article.sections && article.sections.map((section: any) => renderSection(section))}

      {article.references && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">References</h2>
          <ol className="list-decimal pl-5">
            {article.references.map((reference: any, index: number) => (
              <li key={index} className="mb-1">
                <span dangerouslySetInnerHTML={{ __html: reference }} />
              </li>
            ))}
          </ol>
        </div>
      )}

      {article.categories && (
        <div className="mt-6 pt-4 border-t">
          {article.categories.map((category: string) => (
            <span key={category} className="inline-block bg-gray-100 px-2 py-1 rounded text-sm mr-2 mb-2">
              {category}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

