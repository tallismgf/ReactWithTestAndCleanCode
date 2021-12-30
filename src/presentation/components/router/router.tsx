import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import { ValidationStub } from '@/presentation/test'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login validation={new ValidationStub()} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
