import React, { useEffect, useState } from 'react'
import "./UserDetail.css";
import { useNavigate, useParams } from 'react-router-dom';
import type { UserDetail } from '../components/user';
// import { useParams } from 'react-router-dom';

// interface UserDetail {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   phone: string;
//   website: string;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
// }

const UserDetailPage: React.FC = () => {
    const { id } = useParams<{id: string | undefined}>();
    const [users, setUsers] = useState<UserDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    
      const fetchUsers = async () => {
        try {
          setLoading(true);
          setError(null);
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
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
    
    useEffect(() => {
    fetchUsers();
    }, [id]);

    if(!users){
        return null;
    }
    if (loading) {
        return <div className="kuyken">Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

  return (
    <div className="detail-wrapper">
      {/* User Detail Content */}
      <div className="detail-container">
        <button onClick={() => navigate(-1)} className="back-button"> ← Back</button>

        <div className="detail-card">
          {/* Header with Avatar */}
          <div className="detail-header">
            <div className="detail-avatar">
              <span className="avatar-letter">
                {users.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="header-info">
              <h1 className="detail-name">{users.name}</h1>
              <p className="detail-username">@{users.username}</p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="detail-content">
            {/* Contact Information */}
            <div className="info-section">
              <h2 className="section-title">
                <span className="section-icon">📧</span>
                Contact Information
              </h2>
              <div className="info-grid">
                <div className="info-item">
                  <label>Email</label>
                  <a href={`mailto:${users.email}`} className="info-value link">
                    {users.email}
                  </a>
                </div>
                <div className="info-item">
                  <label>Phone</label>
                  <span className="info-value">{users.phone}</span>
                </div>
                <div className="info-item">
                  <label>Website</label>
                  <a 
                    href={`https://${users.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="info-value link"
                  >
                    {users.website}
                  </a>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="info-section">
              <h2 className="section-title">
                <span className="section-icon">📍</span>
                Address
              </h2>
              <div className="info-grid">
                <div className="info-item">
                  <label>Street</label>
                  <span className="info-value">{users.address.street}</span>
                </div>
                <div className="info-item">
                  <label>Suite</label>
                  <span className="info-value">{users.address.suite}</span>
                </div>
                <div className="info-item">
                  <label>City</label>
                  <span className="info-value">{users.address.city}</span>
                </div>
                <div className="info-item">
                  <label>Zipcode</label>
                  <span className="info-value">{users.address.zipcode}</span>
                </div>
                <div className="info-item full-width">
                  <label>Coordinates</label>
                  <span className="info-value">
                    Lat: {users.address.geo.lat}, Lng: {users.address.geo.lng}
                  </span>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="info-section">
              <h2 className="section-title">
                <span className="section-icon">💼</span>
                Company
              </h2>
              <div className="info-grid">
                <div className="info-item full-width">
                  <label>Company Name</label>
                  <span className="info-value company-name">{users.company.name}</span>
                </div>
                <div className="info-item full-width">
                  <label>Catch Phrase</label>
                  <span className="info-value italic">{users.company.catchPhrase}</span>
                </div>
                <div className="info-item full-width">
                  <label>Business</label>
                  <span className="info-value">{users.company.bs}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetailPage