"use client";
import { useState } from "react";

interface Message {
  content: string;
  isBot: boolean;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    { content: "你好！我是AI助手，有什么可以帮你的吗？", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { content: input, isBot: false }]);
    
    setTimeout(() => {
      const userMessage = input.trim().toLowerCase();
      let response = "";

      if (userMessage.includes("你好") || userMessage.includes("hi") || userMessage.includes("hello")) {
        const greetings = [
          "你好啊！很高兴见到你！",
          "你好！今天有什么我可以帮你的吗？",
          "嗨！希望你今天心情愉快！"
        ];
        response = greetings[Math.floor(Math.random() * greetings.length)];
      }
      else if (userMessage.includes("天气")) {
        const weatherResponses = [
          "今天天气晴朗，温度适宜，是个出门散步的好日子！",
          "根据最新天气预报，今天气温20-25度，多云转晴，很舒适哦！",
          "今天阳光明媚，空气质量不错，适合户外活动！"
        ];
        response = weatherResponses[Math.floor(Math.random() * weatherResponses.length)];
      }
      else if (userMessage.includes("午餐") || userMessage.includes("吃什么")) {
        const lunchResponses = [
          "我给您几个午餐建议：\n1. 清炒时蔬配米饭\n2. 意大利面配沙拉\n3. 照烧鸡肉饭\n4. 麻辣香锅\n选一个您喜欢的吧！",
          "今天午餐我建议您可以尝试：\n1. 水煮鱼配米饭\n2. 三明治配玉米汤\n3. 日式咖喱饭\n都是不错的选择！",
          "根据当季食材，推荐您午餐可以选择：\n1. 西红柿牛肉面\n2. 韩式拌饭\n3. 粤式烧腊饭\n营养美味都兼顾哦！"
        ];
        response = lunchResponses[Math.floor(Math.random() * lunchResponses.length)];
      }
      else {
        const defaultResponses = [
          "抱歉，我可能没有完全理解您的问题。您能具体说明一下吗？",
          "这个问题很有趣，让我想想怎么回答...",
          "您说的这个我很感兴趣，能详细解释一下吗？"
        ];
        response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
      }

      setMessages(prev => [...prev, { 
        content: response, 
        isBot: true 
      }]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center p-4">
      <div className="w-full max-w-3xl h-[600px] bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col">
        {/* 标题栏 */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-semibold text-center text-black/50 dark:text-white/50">AI 助手</h1>
        </div>

        {/* 聊天消息区域 */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.isBot
                    ? "bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        {/* 输入区域 */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-b-xl">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="输入消息..."
              className="flex-1 p-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
              text-black dark:text-white bg-white dark:bg-gray-700 
              placeholder-gray-400 dark:placeholder-gray-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              发送
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
