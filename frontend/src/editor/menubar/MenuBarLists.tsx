import { RiListOrdered, RiListUnordered } from 'react-icons/ri';

import React from 'react';

import { ElementGroupHorizontal } from '../../components/ElementsGroup.styled';
import MenuBarBasicButton from '../components/MenuBarBasicButton.tsx';
import type { BasicEditorProps } from '../types';

export const MenuBarLists: React.FC<BasicEditorProps> = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <ElementGroupHorizontal>
            <MenuBarBasicButton
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                <RiListUnordered />
            </MenuBarBasicButton>
            <MenuBarBasicButton
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
                <RiListOrdered />
            </MenuBarBasicButton>
        </ElementGroupHorizontal>
    );
};
