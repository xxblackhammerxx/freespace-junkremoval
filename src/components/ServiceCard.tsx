import Button from './Button'

interface ServiceCardProps {
  title: string
  description: string
  backgroundImage: string
  href: string
  buttonText?: string
}

export default function ServiceCard({
  title,
  description,
  backgroundImage,
  href,
  buttonText = 'Learn More',
}: ServiceCardProps) {
  return (
    <div className="bg-white min-h-[430px] flex flex-col justify-between rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div
        className="h-48 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      ></div>
      <div className="p-6 ">
        <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button href={href} variant="primary" size="sm">
          {buttonText}
        </Button>
      </div>
    </div>
  )
}
