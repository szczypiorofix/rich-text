import React from 'react';

import { ElementGroupHorizontal, ElementGroupVertical } from '../../components/ElementsGroup.styled';
import type { BasicEditorProps } from '../types';

import { MenuBarContainer, MenuBarDivider } from './MenuBar.styled';
import { MenuBarBasicFormat } from './MenuBarBasicFormat';
import { MenuBarHeadings } from './MenuBarHeadings';
import { MenuBarImage } from './MenuBarImage';
import { MenuBarLists } from './MenuBarLists';
import { MenuBarTextAlign } from './MenuBarTextAlign';
import { MenuBarTextColor } from './MenuBarTextColor';

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
                    <MenuBarDivider />
                    <MenuBarTextAlign editor={editor} />
                </ElementGroupHorizontal>

                <MenuBarDivider />

                <ElementGroupHorizontal>
                    <MenuBarLists editor={editor} />{' '}
                </ElementGroupHorizontal>

                <MenuBarDivider />

                <ElementGroupHorizontal>
                    <MenuBarImage editor={editor} />
                    <MenuBarTextColor editor={editor} />
                </ElementGroupHorizontal>
            </ElementGroupVertical>
        </MenuBarContainer>
    );
};

export default MenuBar;
