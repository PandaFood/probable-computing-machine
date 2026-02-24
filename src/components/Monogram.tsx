export default function Monogram() {
  return (
    <div style={{ width: 200, height: 200, margin: '0 auto 40px' }}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        {/* Arch */}
        <path d="M 40 180 Q 40 80, 100 60 Q 160 80, 160 180"
          fill="none" stroke="#2c4a6e" strokeWidth="1.5" />

        {/* Floral decorations - left side */}
        <g transform="translate(50, 100)">
          <line x1="0" y1="0" x2="-5" y2="30" stroke="#2c4a6e" strokeWidth="1" />
          <circle cx="0" cy="0" r="4" fill="none" stroke="#2c4a6e" strokeWidth="1" />
          <circle cx="-2" cy="8" r="3" fill="none" stroke="#2c4a6e" strokeWidth="1" />
          <circle cx="2" cy="15" r="3.5" fill="none" stroke="#2c4a6e" strokeWidth="1" />
        </g>

        {/* Floral decorations - right side */}
        <g transform="translate(150, 100)">
          <line x1="0" y1="0" x2="5" y2="30" stroke="#2c4a6e" strokeWidth="1" />
          <ellipse cx="2" cy="10" rx="4" ry="2" fill="none" stroke="#2c4a6e" strokeWidth="1" />
          <ellipse cx="4" cy="20" rx="3" ry="2" fill="none" stroke="#2c4a6e" strokeWidth="1" />
        </g>

        {/* Centre floral figure */}
        <g transform="translate(100, 127)">
          <circle cx="0" cy="0" r="7" fill="none" stroke="#2c4a6e" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="2.5" fill="none" stroke="#2c4a6e" strokeWidth="1" />
          <circle cx="-5" cy="-2" r="3.5" fill="none" stroke="#2c4a6e" strokeWidth="1" />
          <circle cx="5" cy="-2" r="3.5" fill="none" stroke="#2c4a6e" strokeWidth="1" />
          <circle cx="0" cy="-7" r="3" fill="none" stroke="#2c4a6e" strokeWidth="1" />
          <circle cx="0" cy="7" r="3" fill="none" stroke="#2c4a6e" strokeWidth="1" />
        </g>

        {/* Initials — horizontal */}
        <text x="62" y="143" fontSize="44" fill="#2c4a6e" textAnchor="middle" fontFamily="Georgia, serif">S</text>
        <text x="138" y="143" fontSize="44" fill="#2c4a6e" textAnchor="middle" fontFamily="Georgia, serif">J</text>
      </svg>
    </div>
  );
}
