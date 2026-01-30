import { RiAlignCenter, RiAlignJustify, RiAlignLeft, RiAlignRight } from 'react-icons/ri';

import React from 'react';

import { ElementGroupHorizontal } from '../../components/ElementsGroup.styled';
import type { BasicEditorProps } from '../types';

import { MenuBarButton } from './MenuBar.styled';

export const MenuBarTextAlign: React.FC<BasicEditorProps> = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <ElementGroupHorizontal>
            <MenuBarButton onClick={() => editor.chain().focus().setTextAlign('left').run()}>
                <RiAlignLeft />
            </MenuBarButton>
            <MenuBarButton onClick={() => editor.chain().focus().setTextAlign('center').run()}>
                <RiAlignCenter />
            </MenuBarButton>
            <MenuBarButton onClick={() => editor.chain().focus().setTextAlign('right').run()}>
                <RiAlignRight />
            </MenuBarButton>
            <MenuBarButton onClick={() => editor.chain().focus().setTextAlign('justify').run()}>
                <RiAlignJustify />
            </MenuBarButton>
        </ElementGroupHorizontal>
    );
};
