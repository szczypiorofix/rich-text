import React from 'react';

import { ElementGroupHorizontal } from '../../components/ElementsGroup.styled';

import type { MenuBarProps } from './MenuBar';
import { MenuBarButton } from './MenuBar.styled';

export const MenuBarTextAlign: React.FC<MenuBarProps> = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <ElementGroupHorizontal>
            <MenuBarButton onClick={() => editor.chain().focus().setTextAlign('left').run()}>Left</MenuBarButton>
            <MenuBarButton onClick={() => editor.chain().focus().setTextAlign('center').run()}>Center</MenuBarButton>
            <MenuBarButton onClick={() => editor.chain().focus().setTextAlign('right').run()}>Right</MenuBarButton>
            <MenuBarButton onClick={() => editor.chain().focus().setTextAlign('justify').run()}>Justify</MenuBarButton>
        </ElementGroupHorizontal>
    );
};
