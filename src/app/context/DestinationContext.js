"use client";
import React, { createContext, useContext, useState } from 'react';

const DestinationContext = createContext(null);

const initialDestinations = {
  "Dubai, UAE": {
    registrationDeadline: "15th May, 2026",
    positionPaperDeadline: "05th March, 2026",
    registerLink: "/Register-Now?destination=Dubai,%20UAE",
  },
  "Istanbul, Türkiye": {
    registrationDeadline: "1st April, 2026",
    positionPaperDeadline: "05th March, 2026",
    registerLink: "/Register-Now?destination=Istanbul,%20Türkiye",
  },
  "London, UK": {
    registrationDeadline: null,
    positionPaperDeadline: null,
    registerLink: "/Register-Now?destination=London,%20UK",
  },
  "Kuala Lumpur, Malaysia": {
    registrationDeadline: "15th June, 2026",
    positionPaperDeadline: null,
    registerLink: "/Register-Now?destination=Kuala%20Lumpur,%20Malaysia",
  },
  "Riyadh, Saudi Arabia": {
    registrationDeadline: null,
    positionPaperDeadline: null,
    registerLink: "/Register-Now?destination=Riyadh,%20Saudi%20Arabia",
  },
};

export function DestinationProvider({ children }) {
  const [destination, setDestination] = useState('');
  const [locked, setLocked] = useState(false);
  const [destinations, setDestinations] = useState(initialDestinations);
  const [amounts, setAmounts] = useState(0)
  const [check, setCheck] = useState("");
  const selectDestination = (dest, lock = true) => {
    setDestination(dest || '');
    setLocked(!!lock);
  };

  const clearDestination = () => {
    setDestination('');
    setLocked(false);
  };

  const updateDestinationDates = (key, newDates = {}) => {
    setDestinations((prev) => ({
      ...prev,
      [key]: { ...(prev[key] || {}), ...newDates },
    }));
  };

  const getDates = (key) => destinations[key] || null;

  return (
    <DestinationContext.Provider value={{ check, setCheck, amounts, setAmounts, destination, locked, selectDestination, clearDestination, destinations, updateDestinationDates, getDates }}>
      {children}
    </DestinationContext.Provider>
  );
}

export function useDestination() {
  const ctx = useContext(DestinationContext);
  if (!ctx) throw new Error('useDestination must be used within DestinationProvider');
  return ctx;
}
