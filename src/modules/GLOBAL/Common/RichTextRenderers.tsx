'use client'

// Create this file at: @/modules/GLOBAL/RichTextRenderers.tsx
import React from 'react'

// Define custom renderers for each HTML element
export const richTextRenderers = {
  // Headings
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl font-bold mt-6 mb-4 text-gray-900">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-bold mt-5 mb-3 text-gray-900">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-900">{children}</h4>
  ),
  h5: ({ children }: { children: React.ReactNode }) => (
    <h5 className="text-base font-semibold mt-3 mb-1 text-gray-900">{children}</h5>
  ),
  h6: ({ children }: { children: React.ReactNode }) => (
    <h6 className="text-sm font-semibold mt-3 mb-1 text-gray-900">{children}</h6>
  ),

  // Paragraph
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-base mb-4 text-gray-700 leading-relaxed">{children}</p>
  ),

  // Lists
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc pl-6 mb-4">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal pl-6 mb-4">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="mb-1 text-gray-700">{children}</li>
  ),

  // Blockquote
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-gray-200 pl-4 italic my-4 text-gray-600">
      {children}
    </blockquote>
  ),

  // Code blocks
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto my-4 font-mono text-sm">
      {children}
    </pre>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="font-mono text-sm bg-gray-100 px-1 py-px rounded">{children}</code>
  ),

  // Links
  a: ({ children, href }: { children: React.ReactNode; href?: string }) => (
    <a
      href={href}
      className="text-blue-600 hover:text-blue-800 underline"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),

  // Images
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <img src={src} alt={alt || ''} className="max-w-full h-auto rounded-md my-4" />
  ),

  // Tables
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }: { children: React.ReactNode }) => (
    <thead className="bg-gray-50">{children}</thead>
  ),
  tbody: ({ children }: { children: React.ReactNode }) => <tbody>{children}</tbody>,
  tr: ({ children }: { children: React.ReactNode }) => <tr>{children}</tr>,
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="font-bold p-2 border border-gray-200 text-left">{children}</th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="p-2 border border-gray-200">{children}</td>
  ),

  // Horizontal rule
  hr: () => <hr className="border-t border-gray-200 my-6" />,

  // Text formatting
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-bold">{children}</strong>
  ),
  em: ({ children }: { children: React.ReactNode }) => <em className="italic">{children}</em>,
}

export default richTextRenderers
