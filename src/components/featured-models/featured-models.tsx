'use client';

import React from 'react';
import { motion } from 'framer-motion';

const models = [
  {
    name: 'Llama 3.1 405B',
    description: 'Um modelo avançado para geração de texto e código, ideal para aplicações complexas.',
    link: '/models/llama-3-1-405b',
  },
  {
    name: 'FLUX.1 [pro]',
    description: 'Perfeito para criação de imagens e arte digital com alta qualidade.',
    link: '/models/flux-1-pro',
  },
  {
    name: 'Gwen 2.5 72B',
    description: 'Modelo multimodal para chat e interações em tempo real.',
    link: '/models/gwen-2-5-72b',
  },
];

const FeaturedModels = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Modelos em Destaque
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                {model.name}
              </h3>
              <p className="text-gray-600 mb-6 min-h-[60px]">
                {model.description}
              </p>
              <a
                href={model.link}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Saiba Mais
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;