import { RiBold, RiItalic, RiStrikethrough, RiUnderline } from 'react-icons/ri';

import React from 'react';

import { ElementGroupHorizontal } from '../../components/ElementsGroup.styled';
import MenuBarBasicButton from '../components/MenuBarBasicButton.tsx';
import type { BasicEditorProps } from '../types';

export const MenuBarBasicFormat: React.FC<BasicEditorProps> = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <ElementGroupHorizontal>
            <MenuBarBasicButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
            >
                <RiBold />
            </MenuBarBasicButton>
            <MenuBarBasicButton
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}
            >
                <RiItalic />
            </MenuBarBasicButton>
            <MenuBarBasicButton
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active' : ''}
            >
                <RiStrikethrough />
            </MenuBarBasicButton>
            <MenuBarBasicButton
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                disabled={!editor.can().chain().focus().toggleUnderline().run()}
                className={editor.isActive('underline') ? 'is-active' : ''}
            >
                <RiUnderline />
            </MenuBarBasicButton>
        </ElementGroupHorizontal>
    );
};
