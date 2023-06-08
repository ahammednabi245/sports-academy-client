import { useQuery } from "@tanstack/react-query";



const useInstructors = () => {
  const { data: popularInstructors = [], isLoading: loading, refetch } = useQuery({
    queryKey: ["popularInstructors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/popularInstructors");
      return res.json();
    },
  });


  return [popularInstructors, loading, refetch];
};

export default useInstructors;
