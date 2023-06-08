import { useQuery } from "@tanstack/react-query";



const useInstructors = () => {
  const { data: popularInstructors = [], isLoading: loading, refetch } = useQuery({
    queryKey: ["popularInstructors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/popularInstructors");
      return res.json();
    },
  });

  const sortedPopularInstructors = popularInstructors.sort(
    (a, b) => b.numberOfStudents - a.numberOfStudents
  );

  return [sortedPopularInstructors, loading, refetch];
};

export default useInstructors;
