import React from 'react'

function FormError({ children }) {
  return (
    <div style={{ color: 'red' }}>
        {children}
    </div>
  )
}

export default FormError