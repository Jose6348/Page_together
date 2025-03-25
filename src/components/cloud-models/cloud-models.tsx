'use client'

import { motion } from 'framer-motion'

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

export function CloudModels() {
  return (
    <div className="relative h-[800px] w-full overflow-hidden">
      {/* Cloud Background */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform"
      >
        <div className="absolute inset-0 rounded-full bg-[#0066FF] opacity-20 blur-[100px]" />
        <div className="absolute inset-0 rounded-full bg-[#0066FF] opacity-20 blur-[150px]" />
      </motion.div>

      {/* Model Labels */}
      {models.map((model, index) => (
        <motion.div
          key={model.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className={`absolute ${model.position} -translate-x-1/2 transform`}
        >
          <div className="flex items-center space-x-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="font-medium">{model.name}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 