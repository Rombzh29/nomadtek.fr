import Link from 'next/link';
import Image from 'next/image';

export default function Footer() 
{
  return (        
    <footer className="bg-[#202936] text-white items-center py-6">
        <div className="max-w-250 mx-auto px-4 flex flex-col items-center gap-y-4 md:flex-row ">
            <div className="container mx-auto px-4">
                <Link href="/" className="flex justify-center mb-6">
                    <Image src="/Logo_Long_NomadTek_Bleu.png" alt="Logo NomadTek" width={150} height={40} className="h-auto w-auto"/>
                </Link>

                <div className="flex justify-center space-x-4 mb-6">
                    <a href="https://www.facebook.com/profile.php?id=654654654test" target="_blank" rel="noopener noreferrer">
                        <Image src="/Logo_Facebook_Blanc.webp" alt="Facebook" width={24} height={24}/>
                    </a>
                    <a href="https://www.instagram.com/NomadTek/" target="_blank" rel="noopener noreferrer">
                        <Image src="/Logo_Instagram_Blanc.webp" alt="Instagram" width={24} height={24} />
                    </a>
                </div>

                <div className="text-center mb-6">
                    <a href="mailto:contact@nomadtek.fr" className="hover:underline">
                        contact@nomadtek.fr
                    </a>
                </div>
            </div>
            <div className="container text-center mx-auto px-4">
                <div className="flex flex-col not-last:space-x-6 mb-6">
                    <p className="text-xl mb-4"><strong>Mentions légales</strong></p>
                    <Link href="/about" className="hover:underline">À propos de</Link>
                    <Link href="/politique" className="hover:underline">Politique de confidentialité</Link>
                    <Link href="/card" className="hover:underline">Notre carte de visite</Link>
                </div>
                
            </div>
        </div>
        <div className="text-center text-sm">
            &copy; {new Date().getFullYear()} NomadTek. Tous droits réservés.
        </div>
    </footer>
  );
}