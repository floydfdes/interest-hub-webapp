type BrandMarkProps = {
    className?: string;
    size?: number;
};

const BrandMark = ({ className, size = 40 }: BrandMarkProps) => (
    <svg
        aria-hidden="true"
        className={className}
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="48" height="48" rx="16" fill="#F7F7F2" />
        <path
            d="M15.5 16.5C17.7 13.6 20.8 12 24 12C29.9 12 34.8 16.2 35.8 21.8"
            stroke="#0A504A"
            strokeWidth="4"
            strokeLinecap="round"
        />
        <path
            d="M32.5 31.5C30.3 34.4 27.2 36 24 36C18.1 36 13.2 31.8 12.2 26.2"
            stroke="#00AA6B"
            strokeWidth="4"
            strokeLinecap="round"
        />
        <circle cx="15" cy="17" r="5.5" fill="#00AA6B" />
        <circle cx="33" cy="22" r="5.5" fill="#A2E6B8" />
        <circle cx="33" cy="31" r="5.5" fill="#0A504A" />
        <circle cx="15" cy="26" r="5.5" fill="#A2E6B8" />
    </svg>
);

export default BrandMark;
