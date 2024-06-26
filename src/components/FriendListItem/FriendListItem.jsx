const FriendListItem = ({ name, isOnline }) => {
  return (
    <div>
  <img src="" alt="Avatar" width="48" />
          <p>{name}</p>
          <p>{ isOnline}</p>
</div>
  )
}

export default FriendListItem;
