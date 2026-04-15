import React, { useEffect, useMemo, useState } from 'react'

interface ScreenAdapterProps {
  children: React.ReactNode
  width?: number
  height?: number
  className?: string
}

function getScale(width: number, height: number) {
  if (typeof window === 'undefined') {
    return 1
  }

  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  return Math.min(viewportWidth / width, viewportHeight / height)
}

export function ScreenAdapter({
  children,
  width = 1920,
  height = 1080,
  className = '',
}: ScreenAdapterProps) {
  const [scale, setScale] = useState(() => getScale(width, height))

  useEffect(() => {
    const updateScale = () => {
      setScale(getScale(width, height))
    }

    updateScale()
    window.addEventListener('resize', updateScale)

    return () => {
      window.removeEventListener('resize', updateScale)
    }
  }, [height, width])

  const containerStyle = useMemo(
    () => ({
      width: `${width}px`,
      height: `${height}px`,
      transform: `translate(-50%, -50%) scale(${scale})`,
      transformOrigin: 'top left',
    }),
    [height, scale, width],
  )

  return (
    <div className="fixed inset-0 overflow-hidden bg-background">
      <div
        className={`absolute left-1/2 top-1/2 overflow-hidden ${className}`}
        style={containerStyle}
      >
        {children}
      </div>
    </div>
  )
}
