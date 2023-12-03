import React from 'react';
import NavLink from './NavLink';

const Control = ({ currentUser }) => {
  const links = currentUser ? (
    <>
      <NavLink to="addpost" title="AddPost" />
      <NavLink title="LogOut" />
    </>
  ) : (
    <>
      <NavLink to="subscribe" title="Subscribe" />
      <NavLink to="login" title="LogIn" />
    </>
  );

  return (
    <ul className="w-fit px-8 md:w-fit flex justify-center text-yellow items-center font-sans">
      {links}
    </ul>
  );
};

export default Control;
