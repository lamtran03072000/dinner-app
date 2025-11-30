import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Bot, Loader2, Sparkles } from "lucide-react";
import { ChatMessage } from "../types";

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "model",
      text: "Xin chào! Tôi là Trợ lý ảo của Dinner App. Bạn đang quan tâm đến giải pháp gọi món qua QR Code để tối ưu chi phí cho quán phải không?",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      text: inputText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      // Format history for server API
      const history = messages.map((msg) => ({
        role: msg.role === "model" ? "model" : "user",
        parts: [{ text: msg.text }],
      }));

      const resp = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text, history }),
      });

      if (!resp.ok) {
        console.error(
          "Server returned error from /api/gemini",
          await resp.text()
        );
      }

      const data = await resp.json().catch(() => ({}));
      const responseText =
        data?.text || "Xin lỗi, tôi không thể trả lời lúc này.";

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "model",
        text: responseText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Error sending message to server /api/gemini:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-orange-700 transition-all transform hover:scale-110 flex items-center justify-center gap-2 ${
          isOpen ? "hidden" : "flex"
        }`}
      >
        <MessageSquare size={24} />
        <span className="font-bold hidden md:inline">Tư vấn Dinner App</span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-primary p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold">Dinner App AI</h3>
                <div className="flex items-center gap-1.5 text-xs text-orange-100">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Sẵn sàng hỗ trợ
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 scrollbar-hide space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none"
                  }`}
                >
                  {msg.role === "model" && (
                    <div className="flex items-center gap-1 text-primary text-xs font-bold mb-1 opacity-70">
                      <Sparkles size={10} /> AI
                    </div>
                  )}
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-primary" />
                  <span className="text-xs text-gray-500">
                    Đang suy nghĩ...
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Hỏi về bảng giá, tính năng..."
                className="flex-1 bg-transparent border-none outline-none text-sm text-gray-800 placeholder-gray-400"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputText.trim()}
                className="text-primary disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 transition-transform"
              >
                <Send size={20} />
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-gray-400">
                Được hỗ trợ bởi Google Gemini
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
