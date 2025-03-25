'use client';

import { useState } from 'react'
import Image from 'next/image'

interface Model {
  type: 'CHAT' | 'IMAGE' | 'VISION' | 'AUDIO'
  name: string
  description: string
  logo: string
  isFree?: boolean
  isNew?: boolean
}

const models: Model[] = [
  {
    type: 'CHAT',
    name: 'DEEPSEEK R1',
    description: 'Open-source reasoning model rivaling OpenAI-a1, excelling in math, code, reasoning, and cost efficiency.',
    logo: 'https://github.com/Jose6348/Images_Projects/raw/refs/heads/main/public/logos/deeapseeak.webp',
    isFree: true
  },
  {
    type: 'CHAT',
    name: 'DEEPSEEK R1 DISTILLED LLAMA 70B',
    description: 'Free endpoint to experiment the power of reasoning models. This distilled model beats GPT-4o on math & matches a1-mini on coding.',
    logo: 'https://github.com/Jose6348/Images_Projects/raw/refs/heads/main/public/logos/deeapseeak.webp',
    isFree: true
  },
  {
    type: 'CHAT',
    name: 'LLAMA 3.3 70B INSTRUCT TURBO',
    description: 'Free endpoint to try this 70B multilingual LLM optimized for dialogue, excelling in benchmarks and surpassing many chat models.',
    logo: 'https://github.com/Jose6348/Images_Projects/blob/main/public/logos/Azure_logo.png?raw=true',
    isFree: true
  },
  {
    type: 'IMAGE',
    name: 'FLUX.1 [SCHNELL]',
    description: 'Free endpoint for the SOTA open-source image generation model by Black Forest Labs.',
    logo: 'https://github.com/Jose6348/Images_Projects/raw/refs/heads/main/public/logos/flux_logo.webp',
    isFree: true
  },
  {
    type: 'VISION',
    name: 'LLAMA 3.2 11B',
    description: 'Free endpoint to try Llama 3.2 11B.',
    logo: 'https://github.com/Jose6348/Images_Projects/blob/main/public/logos/Azure_logo.png?raw=true',
    isFree: true
  },
  {
    type: 'CHAT',
    name: 'DEEPSEEK-V3',
    description: "DeepSeek's latest open Mixture-of-Experts model challenging top AI models at much lower cost.",
    logo: 'https://github.com/Jose6348/Images_Projects/raw/refs/heads/main/public/logos/deeapseeak.webp'
  },
  {
    type: 'IMAGE',
    name: 'FLUX.1 [PRO]',
    description: 'Premium image generation model by Black Forest Labs.',
    logo: 'https://github.com/Jose6348/Images_Projects/raw/refs/heads/main/public/logos/flux_logo.webp'
  },
  {
    type: 'AUDIO',
    name: 'CARTESIA SONIC-2',
    description: 'Low-latency, ultra-realistic voice model, served in partnership with Cartesia.',
    logo: 'https://github.com/Jose6348/Images_Projects/blob/main/public/logos/Cartesia_logo.jpeg?raw=true',
    isNew: true
  },
  {
    type: 'CHAT',
    name: 'MISTRAL SMALL 3',
    description: '24B model rivaling GPT-4o mini, and larger models like Llama 3.3 70B. Ideal for chat use cases like customer support, translation and summarization.',
    logo: 'https://github.com/Jose6348/Images_Projects/blob/main/public/logos/Mistral_logo.png?raw=true'
  },
  {
    type: 'CHAT',
    name: 'QWEN2.5 72B',
    description: "Powerful decoder-only models available in 7B and 72B variants, developed by Alibaba Cloud's Qwen team for advanced language processing.",
    logo: 'https://github.com/Jose6348/Images_Projects/blob/main/public/logos/Qwen_logo.png?raw=true'
  },
  {
    type: 'CHAT',
    name: 'GEMMA-2 INSTRUCT (27B)',
    description: 'Gemma is a family of lightweight, state-of-the-art open models from Google, built from the same research and technology used to create the Gemini models.',
    logo: 'https://github.com/Jose6348/Images_Projects/blob/main/public/logos/Google_logo.png?raw=true'
  },
  {
    type: 'CHAT',
    name: 'LLAMA 3.1 NEMOTRON 70B INSTRUCT',
    description: 'This LLM is customized by NVIDIA to improve the helpfulness of LLM generated responses to user queries.',
    logo: 'https://github.com/Jose6348/Images_Projects/blob/main/public/logos/Nvidia_logo.png?raw=true'
  }
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'chat', label: 'Chat' },
  { id: 'image', label: 'Image' },
  { id: 'vision', label: 'Vision' },
  { id: 'audio', label: 'Audio' },
  { id: 'language', label: 'Language' },
  { id: 'code', label: 'Code' },
  { id: 'embeddings', label: 'Embeddings' },
  { id: 'rerank', label: 'Rerank' }
]

export default function FeaturedModels() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredModels = models.filter(model => 
    selectedCategory === 'all' || model.type.toLowerCase() === selectedCategory.toLowerCase()
  )

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 2 >= filteredModels.length ? 0 : prev + 2
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, filteredModels.length - 2) : prev - 2
    )
  }

  return (
    <section className="bg-[#111827] text-white py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex gap-16">
          {/* Title and Description */}
          <div className="w-[300px] pt-8">
            <h2 className="text-4xl font-light">Featured models</h2>
            <p className="text-lg text-gray-400 mt-4">
              Explore our collection of powerful and versatile AI models.
            </p>
          </div>

          {/* Model Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-6">
              {filteredModels.slice(currentIndex, currentIndex + 2).map((model, index) => (
                <div key={model.name} className="space-y-4">
                  <div className="bg-white rounded-lg overflow-hidden w-full h-[320px]">
                    <div className="p-6 text-black h-full flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-medium text-gray-600">{model.type}</span>
                        {model.isFree && (
                          <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">FREE</span>
                        )}
                        {model.isNew && (
                          <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">NEW</span>
                        )}
                      </div>

                      <div className="flex justify-start mb-6">
                        <Image
                          src={model.logo}
                          alt={`${model.name} logo`}
                          width={48}
                          height={48}
                          className="h-12 w-auto object-contain"
                        />
                      </div>

                      <h3 className="text-lg font-medium mb-3">{model.name}</h3>
                      <p className="text-sm text-gray-600 mb-6 flex-1">{model.description}</p>

                      <button className="text-sm text-gray-900 font-medium flex items-center group mt-auto">
                        TRY THIS MODEL
                        <svg 
                          className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Navigation Buttons - Only show under the first card */}
                  {index === 0 && (
                    <div className="flex gap-3">
                      <button
                        onClick={prevSlide}
                        className="w-10 h-10 rounded-full bg-[#0066FF] hover:bg-blue-600 flex items-center justify-center transition-colors"
                      >
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button
                        onClick={nextSlide}
                        className="w-10 h-10 rounded-full bg-[#0066FF] hover:bg-blue-600 flex items-center justify-center transition-colors"
                      >
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      
      </div>
    </section>
  )
}