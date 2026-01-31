import { RiAlignCenter, RiAlignJustify, RiAlignLeft, RiAlignRight } from 'react-icons/ri';

import React from 'react';

import { ElementGroupHorizontal } from '../../components/ElementsGroup.styled';
import MenuBarBasicButton from '../components/MenuBarBasicButton';
import type { BasicEditorProps } from '../types';

export const MenuBarTextAlign: React.FC<BasicEditorProps> = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <ElementGroupHorizontal>
            <MenuBarBasicButton onClick={() => editor.chain().focus().setTextAlign('left').run()}>
                <RiAlignLeft />
            </MenuBarBasicButton>
            <MenuBarBasicButton onClick={() => editor.chain().focus().setTextAlign('center').run()}>
                <RiAlignCenter />
            </MenuBarBasicButton>
            <MenuBarBasicButton onClick={() => editor.chain().focus().setTextAlign('right').run()}>
                <RiAlignRight />
            </MenuBarBasicButton>
            <MenuBarBasicButton onClick={() => editor.chain().focus().setTextAlign('justify').run()}>
                <RiAlignJustify />
            </MenuBarBasicButton>
        </ElementGroupHorizontal>
    );
};
