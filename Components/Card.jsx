export default function Card(
  {
    imgSrc,
    imgAlt,
    author,
    title,
    info
  }) 
  {
  return (
    <div className="card bg-white rounded-sm drop-shadow-sm">
      <div className=" mb-6">
          <img src={imgSrc} alt={imgAlt} className="border-t rounded-t-md " />
      </div>
      {/* flex contents */}
      <div className="px-4 pb-8 space-y-4">
        <p className="text-grayishBlue">
          {author}
        </p>
        <h4 className="text-darkBlue font-medium text-xl  hover:text-limeGreen lg:text-sm lg:font-bold">
            <a href="#">{title}</a>
        </h4>
        <p className="text-grayishBlue lg:text-sm">
          {info}
        </p>
      </div>
    </div>
  )
}