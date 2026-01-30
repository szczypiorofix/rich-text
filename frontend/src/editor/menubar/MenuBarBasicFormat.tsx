import { RiBold, RiItalic, RiStrikethrough, RiUnderline } from 'react-icons/ri';

import React from 'react';

import { ElementGroupHorizontal } from '../../components/ElementsGroup.styled';
import type { BasicEditorProps } from '../types';

import { MenuBarButton } from './MenuBar.styled';

export const MenuBarBasicFormat: React.FC<BasicEditorProps> = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <ElementGroupHorizontal>
            <MenuBarButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
            >
                <RiBold />
            </MenuBarButton>
            <MenuBarButton
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}
            >
                <RiItalic />
            </MenuBarButton>
            <MenuBarButton
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active' : ''}
            >
                <RiStrikethrough />
            </MenuBarButton>
            <MenuBarButton
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                disabled={!editor.can().chain().focus().toggleUnderline().run()}
                className={editor.isActive('underline') ? 'is-active' : ''}
            >
                <RiUnderline />
            </MenuBarButton>
        </ElementGroupHorizontal>
    );
};
