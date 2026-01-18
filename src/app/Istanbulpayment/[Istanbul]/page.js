'use client';

import bgImage from '../../../../public/img/registerbg.jpg';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '@/app/component/navbar/Navbar';
import { useDestination } from '@/app/context/DestinationContext';

export default function Home() {
  const { setCheck, setAmounts } = useDestination();
  const searchParams = useSearchParams();

  const [custId, setCustID] = useState('');
  const [invoiceLoader, setInvoiceLoader] = useState(false);

  /* 🔑 only ONE dropdown at a time */
  const [activeCard, setActiveCard] = useState(null);

  const optionsRef = useRef(null);

  /* ================= DESTINATION ================= */
  useEffect(() => {
    setCheck('Istanbul Turkey');
  }, [setCheck]);

  const seo = (amount) => setAmounts(amount);

  /* ================= CLICK OUTSIDE ================= */
  useEffect(() => {
    const handleOutside = (e) => {
      if (optionsRef.current && !optionsRef.current.contains(e.target)) {
        setActiveCard(null);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  /* ================= FETCH CUSTOMER ================= */
  const id = searchParams.get('userid');

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:1337/api/firstnames?filters[id][$eq]=${id}`
        );
        const data = await res.json();
        setCustID(data?.data?.[0]?.customerId || '');
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  /* ================= INVOICE ================= */
  const handleCreateInvoice = async (amount) => {
    setInvoiceLoader(true);

    let disnew = 'Basic';
    if (amount === 498) disnew = 'Shepandum Experience';
    if (amount === 568) disnew = 'Zagatiya Experience';

    try {
      const res = await fetch('/api/create-invoice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerId: custId,
          amount: amount + 100,
          description: 'Tour Package Payment',
          disnew,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      // Download PDF through proxy to avoid CORS issues
      const downloadRes = await fetch('/api/download-invoice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ invoicePdfUrl: data.invoicePdf }),
      });

      if (!downloadRes.ok) {
        throw new Error('Failed to download invoice');
      }

      // Create blob and download
      const blob = await downloadRes.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `invoice-${Date.now()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success('Invoice downloaded successfully!');
    } catch {
      toast.error('Invoice generation failed');
    } finally {
      setInvoiceLoader(false);
    }
  };

  return (
    <>
      <Navbar />

      <header
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b4c]/95 via-[#1a2a9c]/85 to-[#b00000]/80" />

        <section className="relative z-10 py-28">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-center text-4xl font-bold text-white mb-4">
              Pricing for Istanbul Turkey
            </h2>

            <p className="text-center text-gray-100 mb-16">
              Choose the experience that best fits your diplomatic journey
            </p>

            <div
              ref={optionsRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              <PlanCard
                id={1}
                title="Basic"
                price={289}
                features={[
                  'UN Simulation committee sessions',
                  'Background Study Guides',
                  'Official UNHCR endorsed Certificate',
                  '1 committee lunch',
                  'Opening ceremony Diplomatic dinner',
                  'Closing ceremony Grand Dinner',
                  'Cultural Performance',
                  'Musical Night',
                  'Scavenger Hunt',
                  'World Diplomats merch and Kit',
                ]}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
                onPay={() => seo(289)}
                onInvoice={() => handleCreateInvoice(289)}
                loader={invoiceLoader}
              />

              <PlanCard
                id={2}
                title="Shepandum Experience"
                price={498}
                badge
                features={[
                  'Everything in Basic',
                  '5-star premium hotel accommodation (Twin Shared)',
                  'Gourmet Morning Breakfast everyday',
                ]}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
                onPay={() => seo(498)}
                onInvoice={() => handleCreateInvoice(498)}
                loader={invoiceLoader}
              />

              <PlanCard
                id={3}
                title="Zagatiya Experience"
                price={568}
                features={[
                  'Everything in Delegate Shepandum Experience',
                  'Istanbul City Tour',
                  'Bosphorus Rooftop Lunch Tour',
                  'Cruise Trip & Dinner at Bosphorus',
                ]}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
                onPay={() => seo(568)}
                onInvoice={() => handleCreateInvoice(568)}
                loader={invoiceLoader}
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

/* ================= PLAN CARD ================= */
function PlanCard({
  id,
  title,
  price,
  features,
  activeCard,
  setActiveCard,
  onPay,
  onInvoice,
  badge,
  loader,
}) {
  const isOpen = activeCard === id;

  return (
    <div className={`bg-white rounded-3xl p-8 flex flex-col shadow-lg ${badge ? 'border-2 border-red-600 relative' : ''}`}>
      {badge && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 text-xs rounded-full">
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <p className="text-center text-4xl font-extrabold text-[#1a2a9c] mt-4">
        ${price}
      </p>
      <p className="text-sm text-gray-400 text-center mb-1">
        <span className="line-through">${price + 200}</span> Early Applicant Discount
      </p>

      <ul className="mt-6 space-y-2 text-sm text-gray-600">
        {features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      <div className="mt-8">
        {!isOpen ? (
          <button
            onClick={() => setActiveCard(id)}
            className="w-full py-3 bg-blue-800 text-white rounded-full"
          >
            Choose Now →
          </button>
        ) : (
          <div className="space-y-2 mt-4">
            <button
              onClick={() => setActiveCard(null)}
              className="w-full py-3 bg-red-600 text-white rounded-full"
            >
              Cancel ✖
            </button>

            <Link href="/checkout">
              <button
                onClick={onPay}
                className="w-full py-3 bg-green-600 text-white rounded-full"
              >
                Pay Now →
              </button>
            </Link>

            <button
              onClick={onInvoice}
              disabled={loader}
              className={`w-full mt-2 py-3 rounded-full flex items-center justify-center gap-2
                ${loader ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-700 text-white'}
              `}
            >
              {loader ? (
                <>
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                'Invoice ↓'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
