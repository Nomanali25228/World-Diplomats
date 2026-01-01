"use client";
import React, { createContext, useContext, useState } from 'react';

const DestinationContext = createContext(null);

const initialDestinations = {
  "Dubai, UAE": {
    registrationDeadline: "January 15th, 2026",
    positionPaperDeadline: "05th March, 2026",
    registerLink: "/Register-Now?destination=Dubai,%20UAE",
  },
  "Istanbul, Turkey": {
    registrationDeadline: "January 5th, 2026",
    positionPaperDeadline: "05th March, 2026",
    registerLink: "/Register-Now?destination=Istanbul,%20Turkey",
  },
  "London, UK": {
    registrationDeadline: "February 15th, 2026",
    positionPaperDeadline: "05th March, 2026",
    registerLink: "/Register-Now?destination=London,%20UK",
  },
  "Kuala Lumpur, Malaysia": {
    registrationDeadline: "January 15th, 2026",
    positionPaperDeadline: "05th March, 2026",
    registerLink: "/Register-Now?destination=Kuala%20Lumpur,%20Malaysia",
  },
  "Riyadh, Saudi Arabia": {
    registrationDeadline: "February 25th, 2026",
    positionPaperDeadline: "05th March, 2026",
    registerLink: "/Register-Now?destination=Riyadh,%20Saudi%20Arabia",
  },
};

export function DestinationProvider({ children }) {
  const [destination, setDestination] = useState('');
  const [locked, setLocked] = useState(false);
  const [destinations, setDestinations] = useState(initialDestinations);

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
    <DestinationContext.Provider value={{ destination, locked, selectDestination, clearDestination, destinations, updateDestinationDates, getDates }}>
      {children}
    </DestinationContext.Provider>
  );
}

export function useDestination() {
  const ctx = useContext(DestinationContext);
  if (!ctx) throw new Error('useDestination must be used within DestinationProvider');
  return ctx;
}
