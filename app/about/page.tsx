import Link from 'next/link';

export default function AboutPage() {
    return (
      <div className="w-full bg-[#ffffff]">
        <div className="max-w-200 mx-auto px-2 py-10">
          <h2 className="text-gray-800 text-3xl font-bold mb-4">
            À propos de NomadTek<br></br>
            Conception et aménagement de vans & food trucks
          </h2>
          <p className="text-gray-800 mb-6">
            NomadTek est un atelier spécialisé dans l&apos;aménagement sur mesure de vans et de food trucks : <br></br>
            structure, mobilier inox, installation électrique, solaire, batteries lithium et homologation VASP.
          </p>
          <p className="text-gray-800 ext-3xl font-bold mb-1">
           Qui sommes-nous ?
          </p>
          <p className="text-gray-800 mb-6">
            NomadTek est fondé sur une expérience technique solide en mécanique, électricité, conception CAO et fabrication métallique. <br></br>
            Nous concevons et réalisons chaque projet de A à Z, des plans à la mise en circulation homologuée, pour les particuliers comme pour les professionnels de la restauration itinérante.
          </p>
          <p className="text-gray-800 ext-3xl font-bold mb-1">
           Ce que nous fabriquons
          </p>
          <p className="text-gray-800 mb-6">
            -Aménagement complet de vans (couchage, cuisine, électricité, isolation)<br></br>
            -Aménagement de food trucks (mobilier inox sur mesure, gaz, électricité, ventilation, plonge).<br></br>
            -Installations électriques 12V-24V/220V, solaire, batteries AGM, lithium.<br></br>
            -Fabrication de pièces et mobilier bois ou inox spécifiques.<br></br>
            -Homologation VASP sur demande du client.
          </p>
          <p className="text-gray-800 ext-3xl font-bold mb-1">
           Nos engagements
          </p>
          <p className="text-gray-800 mb-6">
            -Conception personnalisée : chaque projet est unique.<br></br>
            -Fabrication soignée et matériaux professionnels.<br></br>
            -Véhicules conformes et homologués, pas juste esthétiques.<br></br>
            -Suivi de projet de la conception à la livraison.
          </p>
         <p className="text-gray-800 ext-3xl font-bold mb-1">
            Contactez-nous
          </p>
          <p className="text-gray-800 mb-6">
            📧 contact@nomadtek.fr<br></br>
            📞 06 16 83 16 18<br></br>
          </p>

          <Link href="/">
            <button className="mt-3 inline-block bg-[#f39c12] text-white px-6 py-2 rounded-md font-medium hover:scale-105 transition">
                Retour à l&apos;accueil
              </button>
          </Link>
        </div>
      </div>
    );
  }