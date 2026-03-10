
type GetUserIconProps = {
  name?: string
  size: number
}

export const GetUserIcon = ({
  name,
  size = 8,
}: GetUserIconProps) => {
  const colors = [
    "bg-green-500",
    "bg-green-600",
    "bg-green-400",
    "bg-emerald-500",
    "bg-teal-500",
  ]

  const firstLetter = name?.charAt(0).toUpperCase() || "?"

  const colorIndex = firstLetter.charCodeAt(0) % colors.length

  const sizeClasses =
    {
      6: "w-6 h-6",
      7: "w-7 h-7",
      8: "w-8 h-8",
      10: "w-10 h-10",
    }[size] || "w-8 h-8"

  return (
    <div
      className={`${colors[colorIndex]} ${sizeClasses}
      rounded-full flex items-center justify-center
      text-black font-semibold text-sm`}
    >
      {firstLetter}
    </div>
  )
}
