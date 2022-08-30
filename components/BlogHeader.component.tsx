import {FC} from 'react';

interface Props{
    title: string;
    dateString: string;
}

const BlogHeaderComponent: FC<Props> = ({title, dateString,}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>Posted on {dateString}</p>
        </div>
    )
}

export default BlogHeaderComponent