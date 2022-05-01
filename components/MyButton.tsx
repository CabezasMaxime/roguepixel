export default function MyButton({ children, ...props }: any) {
  return (
    <button {...props}>
      {children}
    </button>
  )
} 