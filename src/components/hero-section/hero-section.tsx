'use client'

import Image from 'next/image'

export default function HeroSection() {
  const models = [
    'Llama 3.3 70B', 'DeepSeek V3', 'Qwen 2.5-Coder 32B', 'Qwen QwQ-32B-Preview',
    'Llama 3.2 11B Free', 'Llama 3.2 90B', 'Llama 3.1 70B', 'Llama 3.1 Nemotron 70B Instruct',
    'Llama 3.1 405B', 'Qwen 2.5 72B', 'FLUX.1 [dev]', 'FLUX.1 [pro]', 'FLUX.1 [schnell] Free',
    'Llama 3.2 11B', 'Gemma-2 Instruct (27B)', 'DeepSeek R1', 'Mixtral-8x22B'
  ]

  return (
    <section className="relative flex h-[600px] px-4 max-w-[1400px] mx-auto">
      {/* Left Content */}
      <div className="w-[45%] pt-20">
        <div className="flex flex-col items-start space-y-5">
          <h1 className="text-[72px] font-medium leading-[0.95]">
            together
            <span className="text-[#0066FF] block">.models</span>
          </h1>
          <p className="text-[28px] text-[#4B5563] max-w-[500px] leading-[1.2]">
            Build with 200+ open-source and specialized multimodal models for chat, images, code, and more.
          </p>
          <div className="flex space-x-4 pt-2">
            <button className="bg-[#0066FF] hover:bg-blue-600 text-white rounded-full px-6 py-2.5 text-[14px] font-medium">
              Start building now
            </button>
            <button className="border border-[#E5E7EB] hover:border-gray-300 text-[#4B5563] hover:text-gray-900 rounded-full px-6 py-2.5 text-[14px] font-medium">
              Request dedicated endpoint
            </button>
          </div>
        </div>
      </div>

      {/* Right Content - Models Visualization */}
      <div className="w-[55%] relative">
        <div className="absolute top-[-20px] right-[-20px] w-[600px] h-[600px]">
          <div className="relative w-full h-full">
            <Image
              src="/Circulo_da_nuvem.svg"
              alt="Circle Background"
              width={600}
              height={600}
              className="absolute inset-0"
            />
            <Image
              src="/Nuvem_azul.svg"
              alt="Blue Cloud"
              width={180}
              height={180}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            
            {/* Model Names */}
            {models.map((model, index) => {
              const angle = (index * (360 / models.length)) * (Math.PI / 180)
              const radius = 250 // Reduced radius for better fit
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <div
                  key={model}
                  className="absolute whitespace-nowrap bg-white px-2.5 py-1 rounded-full text-xs shadow-sm"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    left: '50%',
                    top: '50%',
                  }}
                >
                  {model}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 