export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 60 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle */}
      <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2" fill="none"/>
      
      {/* Inner ornate circle */}
      <circle cx="30" cy="30" r="22" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      
      {/* Tree of Knowledge in center */}
      <g transform="translate(30, 30)">
        {/* Tree trunk */}
        <rect x="-1.5" y="8" width="3" height="12" fill="currentColor"/>
        
        {/* Tree branches - symbolic pattern */}
        <path d="M 0,-10 L -8,0 L -4,0 L -10,8 L -6,8 L 0,0 L 6,8 L 10,8 L 4,0 L 8,0 Z" fill="currentColor"/>
        
        {/* Central sacred geometry - eye of knowledge */}
        <circle cx="0" cy="0" r="3" fill="currentColor"/>
        <ellipse cx="0" cy="0" rx="5" ry="3" stroke="currentColor" strokeWidth="1" fill="none"/>
      </g>
      
      {/* Decorative points around circle */}
      <circle cx="30" cy="2" r="1.5" fill="currentColor"/>
      <circle cx="30" cy="58" r="1.5" fill="currentColor"/>
      <circle cx="2" cy="30" r="1.5" fill="currentColor"/>
      <circle cx="58" cy="30" r="1.5" fill="currentColor"/>
      
      {/* Diagonal decorative points */}
      <circle cx="8" cy="8" r="1" fill="currentColor"/>
      <circle cx="52" cy="8" r="1" fill="currentColor"/>
      <circle cx="8" cy="52" r="1" fill="currentColor"/>
      <circle cx="52" cy="52" r="1" fill="currentColor"/>
    </svg>
  );
}
