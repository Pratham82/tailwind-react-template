export default function FlexLayout() {
  return (
    <div className="flex h-80">
      <div className="bg-red-600 h-full flex-1 text-white text-center grid content-center">
        CTA Text
      </div>
      <div className="bg-blue-600 h-full flex-1 text-white text-center grid content-center">
        Image
      </div>
    </div>
  )
}
