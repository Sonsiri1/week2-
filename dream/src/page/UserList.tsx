import React, { useEffect, useState } from "react";
import "./UserList.css";
import { useNavigate } from "react-router-dom";
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
  address: {
    city: string;
  };
}

// const data = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//     },
//     address: {
//       city: "Gwenborough",
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//     },
//     address: {
//       city: "Wisokyburgh",
//     },
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",
//     phone: "1-463-123-4447",
//     website: "ramiro.info",
//     company: {
//       name: "Romaguera-Jacobson",
//     },
//     address: {
//       city: "McKenziehaven",
//     },
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
//     phone: "493-170-9623 x156",
//     website: "kale.biz",
//     company: {
//       name: "Robel-Corkery",
//     },
//     address: {
//       city: "South Elvis",
//     },
//   },
//   {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     email: "Lucio_Hettinger@annie.ca",
//     phone: "(254)954-1289",
//     website: "demarco.info",
//     company: {
//       name: "Keebler LLC",
//     },
//     address: {
//       city: "Roscoeview",
//     },
//   },
//   {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//     email: "Karley_Dach@jasper.info",
//     phone: "1-477-935-8478 x6430",
//     website: "ola.org",
//     company: {
//       name: "Considine-Lockman",
//     },
//     address: {
//       city: "South Christy",
//     },
//   },
//   {
//     id: 7,
//     name: "Kurtis Weissnat",
//     username: "Elwyn.Skiles",
//     email: "Telly.Hoeger@billy.biz",
//     phone: "210.067.6132",
//     website: "elvis.io",
//     company: {
//       name: "Johns Group",
//     },
//     address: {
//       city: "Howemouth",
//     },
//   },
//   {
//     id: 8,
//     name: "Nicholas Runolfsdottir V",
//     username: "Maxime_Nienow",
//     email: "Sherwood@rosamond.me",
//     phone: "586.493.6943 x140",
//     website: "jacynthe.com",
//     company: {
//       name: "Abernathy Group",
//     },
//     address: {
//       city: "Aliyaview",
//     },
//   },
//   {
//     id: 9,
//     name: "Glenna Reichert",
//     username: "Delphine",
//     email: "Chaim_McDermott@dana.io",
//     phone: "(775)976-6794 x41206",
//     website: "conrad.com",
//     company: {
//       name: "Yost and Sons",
//     },
//     address: {
//       city: "Bartholomebury",
//     },
//   },
//   {
//     id: 10,
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//     },
//     address: {
//       city: "Lebsackbury",
//     },
//   },
// ];

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Error");
        }
    //   await new Promise(resolve => setTimeout(resolve, 1500));
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError((err as Error).message);
    }finally {
        setLoading(false);
    }
  };

  const handleclick = (id: number) => {
    navigate(`/user/${id}`);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

   if (loading) {
        return <div className="kuyken">Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
  return (
    <div>
      <div className="page-wrapper">
      {/* User Cards */}
      <div className="content-wrapper">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="card-header">
              <div className="card-avatar">
                <span className="avatar-initial">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>

            <div className="card-body">
              <h2 className="card-name">{user.name || "No name"}</h2>
              <span className="card-username">@{user.username}</span>

              <div className="card-info">
                <div className="info-text">{user.email}</div>
                <div className="info-text">{user.phone}</div>
                <div className="info-text">{user.website}</div>
                <div className="info-text">{user.company.name}</div>
                <div className="info-text">{user.address.city}</div>
                <hr />
                <button className="detail-button" onClick={() => handleclick(user.id)}>View</button>
              </div>
            </div> 
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default UserList;
