'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your AI assistant for Elevating Wellness. I can help you with:\n\n• Service information\n• Insurance questions\n• Scheduling consultations\n• General inquiries\n\nHow can I assist you today?",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const response = generateAIResponse(userMessage.content)
      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  const generateAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase()

    // Service-related questions
    if (lowerInput.includes('service') || lowerInput.includes('care') || lowerInput.includes('help')) {
      return "We offer a wide range of home healthcare services:\n\n• Personal Care - Assistance with daily living activities\n• Skilled Nursing - Professional medical care\n• Companion Care - Social interaction and light tasks\n• Memory Care - Specialized dementia/Alzheimer's support\n• Physical Therapy - In-home rehabilitation\n• Respite Care - Temporary care for family caregivers\n\nWould you like more details about any specific service? You can also book a free consultation to discuss your needs."
    }

    // Insurance questions
    if (lowerInput.includes('insurance') || lowerInput.includes('medicaid') || lowerInput.includes('medicare') || lowerInput.includes('pay') || lowerInput.includes('cost')) {
      return "Great question! We accept:\n\n✓ Medicaid\n✓ Medicare\n✓ Most private insurance plans\n✓ Private pay\n\nOur insurance navigation team can help you:\n• Verify your benefits\n• Understand coverage\n• Maximize your benefits\n• Handle claims\n\nWould you like to speak with our insurance specialist? I can help you schedule a consultation."
    }

    // Scheduling/booking
    if (lowerInput.includes('book') || lowerInput.includes('schedule') || lowerInput.includes('appointment') || lowerInput.includes('consultation')) {
      return "I'd be happy to help you schedule a free consultation! Our care coordinators are available to:\n\n• Assess your needs\n• Answer questions\n• Create a personalized care plan\n• Discuss insurance options\n\nYou can book online at any time, or I can help you schedule right now. Would you like me to guide you through the booking process?"
    }

    // Location/service area
    if (lowerInput.includes('location') || lowerInput.includes('area') || lowerInput.includes('st. louis') || lowerInput.includes('zip') || lowerInput.includes('serve')) {
      return "We proudly serve St. Louis, Missouri and surrounding areas:\n\n• St. Louis City\n• St. Louis County\n• St. Charles County\n• Jefferson County\n• Franklin County\n• And surrounding metro areas\n\nNot sure if we serve your area? Enter your ZIP code on our service area page, or I can help check for you!"
    }

    // Hours/availability
    if (lowerInput.includes('hour') || lowerInput.includes('available') || lowerInput.includes('when') || lowerInput.includes('time')) {
      return "We're here for you:\n\n📞 Phone Support:\n• Monday-Friday: 8 AM - 6 PM\n• Saturday: 9 AM - 3 PM\n• Sunday: Emergency services\n• 24/7 Care Available\n\n💬 This chat assistant is available 24/7 to answer your questions!\n\nFor immediate assistance, call (314) 555-0123"
    }

    // Contact information
    if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('email') || lowerInput.includes('call')) {
      return "You can reach us:\n\n📞 Phone: (314) 555-0123\n📧 Email: info@elevatingwellness.com\n📍 Location: St. Louis, MO\n\nWe're available 24/7 for emergencies. For general inquiries, our office hours are Monday-Friday 8 AM - 6 PM."
    }

    // Pricing/cost
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('expensive') || lowerInput.includes('afford')) {
      return "Pricing depends on your specific needs and insurance coverage. The good news is:\n\n• We accept Medicaid and Medicare\n• Most private insurance plans accepted\n• Flexible payment options available\n• Free consultation to discuss costs\n\nDuring your free consultation, we'll:\n• Assess your needs\n• Verify insurance coverage\n• Provide transparent pricing\n• Create a care plan that fits your budget\n\nWould you like to schedule a consultation to discuss pricing?"
    }

    // Emergency
    if (lowerInput.includes('emergency') || lowerInput.includes('urgent') || lowerInput.includes('immediate')) {
      return "For medical emergencies, please call 911 immediately.\n\nFor urgent home healthcare needs, we offer 24/7 emergency care services. Call us at (314) 555-0123 anytime.\n\nOur emergency care team can provide:\n• Immediate caregiver dispatch\n• Skilled nursing support\n• Crisis intervention\n• Medical coordination"
    }

    // Default response
    return "Thank you for your question! I'm here to help with information about our services, insurance, scheduling, and more.\n\nFor more specific questions or to speak with a care coordinator, I'd recommend:\n\n1. Booking a free consultation\n2. Calling us at (314) 555-0123\n3. Emailing info@elevatingwellness.com\n\nIs there something specific I can help you with about our home healthcare services?"
  }

  const quickActions = [
    { label: 'View Services', action: 'What services do you offer?' },
    { label: 'Insurance Info', action: 'What insurance do you accept?' },
    { label: 'Book Consultation', action: 'How do I schedule a consultation?' },
    { label: 'Service Area', action: 'What areas do you serve?' },
  ]

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 group"
          aria-label="Open chat"
        >
          <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <div className="font-bold">AI Assistant</div>
                <div className="text-xs opacity-90">Elevating Wellness</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gradient-to-r from-blue-600 to-green-600 text-white'
                    }`}
                  >
                    {message.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-800 shadow-md border border-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white rounded-2xl px-4 py-2 shadow-md border border-gray-200">
                    <Loader2 className="animate-spin text-blue-600" size={20} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="px-4 py-2 border-t border-gray-200 bg-white">
              <div className="text-xs text-gray-600 mb-2 font-semibold">Quick Actions:</div>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={async () => {
                      const userMessage: Message = {
                        role: 'user',
                        content: action.action,
                        timestamp: new Date()
                      }
                      setMessages(prev => [...prev, userMessage])
                      setIsLoading(true)
                      
                      setTimeout(() => {
                        const response = generateAIResponse(action.action)
                        const assistantMessage: Message = {
                          role: 'assistant',
                          content: response,
                          timestamp: new Date()
                        }
                        setMessages(prev => [...prev, assistantMessage])
                        setIsLoading(false)
                      }, 1000)
                    }}
                    className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-blue-100 text-gray-700 rounded-full transition-colors"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex items-center space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              AI Assistant • Available 24/7
            </p>
          </form>
        </div>
      )}
    </>
  )
}

