export default function Container({ className = '', children, as = 'div' }) {
  const Tag = as
  return (
    <Tag className={`mx-auto w-full max-w-[1200px] px-6 md:px-10 ${className}`}>{children}</Tag>
  )
}
