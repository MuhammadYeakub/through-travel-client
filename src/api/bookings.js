// //Add a booking
// export const addBooking = async (bookingData) => {
//   const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(bookingData),
//   });
//   const data = await response.json();
//   return data;
// };

// // update place status
// export const updateStatus = async (id, status) => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/places/status/${id}`,
//     {
//         method: 'PATCH',
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify({status}),
//     }
//     )
//     const data = await response.json()
//     return data
// }

// // get all bookings for a user by email
// export const getBookings = async (email) => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings?email=${email}`)
//     const bookings = await response.json()
//     return bookings
// }

// // get all bookings for a host by email
// export const getHostBookings = async (email) => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings/host?email=${email}`)
//     const bookings = await response.json()
//     return bookings
// }

// get all order list at admin page
export const getOrderList = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/orders`);
  const orders = await response.json();
  return orders;
};

// //delete a booking
// export const deleteBooking = async (id) => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'content-type': 'application/json',
//         },
//     })
//     const data = await response.json()
//     return data
// }
