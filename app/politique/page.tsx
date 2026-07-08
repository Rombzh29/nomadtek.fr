import Link from 'next/link';

export default function AboutPage() {
    return (
      <div className="w-full bg-[#ffffff]">
      <div className="max-w-200 mx-auto px-2 py-10">
        <h2 className="text-gray-800 text-3xl font-bold mb-4">
          Politique de Confidentialité
        </h2>
        <p className="text-gray-800 ext-3xl font-bold mb-1">
          1. Introduction
        </p>
        <p className="text-gray-800 mb-6">
          Bienvenue sur NomadTek. La protection de vos données personnelles est une priorité pour nous. Cette politique de confidentialité explique quelles informations nous collectons, comment nous les utilisons et quels sont vos droits.
        </p>
        <p className="text-gray-800 ext-3xl font-bold mb-1">
          2. Données collectées
        </p>
        <p className="text-gray-800 mb-6">
          Nous collectons les données suivantes lorsque vous utilisez le site NomadTek: 
          Informations personnelles : Nom, prénom, adresse e-mail, numéro de téléphone.
          Informations professionnelles : Nom de votre entreprise, secteur d&apos;activité.
          Données de connexion : Adresse IP, navigateur, pages consultées.
        </p>
        <p className="text-gray-800 ext-3xl font-bold mb-1">
          3. Utilisation des données
        </p>
        <p className="text-gray-800 mb-6">
          Nous utilisons vos données pour :
          Communiquer avec vous (newsletters, mises à jour, enquêtes de satisfaction).
          Respecter nos obligations légales et assurer la sécurité de nos services.  
        </p>
        <p className="text-gray-800 ext-3xl font-bold mb-1">
          4. Partage des données
        </p>
        <p className="text-gray-800 mb-6">
          Vos données ne sont jamais vendues. Elles peuvent être partagées avec :
          Nos prestataires techniques pour l&apos;hébergement et l&apos;amélioration de nos services.
          Les autorités en cas d&apos;obligation légale.
        </p>
        <p className="text-gray-800 ext-3xl font-bold mb-1">
          5. Sécurité des données
        </p>
        <p className="text-gray-800 mb-6">
          Nous mettons en place des mesures de sécurité pour protéger vos informations contre tout accès non autorisé, perte ou altération.
        </p>
        <p className="text-gray-800 ext-3xl font-bold mb-1">
          6. Vos droits
        </p>
        <p className="text-gray-800 mb-6">
          Conformément au RGPD, vous disposez des droits suivants :
          Accès, rectification et suppression de vos données.
          Opposition à l&apos;utilisation de vos données.
          Portabilité de vos données sur demande. Pour exercer vos droits, contactez-nous à contact@nomadtek.fr.
        </p>
        <p className="text-gray-800 ext-3xl font-bold mb-1">
          7. Conservation des données
        </p>
        <p className="text-gray-800 mb-6">
          Vos données sont conservées aussi longtemps que nécessaire pour vous fournir nos services et respecter nos obligations légales.
        </p>
        <p className="text-gray-800 ext-3xl font-bold mb-1">
          8. Cookies
        </p>
        <p className="text-gray-800 mb-6">
          Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez les gérer depuis les paramètres de votre navigateur.
        </p>
        <p className="text-gray-800 ext-3xl font-bold mb-1">
          9. Modifications
        </p>
        <p className="text-gray-800 mb-6">
          Cette politique de confidentialité peut être mise à jour. Toute modification sera notifiée sur notre site.
        </p>
        <p className="text-gray-800 ext-3xl font-bold mb-1">
          10. Contact
        </p>
        <p className="text-gray-800 mb-10">
          Pour toute question sur cette politique, vous pouvez nous contacter à contact@nomadtek.fr
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