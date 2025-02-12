import classnames from 'classnames';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {
    const classes = classnames('px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary && !outline,
        'border-gray-900 bg-gray-900 text-white': secondary && !outline,
        'border-green-500 bg-green-500 text-white': success && !outline,
        'border-yellow-400 bg-yellow-400 text-white': warning && !outline,
        'border-red-500 bg-red-500 text-white': danger && !outline,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500 border-blue-500': outline && primary,
        'text-gray-900 border-gray-900': outline && secondary,
        'text-green-500 border-green-500 ': outline && success,
        'text-yellow-400 border-yellow-400': outline && warning,
        'text-red-500 border-red-500': outline && danger,
    })


    return (
        <button className={classes}>
            {children}
        </button>
    )
}

export default Button;