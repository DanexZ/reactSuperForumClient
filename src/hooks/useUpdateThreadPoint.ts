import { gql, useMutation } from "@apollo/client";

const UpdateThreadPoint = gql`
    mutation UpdateThreadPoint($thread_id: ID!, $increment: Boolean!) {
        updateThreadPoint(thread_id: $thread_id, increment: $increment)
    }
`;

export const useUpdateThreadPoint = (refreshThread?: () => void, thread_id?: string) => {

    const [execUpdateThreadPoint] = useMutation(UpdateThreadPoint);

    const onClickIncThreadPoint = async (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {

        e.preventDefault();

        await execUpdateThreadPoint({
            variables: {
                thread_id,
                increment: true,
            },
        });

        refreshThread && refreshThread();
    };

    const onClickDecThreadPoint = async (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {

        e.preventDefault();

        await execUpdateThreadPoint({
            variables: {
                thread_id,
                increment: false,
            }
        });

        refreshThread && refreshThread();
    };

    return { onClickIncThreadPoint, onClickDecThreadPoint }
};