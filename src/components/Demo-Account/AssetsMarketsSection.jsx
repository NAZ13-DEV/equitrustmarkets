import { Link } from 'react-router-dom';
// import assetsBg from '../../img/pairbg.jpg'; // Update this path accordingly

export default function AssetsMarketsSection() {
  return (
    <section className="flex flex-col lg:hidden">
      {/* Left: Text Content */}
      <div className="bg-[rgb(7,14,32)] text-white flex-1 flex items-center px-6 py-12 lg:py-24">
        <div className="max-w-xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Explore Exness assets <br /> and markets
          </h2>
          <p className="text-base lg:text-lg mb-8">
            Learn to trade with our various assets from leading global financial markets
            with the same conditions as on live trading accounts.
          </p>
          <Link to={'/register'} className="bg-[#07A658] hover:bg-[#059b4f] text-white px-5 py-2 rounded font-medium transition">
            Try free demo
          </Link>
        </div>
      </div>

      {/* Right: Background Image */}
      {/* <div
        className="flex-1 h-[400px] lg:h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${assetsBg})` }}
      /> */}
    </section>
  );
}
