import React from 'react';
   import { Triangle } from 'lucide-react';

   function App() {
     return (
       <div className="min-h-screen bg-gradient-to-r from-red-600 via-red-500 to-red-400 p-8 font-serif">
         <header className="flex justify-between items-center mb-16">
           <Triangle className="text-black" size={32} />
           <nav>
             <a href="#work" className="text-black mr-4 hover:underline font-bold">Work</a>
             <a href="#about" className="text-black hover:underline font-bold">About</a>
           </nav>
         </header>
         
         <main className="max-w-3xl mx-auto">
           <h1 className="text-6xl font-extrabold text-black mb-4">Hello, I'm Dev.</h1>
           <h2 className="text-5xl font-extrabold text-black mb-8">I'm a marketer.</h2>
           
           <p className="text-black font-bold mb-4">
             I have experience at AllEvents.in and kollabo.in, focusing on marketing strategies and startup operations.
           </p>
           
           <p className="text-black font-bold mb-8">
             I value data-driven approaches, creative problem-solving, and innovation above all else. These
             ideals guide my approach to marketing and life in general.
           </p>
           
           <hr className="border-black mb-8" />
           
           <section id="work">
             <h3 className="text-3xl font-extrabold text-black mb-4">Experience</h3>
             <ul className="text-black font-bold mb-8">
               <li className="mb-2">Marketing Intern at AllEvents.in (September'23 - March'24)</li>
               <li className="mb-2">Co-Founder at kollabo.in (January'23 - July'23)</li>
             </ul>
           </section>
           
           <section id="about">
             <h3 className="text-3xl font-extrabold text-black mb-4">Education</h3>
             <ul className="text-black font-bold mb-8">
               <li className="mb-2">B.Com at St. Xavier's college, Ahmedabad (August'22 - March'25)</li>
               <li>12th - 87%, 10th - 77% at St. Xavier's School, Ahmedabad</li>
             </ul>
           </section>
         </main>
       </div>
     );
   }

   export default App;