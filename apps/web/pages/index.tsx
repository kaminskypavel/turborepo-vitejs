import { Button } from "ui";
import { User } from "shared";

export default function Web() {
  const user: User = {
    name: "Bob",
    age: 42,
    email: "",
  };

  return (
    <div>
      <h1>Web</h1>
      <Button />
      <p>${JSON.stringify(user)}</p>
    </div>
  );
}
