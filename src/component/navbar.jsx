import React from "react";

const Navbar = () => {
  return (
    <div className="text-xl w-screen flex items-center justify-evenly">
      <img
        className="h-24 w-fit"
        src="https://s3-alpha-sig.figma.com/img/daf3/3ac5/c39a680299db99f7c4f65635f3c41d9a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hUyPnRqoiNa83WNqTGHlYpJrTdgtC7dnlLsytzTKyiM9jfA-SaQDn7oQ8G0A0AxuXfMIWN2KsL6U4BNagEn1NM3DbO4ii9lGASCI46xm6h4ZZ7wfvRfdGSln7hifG7mORtbz6WU8-fM-78xlC2aLZRPaC4g0uuPFjn1AayYdZhdWndhixaUGu4LSKtawD0cU57X~C8RmqJBzmS8OyflvDEct6k7ki1wT8QtWfgsabu3KUponvM~XXUl66zxTTqzT9QIn0Qme3dSXVhY5qUta6U2MdeLdO5aaI-DqLu7vFKN5I~dqhINWkz-g1BfM8jVWftKa7QcKZQ7RNFbjpM0i-w__"
        alt="logo"
      />
      <p>About Us</p>
      <p>Virtual Labs</p>
      <p>Programs</p>
      <p>For Colleges</p>
      <button className="h-14 px-14 py-4 flex justify-center items-center border-2 text-specialBlue border-specialBlue rounded-2xl text-2xl">
        Log in
      </button>
      <button className="h-14 px-14 py-4 text-white flex justify-center items-center bg-specialBlue rounded-2xl text-2xl">
        Register
      </button>
    </div>
  );
};

export default Navbar;
