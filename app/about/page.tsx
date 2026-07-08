import Link from 'next/link';

export default function AboutPage() {
    return (
      <div className="w-full bg-[#ffffff]">
        <div className="max-w-200 mx-auto px-2 py-10">
          <h2 className="text-gray-800 text-3xl font-bold mb-4">
            🧱 À propos de LineaRenov
          </h2>
          <p className="text-gray-800 mb-6">
            Votre partenaire local pour vos travaux du quotidien<br></br>
            Bienvenue chez LineaRenov, société spécialisée dans le dépannage, la rénovation et les travaux d’amélioration de l’habitat.<br></br>
            Nous intervenons rapidement et efficacement pour répondre à vos besoins, avec professionnalisme, transparence et une attention particulière portée à la satisfaction de nos clients.
          </p>
          <p className="text-gray-800 ext-3xl font-bold mb-1">
           🧑‍🔧 Qui sommes-nous ?
          </p>
          <p className="text-gray-800 mb-6">
            LineaRenov est portée par une solide expérience dans le secteur technique et une passion de longue date pour le dépannage, la rénovation et les travaux d’amélioration de l’habitat.<br></br>
            Notre équipe met ses compétences au service des particuliers et des professionnels de la région pour offrir des prestations fiables, accessibles et bien exécutées.
          </p>
          <p className="text-gray-800 ext-3xl font-bold mb-1">
           🛠️ Nos services
          </p>
          <p className="text-gray-800 mb-6">
            Nous intervenons pour tout type de travaux, notamment :<br></br>
            -Dépannage express en plomberie et électricité.<br></br>
            -Travaux de rénovation de l’habitat (cloison, isolation, électricité, plomberie, domotique).<br></br>
            -Agencement intérieur (cuisine, salle de bain, rangement).<br></br>
            -Travaux de peinture et de finition.<br></br>
            -Nous intervenons dans un rayon de 30 km autour de Concarneau.
          </p>
          <p className="text-gray-800 ext-3xl font-bold mb-1">
           🤝 Nos engagements
          </p>
          <p className="text-gray-800 mb-6">
            -Réactivité et ponctualité<br></br>
            -Devis clairs et sans surprise<br></br>
            -Interventions propres, soignées, assurées<br></br>
            -Écoute, conseils et suivi personnalisé
          </p>
         <p className="text-gray-800 ext-3xl font-bold mb-1">
            📞 Contactez-nous
          </p>
          <p className="text-gray-800 mb-6">
            📧 contact@LineaRenov.fr<br></br>
            📍 Zone d’intervention : Secteur concarneau et environant
          </p>

          <Link href="/">
            <button className="mt-3 inline-block bg-[#c49e7f] text-white px-6 py-2 rounded-md font-medium hover:scale-105 transition">
                Retour à l&apos;accueil
              </button>
          </Link>
        </div>
      </div>
    );
  }