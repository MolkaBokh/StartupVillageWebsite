const VARIANTS = {
  primary: 'bg-[#1478a0] text-white hover:bg-[#116080]',
  secondary: 'bg-white text-sv-navy border-2 border-sv-navy hover:bg-sv-navy hover:text-white',
  ghost: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-sv-navy',
  green: 'bg-sv-green text-white hover:bg-[#5e9132]',
}

export default function Button({
  as = 'button',
  href,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const Tag = as === 'a' || href ? 'a' : 'button'
  return (
    <Tag
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-bold uppercase tracking-wide transition-colors duration-200 ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
