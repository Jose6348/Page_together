'use client'

import { useState } from 'react'

const codeExamples = {
  curl: `curl -X POST "https://api.together.xyz/v1/chat/completions" \\
  -H "Authorization: Bearer $TOGETHER_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "meta-llama/Llama-Vision-Free",
    "messages": [{"role": "user", "content": "What are some fun things to do in Paris?"}]
  }'`,
  python: `import together

together.api_key = "YOUR_API_KEY"

response = together.chat.completions.create(
    model="meta-llama/Llama-Vision-Free",
    messages=[{
        "role": "user",
        "content": "What are some fun things to do in Paris?"
    }]
)

print(response.choices[0].message.content)`,
  typescript: `import { Together } from 'together-ai';

const together = new Together('YOUR_API_KEY');

async function chat() {
  const response = await together.chat.completions.create({
    model: "meta-llama/Llama-Vision-Free",
    messages: [{
      role: "user",
      content: "What are some fun things to do in Paris?"
    }]
  });

  console.log(response.choices[0].message.content);
}`
};

export default function RunModel() {
  const [selectedTab, setSelectedTab] = useState<'curl' | 'python' | 'typescript'>('curl')

  return (
    <section className="bg-[#111827] text-white py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-5xl font-medium mb-6">
              Run any model on the fastest endpoints
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Use our API to deploy any open-source model on the fastest inference stack available with optimal cost efficiency.
            </p>
            <p className="text-gray-400 text-lg mb-8">
              Scale into a dedicated deployment anytime with a custom number of instances to get optimal throughput.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Start building
              </button>
              <button className="border border-gray-700 hover:border-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Request dedicated endpoint
              </button>
            </div>
          </div>

          {/* Right Column - Code Example */}
          <div className="bg-white rounded-xl overflow-hidden">
            {/* Tabs */}
            <div className="flex gap-2 p-4 bg-gray-50">
              {(['curl', 'python', 'typescript'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTab === tab
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Code Block */}
            <div className="p-4 bg-[#1e1e1e] text-white">
              <div className="font-mono text-sm whitespace-pre overflow-x-auto">
                <pre className="text-green-400">
                  {codeExamples[selectedTab]}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 