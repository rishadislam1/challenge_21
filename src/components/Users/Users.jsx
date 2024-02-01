"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Total Post: {users?.length}</h1>
      <div className=" flex flex-wrap justify-center items-center gap-7">
        {users?.map((user) => (
          <div key={user.id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
            
              <p>Like Count: {user.email}</p>
              <div className="card-actions justify-end">
                <Link href={`/posts/${user.id}`}>
                  <button className="btn btn-primary">See More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
