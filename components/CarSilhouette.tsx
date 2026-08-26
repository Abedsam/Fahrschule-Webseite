export default function CarSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Silhouette eines Sportcoupés"
    >
      <ellipse cx="400" cy="255" rx="330" ry="18" fill="#ff5a1f" opacity="0.18" />
      <path
        d="M40 210c10-8 40-14 78-16 8-30 46-70 96-88 46-16 108-22 164-14 40 6 66 24 92 46 20-2 46 0 66 8 26 10 40 24 46 42 18 2 34 8 40 18 6 10 4 22-6 28-14 8-40 10-64 10H120c-28 0-56-4-76-16-10-6-14-12-4-18Z"
        fill="url(#carBody)"
      />
      <path
        d="M170 106c26-30 70-52 120-56 44-4 92 4 122 30 10 8 16 18 18 26H166c1-1 2-1 4 0Z"
        fill="#1c1d20"
      />
      <path d="M182 104c20-22 52-38 88-42 6 12 10 26 10 40h-98Z" fill="#3a3c40" opacity="0.7" />
      <circle cx="196" cy="222" r="42" fill="#0a0a0a" stroke="#3a3c40" strokeWidth="6" />
      <circle cx="196" cy="222" r="18" fill="#232427" />
      <circle cx="196" cy="222" r="7" fill="#ff5a1f" />
      <circle cx="562" cy="222" r="42" fill="#0a0a0a" stroke="#3a3c40" strokeWidth="6" />
      <circle cx="562" cy="222" r="18" fill="#232427" />
      <circle cx="562" cy="222" r="7" fill="#ff5a1f" />
      <defs>
        <linearGradient id="carBody" x1="40" y1="90" x2="700" y2="220" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f5f5f5" />
          <stop offset="0.5" stopColor="#d9d9dc" />
          <stop offset="1" stopColor="#9c9ea3" />
        </linearGradient>
      </defs>
    </svg>
  );
}
