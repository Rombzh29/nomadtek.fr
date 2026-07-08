'use client'

import Image from 'next/image';
//import DevisFormulaire from '@/components/ui/devisformulaire'
//import PortFolio from '@/components/ui/Portfolio'
import Link from 'next/link';
//import ChatwootWidget from '../components/ChatwootWidget'

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center bg-[#1F2937]">
          <div className="relative w-full md:h-150 h-75 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/Cover.png')" }}>
            {/* Overlay sombre optionnel */}
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Texte au centre */}
            <div className="relative z-10 text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                NOMAD<span className="text-[#f39c12] ">TEK</span>
              </h1>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                Votre véhicule, conçu et fabriqué sur meusure.
              </h1>
              <p className="text-lg md:text-xl">
                Aménagement et renovation de vans, food trucks, remorque et caravane : conception, fabrication, électricité et homologation VASP.
              </p>
                <Link href="#devis">
                  <button className="mt-3 inline-block bg-[#f39c12] text-white px-2 py-3 max-w-68.75 rounded-md font-bold hover:scale-105 transition">
                      Estimer mon projet maintenant
                  </button>
                </Link>
            </div>
          </div>
        </div>


         <div className="w-full bg-[#202936]">
          <div className="max-w-250 mx-auto px-2 py-10">
            <div className="center text-center">
              <div>
                <h3 className="text-3xl md:text-5xl font-bold  text-gray-100">
                  Découvrez nos dernières réalisations 
                </h3>
                {/* <PortFolio></PortFolio> */}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#FFFFFF]">
          <div className="max-w-250 mx-auto px-2 py-10">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-3xl text-gray-800 md:text-5xl font-bold mb-4">
                    Un seul interlocuteur pour votre projet de A à Z
                  </h3>
                  <p className="text-gray-800 mb-6">
                    Chez NomadTek, nous prenons en charge l&apos;intégralité de votre aménagement : conception, fabrication, électricité, solaire, mobilier inox et homologation VASP.
                  </p>
                  <p className="text-gray-800 mb-6">
                    Plus besoin de coordonner plusieurs artisans. Nous réunissons toutes les compétences nécessaires pour livrer un véhicule clé en main, conforme et prêt à rouler.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <Image src="/Image2.jpg" alt="Illustration" width={600} height={400} className="w-full h-auto object-contain rounded-md shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#202936]">
          <div className="max-w-250 mx-auto px-2 py-10">
            <div className="center text-center">
              <h3 className="text-gray-100 text-3xl md:text-5xl font-bold mb-4">
                Ce qui fait notre différence !
              </h3>
              <p className="text-gray-100 mb-4">
                Découvrez ce qui nous distingue sur le terrain, chaque jour :
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <Image src="/Image6.jpg" alt="Illustration" width={600} height={400} className="w-full h-auto object-contain rounded-md shadow-lg"
                />
              </div>
              <div className="flex-1 grid grid-cols-2 gap-2 mx-auto w-full">
                <div className="rounded shadow">
                  <p className="text-gray-100 md:text-xl font-bold mb-4">
                    • Conception sur mesure
                  </p>
                  <p className="text-gray-100 mb-4">
                    Chaque projet est unique. Nous concevons l&apos;aménagement en fonction de votre usage réel, pas sur la base d&apos;un catalogue standard.
                  </p>
                </div>
                <div className="rounded shadow">
                  <p className="text-gray-100 md:text-xl font-bold mb-4">
                    • Fabrication artisanale
                  </p>
                  <p className="text-gray-100 mb-4">
                    Mobilier inox, bois, structure, câblage : tout est fabriqué et installé dans notre atelier, sans sous-traitance sur les parties techniques.
                  </p>
                </div>
                <div className="rounded shadow">
                  <p className="text-gray-100 md:text-xl font-bold mb-4">
                    • Un seul interlocuteur
                  </p>
                  <p className="text-gray-100 mb-4">
                    De la conception à la livraison, vous avez un seul contact qui maîtrise l&apos;ensemble du projet : mécanique, électricité, fabrication et homologation.
                  </p>
                </div>
                <div className="rounded shadow">
                  <p className="text-gray-100 md:text-xl font-bold mb-4">
                    • Homologation VASP
                  </p>
                  <p className="text-gray-100 mb-4">
                    Nous maîtrisons le processus d&apos;homologation VASP et pouvons vous accompagner dans les démarches pour que votre véhicule soit conforme et en règle.
                  </p>
                </div>
                <div className="rounded shadow">
                  <p className="text-gray-100 md:text-xl font-bold mb-4">
                    • Devis clair et rapide
                  </p>
                  <p className="text-gray-100 mb-4">
                    Recevez un devis détaillé sous 48h, sans surprise ni coût caché.
                  </p>
                </div>
                <div className="rounded shadow">
                  <p className="text-gray-100 md:text-xl font-bold mb-4">
                    • Respect des délais
                  </p>
                  <p className="text-gray-100 mb-4">
                    Chaque chantier fait l&apos;objet d&apos;un planning défini en amont et d&apos;un suivi régulier jusqu&apos;à la livraison.
                  </p>
                </div>
              </div>
            </div>
            <Link href="#devis">
              <button className="mt-3 inline-block bg-[#f39c12] text-white px-2 py-3 min-w-50 max-w-68.75 rounded-md font-bold hover:scale-105 transition">
                Demander un devis
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full bg-[#F3F4F6]">
          <div className="max-w-250 mx-auto px-2 py-10">
            <div className="flex flex-col-reverse md:flex-row items-center mx-auto gap-2">
              <div className="flex-1">
                <Image src="/Image3.jpg" alt="Illustration" width={600} height={400} className="w-full h-auto object-contain rounded-md shadow-lg" />
              </div>
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-3xl md:text-5xl text-gray-800 font-bold mb-4">
                    Un projet technique, sans prise de tête
                  </h3>
                  <p className="text-gray-800 mb-6">
                    Avec NomadTek, vous bénéficiez d&apos;un interlocuteur unique du premier échange jusqu&apos;à la livraison. Nous vous conseillons sur les choix techniques, les matériaux et les solutions les plus adaptées à votre usage et à votre budget.
                  </p>
                  <p className="text-gray-800 mb-6">
                    Pas de jargon inutile, pas de mauvaise surprise : juste un travail bien fait et un projet qui roule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#ffffff]">
          <div className="max-w-250 mx-auto px-2 py-10">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-3xl md:text-5xl text-gray-800 font-bold mb-4">
                    Un projet qui avance, sans attendre
                  </h3>
                  <p className="text-gray-800 mb-6">
                    Vous avez un van à aménager, un food truck à lancer ou une deadline à respecter ? Nous savons que chaque jour d&apos;immobilisation a un coût. C&apos;est pourquoi nous nous engageons à répondre rapidement à chaque demande et à établir un planning réaliste dès le départ.
                  </p>
                  <p className="text-gray-800 mb-6">
                    Parce que votre projet a une échéance, nous en faisons notre priorité.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <Image src="/Image4.jpg" alt="Illustration" width={600} height={400} className="w-full h-auto object-contain rounded-md shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#F3F4F6]">
          <div className="max-w-250 mx-auto px-2 py-10">
            <div className="flex flex-col-reverse md:flex-row items-center mx-auto gap-8">
              <div className="flex-1">
                <Image src="/Image5.jpg" alt="Illustration" width={600} height={400} className="w-full h-auto object-contain rounded-md shadow-lg" />
              </div>
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-3xl md:text-5xl text-gray-800 font-bold mb-4">
                    Des délais tenus, un travail soigné
                  </h3>
                  <p className="text-gray-800 mb-6">
                    Chez NomadTek, chaque projet est planifié dès le départ avec un calendrier clair. Nous tenons nos engagements sans rogner sur la qualité d&apos;exécution.
                  </p>
                  <p className="text-gray-800 mb-6">
                    Vous savez quand votre véhicule sera livré, et il l&apos;est dans l&apos;état prévu.
                  </p>
                </div>
                <Link href="#devis">
                  <button className="mt-3 inline-block bg-[#f39c12] text-white px-2 py-3 min-w-50 max-w-68.75 rounded-md font-bold hover:scale-105 transition">
                    Réserver mes travaux
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#202936]">
          <div className="max-w-250 mx-auto px-2 py-10">
            <div className="center text-center">
              <h3 className="text-gray-100 text-3xl md:text-5xl font-bold mb-4">
                Un travail bien fait, c&apos;est non négociable.
              </h3>
              <p className="text-gray-100 mb-8">
                Chez NomadTek, chaque projet est l&apos;occasion de démontrer ce que la fabrication sur mesure a de mieux à offrir : de l&apos;écoute, de la rigueur, et un savoir-faire technique au service de votre vision.
              </p>
              <p className="text-gray-100 mb-8">
                Nous croyons que votre van ou votre food truck mérite autant d&apos;exigence qu&apos;un projet industriel : <strong>des matériaux choisis, des finitions soignées, et un résultat dont vous serez fier à chaque utilisation.</strong>
              </p>
              <p className="text-gray-100 mb-8">
                Notre approche repose sur la transparence, le respect des délais et une relation de confiance construite projet après projet.
              </p>
              <p className="text-gray-100 mb-8">
                <strong>Discutons de votre projet.</strong>
              </p>
              <Link href="#devis">
                <button className="mt-3 inline-block bg-[#f39c12] text-white px-2 py-3 max-w-40 rounded-md font-bold hover:scale-105 transition">
                  Contacter-nous !
                </button>
              </Link>
            </div>
          </div>
                  {/* <ChatwootWidget /> */}
        </div>       
      </main>
  );
}
