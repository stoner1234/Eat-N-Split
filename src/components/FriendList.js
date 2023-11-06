import Friend from "./Friend";

export default function FriendList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((e) => (
        <Friend
          friend={e}
          key={e.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
