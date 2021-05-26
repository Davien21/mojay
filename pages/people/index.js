import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { people: data },
  };
};

const OurPeople = ({ people }) => {
  console.log(people);

  return (
    <div>
      <h1>All OurPeople</h1>
      {people.map((person) => (
        <Link href={"/people/" + person.id} key={person.id}>
          <a className="">
            <h3>{person.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default OurPeople;
