import s from './Loader.module.css'


export const Loader = () => {
    return (
        <div className={s.loader}>
            <svg width="108" height="108" viewBox="0 0 108 108">
                <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(81,45,228,0)" />
                        <stop offset="100%" stopColor="#512DE4" />
                    </linearGradient>
                </defs>

                <circle
                    cx="54"
                    cy="54"
                    r="45"
                    fill="none"
                    stroke="url(#grad)"
                    strokeWidth="9"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    )
}
