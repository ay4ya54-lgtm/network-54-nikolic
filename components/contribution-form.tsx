"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { articles } from "@/lib/data"

interface ContributionFormProps {
  articleId: string
}

export default function ContributionForm({ articleId }: ContributionFormProps) {
  const router = useRouter()
  const article = articles.find((a) => a.id === articleId)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [sectionType, setSectionType] = useState("existing")
  const [selectedSection, setSelectedSection] = useState("")
  const [newSectionTitle, setNewSectionTitle] = useState("")
  const [content, setContent] = useState("")
  const [reference, setReference] = useState("")
  const [captchaValue, setCaptchaValue] = useState("")
  const [captchaAnswer, setCaptchaAnswer] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  // Generate a simple math captcha
  useState(() => {
    const num1 = Math.floor(Math.random() * 10)
    const num2 = Math.floor(Math.random() * 10)
    setCaptchaValue(`${num1} + ${num2} = ?`)
    setCaptchaAnswer((num1 + num2).toString())
  })

  // Get all section options for the dropdown
  const getSectionOptions = () => {
    const options: { id: string; title: string }[] = []

    if (!article) return options

    article.sections.forEach((section) => {
      options.push({
        id: section.id,
        title: section.title,
      })

      if (section.subsections) {
        section.subsections.forEach((subsection) => {
          options.push({
            id: `${section.id}-${subsection.id}`,
            title: `${section.title} > ${subsection.title}`,
          })
        })
      }
    })

    return options
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate captcha
    if (
      captchaAnswer !==
      captchaValue
        .split(" = ?")[0]
        .split(" + ")
        .reduce((a, b) => Number.parseInt(a) + Number.parseInt(b), 0)
        .toString()
    ) {
      setError("Incorrect captcha answer")
      return
    }

    setIsSubmitting(true)
    setError("")

    // In a real app, this would send data to an API
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setName("")
        setEmail("")
        setSectionType("existing")
        setSelectedSection("")
        setNewSectionTitle("")
        setContent("")
        setReference("")
        setIsSuccess(false)
      }, 3000)
    }, 1000)
  }

  if (isSuccess) {
    return (
      <Card className="p-6 bg-green-50 border-green-200">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thank you for your contribution!</h3>
        <p className="mb-4">Your submission has been received and will be reviewed by the article owner.</p>
        <Button onClick={() => setIsSuccess(false)}>Submit another contribution</Button>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email (optional)</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Contribution Type</Label>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="existing-section"
              checked={sectionType === "existing"}
              onCheckedChange={() => setSectionType("existing")}
            />
            <label htmlFor="existing-section" className="text-sm">
              Add to existing section
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="new-section" checked={sectionType === "new"} onCheckedChange={() => setSectionType("new")} />
            <label htmlFor="new-section" className="text-sm">
              Create new section
            </label>
          </div>
        </div>
      </div>

      {sectionType === "existing" ? (
        <div className="space-y-2">
          <Label htmlFor="section">Select Section</Label>
          <Select value={selectedSection} onValueChange={setSelectedSection} required>
            <SelectTrigger>
              <SelectValue placeholder="Choose a section" />
            </SelectTrigger>
            <SelectContent>
              {getSectionOptions().map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ) : (
        <div className="space-y-2">
          <Label htmlFor="new-section-title">New Section Title</Label>
          <Input
            id="new-section-title"
            value={newSectionTitle}
            onChange={(e) => setNewSectionTitle(e.target.value)}
            required={sectionType === "new"}
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="content">Your Contribution</Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="min-h-[120px]"
        />
        <p className="text-xs text-muted-foreground">
          You can use basic Wiki markup: '''bold''', ''italic'', [[links]], etc.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="reference">Reference/Source</Label>
        <Input
          id="reference"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          placeholder="URL or citation"
          required
        />
        <p className="text-xs text-muted-foreground">Please provide a source for verification</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="captcha">Verification: {captchaValue}</Label>
        <Input
          id="captcha"
          value={captchaAnswer}
          onChange={(e) => setCaptchaAnswer(e.target.value)}
          required
          className="w-24"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Submit Contribution"}
      </Button>
    </form>
  )
}

