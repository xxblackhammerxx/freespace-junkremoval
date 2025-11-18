import Image from 'next/image'

interface TeamMemberCardProps {
  name: string
  title: string
  description: string
  imageUrl: string
  imageHeight?: 'small' | 'large'
}

export default function TeamMemberCard({
  name,
  title,
  description,
  imageUrl,
  imageHeight = 'small',
}: TeamMemberCardProps) {
  const heightClass = imageHeight === 'large' ? 'h-96' : 'h-64'

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className={`${heightClass} relative overflow-hidden`}>
        <Image
          src={imageUrl}
          alt={`${name} - ${title}`}
          fill
          className="object-cover"
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">{name}</h3>
        <p className="text-primary font-semibold mb-3">{title}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
