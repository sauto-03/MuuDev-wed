

export function SocialMediaItems({ content }) {
  return (
    <div>
      <a href={content.link}>
        <img src={content.icon} alt="" />
      </a>
    </div>
  )
}

export function SocialMedia(props) {
  return (
    <div className="box-border h-20 w-60" >

      <div className="grid grid-cols-4 gap-1">
        {props.children}
      </div>
    </div>
  )
}
