import Image from 'next/image'
import styles from './page.module.css'
import { getXataClient } from "@/lib/xata";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/nextAuthOptions';
import LogoutButton from '@/components/buttons/LogoutButton';



export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log('session:', session);

  const xata = getXataClient();
  const user = await xata.db.users.filter({ telegramId: 198377488 }).getFirst();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Hello {user?.firstName}</p>
        <LogoutButton />
      </div>
    </main>
  )
}
