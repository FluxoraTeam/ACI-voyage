const Circle = ({ className }: { className?: string }) => {
  return (
    <svg
      width="118"
      height="118"
      viewBox="0 0 118 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="59"
        cy="59"
        r="58.5"
        stroke="url(#paint0_radial_523_223)"
        strokeOpacity="0.7"
      />
      <defs>
        <radialGradient
          id="paint0_radial_523_223"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(95.7861 51.8916) rotate(-175.572) scale(80.5658 69.6198)"
        >
          <stop stopColor="#7681CB" />
          <stop offset="1" stopColor="#777777" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Circle;
