import { GreetProps } from "./greet.types";

const Greet = ({ name }: GreetProps) => {
  return <div>Hello, {name ? name : "User"}</div>;
};

export default Greet;
