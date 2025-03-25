'use client'

import { useState } from 'react'
import Image from 'next/image'

const filterCategories = [
  'All',
  'Chat',
  'Image',
  'Video',
  'Audio',
  'Language',
  'Code',
  'Embedding',
  'Search',
]

const models = [
  {
    id: 1,
    name: 'DEEPGEN-XL',
    description: 'Advanced image generation model with high fidelity output.',
    category: 'Image',
    logo: '/logos/deepgen.svg',
  },
  {
    id: 2,
    name: 'CODEX-PRO',
    description: 'Specialized code generation and analysis model.',
    category: 'Code',
    logo: '/logos/codex.svg',
  },
  {
    id: 3,
    name: 'CHAT-3.5',
    description: 'Conversational AI model with natural language understanding.',
    category: 'Chat',
    logo: '/logos/chat.svg',
  },
  {
    id: 4,
    name: 'AUDIO-GEN',
    description: 'Audio processing and generation model.',
    category: 'Audio',
    logo: '/logos/audio.svg',
  },
]

export function ModelFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredModels = models.filter((model) => {
    const matchesCategory = selectedCategory === 'All' || model.category === selectedCategory
    const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filter Categories */}
        <div className="mb-8 flex flex-wrap gap-2">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-blue-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Models Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredModels.map((model) => (
            <div
              key={model.id}
              className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-4 h-12 w-12">
                <Image
                  src={model.logo}
                  alt={`${model.name} logo`}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                {model.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{model.description}</p>
              <button className="mt-4 text-sm text-blue-600 hover:text-blue-700 dark:hover:text-blue-400">
                Try this model →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 