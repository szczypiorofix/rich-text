import React from 'react';
import type { Level } from '@tiptap/extension-heading';
import type { Editor } from '@tiptap/react';

import { ElementGroupHorizontal } from '../../components/ElementsGroup.styled';

import type { MenuBarProps } from './MenuBar';
import { MenuBarButton } from './MenuBar.styled';

interface MenuHeadingButtonProps {
    editor: Editor;
    text: string;
    level: Level;
}

const MenuHeadingButton: React.FC<MenuHeadingButtonProps> = ({ editor, text, level }) => {
    if (level > 6 || level < 1) {
        return null;
    }

    return (
        <MenuBarButton
            onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
            className={editor.isActive('heading', { level }) ? 'is-active' : ''}
        >
            {text}
        </MenuBarButton>
    );
};

export const MenuBarHeadings: React.FC<MenuBarProps> = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <ElementGroupHorizontal>
            <MenuHeadingButton editor={editor} text='H1' level={1} />
            <MenuHeadingButton editor={editor} text='H2' level={2} />
            <MenuHeadingButton editor={editor} text='H3' level={3} />
            <MenuHeadingButton editor={editor} text='H4' level={4} />
            <MenuHeadingButton editor={editor} text='H5' level={5} />
            <MenuHeadingButton editor={editor} text='H6' level={6} />
        </ElementGroupHorizontal>
    );
};
