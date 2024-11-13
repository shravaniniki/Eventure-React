//annonymous  Fn component

import MenuList from "./MenuList";

const Footer = function () {
  //data binding
  const copyRight = '@ Eventure';
  return (
    <>
      <hr />
      <footer className="text-center">
        <MenuList />
        <div>
          <p>Copy right {copyRight}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
