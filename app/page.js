import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import Image from 'next/image';
// import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import styles from './page.module.css';

let cnt;
export default async function Home(params) {
  async function addOne(formData) {
    'use server';
    cnt = Number(await cookies().get('counter')?.value);
    if (!cnt) cnt = 0;

    await cookies().set('counter', `${(cnt += 1)}`);
    console.log(cnt);
    // revalidate cache
    //revalidatePath('/');
  }
  return (
    <>
      <form action={addOne}>
        <button id="btn1">add 1</button>
      </form>
      {cnt}
    </>
  );
}
