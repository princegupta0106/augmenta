import React from 'react';
import logo from '../assets/images/image01.svg'; 
import Navbar from '../components/navbar/Navbar';
import image08 from '../assets/images/image08.webp';
import video2 from '../assets/images/video1.mp4';
import video1 from '../assets/images/video1.mp4';
import video3 from '../assets/images/video3.mp4';
import image05 from '../assets/images/image05.jpg';
import image09 from '../assets/images/image09.webp';
import image10 from '../assets/images/image10.png';
import image07 from '../assets/images/image07.webp';
import image11 from '../assets/images/image11.webp';
import image13 from '../assets/images/image13.png';
import image12 from '../assets/images/image12.webp';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Newpage from '../components/newpge';



function redirectToYouTube() {
  window.location.href = "https://www.youtube.com";
}
const Home = () => {

  
  return (
    <div>
      
      <Navbar />

      <div
        style={{ backgroundImage: `url(${image08})` }}
        className=" bg-cover bg-center text-center mt-[60px] p-[32px] md:pl-[64px] md:pr-[43px] lg:px-[64px] md:text-left  md:flex items-center md:px-32 text-white min-h-[100vh]"
      >
        <div className='flex flex-col gap-6 md:w-1/2 mb-[30px] ' >
          <p className=' text-[28px] md:text-[35px] font-extrabold tracking-tight'>Turn any image into an AR experience — no coding required</p>
          <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores delectus officia debitis harum fugiat pl.</p>

          <button className="rounded-md bg-customBlue block p-4 hover:text-gray-300 w-full text-white md:w-[200px] text-base ">Start your free trial</button>
        </div>
        <div className=' md:w-1/2 md:p-5'>
          <video poster={image07}   src={video1} className='rounded-3xl ' autoPlay loop muted>  </video>
        </div>

      </div>

      <div className='mt-[50px] text-center px-[33px] flex flex-col items-center '>

        <div className='arInnovation  flex flex-col gap-4 md:w-[70%] mb-[40px]'>
          <p className='text-[24px] font-bold'>Elevate Your Brand with AR Innovation</p>
          <p className=''>Bring your brand to life. Designed for anyone keen to dive into AR without technical hurdles. We have enabled AR creation as simple as sharing a story, and opening up endless possibilities for your business to connect and engage</p>
          <p className=''>Elevate Your Brand with AR Innovation</p>
          <div className='sm:flex gap-4 justify-center '>
            <button className="rounded-md border-2 border-customBlue block  py-2 hover:text-gray-300 w-full mb-5 text-customBlue sm:max-w-[220px]">SIGN IN</button>
            <button className="rounded-md sm:max-w-[220px] bg-customBlue block  py-2 mb-5  border-customBlue hover:text-gray-300 text-white w-full">SIGN IN</button>
          </div>

        </div>

        <div className="classContainer flex flex-wrap w-full mb-[50px] gap-4 justify-center">
          <div className="card w-full sm:w-[45%] lg:w-[23%] rounded hover:shadow-slate-300  h-[500px] flex flex-col items-center border-2 rounded-md hover:shadow-md pb-4">
                <video poster={image07}  src={video2} className='rounded-t-lg object-cover h-[400px] pb-4  '> </video>
                <p className = "font-semibold pb-2">AR Business Cards</p>
                <p className = "pb-4 ">AR Business Cards</p>
                
                <button className="rounded-[25px] border  block border-zinc-400 py-1 hover:text-gray-300 w-[160px]  flex gap-2 justify-center text-[14px] ">
                  <img src={image05} alt="" />
                  <p>View Project</p></button>
            </div>

            <div className="card w-full sm:w-[45%] lg:w-[23%] rounded hover:shadow-slate-300  h-[500px] flex flex-col items-center border-2 rounded-md hover:shadow-md pb-4">
                <video poster={image07}  src={video2} className='rounded-t-lg object-cover h-[400px] pb-4  '> </video>
                <p className = "font-semibold pb-2">AR Business Cards</p>
                <p className = "pb-4 ">AR Business Cards</p>
                
                <button className="rounded-[25px] border  block border-zinc-400 py-1 hover:text-gray-300 w-[160px]  flex gap-2 justify-center text-[14px] ">
                  <img src={image05} alt="" />
                  <p>View Project</p></button>
            </div>

            <div className="card w-full sm:w-[45%] lg:w-[23%] rounded hover:shadow-slate-300  h-[500px] flex flex-col items-center border-2 rounded-md hover:shadow-md pb-4">
                <video poster={image07}  src={video2} className='rounded-t-lg object-cover h-[400px] pb-4  '> </video>
                <p className = "font-semibold pb-2">AR Business Cards</p>
                <p className = "pb-4 ">AR Business Cards</p>
                
                <button className="rounded-[25px] border  block border-zinc-400 py-1 hover:text-gray-300 w-[160px]  flex gap-2 justify-center text-[14px] ">
                  <img src={image05} alt="" />
                  <p>View Project</p></button>
            </div>

            <div className="card w-full sm:w-[45%] lg:w-[23%] rounded hover:shadow-slate-300  h-[500px] flex flex-col items-center border-2 rounded-md hover:shadow-md pb-4">
                <video poster={image07}  src={video2} className='rounded-t-lg object-cover h-[400px] pb-4  '> </video>
                <p className = "font-semibold pb-2">AR Business Cards</p>
                <p className = "pb-4 ">AR Business Cards</p>
                
                <button className="rounded-[25px] border  block border-zinc-400 py-1 hover:text-gray-300 w-[160px]  flex gap-2 justify-center text-[14px] ">
                  <img src={image05} alt="" />
                  <p>View Project</p></button>
            </div>
            

         


        
        </div>

      </div>

      <div className="counter h-[400px] w-full text-white relative ">
        <div className='absolute top-5 md:top-[50%] md:translate-y-[-50%] left-[10%]'>
          <div className='flex gap-14 mb-5  '>
            <div>
              <p  className = "text-slate-500 mb-[10px]">Platform users</p>
              <p className = "font-bold text-2xl">99900+</p>
            </div>
            <div>
              <p  className = "text-slate-500 mb-[10px]">Platform users</p>
              <p className = "font-bold text-2xl">99900+</p>
            </div>
          </div>
          <div className ="flex gap-14">
            <div>
              <p  className = "text-slate-500 mb-[10px]">Platform users</p>
              <p className = "font-bold text-2xl">99900+</p>
            </div>
            <div>
              <p  className = "text-slate-500 mb-[10px]">Platform users</p>
              <p className = "font-bold text-2xl">99900+</p>
            </div>
          </div>
        </div>
      </div>
      

      <div className='mt-[50px] text-center px-[33px] flex flex-col items-center '>

        <div className='arInnovation  flex flex-col gap-4 md:w-[70%] mb-[40px]'>
          <p className='text-[24px] font-bold'>Elevate Your Brand with AR Innovation</p>
          <p className=''>Bring your brand to life. Designed for anyone keen to dive into AR without technical hurdles. We have enabled AR creation as simple as sharing a story, and opening up endless possibilities for your business to connect and engage</p>
          <p className=''>Elevate Your Brand with AR Innovation</p>
          <div className='sm:flex gap-4 justify-center '>
            <button className="rounded-md border-2 border-customBlue block  py-2 hover:text-gray-300 w-full mb-5 text-customBlue sm:max-w-[220px]">SIGN IN</button>
            <button className="rounded-md sm:max-w-[220px] bg-customBlue block  py-2 mb-5  border-customBlue hover:text-gray-300 text-white w-full">SIGN IN</button>
          </div>

        </div>

        <div className="classContainer flex flex-wrap w-full mb-[50px] gap-4 justify-center">
          <div className="card w-full sm:w-[45%] lg:w-[23%] hover:shadow-slate-300  h-[500px] flex flex-col items-center border-2 rounded-md hover:shadow-md pb-4">
                <video poster={image07}  src={video2} className='rounded-t-lg object-cover h-[400px] pb-4  '> </video>
                <p className = "font-semibold pb-2">AR Business Cards</p>
                <p className = "pb-4 ">AR Business Cards</p>
                
                <button className="rounded-[25px] border   border-zinc-400 py-1 hover:text-gray-300 w-[160px]  flex gap-2 justify-center text-[14px] ">
                  <img src={image05} alt="" />
                  <p>View Project</p></button>
            </div>

            <div className="card w-full sm:w-[45%] lg:w-[23%] hover:shadow-slate-300  h-[500px] flex flex-col items-center border-2 rounded-md hover:shadow-md pb-4">
                <video poster={image07}  src={video2} className='rounded-t-lg object-cover h-[400px] pb-4  '> </video>
                <p className = "font-semibold pb-2">AR Business Cards</p>
                <p className = "pb-4 ">AR Business Cards</p>
                
                <button className="rounded-[25px] border  border-zinc-400 py-1 hover:text-gray-300 w-[160px]  flex gap-2 justify-center text-[14px] ">
                  <img src={image05} alt="" />
                  <p>View Project</p></button>
            </div>

            <div className="card w-full sm:w-[45%] lg:w-[23%]  hover:shadow-slate-300  h-[500px] flex flex-col items-center border-2 rounded-md hover:shadow-md pb-4">
                <video poster={image07}  src={video2} className='rounded-t-lg object-cover h-[400px] pb-4  '> </video>
                <p className = "font-semibold pb-2">AR Business Cards</p>
                <p className = "pb-4 ">AR Business Cards</p>
                
                <button className="rounded-[25px] border  border-zinc-400 py-1 hover:text-gray-300 w-[160px]  flex gap-2 justify-center text-[14px] ">
                  <img src={image05} alt="" />
                  <p>View Project</p></button>
            </div>

            <div className="card w-full sm:w-[45%] lg:w-[23%]  hover:shadow-slate-300  h-[500px] flex flex-col items-center border-2 rounded-md hover:shadow-md pb-4">
                <video poster={image07}  src={video2} className='rounded-t-lg object-cover h-[400px] pb-4  '> </video>
                <p className = "font-semibold pb-2">AR Business Cards</p>
                <p className = "pb-4 ">AR Business Cards</p>
                
                <button className="rounded-[25px] border  border-zinc-400 py-1 hover:text-gray-300 w-[160px]  flex gap-2 justify-center text-[14px] ">
                  <img src={image05} alt="" />
                  <p>View Project</p></button>
            </div>
            

            
            
        </div>

      </div>

      <div className='w-full bg-cover bg-center  pt-[50px] text-center px-[32px] flex flex-col items-center text-center' style={{ backgroundImage: `url(${image08})` }} >   
        <p className=' text-[28px] md:text-[35px] font-bold tracking-tight text-white mb-3'>Turn any image into an AR experience — no coding required</p>
        <p className='text-slate-500 mb-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores delectus officia debitis harum fugiat.</p>
        <video autoPlay loop muted poster={image07}  src={video3} className='rounded-xl w-full max-w-[450px] mb-20'   ></video>
        <div className="flex flex-col md:flex-row justify-evenly  md:mx-[30%] w-full mb-10">
          <div className='flex flex-col items-center mb-3'>
            <img src={image10} alt=""  className = 'w-10 h-10 mb-4'/>
            <p className=' text-[20px] font-bold tracking-tight text-white mb-1'>Turn an</p>
            <p className='text-slate-500 mb-[30px] text-[14px]'>Logsn sndf.</p>

          </div>
          <div className='flex flex-col items-center mb-3'>
            <img src={image10} alt=""  className = 'w-10 h-10 mb-4'/>
            <p className=' text-[20px] font-bold tracking-tight text-white mb-1'>Turn an</p>
            <p className='text-slate-500 mb-[30px] text-[14px]'>Logsn sndf.</p>

          </div>
          <div className='flex flex-col items-center mb-3'>
            <img src={image10} alt=""  className = 'w-10 h-10 mb-4'/>
            <p className=' text-[20px] font-bold tracking-tight text-white mb-1'>Turn an</p>
            <p className='text-slate-500 mb-[30px] text-[14px]'>Logsn sndf.</p>

          </div>
          <div className='flex flex-col items-center mb-3'>
            <img src={image10} alt=""  className = 'w-10 h-10 mb-4'/>
            <p className=' text-[20px] font-bold tracking-tight text-white mb-1'>Turn an</p>
            <p className='text-slate-500 mb-[30px] text-[14px]'>Logsn sndf.</p>

          </div>
        </div>
        
      </div>

      <div className='w-full  pt-[50px] text-center px-[32px] flex flex-col items-center'> 
        <p className=' text-[28px] md:text-[35px] font-bold tracking-tight  mb-3'>Turn any image into an AR experience — no coding required</p>
        <p className='text-slate-500  mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores delectus officia debitis harum fugiat.</p>
        <img src={image11} alt=""  className=' sm:px-[98px] lg:px-[198px]  w-full  mb-10'/>
        
      </div>
      
      <div className='w-full bg-cover bg-center  pt-[50px] text-center px-[32px] flex flex-col items-center bg-blue-950 pb-10'> 
        <p className=' text-[28px] md:text-[35px] font-bold tracking-tight  mb-3 text-white'>Turn any image into an AR experience — no coding required</p>
        <p className='text-slate-500  mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores delectus officia debitis harum fugiat.</p>
        <button className='px-5 bg-white rounded-md py-3'>Start Free Trial</button>
      </div>
      <Newpage/>
      <footer className="bg-gray-100 py-10 pb-0 text-center md:text-left">
      <div className="container mx-auto flex flex-col items-center space-y-6 text-sm pb-7">
        
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-700 pl-10">
          
          {/* Company Section */}
          <div>
            <h3 className="text-base text-black font-bold mb-3 ">Company</h3>
            <ul className="space-y-2 text-md">
              <li><a href="#" className="hover:underline">Contact us</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Login</a></li>
              <li><a href="#" className="hover:underline">Signup</a></li>
            </ul>
          </div>
          
          {/* Resources Section */}
          <div>
            <h3 className="text-base text-black font-bold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Explore AR</a></li>
              <li><a href="#" className="hover:underline">Product Support</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">AR Gallery</a></li>
            </ul>
          </div>
          
          {/* Legal Section */}
          <div>
            <h3 className="text-base text-black font-bold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Terms and conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">GDPR</a></li>
              <li><a href="#" className="hover:underline">Cookie Declaration</a></li>
            </ul>
          </div>

          {/* Download Section */}
          <div className=" min-w-[250px] ">
            <p className="text-base text-black font-bold mb-3">Download UniteAR App</p>
            <div className="flex justify-start space-x-4">
              <img src={image12} alt="Google Play" className="w-[109px] h-[32px]" />
              <img src={image13} alt="App Store" className="w-[109px] h-[32px]" />
          </div>
        </div>

        </div>

        

        
        
      </div>
      <div className="flex flex-col md:flex-row pt-5 text-middle w-full justify-between px-[32px] md:px-20 bg-stone-200">
          {/* Social Media Icons */}
          <div className="flex space-x-4 text-gray-500 mb-5 items-center justify-center">
            <a href="#" className="hover:text-gray-700"><FaLinkedin /></a>
            <a href="#" className="hover:text-gray-700"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-700"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-700"><FaInstagram /></a>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-gray-500  ">
            Copyright©2023. All rights reserved. Powered by Augmenta
          </p>
        </div>
    </footer>
      
    </div>
  );
};

export default Home;
