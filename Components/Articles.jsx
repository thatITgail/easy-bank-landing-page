import Card from "./Card"
import Currency from "../src/assets/images/image-currency.jpg"
import Restaurant from "../src/assets/images/image-restaurant.jpg"
import Plane from "../src/assets/images/image-plane.jpg"
import Confetti from "../src/assets/images/image-confetti.jpg"


export default function Articles() {
  return(
    <section className="relative articles bg-veryLightGray pt-10  lg:px-9">
      <div className="container mx-auto flex flex-col space-y-8 pb-10">
        <header>
          <h3 className="text-center text-3xl text-darkBlue lg:text-left">Latest Articles</h3>
        </header>
        <article className="pt-6 md:pt-4">
          <div className="flex flex-col items-center space-y-10 lg:flex-row lg:pb-8  lg:space-y-0 lg:space-x-4 lg:items-start">
            {/* flex items */}
            <Card 
              imgSrc={Currency} imgAlt="currency image" 
              author="By Claire Robinson"
              title="Receive money in any currency with no fees"
              info="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … "
            />
            <Card 
              imgSrc={Restaurant} imgAlt="restaurant image" 
              author="By Wilson Hutton"
              title="Treat yourself without worrying about money "
              info="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
            />
            <Card 
              imgSrc={Plane} imgAlt="plane image" 
              author="By Wilson Hutton "
              title="Take your Easybank card wherever you go"
              info="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
            />
            <Card 
              imgSrc={Confetti} imgAlt="confetti image" 
              author="By Claire Robinson"
              title="Our invite-only Beta accounts are now live!"
              info="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... "
            />
          </div>
        </article>
      </div>
    </section>
  )
}