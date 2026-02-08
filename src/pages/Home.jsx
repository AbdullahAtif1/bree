import { useState } from 'react';
import { ShieldCheck, MapPin, FileText, PhoneCall, Zap, Box, Navigation, Scale, Maximize, Gauge, ChevronRight, Lock, Download, X, CheckCircle, Star, Clock, Activity, Truck, AlertCircle } from 'lucide-react';
import redTruckImg from '../assets/imgs/Gemini_Generated_Image_g8cjsog8cjsog8cj.webp';
import driverImg from '../assets/imgs/female.webp';

const Home = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');

  // FMCSA & User Data Constants
  const PHONE = "(541) 252-2499";
  const EMAIL = "bvfhomes@gmail.com";
  const MC_NUMBER = "1779840";
  const DOT_NUMBER = "4499521";
  const HOME_BASE = "224 ROBERTS DR DALTON, GA 30721";

  const handleDownload = (docName) => {
    if (!isUnlocked) { setShowModal(true); return; }
    // Simulation of download
    const element = document.createElement("a");
    const file = new Blob([`Secure Doc: ${docName}\nAuthority: ${MC_NUMBER}\nCarrier: Stanley Contracting Inc`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${docName.replace(/\s+/g, '_')}_COPY.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleUnlock = (e) => {
    e.preventDefault();
    // Simple passcode logic
    if (accessCode.toUpperCase() === 'BVF2026') {
      setIsUnlocked(true); setShowModal(false); setError('');
    } else { setError('Invalid Code. Try "BVF2026"'); }
  };

  return (
    <div id="home" className="pt-32 font-sans text-gray-900 bg-gray-50 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full pb-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 animate-fade-in-up z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-tl-xl rounded-br-xl border-l-4 border-red-600 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Active Authority • DOT# {DOT_NUMBER}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight text-gray-900">
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">BVF HOMES LLC</span><br />
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              <strong>SOUTHEAST REGIONAL Specialist.</strong> <br/>
              Owner-Operator run. No dispatch middlemen. Just direct, reliable communication and a 26' Box Truck ready to roll.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={`tel:${PHONE.replace(/\D/g,'')}`} className="clip-trap flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 font-black text-lg hover-lift shadow-red-500/30 shadow-lg">
                <PhoneCall size={20} />
                CALL BREE
              </a>
              <a href="#documents" className="clip-trap flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-8 py-4 font-bold text-lg hover:bg-gray-900 hover:text-white transition-colors shadow-sm">
                BROKER PACKET
              </a>
            </div>
          </div>

          {/* HERO IMAGE - Now visible on mobile with smooth transition */}
          <div className="relative w-full h-full animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="clip-trap relative z-10 bg-gray-800 aspect-[4/5] shadow-2xl group overflow-hidden">
              <img 
                src={redTruckImg} 
                alt="2016 F650 Box Truck" 
                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-all duration-700 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 md:p-8">
                  <p className="text-white font-black text-xl md:text-2xl uppercase">26k Non-CDL</p>
                  <p className="text-red-500 font-bold text-sm md:text-base">General Freight & LTL Ready</p>
              </div>
            </div>
            {/* Decoration Border */}
            <div className="clip-trap absolute -z-10 top-6 -right-6 w-full h-full border-2 border-red-600 opacity-30 hidden md:block"></div>
          </div>

        </div>
      </section>

      {/* 2. AUTHORITY STRIP */}
      <section id="authority" className="bg-white border-y border-gray-200 py-10 shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col group cursor-default">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-red-500 transition-colors">Motor Carrier</span>
            <span className="text-3xl font-black font-mono text-gray-900">MC# {MC_NUMBER}</span>
          </div>
          <div className="h-10 w-px bg-gray-200 hidden md:block"></div>
          <div className="flex flex-col group cursor-default">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-red-500 transition-colors">US DOT</span>
            <span className="text-3xl font-black font-mono text-gray-900">#{DOT_NUMBER}</span>
          </div>
          <div className="h-10 w-px bg-gray-200 hidden md:block"></div>
          <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 clip-trap border border-gray-200 hover:border-red-500 transition-colors">
            <ShieldCheck className="text-red-600" size={32} />
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-gray-900">Active Insurance</span>
              <span className="text-xs font-bold text-green-600 uppercase">Motive ELD Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEET THE OPERATOR */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100 skew-x-12 opacity-50"></div>

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
           {/* Image Side */}
            <div className="relative group hover-lift">
              <div className="clip-trap absolute -inset-4 bg-red-600 opacity-20 group-hover:rotate-1 transition-transform duration-500"></div>
              <img 
                src={driverImg} 
                alt="Jimmy Stanley - Owner Operator" 
                className="clip-trap relative shadow-2xl w-full object-cover aspect-[4/5] transition-all duration-500"
              />
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-6 py-4 border-l-4 border-red-600 shadow-lg">
                <p className="font-black text-xl uppercase text-white">BREE VALERIE FAITH</p>
                <p className="text-sm text-gray-400 font-bold">Owner & Lead Operator</p>
              </div>
            </div>

           <div className="space-y-6">
              <h2 className="text-4xl font-black uppercase text-gray-900">
                Direct Contact. <br /><span className="text-red-600">No Middlemen.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-red-200 pl-4">
                "I operate under my own authority to kill the anxiety brokers feel when they hang up the phone. When you book Watson Holdings, you aren't talking to a dispatcher—you're talking to the driver. 
                <br/><br/>
                I make the decisions, I drive the truck, and I guarantee your customer's cargo is treated like my own."
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                 <div className="p-4 bg-white clip-trap border border-gray-200 shadow-sm group hover:border-red-500 transition-colors">
                    <Truck className="text-red-600 mb-2 group-hover:scale-110 transition-transform" />
                    <div className="font-bold text-xl">Owner Op</div>
                    <div className="text-xs opacity-60 uppercase">Direct Oversight</div>
                 </div>
                 <div className="p-4 bg-white clip-trap border border-gray-200 shadow-sm group hover:border-red-500 transition-colors">
                    <Activity className="text-red-600 mb-2 group-hover:scale-110 transition-transform" />
                    <div className="font-bold text-xl">Verified</div>
                    <div className="text-xs opacity-60 uppercase">Drug & Alcohol Consortium</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. BROKER REVIEWS (Placeholder updated for Box Truck context) */}
      <section className="py-20 bg-gray-900 text-white clip-angle">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-black uppercase">Broker <span className="text-red-500">Trust</span></h2>
             <p className="text-gray-400">Consistent, regional performance.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Jason M.", company: "TQL", text: "Stanley was excellent. Perfect for that tricky LTL run we had. Tracking was on point." },
                { name: "Sarah K.", company: "CH Robinson", text: "No nonsense. He said he'd be there at 8am, he was there at 7:45am. Clean box truck." },
                { name: "David L.", company: "Coyote", text: "Direct communication makes all the difference. Paperwork was in my inbox immediately." }
              ].map((review, i) => (
                <div key={i} className="bg-gray-800 p-8 clip-trap shadow-lg border-b-4 border-red-600 relative hover-lift transition-all duration-300">
                   <div className="flex text-red-500 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                   <p className="italic text-gray-300 mb-6">"{review.text}"</p>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center font-bold text-white">
                        {review.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{review.name}</p>
                        <p className="text-xs text-gray-500 uppercase">{review.company}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. EQUIPMENT & SPECS */}
      <section id="equipment" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
            <h2 className="text-4xl font-black uppercase text-gray-900">The <span className="text-red-600">Specs</span></h2>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Load Capability Details</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* Primary Truck - F650 with Micro-Data */}
             <div className="md:col-span-2 bg-white p-8 clip-trap border-l-4 border-red-600 shadow-md relative overflow-hidden group min-h-[16rem]">
                <div className="z-10 relative">
                   <h3 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tighter">2016 Ford F650</h3>
                   
                   {/* LOAD PREFERENCE MICRO-DATA */}
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase"><Maximize size={14}/> Dimensions</div>
                        <p className="text-xl font-black text-gray-800 tracking-tighter">26' L x 96" W</p>
                        <p className="text-xs text-gray-400">Standard Dock Height</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase"><Scale size={14}/> Payload</div>
                        <p className="text-xl font-black text-gray-800 tracking-tighter">~8,500 LBS</p>
                        <p className="text-xs text-gray-400">Class 6 Non-CDL</p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase"><Gauge size={14}/> Features</div>
                        <p className="text-xl font-black text-gray-800 tracking-tighter">E-TRACKS</p>
                        <p className="text-xs text-gray-400">Logistic Posts Ready</p>
                      </div>
                   </div>
                </div>
                {/* Background Decoration */}
                <Truck className="absolute -right-8 -bottom-8 text-gray-50 transform -rotate-12 group-hover:text-red-50 transition-colors duration-500" size={240} />
             </div>

             {/* Broker Ready Box */}
             <div className="bg-[#111827] text-white p-8 clip-trap border-t-4 border-red-600 shadow-xl flex flex-col justify-center items-center text-center">
                <div className="inline-block p-3 bg-red-600 rounded-full mb-4 shadow-lg shadow-red-600/20">
                  <CheckCircle size={24} className="text-white"/>
                </div>
                <h4 className="font-black text-xl uppercase tracking-widest mb-2">Broker Ready</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Strictly maintained, smoke-free, and organized. Every load is secured with professional-grade straps and bars.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 6. LANES */}
      <section id="lanes" className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black uppercase mb-8 text-gray-900">Service <span className="text-red-600">Area</span></h2>
            <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
                Specializing in SOUTHEAST REGIONAL lanes. Open to structured backhauls or dedicated regional runs.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {['GEORGIA', 'TENNESSEE', 'ALABAMA', 'NORTH CAROLINA', 'SOUTH CAROLINA', 'KENTUCKY', 'FLORIDA', 'MISSISSIPPI'].map((state, index) => (
                <span 
                  key={state} 
                  className={`clip-trap px-6 py-3 font-bold shadow-sm hover:scale-110 transition-transform cursor-default border-l-4
                    ${index === 0 ? 'bg-red-600 text-white border-red-800' : 'bg-gray-50 text-gray-700 border-red-600'}`}
                >
                  {state}
                </span>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gray-50 inline-block clip-trap border border-gray-200">
               <div className="flex items-center gap-4 text-left">
                 <div className="p-3 bg-white border border-gray-200 text-red-600 rounded-full shadow-sm"><Navigation size={24}/></div>
                 <div>
                   <p className="font-bold text-lg text-gray-900">Home Base</p>
                   <p className="text-gray-500 uppercase text-sm tracking-wide">{HOME_BASE}</p>
                 </div>
               </div>
            </div>
        </div>
      </section>

      {/* 6.5 CHECK AVAILABILITY SECTION */}
      <section id="availability" className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="bg-[#111827] clip-trap p-8 md:p-12 relative overflow-hidden shadow-2xl">
              {/* Futuristic Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-3xl rounded-full -mr-20 -mt-20"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="text-left space-y-4">
                   <h2 className="text-3xl md:text-5xl font-black text-white leading-none uppercase">
                    Check <span className="text-red-600">Availability</span>
                   </h2>
                   <p className="text-gray-400 text-lg">
                    Specializing in Midwest ↔ Southeast routes. Get a direct response from the owner-operator within minutes.
                   </p>
                </div>

                <div className="bg-white p-1 clip-trap">
                   <form className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 bg-white">
                      <select className="bg-gray-100 p-4 font-bold text-gray-700 outline-none focus:bg-gray-200 transition-colors cursor-pointer">
                        <option value="">Origin (Southeast)</option>
                        <option>GA - Georgia (HQ)</option>
                        <option>TN - Tennessee</option>
                        <option>AL - Alabama</option>
                        <option>NC - North Carolina</option>
                        <option>SC - South Carolina</option>
                      </select>

                      <select className="bg-gray-100 p-4 font-bold text-gray-700 outline-none focus:bg-gray-200 transition-colors cursor-pointer">
                        <option value="">Destination (Southeast)</option>
                        <option>KY - Kentucky</option>
                        <option>FL - Florida</option>
                        <option>MS - Mississippi</option>
                        <option>TN - Tennessee</option>
                        <option>AL - Alabama</option>
                      </select>

                      <button 
                        type="button"
                        className="sm:col-span-2 bg-red-600 text-white font-black py-4 flex items-center justify-center gap-2 hover:bg-red-700 transition-all uppercase tracking-widest group"
                      >
                        Request Quote <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                      </button>
                   </form>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* 7. DOCUMENTS */}
      <section id="documents" className="py-24 bg-gray-900 text-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="mb-10">
              <h2 className="text-3xl font-black uppercase mb-2">Broker <span className="text-red-500">Packet</span></h2>
              <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
                {isUnlocked ? <><CheckCircle size={14} className="text-green-500" /> IDENTITY VERIFIED</> : <><Lock size={14} /> LOCKED: VERIFIED BROKERS ONLY</>}
              </p>
            </div>
            
            <div className={`bg-gray-800 p-10 clip-trap border-2 ${isUnlocked ? 'border-red-500 shadow-2xl shadow-red-500/20' : 'border-gray-700'} transition-all duration-500`}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {['W-9 Form', 'MC Authority', 'Insurance Cert'].map((doc, i) => (
                        <button 
                          key={i} 
                          onClick={() => handleDownload(doc)}
                          className={`flex flex-col items-center justify-center p-6 clip-trap border transition-all duration-300
                            ${isUnlocked 
                              ? 'bg-gray-700 border-gray-600 hover:bg-red-600 hover:text-white hover:-translate-y-1 hover:border-red-600' 
                              : 'bg-gray-900/50 border-dashed border-gray-600 opacity-50 cursor-not-allowed'
                            }`}
                        >
                            {isUnlocked ? <Download size={32} className="mb-3"/> : <Lock size={32} className="mb-3"/>}
                            <span className="font-bold text-sm">{doc}</span>
                        </button>
                    ))}
                </div>
                {!isUnlocked && (
                  <button onClick={() => setShowModal(true)} className="mt-8 clip-trap bg-white text-gray-900 px-10 py-3 font-bold hover:bg-gray-200 transition-colors">
                    ENTER ACCESS CODE
                  </button>
                )}
            </div>
        </div>
        
        {/* Abstract Background Detail */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-50"></div>
      </section>

      {/* SECURITY MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in zoom-in duration-200">
          <div className="clip-trap bg-white w-full max-w-sm p-8 shadow-2xl border-t-4 border-red-600 relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"><X size={20} /></button>
            <ShieldCheck size={40} className="mx-auto text-red-600 mb-4" />
            <h3 className="text-xl font-black text-center mb-1 text-gray-900">Identity Check</h3>
            <p className="text-center text-gray-500 text-xs mb-6">Enter the code provided in our email signature.</p>
            <form onSubmit={handleUnlock}>
                <input 
                  type="text" 
                  value={accessCode} 
                  onChange={(e) => setAccessCode(e.target.value)} 
                  placeholder="ACCESS CODE" 
                  className="w-full text-center font-mono text-xl py-3 rounded bg-gray-100 border border-gray-300 focus:border-red-600 outline-none uppercase mb-4 transition-colors text-gray-900" 
                />
                {error && <p className="text-red-500 text-xs text-center mb-4 flex items-center justify-center gap-1"><AlertCircle size={12}/> {error}</p>}
                <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 hover:brightness-110 transition-all shadow-lg shadow-red-600/30">UNLOCK DOCUMENTS</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;