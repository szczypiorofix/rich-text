import React from 'react';
import { Editor } from '@tiptap/react';

import { ElementGroupHorizontal, ElementGroupVertical } from '../../components/ElementsGroup.styled';

import { MenuBarContainer, MenuBarDivider } from './MenuBar.styled';
import { MenuBarBasicFormat } from './MenuBarBasicFormat';
import { MenuBarHeadings } from './MenuBarHeadings';
import { MenuBarLists } from './MenuBarLists';
import { MenuBarTextAlign } from './MenuBarTextAlign';

export interface MenuBarProps {
    editor: Editor | null;
}

const MenuBar: React.FC<MenuBarProps> = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <MenuBarContainer>
            <ElementGroupVertical>
                <ElementGroupHorizontal>
                    <MenuBarBasicFormat editor={editor} />
                    <MenuBarDivider />
                    <MenuBarHeadings editor={editor} />
                </ElementGroupHorizontal>

                <MenuBarDivider />

                <MenuBarLists editor={editor} />

                <MenuBarTextAlign editor={editor} />
            </ElementGroupVertical>
        </MenuBarContainer>
    );
};

export default MenuBar;
