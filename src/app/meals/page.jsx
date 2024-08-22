import Meals from "@/components/Meals";

function MealsPage() {
  return (
    <div className=" p-12">
      <h1 className=" text-3xl font-semibold text-red-300">
        Choose Your Meals
      </h1>
      <p>Choose Meals Of Your Choice By Searching</p>
      <Meals />
    </div>
  );
}

export default MealsPage;
