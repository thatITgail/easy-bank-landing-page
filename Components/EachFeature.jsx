export default function EachFeature({
  imgSrc,
  imgAlt,
  title,
  text
})
{
    return(
      <div className="flex flex-col items-center space-y-6 lg:items-left">
        <header className="flex flex-col items-center space-y-6 lg:items-start lg:self-start">
          <img src={imgSrc} alt={imgAlt} className="max-w-auto mx-auto lg:mx-0"/>
          <h3 className="font-medium text-2xl lg:text-xl text-darkBlue">
            {title}
          </h3>
        </header>
        <p className="max-w-sm text-center text-grayishBlue md:text-left">
          {text}
        </p>
      </div>
  )
}