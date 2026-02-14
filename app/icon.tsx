import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: 'linear-gradient(135deg, #1a2e52, #263f6a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
        }}
      >
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
        >
          <path
            d="M10 0L20 5v7c0 5.523-4.477 10-10 10S0 17.523 0 12V5l10-5z"
            fill="#d4930d"
            fillOpacity={0.9}
          />
          <path
            d="M10 3L17 6.5v5.5c0 3.866-3.134 7-7 7s-7-3.134-7-7V6.5L10 3z"
            fill="#1a2e52"
          />
          <path
            d="M9 12.5l-2-2 1.2-1.2L9 10.1l2.8-2.8L13 8.5l-4 4z"
            fill="#d4930d"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
