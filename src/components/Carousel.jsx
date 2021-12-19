export default function Carousel() {
  return (
    <div className="flex justify-center">
      <div class="flex space-x-5 overflow-x-auto snap-x w-5/6 max-w-2xl">
        <div class="w-4/6 flex-shrink-0 snap-center h-64 mt-2 text-white text-2xl grid place-content-center bg-gray-800 rounded-lg mb-2">
          Carousel Text
        </div>
        <div class="w-4/6 flex-shrink-0 snap-center h-64 mt-2 text-white text-2xl grid place-content-center bg-orange-800 rounded-lg mb-2">
          Carousel Text
        </div>
        <div class="w-4/6 flex-shrink-0 snap-center h-64 mt-2 text-white text-2xl grid place-content-center bg-pink-800 rounded-lg mb-2">
          Carousel Text
        </div>
        <div class="w-4/6 flex-shrink-0 snap-center h-64 mt-2 text-white text-2xl grid place-content-center bg-purple-800 rounded-lg mb-2">
          Carousel Text
        </div>
        <div class="w-4/6 flex-shrink-0 snap-center h-64 mt-2 text-white text-2xl grid place-content-center bg-blue-800 rounded-lg mb-2">
          Carousel Text
        </div>
      </div>
    </div>
  )
}
