import React from 'react';

import { ElementGroupHorizontal, ElementGroupVertical } from '../../components/ElementsGroup.styled';
import type { BasicEditorProps } from '../types';

import { MenuBarContainer, MenuBarDivider } from './MenuBar.styled';
import { MenuBarBasicFormat } from './MenuBarBasicFormat';
import { MenuBarHeadings } from './MenuBarHeadings';
import { MenuBarLists } from './MenuBarLists';
import { MenuBarTextAlign } from './MenuBarTextAlign';

const MenuBar: React.FC<BasicEditorProps> = ({ editor }) => {
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
