import React,
{
    useState,
    useEffect
} from 'react';
import styles from "./About.module.css";

export const Testapi = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/users/sanjaydubey")
          .then((response) => response.json())
          .then((data) => setUserData(data))
          .catch((error) => console.error("Error:", error));
      }, []);
    
    return (
        <div className={styles.aboutItemText}>
            {userData && (
                <div>
                    <h2>User Information</h2>
                    <p>
                        Name:
                        {userData.firstName}
                        {userData.lastName}
                    </p>
                    <p>
                        Email: {userData.email}
                    </p>
                    <p>
                        Phone Number: {userData.phoneNumber}
                    </p>
                    {/* Add more user data fields as needed */}
                </div>
            )}
        </div>
    );
};



