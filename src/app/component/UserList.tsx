// components/UserList.tsx
import { useQuery } from '@tanstack/react-query';

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const UserList = () => {
  const { data, error, isLoading } = useQuery(['UserList'], fetchUsers);

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500">Error fetching users</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="space-y-4">
        {data.map((user: { id: number; name: string; email: string }) => (
          <li key={user.id} className="p-4 border rounded shadow bg-white">
            <h2 className="text-xl">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
