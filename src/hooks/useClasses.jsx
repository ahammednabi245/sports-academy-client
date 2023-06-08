import { useQuery } from "@tanstack/react-query";



const useClasses = () => {
  const { data: popularClass = [], isLoading: loading, refetch } = useQuery({
    queryKey: ["popularClass"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/popularClass");
      return res.json();
    },
  });

  const sortedPopularClass = popularClass.sort(
    (a, b) => b.numberOfStudents - a.numberOfStudents
  );

  return [sortedPopularClass, loading, refetch];
};

export default useClasses;
