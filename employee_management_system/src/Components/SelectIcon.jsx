import { useState } from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {GrFormView} from 'react-icons/gr';
import {BiSolidEditAlt} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md'
import { DisplayFlex } from '../styles';

const SelectIcon = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <DisplayFlex column>
      <BsThreeDotsVertical onClick={toggleMenu} />
      {menuVisible && (
            <>
            <GrFormView />
            <span>View</span>
            <BiSolidEditAlt />
            <span>Edit</span>
            <MdDelete />
            <span>Delete</span>
            </> 
      )}
      </DisplayFlex>
  );
};

export default SelectIcon;
