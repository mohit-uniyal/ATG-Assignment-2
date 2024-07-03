import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function UserList({users, searchText}) {
  return (
    <Accordion>
        {
          users
            .filter((user) => {
              if (searchText === '') {
                return true;
              }
              const fullName = `${user.profile.firstName} ${user.profile.lastName}`;
              return fullName.toLowerCase().includes(searchText.toLowerCase());
            })
            .map((user, index) => (
              <Accordion.Item key={index} eventKey={user.id}>
                <Accordion.Header>
                  <div className="flex gap-2 items-center">
                    <img src={user.avatar} alt="" className="w-10 h-10 rounded-full" />
                    <div className="flex flex-col gap-1">
                      <div>{`${user.profile.firstName} ${user.profile.lastName}`}</div>
                      <div className=" text-xs">{user.jobTitle}</div>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div><span className='text-xl font-medium'>username: </span><span>{user.profile.username}</span></div>
                  <div><span className='text-xl font-medium'>Bio: </span><span>{user.Bio}</span></div>
                </Accordion.Body>
              </Accordion.Item>
            ))
        }
      </Accordion>
  )
}

export default UserList