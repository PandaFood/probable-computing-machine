export default function Monogram() {
  return (
    <div style={{ width: 'var(--monogram-size, 200px)', height: 'var(--monogram-size, 200px)', margin: 'var(--monogram-margin, 0 auto 40px)' }}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
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
