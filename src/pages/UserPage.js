import React from "react";

import { useParams, Link } from 'react-router-dom';

export default function UserPage() {

let { id } = useParams();

return (

<>

<h1>Hello there user {id}</h1>

<p>This is your awesome User Profile page</p>
<p> <Link to = "/"> Back </Link> </p>

</>

);

}

 