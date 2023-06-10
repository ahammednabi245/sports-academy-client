import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';




const useEnrolledClasses = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: enrolledClass = [] } = useQuery({
        queryKey: ['enrolled', user?.email],
        enabled: !loading,
      
        queryFn: async () => {
            const res = await axiosSecure(`/enrolled?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [enrolledClass, refetch]

}
export default useEnrolledClasses;