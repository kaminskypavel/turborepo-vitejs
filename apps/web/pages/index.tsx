import { Button } from "ui";
import { User } from "shared";

export default function Web() {
  const user: User = {
    name: "Vite",
    id: 100,
    email: "",
  };
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}
