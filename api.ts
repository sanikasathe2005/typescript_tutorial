import axios from "axios";

interface User {
    id: number;
    name: string;
    email: string;
}

// Using Fetch
async function getUsersWithFetch(): Promise<void> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const users: User[] = await res.json();

    console.log("Using Fetch:");

    users.forEach((user) => {
        console.log(user.name);
    });
}

// Using Axios
async function getUsersWithAxios(): Promise<void> {
    const res = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
    );

    const users = res.data;

    console.log("Using Axios:");

    users.forEach((user) => {
        console.log(user.name);
    });
}

getUsersWithFetch();
getUsersWithAxios();
