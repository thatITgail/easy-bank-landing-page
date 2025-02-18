import Online from "../src/assets/images/icon-online.svg"
import Budgeting from "../src/assets/images/icon-budgeting.svg"
import Onboarding from "../src/assets/images/icon-onboarding.svg"
import Api from "../src/assets/images/icon-api.svg"
import EachFeature from "./EachFeature"

export default function Features(){
  return (
    <section className="relative features bg-lightGrayishBlue pb-12">
      <article className="container flex flex-col  mx-auto pt-10 space-y-8">
        <header className="flex flex-col  mx-auto text-center max-w-sm space-y-4  lg:text-left lg:items-start lg:mx-0 lg:max-w-md">
          <h2 className="text-4xl font-bold text-darkBlue lg:text-3xl">
           Why choose Easybank?
          </h2>
          <p className="text-grayishBlue ">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </header>
        <div className="flex flex-col items-center space-y-6 lg:flex-row  lg:space-x-6">
         {/* flex items */}
         <EachFeature 
           imgSrc={Online}
           imgAlt="online icon"
           title="Online Banking"
           text="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          />
          <EachFeature 
           imgSrc={Budgeting}
           imgAlt="budget icon"
           title="Simple Budgeting"
           text="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
          />
          <EachFeature 
           imgSrc={Onboarding}
           imgAlt="onboarding icon"
           title="Fast Onboarding "
           text="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
          />
          <EachFeature 
           imgSrc={Api}
           imgAlt="API icon"
           title="Open API"
           text="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
          />
        </div>
      </article>  
    </section>
  )
}