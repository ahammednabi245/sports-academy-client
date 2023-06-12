import { useQuery } from "@tanstack/react-query";



const useInstructors = () => {
  const { data: popularInstructors = [], isLoading: loading, refetch } = useQuery({
    queryKey: ["popularInstructors"],
    queryFn: async () => {
      const res = await fetch("https://sports-academies-server-nu.vercel.app/popularInstructors");
      return res.json();
    },
  });

  const sortedPopularInstructors = popularInstructors.sort(
    (a, b) => b.numberOfStudents - a.numberOfStudents
  );

  return [sortedPopularInstructors, loading, refetch];
};

export default useInstructors;
