import { siGithub, siYoutube, siFacebook, siX } from 'simple-icons/icons'

import { TooltipProvider } from '@/components/ui/tooltip'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type SimpleIconProps = {
  icon: {
    svg: string
  }
  className?: string
}

type SocialMediaProps = {
  className?: string
  iconClassName?: string
  tooltipClassName?: string
}

const SimpleIcon = ({ icon, className }: SimpleIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  )
}

const socialLink = [
  {
    title: 'YouTube',
    href: 'https://www.youtube.com/@reactjsBD',
    icon: siYoutube,
  },
  {
    title: 'Github',
    href: 'https://github.com',
    icon: siGithub,
  },
  {
    title: 'Facebook',
    href: 'https://facebook.com',
    icon: siFacebook,
  },
  {
    title: 'X',
    href: 'https://x.com',
    icon: siX,
  },
]

const SocialMedia = ({
  className,
  iconClassName,
  tooltipClassName,
}: SocialMediaProps) => {
  return (
    <TooltipProvider>
      <div className={cn('flex items-center gap-4', className)}>
        {socialLink.map(item => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item?.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'hover:text-shop-light-green hover:border-shop-light-green rounded-full border p-2 transition',
                  iconClassName
                )}
              >
                <SimpleIcon icon={item?.icon} className="h-5 w-5" />
              </Link>
            </TooltipTrigger>

            <TooltipContent>{item?.title}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}

export default SocialMedia
