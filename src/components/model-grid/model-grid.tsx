'use client';

import { Search } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'chat', label: 'Chat' },
  { id: 'image', label: 'Image' },
  { id: 'vision', label: 'Vision' },
  { id: 'audio', label: 'Audio' },
  { id: 'language', label: 'Language' },
  { id: 'code', label: 'Code' },
  { id: 'embeddings', label: 'Embeddings' },
  { id: 'rerank', label: 'Rerank' },
];

const allModels = [
  {
    type: 'CHAT',
    icon: '/Logos/deeapseeak.webp',
    name: 'DEEPSEEK R1',
    description: 'Open-source reasoning model rivaling OpenAI-g1, excelling in math, code, reasoning, and cost efficiency.',
  },
  {
    type: 'CHAT',
    icon: '/Logos/deeapseeak.webp',
    name: 'DEEPSEEK R1 DISTILLED LLAMA 70B FREE',
    description: 'Free endpoint to experiment the power of reasoning models. This distilled model beats GPT-4o on math & matches g1-mini on coding.',
    isFree: true,
  },
  {
    type: 'IMAGE',
    icon: '/Logos/flux_logo.webp',
    name: 'LLAMA 3.3 70B INSTRUCT TURBO FREE',
    description: 'Free endpoint to try 70B multilingual LLM optimized for chat and instruction following.',
    isFree: true,
  },
  {
    type: 'VISION',
    icon: '/Logos/flux_logo.webp',
    name: 'FLUX.1 [SGINELLI] FREE',
    description: 'Free endpoint for the SOTA open-source image generation model.',
    isFree: true,
  },
  {
    type: 'CHAT',
    icon: '/Logos/Mistral_logo.png',
    name: 'LLAMA 3.2 11B FREE',
    description: 'Free endpoint to try Llama 3.2 11B.',
    isFree: true,
  },
  {
    type: 'CHAT',
    icon: '/Logos/deeapseeak.webp',
    name: 'DEEPSEEK-V3',
    description: 'DeepSeek\'s latest open Mixture-of-Experts model.',
  },
  {
    type: 'CHAT',
    icon: '/Logos/Google_logo.png',
    name: 'GWEN QWQ-32B',
    description: 'Gwen series reasoning model excelling in complex tasks.',
  },
  {
    type: 'CHAT',
    icon: '/Logos/Google_logo.png',
    name: 'GWEN2.5 72B',
    description: 'Powerful decoder-only models available in 7B and 72B.',
  },
  {
    type: 'AUDIO',
    icon: '/Logos/Azure_logo.png',
    name: 'CARTESIA SONIC-2',
    description: 'Low-latency, ultra-realistic voice model, served in real-time.',
    isNew: true,
  },
  {
    type: 'CHAT',
    icon: '/Logos/Mistral_logo.png',
    name: 'MISTRAL SMALL-3',
    description: '25B model rivaling GPT-4o mini, and larger models like.',
  },
  {
    type: 'CHAT',
    icon: '/Logos/Nvidia_logo.png',
    name: 'LLAMA 3.1 NEMOTRON 70B INSTRUCT',
    description: 'The LLM is customized by NVIDIA to improve the performance.',
  },
  {
    type: 'CHAT',
    icon: '/Logos/Mistral_logo.png',
    name: 'LLAMA 3.3 70B',
    description: 'The Meta Llama 3.3 multilingual large language model.',
  },
  {
    type: 'IMAGE',
    icon: '/Logos/flux_logo.webp',
    name: 'FLUX.1 [PRO]',
    description: 'Premium image generation model by Black Forest Labs.',
  },
  {
    type: 'CHAT',
    icon: '/Logos/Google_logo.png',
    name: 'GWEN QwQ 32B PREVIEW',
    description: 'Experimental research model by Modulus Storm team.',
  },
  {
    type: 'CHAT',
    icon: '/Logos/Mistral_logo.png',
    name: 'LLAMA 3.1 46GB',
    description: 'The Meta Llama 3.1 collection of multilingual large language.',
  },
  {
    type: 'CODE',
    icon: '/Logos/Google_logo.png',
    name: 'GWEN 2.5 CODER 32B INSTRUCT',
    description: 'SOTA code LLM with advanced code generation, reasoning.',
  },
  {
    type: 'CHAT',
    icon: '/Logos/Google_logo.png',
    name: 'GEMMA-2 INSTRUCT (27B)',
    description: 'Gemma is a family of lightweight state-of-the-art.',
  },
  {
    type: 'CHAT',
    icon: '/Logos/Mistral_logo.png',
    name: 'LLAMA 3.1 8B',
    description: 'The Meta Llama 3.1 collection of multilingual large language.',
  },
  {
    type: 'VISION',
    icon: '/Logos/flux_logo.webp',
    name: 'GWEN2-V4-72B-INSTRUCT',
    description: 'A powerful OSS vision model by Modula that combines.',
  },
  {
    type: 'CHAT',
    icon: '/Logos/deeapseeak.webp',
    name: 'DEEPSEEK R1 DISTILLED LLAMA 70B',
    description: 'Llama 70B distilled with reasoning capabilities from.',
  },
];

const ModelGrid = () => {
  const [visibleCount, setVisibleCount] = useState(15);
  const hasMore = visibleCount < allModels.length;

  const loadMore = () => {
    setVisibleCount(Math.min(visibleCount + 5, allModels.length));
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories and Search */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-4 py-2 text-sm rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-white"
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Find a model"
              className="pl-10 pr-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Model Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {allModels.slice(0, visibleCount).map((model, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-gray-500 dark:text-gray-400">{model.type}</span>
                {model.isFree && (
                  <span className="text-xs text-blue-500 dark:text-blue-400 font-medium">FREE</span>
                )}
                {model.isNew && (
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full">NEW</span>
                )}
              </div>

              <div className="mb-4 h-10 flex items-center">
                <Image
                  src={model.icon}
                  alt={model.name}
                  width={40}
                  height={40}
                  className="object-contain w-auto h-full"
                />
              </div>

              <h3 className="text-sm font-medium mb-2 line-clamp-2 text-gray-900 dark:text-white">{model.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                {model.description}
              </p>

              <button className="text-xs text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 flex items-center gap-1">
                TRY THIS MODEL →
              </button>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModelGrid; 