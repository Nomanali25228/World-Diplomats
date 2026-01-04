'use client';

import { useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import bg from '../../../public/img/registerbg.jpg';

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const amount = searchParams.get('amount');

  useEffect(() => {
    if (!amount) {
      router.push('/');
    }
  }, [amount, router]);

  return (
    <header
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br 
        from-black/80 
        via-[#1a2a9c]/70 
        to-[#b00000]/70">
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center text-white">
        
        {/* Card */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10">
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-6">
            Thank You!
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-200 mb-8">
            Your payment was successfully completed
          </h2>

          {/* Amount */}
          <div className="inline-block  
            text-white  mb-8">
            <span className="text-5xl font-black tracking-wide">
              ${amount}
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-10">
            We truly appreciate your support. You’re amazing! 🎉
          </p>

          <Link href="/">
            <button className="px-10 py-4 text-lg font-semibold rounded-full 
              bg-purple-600 hover:bg-purple-800 
              transition-all duration-300 cursor-pointer shadow-lg hover:scale-105">
              Back to Home
            </button>
          </Link>
        </div>
      </main>
    </header>
  );
}

export default function PaymentSuccess() {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
