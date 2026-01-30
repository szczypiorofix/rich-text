import React from 'react';
import Document from '@tiptap/extension-document';
import FileHandler from '@tiptap/extension-file-handler';
import Image from '@tiptap/extension-image';
import Paragraph from '@tiptap/extension-paragraph';
import { Table } from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import Text from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyleKit } from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { Dropcursor } from '@tiptap/extensions';
import { type AnyExtension, Editor, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import TextBubbleMenu from './bubblemenu/TextBubbleMenu';
import MenuBar from './menubar/MenuBar';
import { EditorContainer } from './TipTapEditor.styled';

interface TiptapEditorProps {
    onContentChange: (content: string) => void;
    initialContent?: string;
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({ onContentChange, initialContent }) => {
    const editor = useEditor({
        extensions: [
            Document,
            StarterKit,
            Document,
            Paragraph,
            Text,
            Image,
            Dropcursor,
            Underline,
            Image,
            TextStyleKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
            (FileHandler as AnyExtension).configure({
                allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
                onDrop: (currentEditor: Editor, files: File[], pos: number) => {
                    files.forEach((file) => {
                        const fileReader = new FileReader();

                        fileReader.readAsDataURL(file);
                        fileReader.onload = () => {
                            currentEditor
                                .chain()
                                .insertContentAt(pos, {
                                    type: 'image',
                                    attrs: {
                                        src: fileReader.result as string,
                                    },
                                })
                                .focus()
                                .run();
                        };
                    });
                },

                onPaste: (currentEditor: Editor, files: File[], htmlContent: string | undefined) => {
                    files.forEach((file) => {
                        if (htmlContent) {
                            console.log(htmlContent);
                            return false;
                        }

                        const fileReader = new FileReader();

                        fileReader.readAsDataURL(file);
                        fileReader.onload = () => {
                            if (fileReader.result) {
                                currentEditor
                                    .chain()
                                    .insertContentAt(currentEditor.state.selection.anchor, {
                                        type: 'image',
                                        attrs: {
                                            src: fileReader.result as string,
                                        },
                                    })
                                    .focus()
                                    .run();
                            }
                        };
                    });
                },
            }),
        ],
        content: initialContent,
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            onContentChange(html);
        },
    });

    return (
        <EditorContainer>
            <MenuBar editor={editor} />

            <TextBubbleMenu editor={editor} />

            <EditorContent editor={editor} />
        </EditorContainer>
    );
};

export default TiptapEditor;
