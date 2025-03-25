'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/navbar/navbar'
import FeaturedModels from '@/components/featured-models/featured-models'
import { CloudModels } from '@/components/cloud-models/cloud-models'

const models = [
  { name: 'Llama 3.3 70B', position: 'top-[15%] left-[20%]' },
  { name: 'DeepSeek V3', position: 'top-[15%] right-[20%]' },
  { name: 'FLUX-1 (dev)', position: 'top-[30%] left-[25%]' },
  { name: 'Gwen 2.5-Coder 32B', position: 'top-[30%] right-[25%]' },
  { name: 'Llama 2.2 11B Free', position: 'top-[45%] left-[30%]' },
  { name: 'Gwen GeQ-32B-Preview', position: 'top-[45%] right-[30%]' },
  { name: 'Llama 3.1 70B', position: 'bottom-[45%] left-[35%]' },
  { name: 'Llama 3.1 Nemo1con 70B Instruct', position: 'bottom-[45%] right-[35%]' },
  { name: 'Llama 3.1 46GB', position: 'bottom-[30%] left-[25%]' },
  { name: 'Gwen 2.5 72B', position: 'bottom-[30%] right-[25%]' },
  { name: 'FLUX-1 (pro)', position: 'bottom-[15%] left-[20%]' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <FeaturedModels />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              together<span className="text-blue-600">.models</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Build with 200+ open-source and specialized multimodal models for chat, images, code, and more.
            </p>
            
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-2 bg-blue-600 rounded-md text-white text-sm hover:bg-blue-700 transition-colors">
                Start building now
              </button>
              <button className="px-6 py-2 border border-gray-200 rounded-md text-gray-700 text-sm hover:bg-gray-50 transition-colors">
                Request dedicated endpoint
              </button>
            </div>
          </motion.div>
        </div>

        {/* Cloud Models */}
        <div className="mt-16">
          <CloudModels />
        </div>
      </section>

      {/* Featured Models */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Featured models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Model cards will be added here */}
          </div>
        </div>
      </section>
    </main>
  )
} 