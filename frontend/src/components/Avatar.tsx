interface AvatarProps {
    name: string
}

function Avatar({ name }: AvatarProps) {
  return (
    <div className="shrink-0 relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full">
        <span className="font-light text-gray-400">{name[0].toUpperCase()}</span>
    </div>
  )
}

export default Avatar