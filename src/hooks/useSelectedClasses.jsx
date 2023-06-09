import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';




const useSelectedClasses = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: selected = [] } = useQuery({
        queryKey: ['selectedCourse', user?.email],
        enabled: !loading,
      
        queryFn: async () => {
            const res = await axiosSecure(`/selectedCourse?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [selected, refetch]

}
export default useSelectedClasses;