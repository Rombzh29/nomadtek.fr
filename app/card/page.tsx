import Image from "next/image";
import { Mail, Phone, MapPin, Globe} from "lucide-react";
import Link from 'next/link';

export default function CarteVisitePage() {
  return (

    <div className="min-h-screen bg-[#202936] flex flex-col items-center">
      <div className="bg-white rounded-full border-4 border-white shadow-md mt-4">
        <Image
          src="/Logo_carre_nomadtek_bleu.png"
          alt="NomadTek"
          width={125}
          height={125}
          className="rounded-full"
        />
      </div>
      <h1 className="text-2xl font-semibold text-white mt-4">Jamet Romain</h1>
      <p className="text-white">NOMADTEK</p>

      <div className="flex justify-center gap-10 mt-4">
        <a href="tel:0616831618" className="bg-white p-4 rounded-full shadow hover:scale-105 transition">
          <Phone className="text-[#f39c12]" />
        </a>
        <a href="mailto:contact@nomadtek.fr" className="bg-white p-4 rounded-full shadow hover:scale-105 transition">
          <Mail className="text-[#f39c12]" />
        </a>
        <a href="https://www.google.com/maps/search/Kerstart,+29910+Trégunc" target="_blank" className="bg-white p-4 rounded-full shadow hover:scale-105 transition">
          <MapPin className="text-[#f39c12]" />
        </a>
      </div>
      <div className="mt-2 mb-4">
        <a
          href="/nomadtek.vcf"
          download
          className="mt-3 inline-block bg-[#f39c12] text-white px-6 py-2 rounded-md font-bold hover:scale-105 transition"
          >
          Ajouter mon contact
        </a>
      </div>
      <div>
        <Link href="/#devis">
          <button className="mt-2 inline-block bg-[#f39c12] text-white px-6 py-2 min-w-50 rounded-md font-bold hover:scale-105 transition">
            Obtenez votre devis en 2 min !
          </button>
        </Link>
      </div>

      <div className="bg-white w-[95%] max-w-112.5 rounded-md shadow-lg mt-5 p-4 space-y-4">
        <div className="flex items-center gap-4">
          <Phone className="text-[#f39c12]" />
            <a href="tel:0616831618" className="text-black underline hover:scale-105 transition">
              0616831618
            </a>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="text-[#f39c12]" />
          <a href="mailto:contact@nomadtek.fr" className="text-black underline hover:scale-105 transition">contact@nomadtek.fr</a>
        </div>

        <div className="flex items-center gap-4">
          <Globe className="text-[#f39c12]" />
          <a href="https://nomadtek.fr" className="text-black underline hover:scale-105 transition" target="_blank">nomadtek.fr</a>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="text-[#f39c12] mt-4" />
          <div>
            <p className="text-black mt-4">Kerstrat, 29910 Trégunc</p>
            <a href="https://www.google.com/maps/search/Kerstrat,+29910+Trégunc" target="_blank" className="inline-block mt-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:scale-105 transition">
              Afficher sur la carte
            </a>
          </div>
        </div>
        <h2 className="text-l font-semibold text-black mb-2">Suivez-nous sur</h2>
         <div className="flex items-center gap-4">
          <Image src="/Instagram_icon.png" alt="Instagram" width={24} height={24} />
          <a href="https://www.instagram.com/nomadtek/" className="text-black hover:scale-105 transition" target="_blank">Instagram</a>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/Facebook_icon.png" alt="Instagram" width={24} height={24} />
          <a href="https://www.facebook.com/profile.php?id=dfsfsdfsdftest" className="text-black hover:scale-105 transition" target="_blank">Facebook</a>
        </div>
      </div>  
  </div>
  )
}