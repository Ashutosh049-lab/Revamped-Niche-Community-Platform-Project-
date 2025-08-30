

import React, { useState, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const toolbarOptions = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['link', 'image'],
  [{ align: [] }],
  ['clean']
];

const RichTextEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const quill = new Quill(editorRef.current, {
      modules: {
        toolbar: toolbarOptions
      },
      placeholder: 'Write something...',
      theme: 'snow'
    });

    quillRef.current = quill;
    
    // Set initial content
    quill.root.innerHTML = value || '';

    // Update content when changes occur
    quill.on('text-change', () => {
      onChange(quill.root.innerHTML);
    });

    return () => {
      quillRef.current = null;
    };
  }, []);

  return <div ref={editorRef} />;
};

export default RichTextEditor;