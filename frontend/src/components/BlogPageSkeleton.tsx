function BlogPageSkeleton() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-12 px-30 mt-30 max-w-screen-2xl mx-auto">
          <div className="col-span-7">
            <div className="h-10 bg-gray-200 rounded-full max-w-xl mb-2.5"></div>

            <div className="h-4 bg-gray-200 my-7 rounded-full max-w-[200px]"></div>

            <div className="h-5 bg-gray-200 rounded-full max-w-2xl mb-2.5"></div>
            <div className="h-5 bg-gray-200 rounded-full max-w-2xl mb-2.5"></div>
            <div className="h-5 bg-gray-200 rounded-full max-w-xl mb-2.5"></div>
            <div className="h-5 bg-gray-200 rounded-full max-w-xl mb-6"></div>

            <div className="h-5 bg-gray-200 rounded-full max-w-2xl mb-2.5"></div>
            <div className="h-5 bg-gray-200 rounded-full max-w-2xl mb-2.5"></div>
            <div className="h-5 bg-gray-200 rounded-full max-w-2xl mb-2.5"></div>
            <div className="h-5 bg-gray-200 rounded-full max-w-xl mb-6"></div>

            <div className="h-5 bg-gray-200 rounded-full max-w-2xl mb-2.5"></div>
            <div className="h-5 bg-gray-200 rounded-full max-w-2xl mb-2.5"></div>
            <div className="h-5 bg-gray-200 rounded-full max-w-2xl mb-2.5"></div>
            <div className="h-5 bg-gray-200 rounded-full max-w-xl mb-6"></div>

            <div className="h-5 bg-gray-200 rounded-full max-w-2xl mb-2.5"></div>
            <div className="h-5 bg-gray-200 rounded-full max-w-2xl mb-2.5"></div>
            <div className="h-5 bg-gray-200 rounded-full max-w-2xl mb-2.5"></div>
            <div className="h-5 bg-gray-200 rounded-full max-w-xl mb-6"></div>
          </div>

          <div className="col-start-9 col-span-4">
            <div className="h-5 bg-gray-200 rounded-full max-w-[100px] mb-10"></div>
            <div className="flex justify-between">
              <div className="my-auto shrink-0">
                <div className="bg-gray-200 rounded-full w-8 h-8 mb-4"></div>
              </div>
              <div className="ml-5 flex-grow">
                <div className="h-5 bg-gray-200 rounded-full max-w-sm mb-4"></div>

                <div className="h-3 bg-gray-200 rounded-full max-w-md mb-2.5"></div>
                <div className="h-3 bg-gray-200 rounded-full max-w-md mb-2.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPageSkeleton;
