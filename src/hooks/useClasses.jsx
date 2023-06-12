import { useQuery } from "@tanstack/react-query";



const useClasses = () => {
  const { data: classes = [], isLoading: loading, refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch("https://sports-academies-server-nu.vercel.app/classes");
      return res.json();
    },
  });

  const sortedClasses = classes.sort(
    (a, b) => b.numberOfStudents - a.numberOfStudents
  );

  return [sortedClasses, loading, refetch];
};

export default useClasses;
