import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const useBookings = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookings must be used within BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([
    // Initial upcoming bookings
    {
      id: 1,
      room: 'A-101',
      date: 'Mon, 20 Oct',
      time: '11:00 AM – 12:00 PM',
      purpose: 'Study / Group Work',
      status: 'Confirmed',
      statusColor: '#10B981',
      iconBg: '#E0F2FE',
      isUpcoming: true,
    },
    {
      id: 2,
      room: 'B-203',
      date: 'Tue, 21 Oct',
      time: '2:00 PM – 3:00 PM',
      purpose: 'Project Discussion',
      status: 'Confirmed',
      statusColor: '#10B981',
      iconBg: '#E0F2FE',
      isUpcoming: true,
    },
    {
      id: 3,
      room: 'A-104',
      date: 'Thu, 23 Oct',
      time: '10:00 AM – 11:00 AM',
      purpose: 'Study',
      status: 'Pending',
      statusColor: '#F59E0B',
      iconBg: '#FEF3C7',
      isUpcoming: true,
    },
    // Past bookings
    {
      id: 4,
      room: 'C-301',
      date: 'Fri, 17 Oct',
      time: '3:00 PM – 5:00 PM',
      purpose: 'Workshop',
      status: 'Completed',
      statusColor: '#6B7280',
      iconBg: '#F3F4F6',
      isUpcoming: false,
    },
    {
      id: 5,
      room: 'A-102',
      date: 'Wed, 15 Oct',
      time: '1:00 PM – 2:00 PM',
      purpose: 'Meeting',
      status: 'Completed',
      statusColor: '#6B7280',
      iconBg: '#F3F4F6',
      isUpcoming: false,
    },
    {
      id: 6,
      room: 'B-201',
      date: 'Mon, 13 Oct',
      time: '10:00 AM – 12:00 PM',
      purpose: 'Study / Group Work',
      status: 'Completed',
      statusColor: '#6B7280',
      iconBg: '#F3F4F6',
      isUpcoming: false,
    },
  ]);

  const addBooking = (booking) => {
    const newBooking = {
      id: Date.now(),
      room: booking.room,
      date: booking.date,
      time: booking.time,
      purpose: booking.purpose,
      status: 'Confirmed',
      statusColor: '#10B981',
      iconBg: '#E0F2FE',
      isUpcoming: true,
    };
    setBookings([newBooking, ...bookings]);
  };

  const getUpcomingBookings = () => bookings.filter(b => b.isUpcoming);
  const getPastBookings = () => bookings.filter(b => !b.isUpcoming);

  return (
    <BookingContext.Provider value={{ bookings, addBooking, getUpcomingBookings, getPastBookings }}>
      {children}
    </BookingContext.Provider>
  );
};
