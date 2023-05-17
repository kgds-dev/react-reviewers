import React, { useState } from "react";

function UserDetails(props) {

    const [name, setName] = useState('Kimbo Sanz'); // initial state of variable here is "0"


    return (
        <div className="nameDiv">
            {/* {
               props.data.map(user => {
                return (
                    <>
                        <h3>name: {user.name}</h3>
                        <h3>age: {user.age}</h3>
                        <h3>citizenship: {user.citizenship}</h3>
                    </>
                )
               })
            } */}

            <p>Initial Name {name}</p>
            <button onClick={() => setName('Felix Santos')}>Click me to increment</button>
        </div>
    );
}

export default UserDetails;