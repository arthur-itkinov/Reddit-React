import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import styles from './commentform.css';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onSubmit: (event: FormEvent) => void
}
export function CommentForm({value, onChange, onSubmit }: Props) {

  


  return (
    <form action="" className={styles.form} onSubmit={onSubmit}>
      <textarea className={styles.input} value={value} onChange={onChange}/>
      <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  );
}
