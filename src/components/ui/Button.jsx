export default function Button({ children, className, href, onClick, ...props }) {
    const baseClass = 'btn-global w-fit py-[8px] px-[16px] rounded-[8px] border-[0.5px]'
    if (href) {
        return (
            <a href={href} className={`${baseClass} ${className}`}>
                {children}
            </a>
        )
    }
    return (
        <button {...props} className={`${baseClass} ${className}`}>
            {children}
        </button>
    )
}