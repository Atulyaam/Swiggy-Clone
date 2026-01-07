export default function Header() {
  return (
    <header className="bg-[#ff5200] font-serif">
      <div className="flex justify-between container mx-auto py-8">
        <img
          className="w-40 h-12"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          alt="logo"
        />
        <div className="font-serif text-white text-base font-bold flex gap-15 items-center">
          <a target="_blank" href="https://www.swiggy.com/corporate/">
            Swiggy Corporate
          </a>
          <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">
            Partner with us
          </a>
          <a className="border border-white py-3 px-4 rounded-xl" href="">
            Get the App
          </a>
          <a
            className="border border-white py-3 px-5 bg-black rounded-xl"
            href=""
          >
            Sign in
          </a>
        </div>
      </div>
      <div className="pt-16 pb-8 relative ">
        <img
          className="absolute w-60 h-110 top-0 left-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="left frouties"
        />
        <img
          className="absolute flex w-62 h-110 top-0 right-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt="rigth frouties"
        />
        <div className=" max-w-[60%] text-5xl text-white  container mx-auto text-center">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>
        <div className="max-w-[70%] container mx-auto flex gap-10 mt-5">
          <input
            className="rounded-2xl bg-white w-[40%] text-xl px-2 py-4"
            placeholder="Delhi, India"
            type="text"
          />
          <input
            className="rounded-2xl bg-white w-[55%] text-xl px-2 py-4"
            placeholder="Search for restaurants, items and More"
            type="text"
          />
        </div>
      </div>
      <div className="max-w-[80%] container mx-auto flex">
        <a target="_blank" href="https://www.swiggy.com/restaurants">
          <img
            className="w-123 h-112"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
            alt=""
          />
        </a>
        <a
          target="_blank"
          href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1"
        >
          <img
            className="w-123 h-112"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
            alt=""
          />
        </a>
        <a target="_blank" href="https://www.swiggy.com/dineout">
          <img
            className="w-123 h-112"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
            alt=""
          />
        </a>
      </div>
    </header>
  );
}
