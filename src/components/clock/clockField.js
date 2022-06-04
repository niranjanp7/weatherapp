export default function ClockField({ text, width, textLeft }) {
    return (
        <svg viewBox={`0 0 ${width} 32`} height="100%">
            <defs>
                <filter id="inset-shadow">
                    <feComponentTransfer in="SourceAlpha" result="inset-selection">
                        <feFuncA type="discrete" tableValues="0 1 1 1 1 1" />
                    </feComponentTransfer>
                    <feComponentTransfer in="SourceGraphic" result="original-no-fill">
                        <feFuncA type="discrete" tableValues="0 0 1" />
                    </feComponentTransfer>
                    <feColorMatrix
                        type="matrix"
                        in="original-no-fill"
                        result="new-source-alpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feGaussianBlur in="new-source-alpha" result="blur" stdDeviation="2" />
                    <feGaussianBlur in="new-source-alpha" result="blur2" stdDeviation="3" />
                    <feGaussianBlur in="new-source-alpha" result="blur3" stdDeviation="4" />
                    <feMerge result="blur">
                        <feMergeNode in="blur" mode="normal" />
                        <feMergeNode in="blur2" mode="normal" />
                        <feMergeNode in="blur3" mode="normal" />
                    </feMerge>
                    <feComposite operator="in" in="inset-selection" in2="blur" result="inset-blur" />
                </filter>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="50%">
                    <stop offset="10%" style={{ "stopColor": "#066293" }} />
                    <stop offset="100%" style={{ "stopColor": "#6fc7f1" }} />
                </linearGradient>
            </defs>
            <rect x="0" y="0" width={width} height="32" rx="16" fill="url(#bgGradient)" />
            <rect
                x="1"
                y="1"
                width={width - 2}
                height="30"
                rx="15"
                stroke="black"
                strokeWidth="2"
                fillOpacity="40%"
                filter="url(#inset-shadow)"
            />
            <text x={textLeft} y="22.5" fill="#fff" fontSize="20" fontFamily="consolas">
                {text}
            </text>
        </svg>
    );
}
