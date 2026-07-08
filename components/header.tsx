import Link from 'next/link';
import Image from 'next/image';

export default function Header() 
{
  return (        
    <header className="bg-[#202936] shadow-md py-4">
        <div className="max-w-200 flex mx-auto items-center px-4 flex-row gap-y-4">
            <Link href="/" className="items-start">
                <Image src="/Logo_Long_NomadTek_Bleu.png" alt="Logo NomadTek" width={150} height={80} className="h-auto w-auto" />
            </Link>
            <div className="mx-auto text-end flex-1">
              <Link href="#devis">
                <button className="mt-3 inline-block bg-[#f39c12] text-white px-2 py-3 max-w-43.75 rounded-md font-bold hover:scale-105 transition">
                  Devis immédiat
                </button>
              </Link>
            </div>
        </div>
    </header>
  );
}