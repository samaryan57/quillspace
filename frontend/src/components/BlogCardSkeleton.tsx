
function BlogCardSkeleton() {
  return (
    <div role="status" className="mt-7 animate-pulse">
        <div className="flex my-1">
          <div className="bg-gray-200 rounded-full w-8 h-8 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded-full max-w-sm mb-2.5"></div>
        </div>
        <div className="h-5 bg-gray-200 rounded-full max-w-lg mb-2.5"></div>

        <div className="h-3 bg-gray-200 rounded-full max-w-3xl mb-2.5"></div>
        <div className="h-3 bg-gray-200 rounded-full max-w-3xl mb-2.5"></div>
        <div className="h-3 bg-gray-200 rounded-full max-w-3xl mb-2.5"></div>

        <div className="h-3 bg-gray-200 rounded-full w-48 mb-4"></div>
    </div>
  )
}

export default BlogCardSkeleton