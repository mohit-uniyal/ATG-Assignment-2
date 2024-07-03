"use client";

import Loader from "@/components/Loader";
import UserList from "@/components/UserList";
import { useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";


export default function Home() {

  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading]=useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users', {
          method: 'GET'
        });
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchUsers();
  }, []);

  return (
    <div className=" min-h-screen">
      <nav className="py-2 px-2 flex justify-between items-center border-b-2">
        <div className="sm:flex sm:gap-2">
          <FaUserTie className="text-2xl" />
          <div className="hidden sm:inline text-xl font-semibold">Users</div>
        </div>
        <input type="text" placeholder="Search Name" className="py-1 px-2 w-4/5 sm:w-1/2 border-1 border-gray-300 bg-gray-100 rounded focus:outline-none" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
      </nav>
      {
        loading
        ?
        <Loader />
        :
        <UserList users={users} searchText={searchText} />
      }
    </div>
  );
}