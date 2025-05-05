'use client'
import React, { JSX, useEffect, useRef, useState } from 'react'

export default function Page(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)
  const [cells, setCells] = useState<number[]>([])
  const GRID_ROWS = 24
  const GRID_COLS = 13

  useEffect(() => {
    setCells(Array.from({ length: GRID_ROWS * GRID_COLS }, (_, i) => i))
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    let animationFrame: number
    const cellHeight = 100 / GRID_COLS
    let position = 0

    const setupBlinking = () => {
      const gridCells = containerRef.current?.querySelectorAll('.grid-cell')
      if (!gridCells) return

      // Start immediate top-to-bottom cascade
      const startCascade = () => {
        const middleRow = Math.floor(GRID_ROWS / 2)
        let offset = 0

        const processRow = () => {
          const currentRow = middleRow + offset

          if (currentRow < 0 && middleRow - offset < 0) return

          const rowsToProcess = []
          if (middleRow - offset >= 0) rowsToProcess.push(middleRow - offset)
          if (middleRow + offset < GRID_ROWS && offset !== 0) rowsToProcess.push(middleRow + offset)

          rowsToProcess.forEach((row) => {
            const startIndex = row * GRID_COLS

            const cellsToBlink = Math.max(1, Math.floor(Math.random() * 3))
            const blinkedIndices = new Set<number>()

            for (let i = 0; i < cellsToBlink; i++) {
              let cellIndex
              do {
                cellIndex = startIndex + Math.floor(Math.random() * GRID_COLS)
              } while (blinkedIndices.has(cellIndex) && blinkedIndices.size < GRID_COLS)

              blinkedIndices.add(cellIndex)

              if (cellIndex < gridCells.length) {
                const cell = gridCells[cellIndex] as HTMLElement
                cell.classList.add('blink')

                setTimeout(() => {
                  cell.classList.remove('blink')
                }, 700)
              }
            }
          })

          offset++
          setTimeout(processRow, 800)
        }

        processRow()
      }

      // Start first cascade immediately
      startCascade()

      // Set up regular cascades
      const cascadeInterval = setInterval(() => {
        startCascade()
      }, 5000)

      return cascadeInterval
    }

    const animate = () => {
      position = (position + 0.1) % cellHeight

      const gridCells = containerRef.current?.querySelectorAll('.grid-cell')
      if (gridCells) {
        gridCells.forEach((cell) => {
          const cellElement = cell as HTMLElement
          const currentTop = parseFloat(cellElement.dataset.originalTop || '0')
          const newTop = (currentTop + position) % 200
          cellElement.style.top = `${newTop}%`
          const opacity = newTop > 100 ? 0 : 1
          cellElement.style.opacity = opacity.toString()
        })
      }

      animationFrame = requestAnimationFrame(animate)
    }

    // Initialize grid positions
    const gridCells = containerRef.current?.querySelectorAll('.grid-cell')
    if (gridCells) {
      gridCells.forEach((cell, index) => {
        const cellElement = cell as HTMLElement
        const row = Math.floor(index / GRID_COLS)
        const originalTop = row * cellHeight - 100
        cellElement.dataset.originalTop = originalTop.toString()
        cellElement.style.top = `${originalTop}%`
        cellElement.style.left = `${(index % GRID_COLS) * (100 / GRID_COLS)}%`
      })
    }

    animate()
    const blinkInterval = setupBlinking()

    return () => {
      cancelAnimationFrame(animationFrame)
      clearInterval(blinkInterval)
    }
  }, [cells])

  return (
    <div className="absolute top-[18%] w-full h-[550px] md:h-full overflow-hidden opacity-50">
      <div className="perspective-[600px] sm:perspective-near h-screen overflow-hidden">
        <div
          className="h-full w-full overflow-hidden bg-transparent rotate-x-[55deg]"
          ref={containerRef}
        >
          <style jsx>{`
            @keyframes blink {
              0% {
                background-color: transparent;
              }
              20% {
                background: linear-gradient(to bottom, #0b0614, #296f7f);
              }
              80% {
                background: linear-gradient(to bottom, #0b0614, #296f7f);
              }
              100% {
                background-color: transparent;
              }
            }

            .blink {
              animation: blink 1s ease-in-out;
            }
          `}</style>

          {cells.map((i) => (
            <div
              key={i}
              className="absolute border border-opacity-10 border-slate-600 hover:bg-gradient-to-b from-[#0B0614] to-[#296F7F] hover:bg-opacity-30 transition-colors duration-200 grid-cell"
              style={{
                width: `${100 / GRID_COLS}%`,
                height: `${100 / GRID_COLS}%`,
                position: 'absolute',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
