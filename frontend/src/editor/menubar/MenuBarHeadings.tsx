import type { IconType } from 'react-icons/lib';
import { RiH1, RiH2, RiH3, RiH4, RiH5, RiH6 } from 'react-icons/ri';

import React from 'react';
import type { Level } from '@tiptap/extension-heading';
import type { Editor } from '@tiptap/react';

import { ElementGroupHorizontal } from '../../components/ElementsGroup.styled';
import MenuBarBasicButton from '../components/MenuBarBasicButton.tsx';
import type { BasicEditorProps } from '../types';

interface MenuHeadingButtonProps {
    editor: Editor;
    icon: IconType;
    level: Level;
}

const MenuHeadingButton: React.FC<MenuHeadingButtonProps> = ({ editor, icon: Icon, level }) => {
    if (level > 6 || level < 1) {
        return null;
    }

    return (
        <MenuBarBasicButton
            onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
            className={editor.isActive('heading', { level }) ? 'is-active' : ''}
        >
            <Icon />
        </MenuBarBasicButton>
    );
};

export const MenuBarHeadings: React.FC<BasicEditorProps> = ({ editor }) => {
    if (!editor) {
        return null;
    }

    const headingsConfig: Array<{ level: Level; icon: IconType }> = [
        { level: 1, icon: RiH1 },
        { level: 2, icon: RiH2 },
        { level: 3, icon: RiH3 },
        { level: 4, icon: RiH4 },
        { level: 5, icon: RiH5 },
        { level: 6, icon: RiH6 },
    ];

    return (
        <ElementGroupHorizontal>
            {headingsConfig.map((heading) => (
                <MenuHeadingButton key={heading.level} editor={editor} level={heading.level} icon={heading.icon} />
            ))}
        </ElementGroupHorizontal>
    );
};
