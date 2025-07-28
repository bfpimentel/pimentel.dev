type SocialButtonProps = {
  link: string
  imgSrc: string
}

export default function SocialButton({ link, imgSrc }: SocialButtonProps) {
  return (
    <button className="h-8 w-8 border-0 rounded-lg ml-2 mr-2 bg-white border-white dark:border-black">
      <a href={link}>
        <img className="h-8 w-8" src={imgSrc} />
      </a>
    </button>
  )
}
