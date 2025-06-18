'use client'; // Only if using App Router

import Image from "next/image";

const products = [
  {
    id: 1,
    name: 'FOURTH PRODUCT ONE',
    price: 'FROM $25.99',
    image: '/fourthone.png',
  },
  {
    id: 2,
    name: 'FOURTH PRODUCT TWO',
    price: 'FROM $30.00',
    image: '/fourthtwo.png',
  },
  {
    id: 3,
    name: 'FOURTH PRODUCT THREE',
    price: 'FROM $28.50',
    image: '/fourththree.png',
  },
];

const faqs = [
  {
    id: 1,
    question: "Are your products safe for sensitive skin?",
    answer: "Yes, all our products are dermatologist-tested and safe for sensitive skin.",
  },
  {
    id: 2,
    question: "Are your products cruelty-free?",
    answer:
      "Absolutely! All our products are cruelty-free and are vegan. Check individual product details for specifics.",
  },
  {
    id: 3,
    question: "What’s your return policy?",
    answer: "We offer a 30-day return policy. No questions asked.",
  },
  {
    id: 4,
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide with varying shipping rates.",
  },
  {
    id: 5,
    question: "How do I choose the right product?",
    answer: "Take our quiz or contact support to get personalized recommendations.",
  },
];



export default function Home() {

  return (
    <div style={{ backgroundColor: "#FEFFF4" }}>
      {/* Section 1: Hero */}
      <section className="min-h-screen bg-[#F3F7E7] text-gray-900 font-sans">
        <header className="bg-[#F3F7E7] flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold">SKINCARE</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#">All Products</a>
            <a href="#">Serum</a>
            <a href="#">Sunscreen</a>
            <a href="#">Bundle</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="px-2 py-1 rounded">🛒 Cart (1)</button>
            <span>🤍</span>
            <span>👤</span>
          </div>
        </header>

        <section className="flex flex-col md:flex-row justify-between px-6 py-12 gap-6">
          <div className="md:w-1/3">
            <p className="text-md mb-6 mt-24 ml-5 w-[70%]" style={{fontSize:"15px",marginTop:"50px",paddingLeft:"20px"}}>
              <span className="ml-20">Transform your skincare</span><br />
              routine with premium products that <br />
              restore, protect, and enhance your <br />
              natural glow every day.
            </p>
            <button className="px-6 py-2 bg-[#2D3B36] text-white rounded-full" style={{marginTop:"170px",position:"absolute",paddingLeft:"20px",marginLeft:"40px"}}>
              Shop Now
            </button>
          </div>

          <div className="md:w-1/3 text-center font-bold leading-tight text-[#2D3B36] text-[60px] -ml-14">
            <h2 style={{marginLeft:"150px",textAlign:"left",color:"#2D3B36",lineHeight:"60px"}}>
              GLOW <br /> NATUR- <br />
              ALLY
            </h2>
          </div>

          <div className="md:w-1/3 flex justify-end">
            <div className="p-2 rounded-md">
              <Image src="/plum.png" alt="Product" width={100} height={140} style={{borderRadius:"8px",marginTop:"40px"}}/>
            </div>
          </div>
        </section>

        <div className="flex justify-center relative pb-16 mt-16">
          <Image src="/girl-avocado.png" alt="Model" width={350} height={800} className="rounded-xl mt-[-40px]" style={{position:"absolute"}}/>
          <div style={{position:"absolute",backgroundColor:"#EFF5E1",border:"1px solid black",height:"50px",width:"18%",borderRadius:"30px",marginTop:"270px"}}>
            <Image src="/plum.png" alt="Product" width={40} height={40} className="mr-3 rounded-full ml-1 mt-1" />
            <p style={{marginLeft:"60px",marginTop:"-38px",color:"#2D3B36",fontSize:"13px"}}>While giving you an invigorating <br /> cleansing experience.</p>
          </div>
          <div className="font-extrabold text-[200px] w-full mt-36 text-[#2D3B36] text-center" style={{fontSize:"292px",paddingTop:"5px",marginTop:"28px",marginBottom:"-180px"}}>SKINCARE</div>
        </div>

       
      </section>

  {/* Section 2: Info Paragraph */}
      <section className="py-[100px] px-[100px] text-[40px] bg-[#FEFFF4] text-[#2D3B36]">
        <p>
          Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin.
          Combining the finest natural ingredients with
          <span className="text-[#2D3B364D]">
            {" "}advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day.
          </span>
        </p>
      </section>

  {/* Section 3: Why Our Products */}
      <section>
        <main className="min-h-screen text-[#121212] font-sans px-10 py-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 space-y-8 ml-18">
              <button className="px-4 py-1 rounded-full border border-gray-400 text-sm bg-white shadow" style={{backgroundColor:"#FEFFF4"}}>
                <div className="absolute w-3 h-3 rounded-full bg-black" style={{marginLeft:"0px",marginTop:"4px"}}/> <span style={{marginLeft:"20px"}}>Why Our Products</span>
              </button>
              <h1 className="text-4xl font-semibold leading-snug" style={{fontSize:"45px"}}>
                YOUR SKIN DESERVES<br />THE BEST CARE.
              </h1>
              <p className="text-gray-600 max-w-lg" style={{fontSize:"15px"}}>
                Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin. Explore our range crafted with love backed by science, and inspired by nature.
              </p>

              <div className="space-y-6">
                <div>
                  <h2 className="font" style={{fontSize:"35px"}}><span>01</span> <span style={{marginLeft:"15px"}}>Bio Ingredients</span></h2>
                  <p className="text-gray-600" style={{marginLeft:"60px",marginTop:"5px"}}>Get naturally beautiful and transform with our bio <br /> ingredients creams for healthy, radiant skin.</p>
                </div>
                <div>
                  <h2 className="text-xl" style={{fontSize:"35px"}}>02 <span style={{marginLeft:"8px"}}>Everything Natural</span></h2>
                  <p className="text-gray-600" style={{marginLeft:"60px",marginTop:"5px"}}>Pure ingredients for pure skin. The perfect solution <br /> for your skincare needs.</p>
                </div>
                <div>
                  <h2 className="text-xl" style={{fontSize:"35px"}}>03 <span style={{marginLeft:"10px"}}>All Handmade</span></h2>
                  <p className="text-gray-600" style={{marginLeft:"60px",marginTop:"5px"}}>Made with love and care. Just for you. Give your skin <br /> the tender loving care it deserves.</p>
                </div>
              </div>
            </div>

            <div className="relative md:w-[450px] w-full mt-10 md:mt-0 mr-20">
              <Image src="/thirdpage.png" alt="Skincare model" width={450} height={600} className="rounded-xl shadow-md mt-18" />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#f0f6dc] text-black px-4 py-2 text-sm rounded-full shadow flex items-center gap-2">
                 Best Skin Care Product <br />Award Winning
              </div>
            </div>
          </div>
          <div className="absolute text-xs text-right text-gray-400 mt-[-60px]" style={{marginLeft:"1250px",marginTop:"0px"}}>LEARN MORE</div>
          <div className="absolute text-xs text-gray-400 pt-6 text-right" style={{marginLeft:"920px",marginTop:"-24px"}}>SINCE 2001</div>
        </main>
      </section>

      {/* Section 4: Product Showcase */}
      <section className="bg-[#FEFFF4] px-10 py-16 mt-10">
        <div className="flex justify-between items-center mb-8">
          <button className="px-4 py-1 rounded-full border border-gray-400 text-sm bg-white shadow" style={{backgroundColor:"#FEFFF4"}}>
                <div className="absolute w-3 h-3 rounded-full bg-black" style={{marginLeft:"0px",marginTop:"4px"}}/> <span style={{marginLeft:"20px"}}>Best Selling Products</span>
          </button>
          <h2 className="text-2xl md:text-3xl font-semibold text-center flex-1 text-[#121212]">
            Skincare That Brings Out <br />
             Your Natural Radiance
          </h2>
          <div className="flex gap-3 ml-auto">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-800">←</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1f2b1d] text-white">→</button>
          </div>
        </div>

        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { id: 1, title: "FOURTH PRODUCT ONE", price: "FROM $25.99", image: "/fourthone.png" },
              { id: 2, title: "FOURTH PRODUCT TWO", price: "FROM $30.00", image: "/fourthtwo.png" },
              { id: 3, title: "FOURTH PRODUCT THREE", price: "FROM $28.50", image: "/fourththree.png" },
            ].map(product => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="w-100% h-[600px] relative">
                  <Image
                    
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                </div>

                
                <div className="absolute" style={{marginTop:"-90px",backgroundColor:"#FEFFF4",marginLeft:"15px",width:"28%",height:"9%",borderRadius:"10px",paddingLeft:"20px",paddingTop:"10px"}}>
                  <span  style={{color:"#2D3B36"}}>ALYA SKIN CLEANSER</span><br />
                  <span style={{color:"#2D3B3680",marginTop:"20px"}}>from $29.99</span>    <span style={{marginLeft:"260px",backgroundColor:"#2D3B361A",marginTop:"-25px",position:"absolute",padding:"12px",borderRadius:"10px"}}>🛒</span>
                </div>

              </div>
              
              ))}
            </div>
      </section>

      {/* Section 5: Banner CTA */}
      <section className="bg-[#FEFFF4]">
        <div className="relative w-full h-screen overflow-hidden bg-[#f0f6dc] rounded-b-2xl">
          <Image src="/fifthimg.png" alt="Hero" layout="fill" objectFit="cover" className="rounded-b-2xl" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-b-2xl" />
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
              Feel Beautiful Inside and Out<br />with Every Product.
            </h1>
            <button className="mt-6 px-6 py-2 bg-white text-black text-sm font-medium rounded-full shadow-md hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials + CTA */}
      
      <section className="bg-[#FEFFF4] px-10 py-16 mt-20">
          <div className="flex justify-between items-center mb-10">
            
            <h2 className="text-2xl md:text-3xl font-semibold text-center flex-1 text-[#121212]">
              <span className="block md:inline">Feel Beautiful Inside and Out
                <br />with Every Product.</span>
              
            </h2>
            
          </div>
          <div style={{textAlign:"center",paddingBottom:"40px"}}>
            <button className="px-4 py-1 rounded-full border border-gray-400 text-sm bg-white shadow" style={{backgroundColor:"#2D3B36",color:"#FEFFF4",fontSize:"15px"}}>NEW ARRIVAL</button>
            <button className="px-4 py-1 rounded-full border border-gray-400 text-sm bg-white shadow ml-10">CLEANINCING</button>
            <button className="px-4 py-1 rounded-full border border-gray-400 text-sm bg-white shadow ml-10">ACNI FIGHTER</button>
            <button className="px-4 py-1 rounded-full border border-gray-400 text-sm bg-white shadow ml-10">ANTI AGGING</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { id: 1, title: "FOURTH PRODUCT ONE", price: "FROM $25.99", image: "/fourthone.png" },
              { id: 2, title: "FOURTH PRODUCT TWO", price: "FROM $30.00", image: "/fourthtwo.png" },
              { id: 3, title: "FOURTH PRODUCT THREE", price: "FROM $28.50", image: "/fourththree.png" },
            ].map(product => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="w-100% h-[600px] relative">
                  <Image
                    
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                </div>

                
                <div className="absolute" style={{marginTop:"-90px",backgroundColor:"#FEFFF4",marginLeft:"15px",width:"28%",height:"9%",borderRadius:"10px",paddingLeft:"20px",paddingTop:"10px"}}>
                  <span  style={{color:"#2D3B36"}}>ALYA SKIN CLEANSER</span><br />
                  <span style={{color:"#2D3B3680",marginTop:"20px"}}>from $29.99</span>    <span style={{marginLeft:"260px",backgroundColor:"#2D3B361A",marginTop:"-25px",position:"absolute",padding:"12px",borderRadius:"10px"}}>🛒</span>
                </div>

              </div>
              
              ))}
            </div>
      </section>


{/* seven */}

       <section className="min-h-screen bg-[#fefef4] flex flex-col md:flex-row items-center justify-center px-10 py-20 gap-12">
        <div className="relative w-full md:w-1/2 max-w-md">
          <div className="overflow-hidden rounded-xl">
            <Image src="/fourththree.png" alt="Product" width={500} height={500} className="rounded-xl" />
          </div>
          <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-full flex items-center shadow-md text-sm gap-2" style={{marginLeft:"100px",width:"180px",height:"70px",backgroundColor:"#EFF5E1"}}>
            <span className="w-6 h-6 flex items-center justify-center bg-[#2d3b36] text-white rounded-full text-xs font-bold"  style={{}}>🎧</span>
            <span style={{color:"#2D3B36"}}>24/7 We’re Here <br /> to Help You</span>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6" style={{marginTop:"0px",paddingLeft:"100px"}}>
          <div className="flex items-center gap-2 text-sm" style={{border:"1px solid black",borderRadius:"100px",width:"220px",textAlign:"center",height:"30px",fontSize:"15px"}}>
            <div className="w-3 h-3 rounded-full bg-black" style={{marginLeft:"8px"}}/>
            <span className="text-[#121212] color-#2D3B36" >Frequently Asked Question</span>
          </div>
          <h2 className="text-3xl font-semibold leading-snug text-[#2D3B36]">
            Answers to Your <br /> Skincare Questions, All <br /> in One Place.
          </h2>

          <div style={{border:"1px solid black",width:"70%",height:"40px",paddingTop:"7px",paddingLeft:"10px",fontSize:"17px"}}>
            <p>Are your products safe for sensitive skin?  <span style={{marginLeft:"80px"}}>+</span></p>
          </div>
          <div style={{border:"1px solid black",width:"70%",height:"80px",paddingTop:"7px",paddingLeft:"10px",fontSize:"17px"}}>
            <p>Are your products cruelty-free? <span style={{marginLeft:"160px"}}>-</span></p>
            <p style={{fontSize:"13px",marginTop:"3px"}}>Absolutely! All our products are cruelty-free, and most are vegan.
              Check individual product details for specifics.</p>
          </div>
          <div style={{border:"1px solid black",width:"70%",height:"40px",paddingTop:"7px",paddingLeft:"10px",fontSize:"17px"}}>
            <p>What’s your return policy?  <span style={{marginLeft:"190px"}}>+</span></p>
          </div>
          <div style={{border:"1px solid black",width:"70%",height:"40px",paddingTop:"7px",paddingLeft:"10px",fontSize:"17px"}}>
            <p>Do you ship internationally?  <span style={{marginLeft:"180px"}}>+</span></p>
          </div>
          <div style={{border:"1px solid black",width:"70%",height:"40px",paddingTop:"7px",paddingLeft:"10px",fontSize:"17px"}}>
            <p>How do i choose the right product?  <span style={{marginLeft:"130px"}}>+</span></p>
          </div>

          
        </div>
      </section>

{/* final */}

     

      <section className="bg-[#2D3B36] text-[#FEFFF4] px-10 py-16 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between mt-16">
          
          {/* Left Side */}
          <div className="mb-10 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Join The Skincare<br />Community Now.</h2>
            <div className="flex space-x-10 mt-8 text-sm text-[#FEFFF4] mt-40">
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">YouTube</a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-between">
            <div className="mb-10" style={{marginLeft:"-250px"}}>
              <p className="text-sm">Get in Touch</p>
              <p className="text-xl font-medium mt-1" style={{fontSize:"45px"}}>contact.skincare.com</p>
            </div>
            <div className="space-x-10 text-sm text-[#FEFFF4] mb-13 ml-10" >
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Cookies Policy</a>
            </div>
          </div>
        </div>

        <div className="overflow-hidden" style={{fontSize:"325px",paddingBottom:"hidden",marginBottom:"-220px",fontWeight:"bolder",marginLeft:"-150px",color:"#3D4B4680",marginTop:"-100px",overflow:"hidden",height:"63vh"}}>
          <span>SKINCARE</span>
        </div>

        
      </section>

      

    </div>
  );
}


