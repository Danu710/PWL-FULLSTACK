export const runtime = 'nodejs';
import Link from 'next/link';

export const metadata = {
  title: 'Tidak Ditemukan | Pilih Jurusan',
};

export default async function NotFound() {
  return (
    <main className='flex flex-col items-center justify-center h-screen gap-4 bg-stone-100 grow text-stone-700'>
      <h2 className='mt-4 text-3xl font-bold text-center animate-bounce md:text-5xl'>
        404 Tidak Ditemukan
      </h2>
      <p className='text-center md:text-xl'>
        Halaman yang kamu cari tidak ada.
      </p>
    </main>
  );
}
