import React from 'react';
import Link from 'next/link'


const index = ({ users }) => {

    //  for data load in react
    // 1 state to hold to the data
    // 3 userEffect, lode data and set to the state

    return (
        <div>
            <h2>This is is user main page : {users.length}</h2>
            <h2>Welcome</h2>
            {
                users.map(user => <div key={user.id}>
                    <h4>Name : {user.name}
                        <Link href={`/users/${user.id}`}>
                            <button>Explore</button>
                        </Link>
                    </h4>
                </div>
                )
            }
        </div>
    );
};

export default index;


export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props: { users: data }, // will be pased to the component
    }
}