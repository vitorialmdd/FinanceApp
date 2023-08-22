import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
        id: 1,
        title: 'Transaction',
        amount: 400,
        type: 'deposit',
        category: 'Food',
        createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
