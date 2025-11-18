import Image from 'next/image'

interface BeforeAfterProps {
  beforeImage: string
  afterImage: string
  title: string
  description?: string
  projectDetails?: {
    timeline?: string
    size?: string
    type?: string
  }
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  title,
  description,
  projectDetails,
}: BeforeAfterProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 border-b">
        <h3 className="text-xl font-heading font-bold text-brand-dark text-center">{title}</h3>
        {description && <p className="text-gray-600 text-center mt-2 text-sm">{description}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Before */}
        <div className="relative">
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-primary-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
              BEFORE
            </span>
          </div>
          <div className="relative h-64 overflow-hidden">
            <Image
              src={`/images/${beforeImage}`}
              alt={`Before ${title} project`}
              fill
              className="object-cover"
              quality={75}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* After */}
        <div className="relative">
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
              AFTER
            </span>
          </div>
          <div className="relative h-64 overflow-hidden">
            <Image
              src={`/images/${afterImage}`}
              alt={`After ${title} project`}
              fill
              className="object-cover"
              quality={75}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* {projectDetails && (
        <div className="p-4 bg-gray-50">
          <div className="flex items-center justify-between text-sm text-gray-600">
            {projectDetails.timeline && <span>Timeline: {projectDetails.timeline}</span>}
            {projectDetails.size && <span>Size: {projectDetails.size}</span>}
            {projectDetails.type && <span>Type: {projectDetails.type}</span>}
          </div>
        </div>
      )} */}
    </div>
  )
}
