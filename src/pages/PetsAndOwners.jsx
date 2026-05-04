import Lorem from "../parts/Lorem";
import HeroImage from "../parts/HeroImage";

PetsAndOwners.route = {
  path: "/pets-and-owners",
  label: "Pets & Owners",
  index: 3,
};

export default function PetsAndOwners() {
  return (
    <>
      <HeroImage
        src="dog-and-owner.webp"
        alt="A dog and its owner"
        heading="Pets & owners"
      />
      <p>This page will show pets and owners.</p>
      <Lorem paragraphCount={3} />
    </>
  );
}
