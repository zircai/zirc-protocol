"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface SubmitIdeaFormProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (title: string, description: string) => void
}

export function SubmitIdeaForm({ isOpen, onClose, onSubmit }: SubmitIdeaFormProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim() && description.trim()) {
      onSubmit(title.trim(), description.trim())
      setTitle("")
      setDescription("")
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-black border border-[#61D040]/20 rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#61D040]/60 hover:text-[#61D040] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-4">Submit New Idea</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm text-[#61D040]/60 mb-1">
              Idea Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-black border border-[#61D040]/20 rounded px-3 py-2 text-[#61D040] focus:border-[#61D040] focus:outline-none"
              placeholder="Enter idea title..."
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm text-[#61D040]/60 mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-black border border-[#61D040]/20 rounded px-3 py-2 text-[#61D040] focus:border-[#61D040] focus:outline-none min-h-[100px]"
              placeholder="Describe your idea..."
              required
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-[#61D040]/20 rounded hover:bg-[#61D040]/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#61D040]/10 border border-[#61D040]/20 rounded hover:bg-[#61D040]/20 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 