import React from 'react';
import { ChatMessage } from './components/chat/ChatMessage';
import { ChatInput } from './components/chat/ChatInput';
import { ShowHistory } from './components/chat/ShowHistory';
import { useChat } from './hooks/useChat';

export default function App() {
  const { messages, showHistory, isLoading, setShowHistory, handleSendMessage } = useChat();
  const lastMessage = messages[messages.length - 1];

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="relative h-screen flex flex-col">
        {/* Show History Toggle */}
        <div className="absolute top-4 right-4 z-10">
          <ShowHistory showHistory={showHistory} onToggle={() => setShowHistory(!showHistory)} />
        </div>

        {/* Messages Area */}
        <div className="flex-1 flex items-center justify-center p-4">
          {showHistory ? (
            <div className="w-full max-w-4xl space-y-4">
              {messages.map((message, index) => (
                <ChatMessage 
                  key={message.id} 
                  {...message} 
                  isLoading={isLoading && index === messages.length - 1 && message.isAI} 
                />
              ))}
            </div>
          ) : (
            lastMessage && (
              <ChatMessage 
                {...lastMessage} 
                isLoading={isLoading && lastMessage.isAI} 
              />
            )
          )}
        </div>

        {/* Input Area */}
        <div className="p-4">
          <ChatInput 
            onSendMessage={handleSendMessage} 
            isLoading={isLoading} 
          />
        </div>
      </main>
    </div>
  );
}