import FileHandler from '@tiptap/extension-file-handler';
import Image from '@tiptap/extension-image';
import { Table } from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyleKit } from '@tiptap/extension-text-style';
import { type AnyExtension, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export const getEditorExtensions = (): AnyExtension[] => {
    return [
        StarterKit.configure({
            dropcursor: {
                color: '#555',
                width: 2,
            },
        }),
        TextStyleKit,
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        }),
        Image.configure({
            inline: true,
            allowBase64: true,
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
    ];
};
