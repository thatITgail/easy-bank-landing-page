import HeroImage from "../src/assets/images/image-mockups.png"

export default function Hero(){
  return (
    <section className="relative hero bg-veryLightGray -z-10">
      <div className="container flex flex-col-reverse px-6 mx-auto mt-8 overflow-hidden md:flex-row md:space-x-6 md:items-center">
        <header className="flex flex-col mb-18 space-y-6 lg:w-1/2 lg:text-left">
          <h1 className="max-w-sm mx-auto text-darkBlue text-4xl text-center font-bold lg:text-5xl md:text-left md:font-medium md:mx-0 md:mt-0">
          Next generation digital banking
        </h1>
        <p className="max-w-sm mx-auto text-grayishBlue text-center md:text-left md:mx-0">
          Take your financial life online.  Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much modern
        </p>
        <button className="flex justify-center mx-auto w-fit p-3 px-6 pt-2 text-white text-sm bg-gradient-to-r from-limeGreen to-brightCyan rounded-full baseline hover:text-lightGrayishBlue md:justify-start md:mx-0">
          Request Invite
        </button>
        </header>
        <div className="md:w-3/4 lg:w-1/2 -mt-20">
        <img src={HeroImage} alt="desktop"/>
        </div>
      </div>
    </section>
  )
}