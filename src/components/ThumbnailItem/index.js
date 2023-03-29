import './index.css'

const ThumbnailItem = props => {
  const {thumbnailObject, onUpdateOfId, isActiveThumbnail} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailObject
  const applyOpacity = isActiveThumbnail ? 'opacity' : ''

  const onClickOfThumbnail = () => {
    onUpdateOfId(id)
  }

  return (
    <li className="list-item-thumbnail">
      <button
        className={`button ${applyOpacity}`}
        type="submit"
        onClick={onClickOfThumbnail}
      >
        <img
          src={thumbnailUrl}
          className="thumbnail-image"
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
