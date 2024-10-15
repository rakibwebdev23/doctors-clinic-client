import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useDoctors = () => {
    const axiosPublic = useAxiosPublic();

    const { data: doctors = [], refetch, isPending: loading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await axiosPublic.get('/doctors')
            return res.data;
        }
    });
    return [doctors, refetch, loading];
};

export default useDoctors;