import Lorem from "../parts/Lorem";

PetsAndOwners.route = {
  path: "/pets-and-owners",
  label: "Pets & Owners",
  index: 3,
};

export default function PetsAndOwners() {
  return (
    <>
      <h2>Pets & owners</h2>
      <p>This page will show pets and owners.</p>
      <Lorem paragraphCount={3} />
    </>
  );
}
