import { useEffect, useState } from 'react';
import { IoMailOutline, IoCallOutline } from 'react-icons/io5'

const UserList = () => {
	const [userList, setUserList] = useState([]);
	useEffect(() => {
		fetch(`https://randomuser.me/api/?results=9`)
		.then(res => res.json())
		.then((data) => {
			setUserList(data.results);
		})
	}, []);
	return (
		<>
			<div className="userList">
				<div className="container">
					{userList.map((result,index) => (
						<div className="card" key={index}>
							<div className="card-content">
								<div className="card-banner"></div>
								<div className="info">
									<div className="card-pp"><img src={result.picture.large} /></div>
									<div className="title"><h1>{result.name.first} <span className="lastName">{result.name.last}</span></h1></div>
									<div className="sexual"><p>{result.gender} | {result.dob.age}</p></div>
									<div className="mail"><h5><IoMailOutline /> {result.email}</h5></div>
									<div className="phone"><h5><IoCallOutline /> {result.phone}</h5></div>
								</div>
								<div className="button">
									<a href="#"><IoCallOutline /> Call To User!</a>
									<a href="#"><IoMailOutline /> Mail To User!</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default UserList;