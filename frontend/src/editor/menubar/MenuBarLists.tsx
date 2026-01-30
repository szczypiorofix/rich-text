import React from 'react';

import { ElementGroupHorizontal } from '../../components/ElementsGroup.styled';

import type { MenuBarProps } from './MenuBar';
import { MenuBarButton } from './MenuBar.styled';

export const MenuBarLists: React.FC<MenuBarProps> = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <ElementGroupHorizontal>
            <MenuBarButton
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                Bullet List
            </MenuBarButton>
            <MenuBarButton
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
                Ordered List
            </MenuBarButton>
        </ElementGroupHorizontal>
    );
};
