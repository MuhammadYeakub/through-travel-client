import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const useBooked = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data: bookService = [] } = useQuery({
    queryKey: ["booked", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/booked?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [bookService, refetch];
};
export default useBooked;
