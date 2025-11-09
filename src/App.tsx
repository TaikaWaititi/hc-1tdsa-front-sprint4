import React from 'react'
import AppRoutes from './routes/AppRoutes'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-hospital-soft/30">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}
