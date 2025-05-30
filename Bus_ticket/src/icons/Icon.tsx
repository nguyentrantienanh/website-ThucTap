function Icon(props: { name: string }) {
  if (props.name == 'phone') {
    return <i className='fa-solid fa-phone-volume'></i>
  } else if (props.name == 'email') {
    return <i className='fa-solid fa-envelope'></i>
  } else if (props.name == 'signin') {
    return <i className='fa-solid fa-right-to-bracket'></i>
  } else if (props.name == 'signup') {
    return <i className='fa-solid fa-user-plus'></i>
  } else if (props.name == 'language') {
    return <i className='fa-solid fa-globe'></i>
  } else if (props.name == 'facebook') {
    return <i className='fa-brands fa-facebook'></i>
  } else if (props.name == 'twitter') {
    return <i className='fa-brands fa-twitter'></i>
  } else if (props.name == 'instagram') {
    return <i className='fa-brands fa-instagram'></i>
  } else if (props.name == 'youtube') {
    return <i className='fa-brands fa-youtube'></i>
  } else if (props.name == 'arrow-right') {
    return <i className='fa-regular fa-square-caret-right'></i>
  } else if (props.name == 'arrow-left') {
    return <i className='fa-regular fa-square-caret-left'></i>
  } else if (props.name == 'gps') {
    return <i className='fa-solid fa-map-pin'></i>
  } else if (props.name == 'directionarrow') {
    return <i className='fa-solid fa-location-arrow'></i>
  } else if (props.name == 'location') {
    return <i className='fa-solid fa-location-dot'></i>
  } else if (props.name == 'calendar') {
    return <i className='fa-solid fa-calendar-days'></i>
  } else if (props.name == 'search') {
    return <i className='fa-solid fa-magnifying-glass'></i>
  } else if (props.name == 'ticket') {
    return <i className='fa-solid fa-ticket'></i>
  } else if (props.name == 'bill') {
    return <i className='fa-solid fa-money-bill-1-wave'></i>
  } else if (props.name == 'wifi') {
    return <i className='fa-solid fa-wifi'></i>
  } else if (props.name == 'pillow') {
    return <i className='fa-solid fa-bed'></i>
  } else if (props.name == 'water') {
    return <i className='fa-solid fa-bottle-water'></i>
  } else if (props.name == 'drink') {
    return <i className="fa-solid fa-wine-glass"></i>
  } else if (props.name == 'dow') {
    return <i className='fa-solid fa-chevron-down'></i>
  } else if (props.name == 'up') {
    return <i className='fa-solid fa-chevron-up'></i>
  } else if (props.name == 'address') {
    return <i className='fa-solid fa-map-marker-alt'></i>
  }
}

export default Icon
