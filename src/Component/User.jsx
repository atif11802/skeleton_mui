import React,{useState,useEffect} from 'react';
import SkeletonUser from "../skeletons/SkeletonUser"

const User = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        

        setTimeout( async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await res.json();
            console.log(data)
            setUser(data);
        }, 4000);

    }, [])

    return (
        <div className="user">
            <h2>User</h2>
            {
                user && (
                    <div>
                         <h4>{user.name}</h4>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.website}</p>
        

                    </div>
                   

                )
            }

            {
                !user &&  <SkeletonUser />
            }
           


        </div>
    )
}

export default User
