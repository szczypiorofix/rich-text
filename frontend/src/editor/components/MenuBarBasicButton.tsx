import React from 'react';

import { MenuBarBasicButtonStyled } from './MenuBarBasicButton.styled';

type MenuBarBasicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const MenuBarBasicButton: React.FC<MenuBarBasicButtonProps> = ({ children, ...props }) => {
    return <MenuBarBasicButtonStyled {...props}>{children}</MenuBarBasicButtonStyled>;
};

export default MenuBarBasicButton;
