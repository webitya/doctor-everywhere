// components/shared/ClientLayout.jsx
"use client"

import StickyContactButtons from "./StickyContactButtons"

export default function ClientLayout({ children }) {
  return (
    <>
      {children}
      <StickyContactButtons />
    </>
  )
}
