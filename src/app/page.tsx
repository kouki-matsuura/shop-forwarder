import Header from '@/components/ui/Header';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>テスト</main>
    </>
  );
}
