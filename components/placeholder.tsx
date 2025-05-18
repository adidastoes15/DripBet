export function Placeholder({ width = 400, height = 240 }: { width?: number; height?: number }) {
  return (
    <div
      className="flex items-center justify-center bg-zinc-800 text-zinc-500"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <span>Image</span>
    </div>
  )
}
