export function CardFront() {
  return (
    <div className="bg-fit flex h-[240px] w-[447px] flex-col justify-between overflow-hidden rounded-xl bg-cardFront px-8 py-6 shadow-2xl">
      <div className="left-0 top-0 flex items-center space-x-4 ">
        <div className="h-12 w-12 rounded-full border-2 border-LightGrayishViolet bg-white" />
        <div className="h-6 w-6 rounded-full border-2 border-LightGrayishViolet" />
      </div>
      <div className="space-y-6 text-LightGrayishViolet">
        <p className="text-3xl tracking-wider">0000 0000 0000 0000</p>
        <div className="flex justify-between">
          <p className="">JANE APPLESEED</p>
          <p className="">00/00</p>
        </div>
      </div>
    </div>
  )
}

export function CardBack() {
  return (
    <div className="bg-fit h-[240px] w-[447px]  overflow-hidden rounded-xl bg-cardBack shadow-2xl ">
      <p className="translate-x-[353px] translate-y-[107.5px] text-xl tracking-wider text-LightGrayishViolet">
        000
      </p>
    </div>
  )
}
