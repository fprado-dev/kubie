"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./styles.css";

import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Paragraph, Document, Text, Bold, Heading],
    content: `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>
      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
      </p>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
    `,
    autofocus: false,
    editable: true,
    injectCSS: false,
  });
  if (!editor) {
    return <div />;
  }

  const html = editor.getHTML();
  console.log({ html });
  return (
    <div className="py-8">
      <div className="flex gap-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            editor.isActive("bold")
              ? "rounded bg-zinc-200 py-2 px-4 text-xs text-slate-400"
              : "rounded bg-slate-600 py-2 px-4 text-xs text-slate-50"
          }
        >
          bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            editor.isActive("italic")
              ? "rounded bg-zinc-200 py-2 px-4 text-xs text-slate-400"
              : "rounded bg-slate-600 py-2 px-4 text-xs text-slate-50"
          }
        >
          italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={
            editor.isActive("strike")
              ? "rounded bg-zinc-200 py-2 px-4 text-xs text-slate-400"
              : "rounded bg-slate-600 py-2 px-4 text-xs text-slate-50"
          }
        >
          strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={
            editor.isActive("code")
              ? "rounded bg-zinc-200 py-2 px-4 text-xs text-slate-400"
              : "rounded bg-slate-600 py-2 px-4 text-xs text-slate-50"
          }
        >
          code
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={
            editor.isActive("paragraph")
              ? "rounded bg-zinc-200 py-2 px-4 text-xs text-slate-400"
              : "rounded bg-slate-600 py-2 px-4 text-xs text-slate-50"
          }
        >
          P
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 })
              ? "rounded bg-zinc-200 py-2 px-4 text-xs text-slate-400"
              : "rounded bg-slate-600 py-2 px-4 text-xs text-slate-50"
          }
        >
          h1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 })
              ? "rounded bg-zinc-200 py-2 px-4 text-xs text-slate-400"
              : "rounded bg-slate-600 py-2 px-4 text-xs text-slate-50"
          }
        >
          h2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 })
              ? "rounded bg-zinc-200 py-2 px-4 text-xs text-slate-400"
              : "rounded bg-slate-600 py-2 px-4 text-xs text-slate-50"
          }
        >
          h3
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive("heading", { level: 4 })
              ? "rounded bg-zinc-200 py-2 px-4 text-xs text-slate-400"
              : "rounded bg-slate-600 py-2 px-4 text-xs text-slate-50"
          }
        >
          h4
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={
            editor.isActive("heading", { level: 5 })
              ? "rounded bg-zinc-200 py-2 px-4 text-xs text-slate-400"
              : "rounded bg-slate-600 py-2 px-4 text-xs text-slate-50"
          }
        >
          h5
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={
            editor.isActive("heading", { level: 6 })
              ? "rounded bg-zinc-200 py-2 px-4 text-xs text-slate-400"
              : "rounded bg-slate-600 py-2 px-4 text-xs text-slate-50"
          }
        >
          h6
        </button>

        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          redo
        </button>
      </div>

      <EditorContent
        editor={editor}
        className="mt-4 border border-zinc-800 bg-zinc-100 p-4"
      />
    </div>
  );
};

export default Tiptap;
