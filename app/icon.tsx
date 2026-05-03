import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: '#171717',
        width: '100%',
        height: '100%',
        borderRadius: '7px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Simplified trending-up arrow matching the logo mark */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <polyline points="3,17 9,11 13,15 21,7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="15,7 21,7 21,13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>,
    { ...size },
  );
}
